import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function resolveNodes(selector) {
    const sels = Array.isArray(selector) ? selector : [selector];
    const nodes = [];
    if (typeof document === 'undefined') {
        return nodes;
    }
    for (const sel of sels) {
        if (!sel) {
            continue;
        }
        const first = document.querySelector(sel);
        if (first) {
            nodes.push(first);
        }
    }
    return nodes;
}

function getNodesHeight(nodes) {
    // include borders + padding; exclude margins
    return nodes.reduce((acc, n) => acc + n.getBoundingClientRect().height, 0);
}

/**
 * Returns a live pixel offset equal to the total height of the element(s)
 * matched by `selector`. Updates on resize, content changes, and CSS class
 * toggles (useful for Collapse animations).
 *
 * Usage:
 *   useStickyOffset('.header')
 *   useStickyOffset({ selector: ['.topbar', '.filters'], extra: 8 })
 */
export default function useStickyOffset(selectorOrOptions, extra = 0) {
    const isObj =
        selectorOrOptions &&
        typeof selectorOrOptions === 'object' &&
        !Array.isArray(selectorOrOptions);

    const selector = isObj
        ? (selectorOrOptions.selector ??
          selectorOrOptions.belowSelector ??
          null)
        : selectorOrOptions;

    // allow both `{ extra }` in options and the 2nd positional arg
    const extraAdd =
        (isObj ? Number(selectorOrOptions.extra || 0) : Number(extra || 0)) ||
        0;

    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);
    const nodesRef = useRef([]);

    const update = () => {
        const nodes = nodesRef.current;
        const h = nodes.length ? getNodesHeight(nodes) : 0;
        // 1px threshold avoids micro-flutters during transitions
        setOffset((prev) => {
            const next = h + extraAdd;
            return Math.abs(prev - next) >= 1 ? next : prev;
        });
    };

    // use layout effect on client so first paint has correct offset
    const useLE = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    useLE(() => {
        if (!selector) {
            setOffset(extraAdd);
            return;
        }
        nodesRef.current = resolveNodes(selector);

        // initial measure
        update();

        // observe size changes
        const ros = [];
        if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
            for (const n of nodesRef.current) {
                const ro = new ResizeObserver(() => update());
                ro.observe(n);
                ros.push(ro);
            }
        }

        // observe attribute/class changes that may affect height
        const mos = [];
        if (typeof window !== 'undefined' && 'MutationObserver' in window) {
            for (const n of nodesRef.current) {
                const mo = new MutationObserver(() => {
                    if (rafRef.current) {
                        cancelAnimationFrame(rafRef.current);
                    }
                    rafRef.current = requestAnimationFrame(update);
                });
                mo.observe(n, {
                    attributes: true,
                    attributeFilter: [
                        'style',
                        'class',
                        'data-open',
                        'aria-expanded',
                    ],
                    childList: true,
                    subtree: true,
                });
                mos.push(mo);
            }
        }

        const onWin = () => update();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', onWin);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', onWin);
            }
            ros.forEach((ro) => ro.disconnect());
            mos.forEach((mo) => mo.disconnect());
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            return;
        };
        // stringify option to capture selector arrays etc.
    }, [JSON.stringify(selector), extraAdd]);

    return offset;
}
