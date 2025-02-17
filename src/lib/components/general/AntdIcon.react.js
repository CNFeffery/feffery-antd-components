// react核心
import PropTypes from 'prop-types';
// antd核心
import { str2Icon } from '../icons.react';
import { createFromIconfontCN } from '@ant-design/icons';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useRequest } from 'ahooks';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 图标组件AntdIcon
 */
const AntdIcon = ({
    id,
    className,
    mode = 'default',
    icon,
    scriptUrl,
    style,
    key,
    nClicks = 0,
    debounceWait = 0,
    setProps,
    ...others
}) => {

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
        // 内置图标模式
        if (mode === 'default' || !mode) {
            return (
                <span
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                    id={id}
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
                            icon.startsWith('gi-') ||
                            icon.startsWith('si-')
                        ) ?
                            { ...{ verticalAlign: 'middle', userSelect: 'none' }, ...style } :
                            { ...{ userSelect: 'none' }, ...style }
                    }
                    key={key}
                    onClick={onClick}
                    data-dash-is-loading={useLoading()}>
                    {str2Icon.get(icon)}
                </span>
            );
        }
        // 阿里巴巴矢量图标模式
        else if (mode === 'iconfont') {
            const IconFont = createFromIconfontCN({
                scriptUrl: scriptUrl,
            });
            return (
                <span
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={
                        { ...{ userSelect: 'none' }, ...style }
                    }
                    key={key}
                    onClick={onClick}
                    data-dash-is-loading={useLoading()}>
                    <IconFont type={icon} />
                </span>
            );
        }
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
     * 图标调用模式，可选项有`'default'`（内置图标）、`'iconfont'`（阿里巴巴矢量图标）
     * 默认值：`'default'`
     */
    mode: PropTypes.oneOf(['default', 'iconfont']),

    /**
     * 当`mode='default'`时，设置内置图标名称，当`mode='iconfont'`时，设置自定义源图标名称
     */
    icon: PropTypes.string,

    /**
     * 当`mode='iconfont'`时，设置单个或多个阿里巴巴矢量图标源（在iconfont.cn上制作）
     */
    scriptUrl: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

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

export default AntdIcon;