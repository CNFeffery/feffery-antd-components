import React, { useEffect, useContext } from 'react';
import { Radio, Space } from 'antd';
import { isString, isNumber, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdRadioGroup.react';


// 定义单选框组件AntdRadioGroup，api参数参考https://ant.design/components/radio-cn/
const AntdRadioGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        options,
        defaultValue,
        value,
        direction,
        optionType,
        buttonStyle,
        disabled,
        size,
        readOnly,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)
    const updateValues = useFormStore((state) => state.updateValues)
    const updateAntdRadioGroup = useFormItemStore((state) => state.updateAntdRadioGroup)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({[name || id]: value || null})
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdRadioGroup({[name || id]: {value: value || null}})
        }
    }, [])

    useEffect(() => {
        if (defaultValue && !value) {
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = (e) => {
        if (!readOnly) {
            if (name || id) {
                updateAntdRadioGroup({[name || id]: {value: e.target.value || null, timestamp: Date.now()}})
            }
            setProps({ value: e.target.value })
        }
    }

    if (direction === 'vertical') {
        let _options = (
            options.every(item => isNumber(item) || isString(item)) ?
                // 快捷方式
                options.map(item => ({ label: item, value: item })) :
                [...options]
        )
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
                    {_options.map(item => {
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
            options={
                options.every(item => isNumber(item) || isString(item)) ?
                    // 快捷方式
                    options.map(item => ({ label: item, value: item })) :
                    options
            }
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

export default AntdRadioGroup;

AntdRadioGroup.defaultProps = defaultProps;
AntdRadioGroup.propTypes = propTypes;