// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { WaterMark } from '@ant-design/pro-components';
// 辅助库
import { parseChildrenToArray, useLoading } from '../utils';
import { pickBy } from 'ramda';

/**
 * 水印组件AntdWatermark
 */
const AntdWatermark = ({
    id,
    children,
    className,
    style,
    markClassName,
    markStyle,
    key,
    content,
    rotate = -22,
    zIndex,
    fontColor,
    fontSize = 16,
    gapX = 212,
    gapY = 222,
    image,
    width,
    height,
    inherit = true,
    ...others
}) => {

    children = parseChildrenToArray(children)

    return (
        <WaterMark
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
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
            inherit={inherit}
            data-dash-is-loading={useLoading()}>
            {children}
        </WaterMark>
    );
}

AntdWatermark.propTypes = {
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
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 水印层css类名
     */
    markClassName: PropTypes.string,

    /**
     * 水印层css样式
     */
    markStyle: PropTypes.object,

    /**
     * 配置水印内容，传入数组时渲染多行水印
     */
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /**
     * 水印旋转角度
     * 默认值：`-22`
     */
    rotate: PropTypes.number,

    /**
     * 水印z-index
     */
    zIndex: PropTypes.number,

    /**
     * 文字水印颜色
     */
    fontColor: PropTypes.string,

    /**
     * 文字水印字体大小
     * 默认值：`16`
     */
    fontSize: PropTypes.number,

    /**
     * 水印之间的水平像素间距
     * 默认值：`212`
     */
    gapX: PropTypes.number,

    /**
     * 水印之间的垂直像素间距
     * 默认值：`222`
     */
    gapY: PropTypes.number,

    /**
     * 图片水印地址
     */
    image: PropTypes.string,

    /**
     * 图片水印像素宽度
     */
    width: PropTypes.number,

    /**
     * 图片水印像素高度
     */
    height: PropTypes.number,

    /**
     * 是否将水印传导给`AntdModal`、`AntdDrawer`等弹出类组件
     * 默认值：`true`
     */
    inherit: PropTypes.bool,

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

export default AntdWatermark;