// react核心
import React, { useMemo } from 'react';
// antd核心
import { Tooltip } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdTooltip.react';

/**
 * 文字提示组件AntdTooltip
 */
const AntdTooltip = (props) => {
    const {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        title,
        placement,
        color,
        mouseEnterDelay,
        mouseLeaveDelay,
        trigger,
        zIndex,
        arrow,
        fresh,
        open,
        permanent,
        popupContainer,
        setProps,
        ...others
    } = props;

    const arrowPoint = useMemo(() => {
        if (arrow === 'hide') {
            return false;
        }
        if (arrow === 'show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    if (!title) {
        return <>{parseChildrenToArray(children)}</>;
    }

    return (
        <Tooltip
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            styles={styles}
            classNames={classNames}
            key={key}
            title={title}
            placement={placement}
            color={color}
            mouseEnterDelay={mouseEnterDelay}
            mouseLeaveDelay={mouseLeaveDelay}
            trigger={trigger}
            zIndex={zIndex}
            arrow={arrowPoint}
            fresh={fresh}
            open={open}
            onOpenChange={permanent ? undefined : (e) => setProps({ open: e })}
            getPopupContainer={
                popupContainer === 'parent'
                    ? (triggerNode) => triggerNode.parentNode
                    : undefined
            }
            data-dash-is-loading={useLoading()}
        >
            {parseChildrenToArray(children)}
        </Tooltip>
    );
};

export default AntdTooltip;

AntdTooltip.defaultProps = defaultProps;
AntdTooltip.propTypes = propTypes;
