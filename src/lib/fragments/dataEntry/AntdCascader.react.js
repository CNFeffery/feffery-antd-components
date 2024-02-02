import React, { useEffect, useMemo, useContext } from 'react';
import { Cascader, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isUndefined, isString, cloneDeep } from 'lodash';
import { flatToTree } from '../../components/utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
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

// 定义级联选择组件AntdCascader，api参数参考https://ant.design/components/cascader-cn/
const AntdCascader = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        popupClassName,
        key,
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
    locale = (context && context.locale) || locale

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
        setProps({ value: e })
    }

    // 返回定制化的前端组件
    if (panelMode) {
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Cascader.Panel
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
                    showSearch={{ filter }}
                    onChange={onSelect}
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
                showSearch={{ filter }}
                onChange={onSelect}
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