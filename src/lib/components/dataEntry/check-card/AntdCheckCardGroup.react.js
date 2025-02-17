import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckCardGroup = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/check-card/AntdCheckCardGroup.react'));

/**
 * 组合选择卡片组件AntdCheckCardGroup
 */
const AntdCheckCardGroup = ({
    id,
    children,
    className,
    style,
    key,
    name,
    multiple = false,
    allowNoValue = true,
    bordered = true,
    value,
    defaultValue,
    disabled = false,
    size = 'default',
    readOnly = false,
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCheckCardGroup {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    name,
                    multiple,
                    allowNoValue,
                    bordered,
                    value,
                    defaultValue,
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

AntdCheckCardGroup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌若干`AntdCheckCard`相关组件
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
     * 是否开启多选
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 是否允许当前组合选择卡片中仅剩的选项被取消选中
     * 默认值：`true`
     */
    allowNoValue: PropTypes.bool,

    /**
     * 是否显示边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 监听或设置已选中卡片值
     */
    value: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        )
    ]),

    /**
     * 初始化已选中卡片值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        )
    ]),

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
     * 开启属性持久化功能的若干属性名，可选项有`'value'`
     * 默认值：`['value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

AntdCheckCardGroup.dashPersistence = {
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdCheckCardGroup;

export const propTypes = AntdCheckCardGroup.propTypes;
export const defaultProps = AntdCheckCardGroup.defaultProps;