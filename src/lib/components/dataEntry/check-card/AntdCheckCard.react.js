import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckCard = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/check-card/AntdCheckCard.react'));

/**
 * 选择卡片组件AntdCheckCard
 */
const AntdCheckCard = ({
    id,
    children,
    className,
    style,
    key,
    name,
    checked,
    bordered = true,
    value,
    defaultChecked,
    disabled = false,
    size = 'default',
    readOnly = false,
    setProps,
    persistence,
    persisted_props = ['checked'],
    persistence_type = 'local',
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCheckCard {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    name,
                    checked,
                    bordered,
                    value,
                    defaultChecked,
                    disabled,
                    size,
                    readOnly,
                    setProps,
                    persistence,
                    persisted_props,
                    persistence_type,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdCheckCard.propTypes = {
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
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 监听或设置是否被选中
     */
    checked: PropTypes.bool,

    /**
     * 初始化是否被选中
     */
    defaultChecked: PropTypes.bool,

    /**
     * 是否显示边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'default'`、`'large'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /**
     * 当前选择卡片值
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

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

    /**
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'checked'`
     * 默认值：`['checked']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['checked'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

export default AntdCheckCard;

export const propTypes = AntdCheckCard.propTypes;
export const defaultProps = AntdCheckCard.defaultProps;