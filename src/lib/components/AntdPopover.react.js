import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { str2Icon } from './icons.react'

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义气泡卡片部件Popover，api参数参考https://ant.design/components/popover-cn/
export default class AntdPopover extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            title,
            placement,
            color,
            mouseEnterDelay,
            mouseLeaveDelay,
            overlayClassName,
            overlayStyle,
            overlayInnerStyle,
            trigger,
            contentChildrenIndexes,
            containerId,
            setProps
        } = this.props;

        children = parseChildrenToArray(children)

        let realChildren = [];
        let contentChildren = [];
        // 拆分真实children对象与需要气泡卡片内部嵌入的元素
        if (contentChildrenIndexes.length !== 0) {
            for (let i = 0; i < children.length; i++) {
                // 判断当前子元素对应下标是否在contentChildrenIndexes中
                if (contentChildrenIndexes.includes(i)) {
                    contentChildren.push(children[i])
                } else {
                    realChildren.push(children[i])
                }
            }
        } else {
            realChildren = children
        }

        return (
            <Popover id={id}
                className={className}
                style={style}
                title={title?.content ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {str2Icon.get(title.prefixIcon)}
                        {<span style={{ marginLeft: '5px' }}>{title.content}</span>}
                    </div> : title}
                content={contentChildren}
                placement={placement}
                color={color}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                overlayClassName={overlayClassName}
                overlayStyle={overlayStyle}
                overlayInnerStyle={overlayInnerStyle}
                trigger={trigger}
                getPopupContainer={containerId ? () => document.getElementById(containerId) : containerId}>{realChildren}</Popover>
        );
    }
}

// 定义参数或属性
AntdPopover.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置显示的气泡卡片标题内容
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.exact({
            // 设置标题文字内容
            content: PropTypes.string,

            // 设置标题前缀icon
            prefixIcon: PropTypes.string
        })
    ]),

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

    // 卡片类名
    overlayClassName: PropTypes.string,

    // 设置卡片样式
    overlayStyle: PropTypes.object,

    // 设置卡片内容区域的样式
    overlayInnerStyle: PropTypes.object,

    // 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    // 为了绕开dash非children属性不能传入组件的限制，用于指定children
    // 属性中的哪些位置的元素应当作为气泡卡片内嵌的元素
    contentChildrenIndexes: PropTypes.arrayOf(PropTypes.number),

    // 设置绑定的容器id
    containerId: PropTypes.string,

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
    contentChildrenIndexes: []
}
