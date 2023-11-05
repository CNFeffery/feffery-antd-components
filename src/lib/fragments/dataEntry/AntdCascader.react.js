import React, { useEffect, useMemo, useContext } from 'react';
import { Cascader, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isUndefined, isString } from 'lodash';
import { flatToTree } from '../../components/utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCascader.react';

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
        popupClassName,
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
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                popupClassName={popupClassName}
                key={key}
                options={options}
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
                showCheckedStrategy={str2ShowCheckedStrategy.get(showCheckedStrategy)}
                displayRender={
                    multiple ?
                        undefined :
                        (
                            showCheckedStrategy === 'show-child' ?
                                (label) => label[label.length - 1] :
                                (label) => label[0]
                        )
                }
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
                open={isUndefined(readOnly) || !readOnly ? undefined : false}
            />
        </ConfigProvider>
    );
}

export default AntdCascader;

AntdCascader.defaultProps = defaultProps;
AntdCascader.propTypes = propTypes;