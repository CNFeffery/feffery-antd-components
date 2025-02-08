// react核心
import React, { useState, useEffect, useContext } from 'react';
// antd核心
import { Input } from 'antd';
// 辅助库
import md5 from 'md5';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdInput.react';

const { Search, TextArea } = Input;

/**
 * 输入框组件AntdInput
 */
const AntdInput = (props) => {
    let {
        id,
        className,
        style,
        styles,
        classNames,
        key,
        name,
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
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        ...others
    } = props;

    // 解决受控value卡部分中文输入法问题
    const [rawValue, setRawValue] = useState(value);

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
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

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
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, e.target.value)
        }
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
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            setRawValue(currentFormValue);
        } else {
            setRawValue(value);
        }
    }, [value, currentFormValue])

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
            <Input
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
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
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) ?
                        currentFormValue :
                        rawValue || value
                }
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
                onFocus={() => setProps({ focusing: true })}
                onBlur={() => setProps({ focusing: false })}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={useLoading()} />
        );
    } else if (mode === 'search') {
        return (
            <Search
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
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
                addonBefore={addonBefore}
                prefix={prefix}
                suffix={suffix}
                allowClear={allowClear}
                autoFocus={autoFocus}
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) ?
                        currentFormValue :
                        rawValue || value
                }
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
                onFocus={() => setProps({ focusing: true })}
                onBlur={() => setProps({ focusing: false })}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={useLoading()} />
        );
    } else if (mode === 'text-area') {
        return (
            <TextArea
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
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
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) ?
                        currentFormValue :
                        rawValue || value
                }
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
                onFocus={() => setProps({ focusing: true })}
                onBlur={() => setProps({ focusing: false })}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={useLoading()} />
        );
    } else if (mode === 'password') {
        return (
            <Input.Password
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
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
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) ?
                        currentFormValue :
                        rawValue || value
                }
                maxLength={maxLength}
                status={status}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                prefix={prefix}
                readOnly={readOnly}
                onChange={(e) => {
                    onChange(e)
                    onDebounceChange(e.target.value)
                }}
                onPressEnter={onPressEnter}
                onFocus={() => setProps({ focusing: true })}
                onBlur={() => setProps({ focusing: false })}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={useLoading()} />
        );
    }
}

export default AntdInput;

AntdInput.defaultProps = defaultProps;
AntdInput.propTypes = propTypes;