import React, { useContext, useEffect, useMemo } from 'react';
import { Mentions } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdMentions.react';

const { Option } = Mentions;

// 定义提及组件AntdMentions，api参数参考https://ant.design/components/mentions-cn/
const AntdMentions = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        popupClassName,
        key,
        name,
        autoSize,
        prefix,
        value,
        defaultValue,
        placement,
        bordered,
        variant,
        placeholder,
        options,
        disabled,
        status,
        autoFocus,
        popupContainer,
        setProps,
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
    const validateTrigger = useFormItemStore((state) => state.validateTrigger)
    const updateAntdMentions = useFormItemStore((state) => state.updateAntdMentions)

    const currentValidateTrigger = useMemo(() => {
        return validateTrigger.filter((item) => item[name || id]).flatMap((item) => item[name || id])
    }, [validateTrigger])

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({[name || id]: value || null})
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdMentions({[name || id]: {value: value || null}})
        }
    }, [])

    // 监听blur事件
    const onBlur = e => {
        if (currentValidateTrigger.includes('onBlur') && (name || id)) {
            updateAntdMentions({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听focus事件
    const onFocus = e => {
        if (currentValidateTrigger.includes('onFocus') && (name || id)) {
            updateAntdMentions({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    const onChange = (e) => {
        if (currentValidateTrigger.includes('onChange') && (name || id)) {
            updateAntdMentions({[name || id]: {value: e || null, timestamp: Date.now()}})
        }
        setProps({ value: e })
    }

    const onSelect = (e) => {
        // 获取最新一次被选中的子项value值
        let latestSelectedOption = e.value

        // 计算当前options中value值数组
        let optionValues = options.map(item => item.value)

        // 抽取已输入内容中的已选择子项内容
        let presentSelectedOptions = (
            (
                (value || '')
                    .match(eval(`/${prefix || '@'}\\S{1,}\\s/g`))
                || []
            )
                .map(
                    s => s.slice(1, s.length).trim()
                )
                .concat([latestSelectedOption])
                // 处理latestSelectedOption与options中value值的存在性问题
                .filter(s => optionValues.indexOf(s) !== -1)
        )

        // 更新输入框中已标记子项value值列表
        setProps({
            selectedOptions: presentSelectedOptions
        })
    }

    return (
        <Mentions id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            popupClassName={popupClassName}
            key={key}
            autoSize={autoSize}
            prefix={prefix}
            defaultValue={defaultValue}
            placement={placement}
            variant={(
                !variant ?
                    (bordered ? 'outlined' : 'borderless') :
                    variant
            )}
            placeholder={placeholder}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            status={status}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            onSelect={onSelect}
            getPopupContainer={
                popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined
            }
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {
                options.map(
                    (item, idx) => <Option value={item.value} key={idx}>{item.label}</Option>
                )
            }
        </Mentions>
    );
}

export default AntdMentions;

AntdMentions.defaultProps = defaultProps;
AntdMentions.propTypes = propTypes;