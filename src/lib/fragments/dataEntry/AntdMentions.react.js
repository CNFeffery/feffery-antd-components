// react核心
import React, { useContext, useEffect } from 'react';
// antd核心
import { Mentions } from 'antd';
// 辅助库
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
import { propTypes, defaultProps } from '../../components/dataEntry/AntdMentions.react';

const { Option } = Mentions;

/**
 * 提及组件AntdMentions
 */
const AntdMentions = (props) => {
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
        batchPropsNames,
        ...others
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

    const onChange = (e) => {
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, e)
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
        <Mentions
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
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
            data-dash-is-loading={useLoading()}
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