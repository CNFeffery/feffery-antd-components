import React, { useState, useEffect, useContext } from 'react';
import { Input } from 'antd';
import md5 from 'md5';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import { getBatchPropsValues } from '../utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdInput.react';

const { Search, TextArea } = Input;

// 定义输入框组件AntdInput，api参数参考https://ant.design/components/input-cn/
const AntdInput = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        styles,
        classNames,
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
        autoFocus,
        bordered,
        variant,
        defaultValue,
        disabled,
        maxLength,
        showCount,
        countFormat,
        nClicksSearch,
        nSubmit,
        status,
        autoSize,
        debounceWait,
        readOnly,
        emptyAsNone,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        batchPropsValues,
        batchFormValuesMode
    } = props;

    // 解决受控value卡部分中文输入法问题
    const [rawValue, setRawValue] = useState(value);

    // 批属性监听
    useEffect(() => {
        if (!batchFormValuesMode && batchPropsNames && batchPropsNames.length !== 0) {
            setProps({
                batchPropsValues: getBatchPropsValues(batchPropsNames, props)
            })
        }
    })

    useEffect(() => {
        if (batchFormValuesMode) {
            setProps({ value: batchPropsValues?.value })
        }
    }, [batchPropsValues])

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

    const onBlur = () => {
        props?.onBlur?.()
    }

    const onFocus = () => {
        props?.onFocus?.()
    }

    // 监听输入内容变化事件
    const onChange = e => {
        let _batchPropsValues = batchFormValuesMode ? getBatchPropsValues(batchPropsNames, props) : e.target.value
        if (batchFormValuesMode) {
            if (batchPropsNames.includes('value')) {
                _batchPropsValues['value'] = e.target.value
            }
        }
        props?.onChange?.(_batchPropsValues)
        // 若启用md5加密且为密码模式
        if (passwordUseMd5 && mode === 'password') {
            setProps({
                md5Value: e.target.value ? md5(e.target.value) : null,
                value: (
                    emptyAsNone ?
                        (
                            e.target.value === '' ?
                                null :
                                e.target.value
                        ) :
                        e.target.value
                )
            })
        } else {
            setProps({
                value: (
                    emptyAsNone ?
                        (
                            e.target.value === '' ?
                                null :
                                e.target.value
                        ) :
                        e.target.value
                )
            })
        }
        setRawValue(e.target.value);
    }

    // 解决value经回调更新后，rawValue未更新的问题
    useEffect(() => {
        setRawValue(value);
    }, [value])

    const { run: onDebounceChange } = useRequest(
        (e) => {
            setProps({
                debounceValue: (
                    emptyAsNone ?
                        (
                            e === '' ?
                                null :
                                e
                        ) :
                        e
                )
            })
        },
        {
            debounceWait: debounceWait,
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
                styles={styles}
                classNames={classNames}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={rawValue || value}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                prefix={prefix}
                suffix={suffix}
                allowClear={allowClear}
                autoFocus={autoFocus}
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                defaultValue={defaultValue}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                maxLength={maxLength}
                status={status}
                readOnly={readOnly}
                onBlur={onBlur}
                onFocus={onFocus}
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
                styles={styles}
                classNames={classNames}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                allowClear={allowClear}
                autoFocus={autoFocus}
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                value={rawValue || value}
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
                onBlur={onBlur}
                onFocus={onFocus}
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
                styles={styles}
                classNames={classNames}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                allowClear={allowClear}
                autoFocus={autoFocus}
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                value={rawValue || value}
                defaultValue={defaultValue}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                maxLength={maxLength}
                showCount={
                    showCount && countFormat && !maxLength ?
                        {
                            // 基于countFormat所定义的正则规则来自定义计算字符数
                            formatter: ({ value }) => {
                                return value.match(eval(`/${countFormat}/g`))?.length || 0;
                            }
                        } :
                        showCount
                }
                status={status}
                autoSize={autoSize}
                readOnly={readOnly}
                onBlur={onBlur}
                onFocus={onFocus}
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
                styles={styles}
                classNames={classNames}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                value={rawValue || value}
                defaultValue={defaultValue}
                maxLength={maxLength}
                status={status}
                prefix={prefix}
                suffix={suffix}
                readOnly={readOnly}
                onBlur={onBlur}
                onFocus={onFocus}
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

export default AntdInput;

AntdInput.defaultProps = defaultProps;
AntdInput.propTypes = propTypes;