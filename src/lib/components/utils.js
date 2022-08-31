import { isNil } from 'ramda';
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

const resolveChildProps = child => {
    // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on child.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(child.props.disabled) &&
        child.props._dashprivate_layout &&
        child.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        return child.props._dashprivate_layout.props;
    } else {
        // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
        return child.props;
    }
};

export { flatToTree, parseChildrenToArray, resolveChildProps };