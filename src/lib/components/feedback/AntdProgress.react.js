import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';

// 定义进度条组件AntdProgress，api参数参考https://ant.design/components/progress-cn/
const AntdProgress = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        type,
        size,
        percent,
        success,
        format,
        status,
        showInfo,
        strokeColor,
        strokeLinecap,
        strokeWidth,
        trailColor,
        width,
        gapDegree,
        gapPosition,
        steps,
        loading_state,
        setProps
    } = props;

    return (
        <Progress
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
            width={width}
            gapDegree={gapDegree}
            gapPosition={gapPosition}
            steps={steps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></Progress>
    );
}

// 定义参数或属性
AntdProgress.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置进度条类型，可选的有'line'（条形）、'circle'（环形）与'dashboard'（仪表盘型）
    // 默认为'line'
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),

    // 设置进度条尺寸规格，默认为'default'
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.oneOf(['small', 'default']),
    ]),

    // 设置进度条的完成程度，取值在0到100之间，100时会自动渲染“已完成状态”，默认为0
    percent: PropTypes.number,

    // 成功状态进度条相关配置
    success: PropTypes.exact({
        // 自定义成功状态对应百分比
        percent: PropTypes.number,
        // 自定义成功状态进度条颜色
        strokeColor: PropTypes.oneOfType([
            PropTypes.string,
            // 配置渐变色
            PropTypes.exact({
                // 配置开始颜色
                from: PropTypes.string,

                // 配置结束颜色
                to: PropTypes.string
            })
        ])
    }),

    // 自定义提示格式
    format: PropTypes.exact({
        // 设置前缀文字，默认为''
        prefix: PropTypes.string,

        // 设置后缀文字，默认为'%'
        suffix: PropTypes.string,

        // 设置直接显示的全部内容，此参数设置时会屏蔽实际的百分比数值及prefix、suffix参数
        content: PropTypes.node
    }),

    // 设置进度条状态，可选的有'success'、'exception'、'normal'与'active'（仅限type='line'时生效）
    status: PropTypes.oneOf(['success', 'exception', 'normal', 'active']),

    // 设置是否显示进度数值或状态图标，默认为true
    showInfo: PropTypes.bool,

    // 设置进度条的颜色，与css接受的颜色值格式相同
    strokeColor: PropTypes.oneOfType([
        PropTypes.string,
        // 配置渐变色
        PropTypes.exact({
            // 配置开始颜色
            from: PropTypes.string,

            // 配置结束颜色
            to: PropTypes.string
        })
    ]),

    // 设置进度条的线型样式，可选的有'round'、'butt'和'square'
    // 同css中的stroke-linecap属性
    // 默认为'round'
    strokeLinecap: PropTypes.oneOf(['round', 'butt', 'square']),

    // 配置进度条线像素宽度
    strokeWidth: PropTypes.number,

    // 设置未完成分段部分的颜色，默认不设置则无颜色
    trailColor: PropTypes.string,

    // 针对circle与dashboard模式，设置画布像素宽度
    // 默认为132
    width: PropTypes.number,

    // 针对dashboard模式，设置仪表盘进度条缺口角度，可取值在0到295之间，默认为75
    gapDegree: PropTypes.number,

    // 针对dashboard模式，设置仪表盘缺口方位，可选的有'top'、'bottom'、'left'与'right'
    // 默认为'bottom'
    gapPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

    // 用于设置特殊的步骤进度条分段数量，仅'line'模式可用
    steps: PropTypes.number,

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
AntdProgress.defaultProps = {
    type: 'line',
    size: 'default',
    percent: 0,
    showInfo: true,
    width: 132,
    gapPosition: 'bottom'
}

export default AntdProgress;