// react核心
import PropTypes from "prop-types";
// antd核心
import { Divider } from "antd";
// 辅助库
import { isString } from "lodash";
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from "../../hooks/useCss";

/**
 * 分割线组件AntdDivider
 */
const AntdDivider = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        direction,
        innerTextOrientation,
        isDashed,
        lineColor,
        fontSize,
        fontStyle,
        fontWeight,
        fontFamily,
        fontColor,
        variant,
        plain,
        loading_state,
    } = props;

    if (direction === "horizontal") {

        return (
            <Divider
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                style={{
                    ...style,
                    borderTopColor: lineColor,
                    fontStyle: fontStyle,
                    fontWeight: fontWeight,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    color: fontColor,
                }}
                className={
                    isString(className)
                        ? className
                        : className
                            ? useCss(className)
                            : undefined
                }
                key={key}
                dashed={isDashed}
                variant={variant}
                orientation={innerTextOrientation}
                type={"horizontal"}
                plain={plain}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Divider>
        );
    } else if (direction === "vertical") {

        return (
            <Divider
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                style={{
                    ...style,
                    borderLeftColor: lineColor,
                    fontStyle: fontStyle,
                    fontWeight: fontWeight,
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    color: fontColor,
                }}
                className={
                    isString(className)
                        ? className
                        : className
                            ? useCss(className)
                            : undefined
                }
                key={key}
                dashed={isDashed}
                variant={variant}
                orientation={innerTextOrientation}
                type={"vertical"}
                plain={plain}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Divider>
        );
    }
};

AntdDivider.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，分割线内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 内嵌元素对齐方式，可选项有`'left'`、`'center'`、`'right'`
     * 默认值：`'center'`
     */
    innerTextOrientation: PropTypes.oneOf(["left", "center", "right"]),

    /**
     * 是否渲染为虚线形式
     * 默认值：`false`
     */
    isDashed: PropTypes.bool,

    /**
     * 分割线方向，可选项有`'horizontal'`、`'vertical'`
     * 默认值：`'horizontal'`
     */
    direction: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * 内嵌元素字体大小
     */
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 分割线颜色
     */
    lineColor: PropTypes.string,

    /**
     * 内嵌元素字体风格
     */
    fontStyle: PropTypes.string,

    /**
     * 内嵌元素字重
     */
    fontWeight: PropTypes.string,

    /**
     * 内嵌元素字体
     */
    fontFamily: PropTypes.string,

    /**
     * 内嵌元素字体颜色
     */
    fontColor: PropTypes.string,

    /**
     * 分割线变体，可选项有`'dashed'`（虚线）、`'dotted'`（点线）、`'solid'`（实线）
     * 默认值：`'solid'`
     */
    variant: PropTypes.oneOf(['dashed', 'dotted', 'solid']),

    /**
     * 文字内容是否呈现为常规正文形式
     * 默认值：`true`
     */
    plain: PropTypes.bool,

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
        component_name: PropTypes.string,
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

// 设置默认参数
AntdDivider.defaultProps = {
    innerTextOrientation: 'center',
    isDashed: false,
    direction: 'horizontal',
    variant: 'solid',
    plain: true
};

export default AntdDivider;