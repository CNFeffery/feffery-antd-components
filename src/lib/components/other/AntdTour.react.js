import React from 'react';
import PropTypes from 'prop-types';
import { Tour, ConfigProvider } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { str2Locale } from '../locales.react';

// 定义漫游式引导组件AntdTour
const AntdTour = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        steps,
        arrow,
        placement,
        mask,
        type,
        open,
        current,
        zIndex,
        setProps,
        loading_state
    } = props;

    return (
        <ConfigProvider
            locale={str2Locale.get(locale)}
        >
            <Tour id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                steps={
                    steps.map(
                        (item) => ({
                            ...item,
                            target: (
                                item.targetId ?
                                    document.getElementById(item.targetId) :
                                    (
                                        item.targetSelector ?
                                            document.querySelector(item.targetSelector) :
                                            null
                                    )
                            )
                        })
                    )
                }
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
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdTour.propTypes = {
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 用于定义各引导步骤，其中当targetId、targetSelector
     * 默认：[]
     */
    steps: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 设置当前引导步骤指向的目标元素id，优先级最高
             */
            targetId: PropTypes.string,

            /**
             * 用于传入js代码字符串进行目标元素的定位，优先级低于targetId
             */
            targetSelector: PropTypes.string,

            /**
             * 配置当前引导步骤弹框的箭头
             * 默认：true
             */
            arrow: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.exact({
                    /**
                     * 设置箭头是否指向元素中心
                     */
                    pointAtCenter: PropTypes.bool
                })
            ]),

            /**
             * 设置当前引导步骤弹框的封面内容
             */
            cover: PropTypes.node,

            /**
             * 设置当前引导步骤弹框的标题
             */
            title: PropTypes.node,

            /**
             * 设置当前引导步骤弹框的描述内容
             */
            description: PropTypes.node,

            /**
             * 设置当前引导步骤弹框相对目标元素的位置
             * 可选的有'center'、'left'、'leftTop'、'leftBottom'、'right'、'rightTop'、'rightBottom'
             * 、'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
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
                'bottomRight'
            ]),

            /**
             * 为当前引导步骤设置蒙版层相关配置
             * 默认：true
             */
            mask: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.exact({
                    /**
                     * 设置蒙版层css样式
                     */
                    style: PropTypes.object,

                    /**
                     * 设置蒙版层颜色
                     */
                    color: PropTypes.string
                })
            ]),

            /**
             * 设置当前引导步骤弹框类型，可选的有'default'、'primary'
             * 默认：'default'
             */
            type: PropTypes.oneOf(['default', 'primary']),

            /**
             * 设置当前引导步骤框下一步按钮的相关属性
             */
            nextButtonProps: PropTypes.exact({
                /**
                 * 设置按钮子元素
                 */
                children: PropTypes.node
            }),

            /**
             * 设置当前引导步骤框上一步按钮的相关属性
             */
            prevButtonProps: PropTypes.exact({
                /**
                 * 设置按钮子元素
                 */
                children: PropTypes.node
            })
        })
    ),

    /**
     * 配置各引导步骤弹框的箭头
     * 默认：true
     */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 设置箭头是否指向元素中心
             */
            pointAtCenter: PropTypes.bool
        })
    ]),

    /**
     * 设置各引导步骤弹框相对于目标元素的位置
     * 可选的有'center'、'left'、'leftTop'、'leftBottom'、'right'、'rightTop'、'rightBottom'
     * 、'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
     * 默认：'bottom'
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
        'bottomRight'
    ]),

    /**
     * 为各引导步骤条设置蒙版层相关配置
     * 默认：true
     */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 设置蒙版层css样式
             */
            style: PropTypes.object,

            /**
             * 设置蒙版层颜色
             */
            color: PropTypes.string
        })
    ]),

    /**
     * 为各引导步骤弹框设置类型，可选的有'default'、'primary'
     * 默认：'default'
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * 设置或监听当前漫游式引导的开关状态
     * 默认：false
     */
    open: PropTypes.bool,

    /**
     * 设置或监听当前漫游式引导所处的步骤序号
     */
    current: PropTypes.number,

    /**
     * 设置当前漫游式引导的z-index
     * 默认：1001
     */
    zIndex: PropTypes.number,

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
AntdTour.defaultProps = {
    locale: 'zh-cn',
    steps: [],
    arrow: true,
    placement: 'bottom',
    mask: true,
    type: 'default',
    open: false,
    zIndex: 1001
}

export default AntdTour;