import React from 'react';
import PropTypes from 'prop-types';
import { Space, Divider } from 'antd';
import useCss from '../hooks/useCss';
import { isString } from 'lodash';

import { parseChildrenToArray } from './utils';

const { Compact } = Space;

// 定义紧凑排列组件AntdCompact，api参数参考https://ant.design/components/space-cn/
const AntdCompact = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        direction,
        block,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Compact id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            direction={direction}
            block={block}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Compact>
    );
}

// 定义参数或属性
AntdCompact.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置内部元素排列方向，可选的有'vertical'、'horizontal'，默认为'horizontal'
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    // 设置是否将宽度调整为父级元素宽度，默认为False
    block: PropTypes.bool,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCompact.defaultProps = {
    direction: 'horizontal',
    block: false
}

export default AntdCompact;