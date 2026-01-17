// react核心
import PropTypes from 'prop-types';
// antd核心
import { FloatButton } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { BackTop } = FloatButton;

/**
 * 回到顶部组件AntdBackTop
 */
const AntdBackTop = ({
    id,
    className,
    style,
    key,
    duration = 0.45,
    visibilityHeight = 400,
    containerId,
    containerSelector,
    nClicks = 0,
    setProps,
    ...others
}) => {

    return (
        <BackTop
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
            onClick={() => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={useLoading()} />
    );
}

AntdBackTop.propTypes = {
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
     * 回到顶部过程耗时，单位：秒
     * 默认值：`0.45`
     */
    duration: PropTypes.number,

    /**
     * 回到顶部按钮显示时对应的页面滚动像素高度阈值
     * 默认值：`400`
     */
    visibilityHeight: PropTypes.number,

    /**
     * 滚动事件监听的特定目标容器id
     */
    containerId: PropTypes.string,

    /**
     * 滚动事件监听的特定目标容器js选择代码，优先级低于containerId
     */
    containerSelector: PropTypes.string,

    /**
     * 监听回到顶部按钮累计被点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

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

export default AntdBackTop;