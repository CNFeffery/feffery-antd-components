import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import { parseChildrenToArray } from './utils';
import { isString } from 'lodash';
import useCss from '../hooks/useCss';

// 定义气泡确认框组件AntdPopconfirm，api参数参考https://ant.design/components/popconfirm-cn/
const AntdPopconfirm = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        title,
        disabled,
        placement,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle,
        okText,
        okButtonProps,
        cancelText,
        cancelButtonProps,
        confirmCounts,
        cancelCounts,
        trigger,
        popupContainer,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    // 监听确认按钮点击事件
    const listenConfirm = () => {
        setProps({ confirmCounts: confirmCounts + 1 })
    };

    // 监听取消按钮点击事件
    const listenCancel = () => {
        setProps({ cancelCounts: cancelCounts + 1 })
    };

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Popconfirm id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                title={title}
                disabled={disabled}
                placement={placement}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                overlayClassName={overlayClassName}
                overlayStyle={overlayStyle}
                overlayInnerStyle={overlayInnerStyle}
                trigger={trigger}
                okText={okText}
                okButtonProps={okButtonProps}
                cancelText={cancelText}
                cancelButtonProps={cancelButtonProps}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                onCancel={listenCancel}
                onConfirm={listenConfirm}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Popconfirm>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdPopconfirm.propTypes = {
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置显示的文字内容
    title: PropTypes.node,

    // 设置是否禁用点击子元素唤起气泡卡片的交互行为
    // 默认为false
    disabled: PropTypes.bool,

    // 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
    // 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
    // 、'rightTop'、'rightBottom'，默认为'top'
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
        'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ]),

    // 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
    mouseEnterDelay: PropTypes.number,

    // 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
    mouseLeaveDelay: PropTypes.number,

    // 设置卡片样式
    overlayStyle: PropTypes.object,

    // 设置卡片内容区域的样式
    overlayInnerStyle: PropTypes.object,

    // 设置确认按钮文字
    okText: PropTypes.node,

    // 配置确认按钮相关参数
    okButtonProps: PropTypes.exact({
        // 设置按钮尺寸尺寸，可选的有'small'、'middle'和'large'，默认为'middle'
        size: PropTypes.oneOf(['small', 'middle', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool,

        // 设置按钮是否以失效状态渲染，默认为false
        disabled: PropTypes.bool,

        // 设置按钮形状（circle：圆形，round：圆角矩形，默认不设置，即正常矩形）
        shape: PropTypes.oneOf(['circle', 'round'])
    }),

    // 设置取消按钮文字
    cancelText: PropTypes.node,

    // 配置取消按钮相关参数
    cancelButtonProps: PropTypes.exact({
        // 设置按钮尺寸尺寸，可选的有'small'、'middle'和'large'，默认为'middle'
        size: PropTypes.oneOf(['small', 'middle', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool,

        // 设置按钮是否以失效状态渲染，默认为false
        disabled: PropTypes.bool,

        // 设置按钮形状（circle：圆形，round：圆角矩形，默认不设置，即正常矩形）
        shape: PropTypes.oneOf(['circle', 'round'])
    }),

    // 记录确认按钮被点击的次数
    confirmCounts: PropTypes.number,

    // 记录取消按钮被点击的次数
    cancelCounts: PropTypes.number,

    // 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
AntdPopconfirm.defaultProps = {
    disabled: false,
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    confirmCounts: 0,
    cancelCounts: 0,
    trigger: 'hover',
    locale: 'zh-cn',
    popupContainer: 'body'
}

export default AntdPopconfirm;