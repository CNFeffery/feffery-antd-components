import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WaterMark } from '@ant-design/pro-layout';
import '@ant-design/pro-layout/dist/layout.css';
import { parseChildrenToArray } from './utils';

// 定义水印组件AntdWatermark，api参数参考https://procomponents.ant.design/components/water-mark
export default class AntdWatermark extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            content,
            rotate,
            zIndex,
            fontColor,
            fontSize,
            gapX,
            gapY,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <WaterMark id={id}
                className={className}
                style={style}
                content={content}
                rotate={rotate}
                zIndex={zIndex}
                fontColor={fontColor}
                fontSize={fontSize}
                gapX={gapX}
                gapY={gapY}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </WaterMark>
        );
    }
}

// 定义参数或属性
AntdWatermark.propTypes = {
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

    // 设置水印文字内容
    content: PropTypes.string,

    // 设置水印旋转角度，默认-22
    rotate: PropTypes.number,

    // 设置水印z-index
    zIndex: PropTypes.number,

    // 设置水印文字颜色
    fontColor: PropTypes.string,

    // 设置水印字体像素大小，默认16
    fontSize: PropTypes.number,

    // 水印之间的水平像素间距，默认为212
    gapX: PropTypes.number,

    // 水印之间的垂直间距，默认为222
    gapY: PropTypes.number,

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
AntdWatermark.defaultProps = {
}
