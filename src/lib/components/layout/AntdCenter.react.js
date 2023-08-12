import React from 'react';
import PropTypes from 'prop-types';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { parseChildrenToArray } from '../utils';

// 定义居中组件AntdCenter，基于flex布局
const AntdCenter = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        inline,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <div id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={{
                display: inline ? 'inline-flex' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
            key={key}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </div>
    );
}

// 定义参数或属性
AntdCenter.propTypes = {
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

    // 设置是否作为行内元素
    // 默认为false
    inline: PropTypes.bool,

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
AntdCenter.defaultProps = {
    inline: false
}

export default AntdCenter;