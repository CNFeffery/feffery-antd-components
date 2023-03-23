import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import md5 from 'md5';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import useCss from '../hooks/useCss';
import PropsContext from '../contexts/PropsContext';


const { Search, TextArea } = Input;

// 定义输入框组件AntdInput，api参数参考https://ant.design/components/input-cn/
const AntdInput = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        mode,
        passwordUseMd5,
        autoComplete,
        placeholder,
        value,
        size,
        addonBefore,
        addonAfter,
        prefix,
        suffix,
        allowClear,
        bordered,
        defaultValue,
        disabled,
        maxLength,
        showCount,
        nClicksSearch,
        nSubmit,
        status,
        autoSize,
        debounceWait,
        readOnly,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const context = useContext(PropsContext)

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({
                value: defaultValue,
                md5Value: md5(defaultValue)
            })
        }
        // 在value存在时，初始化md5Value
        if (value) {
            setProps({
                md5Value: md5(value)
            })
        }
    }, [])

    // 监听输入内容变化事件
    const onChange = e => {
        // 若启用md5加密且为密码模式
        if (passwordUseMd5 && mode === 'password') {
            setProps({
                md5Value: md5(e.target.value),
                value: e.target.value
            })
        } else {
            setProps({ value: e.target.value })
        }
    }

    const { run: onDebounceChange } = useRequest(
        (e) => {
            setProps({ debounceValue: e })
        },
        {
            debounceWait: Math.max(debounceWait, 200),
            manual: true
        }
    )

    // 监听聚焦到输入框时enter键点按次数
    const onPressEnter = e => {
        setProps({ nSubmit: nSubmit + 1 })
    }

    // 监听搜索按钮点按事件
    const onSearch = e => {
        setProps({ nClicksSearch: nClicksSearch + 1 })
    }

    // 不同的mode模式下渲染不同的组件
    if (mode === 'default') {
        return (
            <Input id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                size={size}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                prefix={prefix}
                suffix={suffix}
                allowClear={allowClear}
                bordered={bordered}
                defaultValue={defaultValue}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                maxLength={maxLength}
                status={status}
                readOnly={readOnly}
                onChange={(e) => {
                    onChange(e)
                    onDebounceChange(e.target.value)
                }}
                onPressEnter={onPressEnter}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    } else if (mode === 'search') {
        return (
            <Search id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={size}
                allowClear={allowClear}
                bordered={bordered}
                value={value}
                defaultValue={defaultValue}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                maxLength={maxLength}
                status={status}
                readOnly={readOnly}
                onSearch={onSearch}
                onChange={(e) => {
                    onChange(e)
                    onDebounceChange(e.target.value)
                }}
                onPressEnter={onPressEnter}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    } else if (mode === 'text-area') {
        return (
            <TextArea id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={size}
                allowClear={allowClear}
                bordered={bordered}
                value={value}
                defaultValue={defaultValue}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                maxLength={maxLength}
                showCount={showCount}
                status={status}
                autoSize={autoSize}
                readOnly={readOnly}
                onChange={(e) => {
                    onChange(e)
                    onDebounceChange(e.target.value)
                }}
                onPressEnter={onPressEnter}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    } else if (mode === 'password') {
        return (
            <Input.Password id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={size}
                bordered={bordered}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                value={value}
                defaultValue={defaultValue}
                maxLength={maxLength}
                status={status}
                prefix={prefix}
                suffix={suffix}
                readOnly={readOnly}
                onChange={(e) => {
                    onChange(e)
                    onDebounceChange(e.target.value)
                }}
                onPressEnter={onPressEnter}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    }
}

// 定义参数或属性
AntdInput.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 用于设置输入框功能模式类型，可选的有'default'、'search'、'text-area'、'password'，默认为'default'
    mode: PropTypes.oneOf(['default', 'search', 'text-area', 'password']),

    // 设置是否允许自动补全，默认为'on'
    autoComplete: PropTypes.oneOf(['off', 'on']),

    // 设置是否为禁用状态，默认为false
    disabled: PropTypes.bool,

    // 用于设置输入框尺寸，可选的有'small'、'middle'与'large'，默认不填则为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 设置是否有边框，默认true
    bordered: PropTypes.bool,

    // 用于设置占位提示内容
    placeholder: PropTypes.string,

    // 记录输入框中的已输入文字内容
    value: PropTypes.string,

    // 设置输入框默认填充内容
    defaultValue: PropTypes.string,

    // 当passwordUseMd5=true时，用于记录加密的value值
    md5Value: PropTypes.string,

    // 记录防抖状态下的已输入文字内容
    debounceValue: PropTypes.string,

    // password模式设置是否使用md5加密，默认为false
    passwordUseMd5: PropTypes.bool,

    // 用于配置debounceValue变化更新的防抖等待时长（单位：毫秒），默认为0
    debounceWait: PropTypes.number,

    // 设置前置标签内容
    addonBefore: PropTypes.node,

    // 设置后置标签内容
    addonAfter: PropTypes.node,

    // 设置框内嵌前缀内容
    prefix: PropTypes.node,

    // 设置框内嵌后缀内容
    suffix: PropTypes.node,

    // 用于约束输入框内容的最大字符约束长度，默认无约束
    maxLength: PropTypes.number,

    // 设置是否展示字数，默认为false
    showCount: PropTypes.bool,

    // 针对文本域配置自适应高度相关功能，默认为false
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            minRows: PropTypes.number,
            maxRows: PropTypes.number
        })
    ]),

    // 记录聚焦于输入框内部时，enter键被点按的次数
    nSubmit: PropTypes.number,

    // 记录search模式下搜索按钮被点按的次数
    nClicksSearch: PropTypes.number,

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否添加内容清除按钮，默认false
    allowClear: PropTypes.bool,

    // 设置是否以只读模式进行渲染，默认为false
    readOnly: PropTypes.bool,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value', 'md5Value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdInput.defaultProps = {
    mode: 'default',
    autoComplete: 'on',
    disabled: false,
    size: 'middle',
    bordered: true,
    showCount: false,
    passwordUseMd5: false,
    autoSize: false,
    nClicksSearch: 0,
    nSubmit: 0,
    allowClear: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    debounceWait: 200
}

export default AntdInput;