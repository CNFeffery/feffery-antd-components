import { cloneDeep, isUndefined } from 'lodash';

const flatToTree = (rawFlat) => {
    if (rawFlat) {
        let temp = cloneDeep(rawFlat)
        let parents = temp.filter((item) => isUndefined(item.parent))
        let children = temp.filter((item) => item.parent)

        children.forEach((item) => {
            let currentNode = temp.find((node) => node.key === item.parent)

            currentNode && (currentNode.children ? currentNode.children.push(item) : currentNode.children = [item])
        });
        return parents;
    }
    return rawFlat;
}

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

const resolveChildProps = child => window.dash_component_api.getLayout(child.props.componentPath)?.props;

const useLoading = () => window.dash_component_api.useDashContext().useLoading();

export { flatToTree, parseChildrenToArray, resolveChildProps, useLoading };