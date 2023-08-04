import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Radio, Space } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';


// 定义单选框组件AntdRadioGroup，api参数参考https://ant.design/components/radio-cn/
const AntdRadioGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        options,
        defaultValue,
        value,
        direction,
        optionType,
        buttonStyle,
        disabled,
        size,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    const context = useContext(PropsContext)

    useEffect(() => {
        if (defaultValue && !value) {
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = (e) => {
        setProps({ value: e.target.value })
    }

    if (direction === 'vertical') {

        // 返回定制化的前端组件
        return (
            <Radio.Group
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                defaultValue={defaultValue}
                value={value}
                buttonStyle={buttonStyle}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                onChange={onSelect}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <Space direction='vertical'>
                    {options.map(item => {
                        return optionType !== 'button' ?
                            <Radio value={item.value} disabled={item.disabled}>{item.label}</Radio> :
                            <Radio.Button value={item.value} disabled={item.disabled}>{item.label}</Radio.Button>
                    })}
                </Space>
            </Radio.Group>
        );
    }

    // 返回定制化的前端组件
    return (
        <Radio.Group
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            options={options}
            defaultValue={defaultValue}
            value={value}
            optionType={optionType}
            buttonStyle={buttonStyle}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            onChange={onSelect}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
AntdRadioGroup.propTypes = {
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

    // 设置单选框组方向，可选的有'horizontal'、'vertical'
    // 默认为'horizontal'
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    // 设置选项参数数组
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置选项的标题内容
            label: PropTypes.node,

            // 设置选项的对应值
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),

            // 设置是否禁用当前选项，默认为false
            disabled: PropTypes.bool
        })
    ),

    // 设置是否禁用整体组件
    disabled: PropTypes.bool,

    // 当optionType为'button'时，用于设置按钮的大小规格
    // 可选的有'large'、'middle'和'small'，默认为'middle'
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    // 对应当前已选中的值
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置初始化状态下被选中的值
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置选项的渲染方式，可选的有'default'和'button'，默认为'default'
    optionType: PropTypes.oneOf(['default', 'button']),

    // 当optionType为'button'时，用于设置按钮的显示样式，
    // 可选的有'outline'和'solid'，默认为'outline'
    buttonStyle: PropTypes.oneOf(['outline', 'solid']),

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
AntdRadioGroup.defaultProps = {
    direction: 'horizontal',
    optionType: 'default',
    buttonStyle: 'outline',
    disabled: false,
    size: 'middle',
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdRadioGroup;