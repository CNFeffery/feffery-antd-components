// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Tour, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../locales.react';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 漫游式引导组件AntdTour
 */
const AntdTour = ({
    id,
    className,
    style,
    key,
    locale = 'zh-cn',
    steps = [],
    arrow = true,
    placement = 'bottom',
    mask = true,
    type = 'default',
    open = false,
    current,
    zIndex = 1001,
    setProps,
    ...others
}) => {
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Tour
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy(
                    (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                    others
                )}
                id={id}
                className={
                    isString(className)
                        ? className
                        : className
                          ? useCss(className)
                          : undefined
                }
                style={style}
                key={key}
                steps={steps.map((item) => ({
                    ...item,
                    target: item.targetId
                        ? () => document.getElementById(item.targetId)
                        : item.targetSelector
                          ? () => document.querySelector(item.targetSelector)
                          : null,
                }))}
                arrow={arrow}
                placement={placement}
                mask={mask}
                type={type}
                open={open}
                current={current}
                zIndex={zIndex}
                onChange={(e) => setProps({ current: e })}
                onClose={() => setProps({ open: false })}
                onFinish={() => setProps({ open: false })}
                data-dash-is-loading={useLoading()}
            />
        </ConfigProvider>
    );
};

AntdTour.propTypes = {
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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 配置引导步骤
     */
    steps: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前步骤目标元素id，优先级高于`targetSelector`
             */
            targetId: PropTypes.string,
            /**
             * 定位当前步骤目标元素的javascript代码字符串
             */
            targetSelector: PropTypes.string,
            /**
             * 配置当前步骤箭头
             * 默认值：`true`
             */
            arrow: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.exact({
                    /**
                     * 箭头是否指向目标中心
                     */
                    pointAtCenter: PropTypes.bool,
                }),
            ]),
            /**
             * 组件型，当前步骤弹框的封面内容
             */
            cover: PropTypes.node,
            /**
             * 组件型，当前步骤弹框的标题内容
             */
            title: PropTypes.node,
            /**
             * 组件型，当前步骤弹框的描述内容
             */
            description: PropTypes.node,
            /**
             * 当前引导步骤弹框相对目标元素的位置，可选项有`'center'`、`'left'`、`'leftTop'`、`'leftBottom'`、`'right'`、`'rightTop'`、`'rightBottom'`、`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`
             */
            placement: PropTypes.oneOf([
                'center',
                'left',
                'leftTop',
                'leftBottom',
                'right',
                'rightTop',
                'rightBottom',
                'top',
                'topLeft',
                'topRight',
                'bottom',
                'bottomLeft',
                'bottomRight',
            ]),
            /**
             * 配置当前步骤蒙版层
             * 默认值：`true`
             */
            mask: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.exact({
                    /**
                     * 当前步骤蒙版层css样式
                     */
                    style: PropTypes.object,
                    /**
                     * 当前步骤蒙版层颜色
                     */
                    color: PropTypes.string,
                }),
            ]),
            /**
             * 当前步骤弹框类型，可选项有`'default'`、`'primary'`
             * 默认值：`'default'`
             */
            type: PropTypes.oneOf(['default', 'primary']),
            /**
             * 配置当前步骤下一步按钮
             */
            nextButtonProps: PropTypes.exact({
                /**
                 * 组件型，按钮内嵌元素
                 */
                children: PropTypes.node,
            }),
            /**
             * 配置当前步骤上一步按钮
             */
            prevButtonProps: PropTypes.exact({
                /**
                 * 组件型，按钮内嵌元素
                 */
                children: PropTypes.node,
            }),
        })
    ),

    /**
     * 统一配置引导步骤弹框箭头
     * 默认值：`true`
     */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 箭头是否指向目标中心
             */
            pointAtCenter: PropTypes.bool,
        }),
    ]),

    /**
     * 统一配置引导步骤弹框相对于目标元素的展开方向，可选项有`'center'`、`'left'`、`'leftTop'`、`'leftBottom'`、`'right'`、`'rightTop'`、`'rightBottom'`、`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`
     * 默认值：`'bottom'`
     */
    placement: PropTypes.oneOf([
        'center',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
    ]),

    /**
     * 统一配置引导弹框蒙版
     * 默认值：`true`
     */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 蒙版层css样式
             */
            style: PropTypes.object,
            /**
             * 蒙版层颜色
             */
            color: PropTypes.string,
        }),
    ]),

    /**
     * 统一设置引导步骤弹框类型，可选项有`'default'`、`'primary'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * 监听或设置当前漫游式引导的打开状态
     * 默认值：`false`
     */
    open: PropTypes.bool,

    /**
     * 监听或设置当前漫游式引导所在步骤序号
     */
    current: PropTypes.number,

    /**
     * 当前漫游式引导z-index
     * 默认值：`1001`
     */
    zIndex: PropTypes.number,

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
    setProps: PropTypes.func,
};

export default AntdTour;
