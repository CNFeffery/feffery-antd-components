import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCascader = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdCascader.react'));

const AntdCascader = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCascader {...props} />
        </Suspense>
    );
}

// 定义递归PropTypes
const PropOptionNodeShape = {
    // 选项对应的值
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,

    // 对应当前节点唯一key值
    key: PropTypes.string,

    // 选项对应显示的文字标题
    label: PropTypes.string.isRequired,

    // 设置是否禁止选中
    disabled: PropTypes.bool
};

const PropOptionNode = PropTypes.shape(PropOptionNodeShape);
PropOptionNodeShape.children = PropTypes.arrayOf(PropOptionNode);
const optionDataPropTypes = PropTypes.arrayOf(PropOptionNode);

// 定义扁平节点PropTypes
const PropFlatOptionNodeShape = {
    // 选项对应的值
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,

    // 选项对应显示的文字标题
    label: PropTypes.string.isRequired,

    // 设置是否禁止选中
    disabled: PropTypes.bool,

    // 对应当前节点唯一key值
    key: PropTypes.string,

    // 可选，设置对应节点的父节点key值
    parent: PropTypes.string
};

// 定义参数或属性
AntdCascader.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 设置弹框菜单css类名
     */
    popupClassName: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置options模式，可选的有'tree'、'flat'，默认为'tree'
    optionsMode: PropTypes.oneOf(['tree', 'flat']),

    // 组织选项层级结构对应的json数据
    options: PropTypes.oneOfType([
        optionDataPropTypes,
        PropTypes.arrayOf(PropFlatOptionNodeShape)
    ]).isRequired,

    // 用于针对具体key值对应的级联节点定义组件型标签内容
    // 优先级高于options中对应节点的label属性
    optionsNodeKeyToLabel: PropTypes.objectOf(PropTypes.node),

    // 设置输入框下输入内容进行搜索的字段，可选的有'value'、'label'
    // 默认为'label'
    optionFilterProp: PropTypes.oneOf(['value', 'label']),

    // 是否开启内嵌面板模式
    // 默认：false
    panelMode: PropTypes.bool,

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 设置是否任意节点被选择都会被触发选值改变回调
    // 而不一定非要选中末端叶节点，默认为false
    changeOnSelect: PropTypes.bool,

    // 设置组件尺寸大小，可选的有'small'、'middle'及'large'，默认为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 设置是否渲染边框，设置为true时等价于variant='outlined'
     * 默认：true
     */
    bordered: PropTypes.bool,

    /**
     * 设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
     * 其中'outlined'等价于bordered=true，优先级高于bordered
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    // 设置选择框默认填充说明文字
    placeholder: PropTypes.string,

    // 设置展开浮层的位置，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf([
        'bottomLeft',
        'bottomRight',
        'topLeft',
        'topRight'
    ]),

    // 对应回调中用户已选择的值
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ])
            )
        )
    ]),

    // 设置默认的选中项
    defaultValue: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ])
            )
        )
    ]),

    // 设置多选模式下，最多允许展示的已选项
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    // 设置是否允许多选
    multiple: PropTypes.bool,

    // 设置子菜单展开交互方式，可选的有'click'和'hover'，默认为'click'
    expandTrigger: PropTypes.oneOf(['click', 'hover']),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否添加内容清除按钮，默认true
    allowClear: PropTypes.bool,

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 设置已选项回填策略，可选的有'show-parent'、'show-child'
    showCheckedStrategy: PropTypes.oneOf(['show-parent', 'show-child']),

    // 设置是否以只读模式进行渲染，底层利用Select的open参数
    // 默认为false
    readOnly: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
    batchPropsValues: PropTypes.object,

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
  * Used to allow user interactions in this component to be persisted when
  * the component - or the page - is refreshed. If `persisted` is truthy and
  * hasn't changed from its previous value, a `value` that the user has
  * changed while using the app will keep that change, as long as
  * the new `value` also matches what was given originally.
  * Used in conjunction with `persistence_type`.
  */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdCascader.defaultProps = {
    optionFilterProp: 'label',
    panelMode: false,
    changeOnSelect: false,
    placement: 'bottomLeft',
    multiple: false,
    expandTrigger: 'click',
    allowClear: true,
    autoFocus: false,
    locale: 'zh-cn',
    optionsMode: 'tree',
    popupContainer: 'body',
    bordered: true,
    disabled: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdCascader;

export const propTypes = AntdCascader.propTypes;
export const defaultProps = AntdCascader.defaultProps;