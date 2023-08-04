import React from "react";
import PropTypes from "prop-types";
import { Divider } from "antd";
import { isString } from "lodash";
import useCss from "../../hooks/useCss";

// 定义分割线组件AntdDivider，api参数参考https://ant.design/components/divider-cn/
const AntdDivider = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
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
        loading_state,
    } = props;

    if (direction === "horizontal") {
        // 返回定制化的前端组件
        return (
            <Divider
                id={id}
                style={{
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
                orientation={innerTextOrientation}
                type={"horizontal"}
                plain={true}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Divider>
        );
    } else if (direction === "vertical") {
        // 返回定制化的前端组件
        return (
            <Divider
                id={id}
                style={{
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
                orientation={innerTextOrientation}
                type={"vertical"}
                plain={true}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Divider>
        );
    }
};

// 定义参数或属性
AntdDivider.propTypes = {
    // 组件id
    /**
     * Component id.
     */
    id: PropTypes.string,

    // 内嵌文字的文本内容
    /**
     * Text content of the inline text.
     */
    children: PropTypes.node,

    // css类名
    /**
     * CSS class name.
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    // 辅助刷新用唯一标识key值
    /**
     * A unique identifier key used for refreshing assistance.
     */
    key: PropTypes.string,

    // 内嵌文字的对齐方式（left：左对齐，center：居中，right：右对齐。默认为center）
    /**
     * Text alignment of the inline text. Possible values are 'left', 'center', and 'right'. Default is 'center'.
     */
    innerTextOrientation: PropTypes.oneOf(["left", "center", "right"]),

    // 是否以虚线方式渲染（true：虚线，false：实线。默认为false）
    /**
     * Whether to render the divider as dashed line. true for dashed line, false for solid line. Default is false.
     */
    isDashed: PropTypes.bool,

    // 分割线方向（水平：horizontal，竖直：vertical。默认为horizontal）
    /**
     * Direction of the divider. Possible values are 'horizontal' and 'vertical'. Default is 'horizontal'.
     */
    direction: PropTypes.oneOf(["horizontal", "vertical"]),

    // 内嵌文字大小，接受在css中合法的font-size值输入
    /**
     * Font size of the inline text. Accepts valid font-size values in CSS.
     */
    fontSize: PropTypes.string,

    // 分割线颜色，接受在css中合法的颜色值输入
    /**
     * Color of the divider. Accepts valid color values in CSS.
     */
    lineColor: PropTypes.string,

    // 内嵌文字字体，接受在css中合法的font-style值输入
    /**
     * Font style of the inline text. Accepts valid font-style values in CSS.
     */
    fontStyle: PropTypes.string,

    // 内嵌文字粗细，接受在css中合法的font-weight值输入
    /**
     * Font weight of the inline text. Accepts valid font-weight values in CSS.
     */
    fontWeight: PropTypes.string,

    // 内嵌文字字体族，接受在css中合法的font-family值输入
    /**
     * Font family of the inline text. Accepts valid font-family values in CSS.
     */
    fontFamily: PropTypes.string,

    // 内嵌文字色彩，接受在css中合法的color值输入
    /**
     * Color of the inline text. Accepts valid color values in CSS.
     */
    fontColor: PropTypes.string,

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
    innerTextOrientation: "center",
    isDashed: false,
    direction: "horizontal",
    lineColor: "lightgrey",
    fontStyle: "initial",
    fontWeight: "initial",
    fontFamily: "initial",
    fontColor: "#000000",
};

export default AntdDivider;
