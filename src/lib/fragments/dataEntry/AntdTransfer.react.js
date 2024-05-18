// react核心
import React, { useContext, useEffect } from 'react';
// antd核心
import { Transfer, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale, locale2text } from '../../components/locales.react';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTransfer.react';

/**
 * 穿梭框组件AntdTransfer
 */
const AntdTransfer = (props) => {
    let {
        id,
        className,
        style,
        key,
        name,
        locale,
        setProps,
        dataSource,
        selectionsIcon,
        height,
        pagination,
        oneWay,
        operations,
        showSearch,
        optionFilterMode,
        showSelectAll,
        titles,
        disabled,
        targetKeys,
        status,
        readOnly,
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

    if (!titles) {
        titles = locale2text.AntdTransfer[locale].titles
    }

    // 监听选项移动事件
    const listenMove = (nextTargetKeys, moveDirection, moveKeys) => {
        if (!readOnly) {
            // AntdForm表单批量控制
            if (formId && (name || id)) {
                // 表单值更新
                updateItemValue(formId, name || id, nextTargetKeys)
            }
            setProps({
                targetKeys: nextTargetKeys,
                moveDirection: moveDirection,
                moveKeys: moveKeys
            })
        }
    }

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Transfer
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                style={style}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                key={key}
                dataSource={dataSource}
                selectionsIcon={selectionsIcon}
                targetKeys={
                    formId && (name || id) ?
                        currentFormValue :
                        targetKeys
                }
                onChange={listenMove}
                render={item => item.title}
                pagination={pagination}
                oneWay={oneWay}
                operations={operations}
                showSearch={showSearch}
                filterOption={
                    showSearch ?
                        (inputValue, option) => {
                            // 处理''特殊情况
                            inputValue = inputValue || ''
                            if (inputValue !== '') {
                                if (optionFilterMode === 'case-insensitive') {
                                    // 进行大小写不敏感筛选
                                    return (option.title || '').toLowerCase()
                                        .includes(inputValue.toLowerCase())
                                } else if (optionFilterMode === 'case-sensitive') {
                                    // 判断输入的内容是否是当前选项筛选依据字段值的子串
                                    return option.title.includes(inputValue)
                                } else if (optionFilterMode === 'regex') {
                                    // 判断输入的正则规则是否匹配当前选项筛选依据字段值
                                    try {
                                        // 尝试进行正则匹配
                                        return eval(`/${inputValue}/`).test(option.title)
                                    } catch {
                                        // 忽略非法的正则表达式
                                        return false
                                    }
                                }
                            }
                            return false
                        } : undefined
                }
                showSelectAll={showSelectAll}
                titles={titles}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                status={status}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                listStyle={{
                    overflowX: 'auto',
                    height: height,
                    width: '100%'
                }}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        </ConfigProvider>
    );
}

export default AntdTransfer;

AntdTransfer.defaultProps = defaultProps;
AntdTransfer.propTypes = propTypes;