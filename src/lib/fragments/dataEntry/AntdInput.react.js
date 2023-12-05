import React, { useState, useEffect, useContext } from 'react';
import { Input } from 'antd';
import md5 from 'md5';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
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
        bordered,
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
    }

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
                styles={styles}
                classNames={classNames}
                key={key}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
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
                bordered={bordered}
                value={value}
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

export default AntdInput;

AntdInput.defaultProps = defaultProps;
AntdInput.propTypes = propTypes;