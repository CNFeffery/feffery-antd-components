import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import 'antd/dist/antd.css';

// 定义分割线部件AntdDivider，api参数参考https://ant.design/components/divider-cn/
export default class AntdDivider extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            direction,
            innerTextOrientation,
            isDashed,
            lineColor,
            fontStyle,
            fontWeight,
            fontFamily,
            loading_state
        } = this.props;

        if (direction == 'horizontal') {

            // 返回定制化的前端部件
            return (
                <Divider
                    id={id}
                    style={{
                        borderTopColor: lineColor,
                        fontStyle: fontStyle,
                        fontWeight: fontWeight,
                        fontFamily: fontFamily
                    }}
                    className={className}
                    dashed={isDashed}
                    orientation={innerTextOrientation}
                    type={'horizontal'}
                    plain={true}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >{children}</Divider>
            );
        } else if (direction == 'vertical') {
            // 返回定制化的前端部件
            return (
                <Divider
                    id={id}
                    style={{
                        borderLeftColor: lineColor,
                        fontStyle: fontStyle,
                        fontWeight: fontWeight,
                        fontFamily: fontFamily
                    }}
                    className={className}
                    dashed={isDashed}
                    orientation={innerTextOrientation}
                    type={'vertical'}
                    plain={true}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >{children}</Divider>
            );
        }
    }
}

// 定义参数或属性
AntdDivider.propTypes = {
    // 部件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 内嵌文字的对齐方式（left：左对齐，center：居中，right：右对齐。默认为center）
    innerTextOrientation: PropTypes.oneOf(['left', 'center', 'right']),

    // 是否以虚线方式渲染（true：虚线，false：实线。默认为false）
    isDashed: PropTypes.bool,

    // 分割线方向（水平：horizontal，竖直：vertical。默认为horizontal）
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    // 分割线颜色，接受在css中合法的颜色值输入
    lineColor: PropTypes.string,

    // 内嵌文字字体，接受在css中合法的font-style值输入
    fontStyle: PropTypes.string,

    // 内嵌文字粗细，接受在css中合法的font-weight值输入
    fontWeight: PropTypes.string,

    // 内嵌文字字体族，接受在css中合法的font-family值输入
    fontFamily: PropTypes.string,

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
AntdDivider.defaultProps = {
    innerTextOrientation: 'center',
    isDashed: false,
    direction: 'horizontal',
    lineColor: 'lightgrey',
    fontStyle: 'initial',
    fontWeight: 'initial',
    fontFamily: 'initial'
}
