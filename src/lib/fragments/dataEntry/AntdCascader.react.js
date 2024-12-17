// react核心
import React, { useEffect, useMemo, useContext } from 'react';
// antd核心
import { Cascader, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../../components/locales.react';
import { isUndefined, isString, cloneDeep } from 'lodash';
import { pickBy } from 'ramda';
import { flatToTree } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCascader.react';

const { SHOW_CHILD, SHOW_PARENT } = Cascader;

const str2ShowCheckedStrategy = new Map([
    ['show-child', SHOW_CHILD],
    ['show-parent', SHOW_PARENT]
])

// 递归替换originOptions中节点的label为optionsNodeKeyToLabel中对应的值
const replaceNodeLabel = (originOptions, optionsNodeKeyToLabel) => {
    // 若当前originOptions为数组
    if (Array.isArray(originOptions)) {
        // 遍历originOptions
        for (let i = 0; i < originOptions.length; i++) {
            // 递归替换originOptions中节点的label为optionsNodeKeyToLabel中对应的值
            originOptions[i] = replaceNodeLabel(originOptions[i], optionsNodeKeyToLabel);
        }
    } else {
        // 否则针对当前节点对象，当optionsNodeKeyToLabel中存在对应key时，替换label
        if (optionsNodeKeyToLabel[originOptions.key]) {
            originOptions.label = optionsNodeKeyToLabel[originOptions.key];
        }
        // 若当前节点对象存在children属性
        if (originOptions.children) {
            // 递归替换originOptions中节点的label为optionsNodeKeyToLabel中对应的值
            originOptions.children = replaceNodeLabel(originOptions.children, optionsNodeKeyToLabel);
        }
    }
    // 返回处理后的originOptions
    return originOptions;
}

/**
 * 级联选择组件AntdCascader
 */
const AntdCascader = (props) => {
    let {
        id,
        style,
        className,
        popupClassName,
        key,
        name,
        locale,
        options,
        optionFilterProp,
        panelMode,
        optionsNodeKeyToLabel,
        optionsMode,
        changeOnSelect,
        size,
        bordered,
        variant,
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
        autoFocus,
        showCheckedStrategy,
        popupContainer,
        prefix,
        suffixIcon,
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
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    locale = (context && context.locale) || locale

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
        if (defaultValue && !value) {
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

    // 搜索函数
    const filter = (inputValue, path) => {
        // 若以value字段为搜索目标
        if (optionFilterProp === 'value') {
            return path.some(option => option.value?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
        }
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }

    const onSelect = (e) => {
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, e)
        }
        setProps({ value: e })
    }

    if (panelMode) {
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Cascader.Panel
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    popupClassName={popupClassName}
                    key={key}
                    options={
                        optionsNodeKeyToLabel ?
                            replaceNodeLabel(cloneDeep(options), optionsNodeKeyToLabel) :
                            options
                    }
                    changeOnSelect={changeOnSelect}
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
                    placeholder={placeholder}
                    defaultValue={
                        formId && (name || id) ?
                            undefined :
                            defaultValue
                    }
                    value={
                        formId && (name || id) ?
                            currentFormValue :
                            value
                    }
                    placement={placement}
                    maxTagCount={maxTagCount}
                    multiple={multiple}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    expandTrigger={expandTrigger}
                    status={status}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    autoFocus={autoFocus}
                    showCheckedStrategy={str2ShowCheckedStrategy.get(showCheckedStrategy) || undefined}
                    displayRender={
                        (multiple || !showCheckedStrategy) ?
                            undefined :
                            (
                                showCheckedStrategy === 'show-child' ?
                                    (label) => label[label.length - 1] :
                                    (label) => label[0]
                            )
                    }
                    showSearch={readOnly ? undefined : { filter }}
                    onChange={readOnly ? undefined : onSelect}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    getPopupContainer={
                        popupContainer === 'parent' ?
                            (triggerNode) => triggerNode.parentNode :
                            undefined
                    }
                    open={isUndefined(readOnly) || !readOnly ? undefined : false}
                />
            </ConfigProvider>
        );
    }
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Cascader
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                popupClassName={popupClassName}
                key={key}
                options={
                    optionsNodeKeyToLabel ?
                        replaceNodeLabel(cloneDeep(options), optionsNodeKeyToLabel) :
                        options
                }
                changeOnSelect={changeOnSelect}
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
                placeholder={placeholder}
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) ?
                        currentFormValue :
                        value
                }
                placement={placement}
                maxTagCount={maxTagCount}
                multiple={multiple}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                expandTrigger={expandTrigger}
                status={status}
                allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                autoFocus={autoFocus}
                showCheckedStrategy={str2ShowCheckedStrategy.get(showCheckedStrategy) || undefined}
                displayRender={
                    (multiple || !showCheckedStrategy) ?
                        undefined :
                        (
                            showCheckedStrategy === 'show-child' ?
                                (label) => label[label.length - 1] :
                                (label) => label[0]
                        )
                }
                prefix={prefix}
                suffixIcon={suffixIcon}
                showSearch={readOnly ? undefined : { filter }}
                onChange={readOnly ? undefined : onSelect}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                open={isUndefined(readOnly) || !readOnly ? undefined : false}
            />
        </ConfigProvider>
    );
}

export default AntdCascader;

AntdCascader.defaultProps = defaultProps;
AntdCascader.propTypes = propTypes;