// react核心
import PropTypes from 'prop-types';
// antd核心
import { PageHeader } from '@ant-design/pro-components';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 页头组件AntdPageHeader
 */
const AntdPageHeader = ({
    id,
    children,
    className,
    style,
    key,
    title,
    subTitle,
    showBackIcon = true,
    historyBackDisabled = false,
    backClicks = 0,
    ghost = false,
    setProps,
    ...others
}) => {

    children = parseChildrenToArray(children)

    return (
        <PageHeader
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
            title={title}
            subTitle={subTitle}
            backIcon={showBackIcon ? undefined : false}
            ghost={ghost}
            onBack={
                historyBackDisabled ?
                    () => setProps({ backClicks: backClicks + 1 }) :
                    () => window.history.back()
            }
            data-dash-is-loading={useLoading()}>
            {children}
        </PageHeader>
    );
}

AntdPageHeader.propTypes = {
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
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件型，页头标题内容
     */
    title: PropTypes.node,

    /**
     * 组件型，页头副标题内容
     */
    subTitle: PropTypes.node,

    /**
     * 是否渲染返回按钮
     * 默认值：`true`
     */
    showBackIcon: PropTypes.bool,

    /**
     * 是否禁用点击返回按钮回退上一地址的功能
     * 默认值：`false`
     */
    historyBackDisabled: PropTypes.bool,

    /**
     * 返回按钮累计点击次数，用于监听返回按钮点击行为
     * 默认值：`0`
     */
    backClicks: PropTypes.number,

    /**
     * 是否开启透明背景模式
     * 默认值：`false`
     */
    ghost: PropTypes.bool,

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

export default AntdPageHeader;