import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { parseChildrenToArray } from '../utils';

// 定义页头组件AntdPageHeader，api参数参考https://ant.design/components/page-header-cn/
const AntdPageHeader = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        title,
        subTitle,
        showBackIcon,
        historyBackDisabled,
        backClicks,
        ghost,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <PageHeader id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            title={title}
            subTitle={subTitle}
            backIcon={showBackIcon ? undefined : false}
            ghost={ghost}
            onBack={
                historyBackDisabled ?
                    () => setProps({ backClicks: backClicks + 1 }) :
                    () => window.history.back()
            }
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </PageHeader>
    );
}

// 定义参数或属性
AntdPageHeader.propTypes = {
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

    // 设置标题内容
    title: PropTypes.node,

    // 设置副标题内容
    subTitle: PropTypes.node,

    // 设置是否展示返回按钮，默认为true
    showBackIcon: PropTypes.bool,

    // 设置是否禁用页头返回按钮的浏览器后退功能，默认为false
    historyBackDisabled: PropTypes.bool,

    // 监听返回按钮被点击次数
    backClicks: PropTypes.number,

    // 设置是否开启透明背景模式，默认为true
    ghost: PropTypes.bool,

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
AntdPageHeader.defaultProps = {
    backClicks: 0,
    showBackIcon: true,
    historyBackDisabled: false
}

export default AntdPageHeader;