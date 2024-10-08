import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdRadioGroup = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdRadioGroup.react'));

/**
 * 单选框组件AntdRadioGroup
 */
const AntdRadioGroup = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdRadioGroup {...props} />
        </Suspense>
    );
}

AntdRadioGroup.propTypes = {
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
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    // 设置单选框组方向，可选的有'horizontal'、'vertical'
    // 默认为'horizontal'
    /**
     * 单选框排列方向，可选项有`'horizontal'`、`'vertical'`
     * 默认值：`'horizontal'`
     */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * 配置选项
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.exact({
                /**
                 * 组件型，当前选项标签内容
                 */
                label: PropTypes.node,
                /**
                 * 当前选项值
                 */
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]),
                /**
                 * 是否禁用当前选项
                 * 默认值：`false`
                 */
                disabled: PropTypes.bool
            })
        ])
    ),

    /**
     * 是否撑满父容器
     * 默认值：`false`
     */
    block: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 当`optionType='button'`时，控制各选项按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 监听或设置已选值，与`format`格式对应
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 初始化已选值，与`format`格式对应
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 选项形式，可选项有`'default'`、`'button'`
     * 默认值：`'default'`
     */
    optionType: PropTypes.oneOf(['default', 'button']),

    /**
     * 当`optionType='button'`时，设置按钮风格，可选项有`'outline'`、`'solid'`
     * 默认值：`'outline'`
     */
    buttonStyle: PropTypes.oneOf(['outline', 'solid']),

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 需要纳入[批量属性监听](/batch-props-values)的若干属性名
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听`batchPropsNames`中指定的若干属性值
     */
    batchPropsValues: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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

// 设置默认参数
AntdRadioGroup.defaultProps = {
    direction: 'horizontal',
    optionType: 'default',
    buttonStyle: 'outline',
    block: false,
    disabled: false,
    size: 'middle',
    readOnly: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdRadioGroup;

export const propTypes = AntdRadioGroup.propTypes;
export const defaultProps = AntdRadioGroup.defaultProps;