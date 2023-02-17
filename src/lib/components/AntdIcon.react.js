import { str2Icon } from './icons.react';
import PropTypes from 'prop-types';
import useCss from '../hooks/useCss';
import { isString } from 'lodash';

import { useRequest } from 'ahooks';

// 定义图标组件AntdIcon
const AntdIcon = (props) => {
    // 取得必要属性或参数
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
            debounceWait: Math.max(debounceWait, 200),
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

// 定义参数或属性
AntdIcon.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 用于指定icon类型,
    icon: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 记录按钮从渲染后开始被点击的次数，默认为0
    nClicks: PropTypes.number,

    // 用于配置value变化更新的防抖等待时长（单位：毫秒），默认为0
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
    debounceWait: 200
}

export default AntdIcon;