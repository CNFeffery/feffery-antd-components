import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useCss } from 'react-use';
import { isString } from 'lodash';

import { parseChildrenToArray } from '../utils';

// 定义标签页面板组件AntdTabPane，api参数参考https://ant.design/components/tabs-cn/
const AntdTabPane = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        tab,
        key,
        disabled,
        closable,
        titleSideInfoPopover,
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
            style={style}
            tab={tab}
            key={key}
            titleSideInfoPopover={titleSideInfoPopover}
            disabled={disabled}
            closable={closable}
            children={children}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
        </div>
    );
}

// 定义参数或属性
AntdTabPane.propTypes = {
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

    // 设置选项卡标题文字内容
    tab: PropTypes.string,

    // 设置标签面板id信息
    key: PropTypes.string,

    // 设置是否禁用当前的标签页面板
    disabled: PropTypes.bool,

    // 设置当前标签页面板是否可被关闭，默认为true
    closable: PropTypes.bool,

    // 设置当前标签页面板的标题旁信息提示气泡卡片
    titleSideInfoPopover: PropTypes.exact({
        // 设置标签面板页旁信息提示气泡卡片的标题内容
        title: PropTypes.string,

        // 设置标签面板页旁信息提示气泡卡片的内容信息
        content: PropTypes.string
    }),

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
AntdTabPane.defaultProps = {
}

export default AntdTabPane;