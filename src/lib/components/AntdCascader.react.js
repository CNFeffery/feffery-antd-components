import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Cascader, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import { flatToTree } from './utils';


const { SHOW_CHILD, SHOW_PARENT } = Cascader;

const str2ShowCheckedStrategy = new Map([
    ['show-child', SHOW_CHILD],
    ['show-parent', SHOW_PARENT]
])

// 定义级联选择组件AntdCascader，api参数参考https://ant.design/components/cascader-cn/
const AntdCascader = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        locale,
        options,
        optionsMode,
        changeOnSelect,
        size,
        bordered,
        disabled,
        placeholder,
        defaultValue,
        value,
        placement,
        maxTagCount,
        multiple,
        expandTrigger,
        status,
        allowClear,
        showCheckedStrategy,
        popupContainer,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        if (!value) {
            setProps({ value: defaultValue })
        }
    }, [])

    const flatToTreeOptions = useMemo(() => {
        return flatToTree(options);
    }, [options])

    // 根据optionsMode对options进行预处理
    if (optionsMode === 'flat') {
        options = flatToTreeOptions
    }

    const filter = (inputValue, path) => {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }

    const onSelect = (e) => {
        setProps({ value: e })
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Cascader
                id={id}
                className={className}
                style={{ ...{ width: '100%' }, ...style }}
                key={key}
                options={options}
                changeOnSelect={changeOnSelect}
                size={size}
                bordered={bordered}
                disabled={disabled}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                placement={placement}
                maxTagCount={maxTagCount}
                multiple={multiple}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                expandTrigger={expandTrigger}
                status={status}
                allowClear={allowClear}
                showCheckedStrategy={str2ShowCheckedStrategy.get(showCheckedStrategy)}
                showSearch={filter}
                onChange={onSelect}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
            />
        </ConfigProvider>
    );
}

// 定义递归PropTypes
const PropOptionNodeShape = {
    // 选项对应的值
    value: PropTypes.string.isRequired,

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
    value: PropTypes.string.isRequired,

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
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 组织选项层级结构对应的json数据
    options: PropTypes.oneOfType([
        optionDataPropTypes,
        PropTypes.arrayOf(PropFlatOptionNodeShape)
    ]).isRequired,

    // 设置options模式，可选的有'tree'、'flat'，默认为'tree'
    optionsMode: PropTypes.oneOf(['tree', 'flat']),

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 设置是否任意节点被选择都会被触发选值改变回调
    // 而不一定非要选中末端叶节点
    changeOnSelect: PropTypes.bool,

    // 设置组件尺寸大小，可选的有'small'、'middle'及'large'，默认为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 设置是否渲染边框
    bordered: PropTypes.bool,

    // 设置选择框默认填充说明文字
    placeholder: PropTypes.string,

    // 设置展开浮层的位置，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    placement: PropTypes.oneOf([
        'bottomLeft',
        'bottomRight',
        'topLeft',
        'topRight'
    ]),

    // 设置默认的选中项
    defaultValue: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.string)
        )
    ]),

    // 设置多选模式下，最多允许展示的已选项
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    // 设置是否允许多选
    multiple: PropTypes.bool,

    // 对应回调中用户已选择的值
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.string)
        )
    ]),

    // 设置子菜单展开交互方式，可选的有'click'和'hover'，默认为'click'
    expandTrigger: PropTypes.oneOf(['click', 'hover']),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否添加内容清除按钮，默认true
    allowClear: PropTypes.bool,

    // 设置已选项回填策略，可选的有'show-parent'、'show-child'
    // 默认为'show-parent'
    showCheckedStrategy: PropTypes.oneOf(['show-parent', 'show-child']),

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

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
    changeOnSelect: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    optionsMode: 'tree',
    showCheckedStrategy: 'show-parent',
    popupContainer: 'body'
}

export default AntdCascader;