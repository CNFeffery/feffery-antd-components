// react核心
import PropTypes from 'prop-types';
// antd核心
import { FloatButton } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 悬浮按钮组组件AntdFloatButtonGroup
 */
const AntdFloatButtonGroup = ({
    id,
    children,
    className,
    style,
    key,
    icon,
    description,
    tooltip,
    type = 'default',
    shape = 'circle',
    trigger,
    placement,
    open,
    setProps,
    ...others
}) => {

    return (
        <FloatButton.Group
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            icon={icon}
            description={description}
            tooltip={tooltip}
            type={type}
            shape={shape}
            trigger={trigger}
            placement={placement}
            open={open}
            onOpenChange={(e) => setProps({ open: e })}
            data-dash-is-loading={useLoading()}
        >{children}</FloatButton.Group>
    );
}

AntdFloatButtonGroup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前悬浮按钮组内悬浮按钮
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 图标元素
     */
    icon: PropTypes.node,

    /**
     * 描述内容
     */
    description: PropTypes.node,

    /**
     * 气泡卡片内容
     */
    tooltip: PropTypes.node,

    /**
     * 按钮类型，可选项有`'default'`、`'primary'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * 内部各悬浮按钮形状，可选项有`'circle'`、`'square'`
     * 默认值：`'circle'`
     */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * 菜单展开模式触发方式，可选项有`'click'`、`'hover'`
     */
    trigger: PropTypes.oneOf(['click', 'hover']),

    /**
     * 菜单展开方向，可选项有`'top'`、`'right'`、`'bottom'`、`'left'`
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * 设置或监听当前悬浮按钮组展开状态
     */
    open: PropTypes.bool,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdFloatButtonGroup;