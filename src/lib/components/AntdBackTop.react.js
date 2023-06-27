import React from 'react';
import PropTypes from 'prop-types';
import useCss from '../hooks/useCss';
import { isString } from 'lodash';
import { BackTop } from 'antd';


// 定义回到顶部组件AntdBackTop，api参数参考https://ant.design/components/back-top-cn/
const AntdBackTop = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        duration,
        visibilityHeight,
        containerId,
        containerSelector,
        setProps,
        loading_state
    } = props;

    return (
        <BackTop id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            target={
                containerId || containerSelector ?
                    (
                        containerId ?
                            () => document.getElementById(containerId) || window :
                            () => eval(containerSelector)
                    ) :
                    () => window
            }
            duration={duration * 1000}
            visibilityHeight={visibilityHeight}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

// 定义参数或属性
AntdBackTop.propTypes = {
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

    // 设置回到顶部所需时间，单位秒，默认0.45
    duration: PropTypes.number,

    // 设置出现回到顶部组件显示的滚动像素高度阈值，默认为400
    visibilityHeight: PropTypes.number,

    // 设置绑定滚动条事件对应的容器id
    containerId: PropTypes.string,

    // 当目标容器定位较为复杂时，可传入获取元素对应的js代码字符串
    // 优先级低于containerId
    containerSelector: PropTypes.string,

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
AntdBackTop.defaultProps = {
    duration: 0.45,
    visibilityHeight: 400
}

export default AntdBackTop;