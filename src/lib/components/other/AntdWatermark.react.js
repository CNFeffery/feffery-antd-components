import React from 'react';
import PropTypes from 'prop-types';
import { WaterMark } from '@ant-design/pro-components';
import { parseChildrenToArray } from '../utils';
import { pickBy } from 'ramda';

// 定义水印组件AntdWatermark，api参数参考https://procomponents.ant.design/components/water-mark
const AntdWatermark = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        markClassName,
        markStyle,
        key,
        content,
        rotate,
        zIndex,
        fontColor,
        fontSize,
        gapX,
        gapY,
        image,
        width,
        height,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <WaterMark
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={className}
            style={style}
            markClassName={markClassName}
            markStyle={markStyle}
            key={key}
            content={content}
            rotate={rotate}
            zIndex={zIndex}
            fontColor={fontColor}
            fontSize={fontSize}
            gapX={gapX}
            gapY={gapY}
            image={image}
            width={width}
            height={height}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </WaterMark>
    );
}

// 定义参数或属性
AntdWatermark.propTypes = {
    // 部件id
    id: PropTypes.string,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置水印层css类
    markClassName: PropTypes.string,

    // 设置水印层css样式
    markStyle: PropTypes.object,

    // 设置水印文字内容
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

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

    // 图片型水印
    // 用于设置水印图片的地址
    image: PropTypes.string,

    // 用于设置水印图片的像素宽度
    width: PropTypes.number,

    // 用于设置水印图片的像素高度
    height: PropTypes.number,

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
AntdWatermark.defaultProps = {
    rotate: -22,
    fontSize: 16,
    gapX: 212,
    gapY: 222
}

export default AntdWatermark;