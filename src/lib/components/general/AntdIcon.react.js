// react核心
import PropTypes from 'prop-types';
// antd核心
import { str2Icon } from '../icons.react';
// 辅助库
import { isString } from 'lodash';
import { useRequest } from 'ahooks';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 图标组件AntdIcon
 */
const AntdIcon = (props) => {
    let {
        id,
        className,
        icon,
        style,
        key,
        nClicks,
        debounceWait,
        loading_state,
        setProps
    } = props;

    const { run: onClick } = useRequest(
        () => {
            // 更新nClicks
            setProps({ nClicks: nClicks + 1 })
        },
        {
            debounceWait: debounceWait,
            debounceLeading: true,
            manual: true
        }
    )

    if (icon) {
        return (
            <span id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={
                    (
                        icon.startsWith('fc-') ||
                        icon.startsWith('md-') ||
                        icon.startsWith('di-') ||
                        icon.startsWith('bi-') ||
                        icon.startsWith('bs-') ||
                        icon.startsWith('gi-')
                    ) ?
                        { ...{ verticalAlign: 'middle', userSelect: 'none' }, ...style } :
                        { ...{ userSelect: 'none' }, ...style }
                }
                key={key}
                onClick={onClick}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {str2Icon.get(icon)}
            </span>
        );
    }
    return null;
}

AntdIcon.propTypes = {
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
     * 图标名称
     */
    icon: PropTypes.string,

    /**
     * 图标累计点击次数，用于监听图标点击行为
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

    /**
     * 图标点击事件监听防抖延时，单位：毫秒
     * 默认值：`0`
     */
    debounceWait: PropTypes.number,

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
AntdIcon.defaultProps = {
    nClicks: 0,
    debounceWait: 0
}

export default AntdIcon;