// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Progress } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 进度条组件AntdProgress
 */
const AntdProgress = ({
    id,
    className,
    style,
    key,
    type = 'line',
    size = 'default',
    percent = 0,
    success,
    format,
    status,
    showInfo = true,
    strokeColor,
    strokeLinecap,
    strokeWidth,
    trailColor,
    gapDegree,
    gapPosition = 'bottom',
    steps,
    setProps,
    ...others
}) => {

    return (
        <Progress
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
            type={type}
            size={size}
            percent={percent}
            success={success}
            format={format ? p => (format && format.content) ?
                format.content : (
                    ((format && format.prefix) ? format.prefix : '') +
                    `${p}` +
                    ((format && format.suffix) ? format.suffix : '%')
                ) : undefined}
            status={status}
            showInfo={showInfo}
            strokeColor={strokeColor ?
                (
                    strokeColor.from && strokeColor.to ?
                        {
                            '0%': strokeColor.from,
                            '100%': strokeColor.to
                        } : strokeColor
                ) : undefined
            }
            strokeLinecap={strokeLinecap}
            strokeWidth={strokeWidth}
            trailColor={trailColor}
            gapDegree={gapDegree}
            gapPosition={gapPosition}
            steps={steps}
            data-dash-is-loading={useLoading()}
        ></Progress>
    );
}

AntdProgress.propTypes = {
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
     * 进度条类型，可选项有`'line'`、`'circle'`、`'dashboard'`
     * 默认值：`'line'`
     */
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),

    /**
     * 进度条尺寸规格，可选项有`'small'`、`'default'`、`'large'`，传入数值型表示像素尺寸，传入字典型可分别控制宽度和高度
     * 默认值：`'default'`
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.oneOf(['small', 'default']),
        PropTypes.shape({
            /**
             * 像素宽度
             */
            width: PropTypes.number,
            /**
             * 像素高度
             */
            height: PropTypes.number
        })
    ]),

    /**
     * 进度条进度，取值应在`0`到`100`之间，当`100`时默认会渲染为完成状态
     * 默认值：`0`
     */
    percent: PropTypes.number,

    /**
     * 配置进度条完成状态相关参数
     */
    success: PropTypes.exact({
        /**
         * 达到完成状态对应的进度，取值应在`0`到`100`之间
         * 默认值：`100`
         */
        percent: PropTypes.number,
        /**
         * 完成状态进度条颜色，支持渐变色
         */
        strokeColor: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.exact({
                /**
                 * 渐变色开端颜色
                 */
                from: PropTypes.string,

                /**
                 * 渐变色末端颜色
                 */
                to: PropTypes.string
            })
        ])
    }),

    /**
     * 配置进度提示相关参数
     */
    format: PropTypes.exact({
        /**
         * 进度提示前缀文字
         * 默认值：`''`
         */
        prefix: PropTypes.string,
        /**
         * 进度提示后缀文字
         * 默认值：`'%'`
         */
        suffix: PropTypes.string,
        /**
         * 组件型，强制设置显示内容
         */
        content: PropTypes.node
    }),

    /**
     * 进度条状态，可选项有`'success'`、`'exception'`、`'normal'`、`'active'`，其中`'active'`仅在`type='line'`时生效
     * 默认值：`'normal'`
     */
    status: PropTypes.oneOf(['success', 'exception', 'normal', 'active']),

    /**
     * 是否显示进度数值或状态图标
     * 默认值：`true`
     */
    showInfo: PropTypes.bool,

    /**
     * 配置进度条颜色，支持渐变色
     */
    strokeColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.exact({
            /**
             * 渐变色开端颜色
             */
            from: PropTypes.string,

            /**
             * 渐变色末端颜色
             */
            to: PropTypes.string
        })
    ]),

    /**
     * 进度条线型，可选项有`'round'`、`'butt'`、`'square'`
     * 默认值：`'round'`
     */
    strokeLinecap: PropTypes.oneOf(['round', 'butt', 'square']),

    /**
     * 进度条线的宽度，单位是进度条画布宽度的百分比
     */
    strokeWidth: PropTypes.number,

    /**
     * 未完成分段部分的颜色，默认无颜色
     */
    trailColor: PropTypes.string,

    /**
     * 进度条缺口角度，取值应在`0`到`295`之间，仅`type='dashboard'`时可用
     * 默认值：`75`
     */
    gapDegree: PropTypes.number,

    /**
     * 仪表盘缺口方向，可选项有`'top'`、`'bottom'`、`'left'`、`'right'`，仅`type='dashboard'`时可用
     * 默认值：`'bottom'`
     */
    gapPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

    /**
     * 进度条分段数量
     */
    steps: PropTypes.number,

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

export default AntdProgress;