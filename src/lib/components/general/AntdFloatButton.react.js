// react核心
import PropTypes from 'prop-types';
// antd核心
import { FloatButton } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 悬浮按钮组件AntdFloatButton
 */
const AntdFloatButton = (props) => {
    let {
        id,
        className,
        style,
        key,
        icon,
        description,
        tooltip,
        type,
        shape,
        href,
        target,
        nClicks,
        setProps,
        loading_state
    } = props;

    return (
        <FloatButton
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
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
            href={href}
            target={target}
            onClick={() => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

AntdFloatButton.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

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
     * 组件型，按钮内嵌前缀图标元素
     */
    icon: PropTypes.node,

    /**
     * 组件型，按钮内嵌元素，仅`shape='square'`时可用
     */
    description: PropTypes.node,

    /**
     * 组件型，按钮额外气泡卡片内容
     */
    tooltip: PropTypes.node,

    /**
     * 按钮类型，可选项有`'default'`、`'primary'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * 按钮形状，可选项有`'circle'`、`'square'`
     * 默认值：`'circle'`
     */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * 按钮点击跳转链接地址
     */
    href: PropTypes.string,

    /**
     * 按钮点击跳转链接方式
     * 默认值：`'_blank'`
     */
    target: PropTypes.string,

    /**
     * 按钮累计点击次数，用于监听按钮点击行为
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
AntdFloatButton.defaultProps = {
    type: 'default',
    shape: 'circle',
    target: '_blank',
    nClicks: 0
}

export default AntdFloatButton;