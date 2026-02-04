import { cloneDeep, isUndefined } from 'lodash';
import { toPairs, flatten } from 'ramda';

const flatToTree = (rawFlat) => {
    if (rawFlat) {
        const temp = cloneDeep(rawFlat);
        const parents = temp.filter((item) => isUndefined(item.parent));
        const children = temp.filter((item) => item.parent);

        children.forEach((item) => {
            const currentNode = temp.find((node) => node.key === item.parent);

            currentNode &&
                (currentNode.children
                    ? currentNode.children.push(item)
                    : (currentNode.children = [item]));
        });
        return parents;
    }
    return rawFlat;
};

const parseChildrenToArray = (children) => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

const resolveChildProps = (child) =>
    window.dash_component_api.getLayout(child.props.componentPath)?.props;

const useLoading = () =>
    window.dash_component_api.useDashContext().useLoading() || undefined;

const loadingSelector = (componentPath) => (state) => {
    let stringPath = JSON.stringify(componentPath);
    stringPath = stringPath.substring(0, stringPath.length - 1);

    const loadingChildren = toPairs(state.loading).reduce(
        (acc, [path, load]) => {
            if (path.startsWith(stringPath) && load.length) {
                return [...acc, load];
            }
            return acc;
        },
        []
    );

    if (loadingChildren?.length) {
        return flatten(loadingChildren);
    }
    return [];
};

export {
    flatToTree,
    parseChildrenToArray,
    resolveChildProps,
    useLoading,
    loadingSelector,
};
