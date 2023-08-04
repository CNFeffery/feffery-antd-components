import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
import { parseChildrenToArray } from '../utils';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';


// 定义气泡卡片组件Popover，api参数参考https://ant.design/components/popover-cn/
const AntdPopover = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        title,
        content,
        placement,
        color,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle,
        trigger,
        zIndex,
        arrowPointAtCenter,
        open,
        permanent,
        popupContainer,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Popover
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            title={(title && title.content) ?
                <div>
                    {<AntdIcon icon={title.prefixIcon} />}
                    {<span style={{ marginLeft: '5px' }}>{title.content}</span>}
                </div> : title}
            content={content}
            placement={placement}
            color={color}
            mouseEnterDelay={mouseEnterDelay}
            mouseLeaveDelay={mouseLeaveDelay}
            overlayClassName={
                isString(overlayClassName) ?
                    overlayClassName :
                    (overlayClassName ? useCss(overlayClassName) : undefined)
            }
            overlayStyle={overlayStyle}
            overlayInnerStyle={overlayInnerStyle}
            trigger={trigger}
            zIndex={zIndex}
            arrowPointAtCenter={arrowPointAtCenter}
            open={open}
            onOpenChange={
                permanent ? undefined : (e) => setProps({ open: e })
            }
            getPopupContainer={
                popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined
            }
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Popover>
    );
}

// 定义参数或属性
AntdPopover.propTypes = {
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

    // 设置显示的气泡卡片标题内容
    title: PropTypes.node,

    // 设置显示的气泡卡片内容
    content: PropTypes.node,

    // 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
    // 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
    // 、'rightTop'、'rightBottom'，默认为'top'
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
        'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ]),

    // 设置背景颜色
    color: PropTypes.string,

    // 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
    mouseEnterDelay: PropTypes.number,

    // 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
    mouseLeaveDelay: PropTypes.number,

    // 设置卡片css类
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 设置卡片样式
    overlayStyle: PropTypes.object,

    // 设置卡片内容区域的样式
    overlayInnerStyle: PropTypes.object,

    // 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
    trigger: PropTypes.oneOfType([
        PropTypes.oneOf(['hover', 'focus', 'click']),
        PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
    ]),

    // 设置悬浮层zIndex
    zIndex: PropTypes.number,

    // 设置箭头是否指向锚点元素中心，默认为false
    arrowPointAtCenter: PropTypes.bool,

    // 用于监听或控制当前popover的显隐，默认为false
    open: PropTypes.bool,

    // 用于设置是否保持popover显示/隐藏
    // 默认为false
    permanent: PropTypes.bool,

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
AntdPopover.defaultProps = {
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    placement: 'top',
    trigger: 'hover',
    arrowPointAtCenter: false,
    popupContainer: 'body',
    open: false,
    permanent: false
}

export default AntdPopover;