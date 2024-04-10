import React, { useContext, useEffect } from 'react';
import { Mentions } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
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
    const formId = useContext(FormContext)

    const updateValues = useFormStore((state) => state.updateValues)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formId && (name || id)) {
            // 表单值更新
            updateValues(formId, name || id, value)
        }
    }, [value, name, id])

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

    const onChange = (e) => {
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