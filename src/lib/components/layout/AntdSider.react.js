// react核心
import PropTypes from 'prop-types';
// antd核心
import { Layout } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { Sider } = Layout;

/**
 * 侧边栏组件AntdSider
 */
const AntdSider = ({
    id,
    children,
    className,
    style,
    key,
    breakpoint,
    collapsed,
    collapsedWidth = 80,
    collapsible = false,
    reverseArrow = false,
    theme = 'dark',
    width = 200,
    trigger,
    setProps,
    ...others
}) => {

    const onCollapse = collapsed => {
        setProps({ collapsed });
    };

    children = parseChildrenToArray(children)

    return (
        <Sider
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
            collapsed={collapsed}
            collapsedWidth={collapsedWidth}
            collapsible={collapsible}
            reverseArrow={reverseArrow}
            theme={theme}
            width={width}
            trigger={trigger}
            breakpoint={breakpoint}
            onCollapse={onCollapse}
            data-dash-is-loading={useLoading()}>
            {children}
        </Sider>
    );
}

AntdSider.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
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
     * 当前是否收起
     */
    collapsed: PropTypes.bool,

    // 设置收缩的像素宽度，默认为80即80px，设置为0时会渲染特殊触发组件
    /**
     * 收起后呈现的像素宽度，设置为0时会额外渲染特殊触发组件
     * 默认值：`80`
     */
    collapsedWidth: PropTypes.number,

    /**
     * 是否可收起
     * 默认值：`false`
     */
    collapsible: PropTypes.bool,

    /**
     * 是否翻转收起箭头的方向，通常在Sider位于右侧时使用
     * 默认值：`false`
     */
    reverseArrow: PropTypes.bool,

    /**
     * 主题，可选项有`'light'`、`'dark'`
     * 默认值：`'dark'`
     */
    theme: PropTypes.oneOf(['light', 'dark']),

    /**
     * 侧边栏像素宽度
     * 默认值：`200`
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 设置为`None`时不渲染自带的特殊触发组件
     */
    trigger: PropTypes.node,

    /**
     * 侧边栏自动收起对应的响应式断点
     */
    breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),

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

export default AntdSider;