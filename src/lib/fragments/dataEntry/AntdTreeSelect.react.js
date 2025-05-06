// react核心
import React, { useEffect, useMemo, useContext, useRef } from 'react';
// antd核心
import { TreeSelect, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../../components/locales.react';
import { isUndefined, isString, cloneDeep } from 'lodash';
import { pickBy } from 'ramda';
import { flatToTree, useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTreeSelect.react';

const { SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = TreeSelect;

// 定义勾选项回填策略映射字典
const str2ShowCheckedStrategy = new Map(
    [
        ['show-all', SHOW_ALL],
        ['show-child', SHOW_CHILD],
        ['show-parent', SHOW_PARENT]
    ]
)

// 递归替换originTreeData中节点的title为treeNodeKeyToTitle中对应的值
const replaceNodeTitle = (originTreeData, treeNodeKeyToTitle) => {
    // 若当前originTreeData为数组
    if (Array.isArray(originTreeData)) {
        // 遍历originTreeData
        for (let i = 0; i < originTreeData.length; i++) {
            // 递归替换originTreeData中节点的title为treeNodeKeyToTitle中对应的值
            originTreeData[i] = replaceNodeTitle(originTreeData[i], treeNodeKeyToTitle);
        }
    } else {
        // 否则针对当前节点对象，当treeNodeKeyToTitle中存在对应key时，替换title
        if (treeNodeKeyToTitle[originTreeData.key]) {
            originTreeData.title = treeNodeKeyToTitle[originTreeData.key];
        }
        // 若当前节点对象存在children属性
        if (originTreeData.children) {
            // 递归替换originTreeData中节点的title为treeNodeKeyToTitle中对应的值
            originTreeData.children = replaceNodeTitle(originTreeData.children, treeNodeKeyToTitle);
        }
    }
    // 返回处理后的originTreeData
    return originTreeData;
}

/**
 * 树选择组件AntdTreeSelect
 */
const AntdTreeSelect = (props) => {
    let {
        id,
        style,
        className,
        popupClassName,
        key,
        name,
        enableBatchControl,
        locale,
        treeData,
        treeNodeKeyToTitle,
        treeDataMode,
        allowClear,
        bordered,
        variant,
        treeLine,
        listHeight,
        placeholder,
        value,
        defaultValue,
        maxCount,
        maxTagCount,
        maxTagPlaceholder,
        maxTagTextLength,
        multiple,
        size,
        prefix,
        suffixIcon,
        switcherIcon,
        treeCheckable,
        treeCheckStrictly,
        treeDefaultExpandAll,
        treeDefaultExpandedKeys,
        treeExpandedKeys,
        virtual,
        disabled,
        placement,
        status,
        treeNodeFilterProp,
        treeNodeFilterMode,
        autoClearSearchValue,
        popupContainer,
        setProps,
        readOnly,
        showCheckedStrategy,
        dropdownBefore,
        dropdownAfter,
        enableAsyncLoad,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        ...others
    } = props;

    // 异步数据加载标识
    const dataLoading = useRef(false);

    // 每次treeData更新后，尝试还原dataLoading状态
    useEffect(() => {
        if (dataLoading.current) {
            dataLoading.current = false;
        }
    }, [treeData])

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
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

    useEffect(() => {
        if (!value && defaultValue) {
            setProps({ value: defaultValue })
        }
        if (!treeExpandedKeys && treeDefaultExpandedKeys) {
            setProps({ treeExpandedKeys: treeDefaultExpandedKeys })
        }
    }, [])

    const flatToTreeData = useMemo(() => {
        return flatToTree(treeData);
    }, [treeData])

    // 用于获取用户已选择值的回调函数
    const updateSelectedValue = (e) => {
        if (treeCheckStrictly) {
            // AntdForm表单批量控制
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                updateItemValue(formId, name || id, e.map(item => item.value))
            }
            setProps({ value: e.map(item => item.value) })
        } else {
            // AntdForm表单批量控制
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                updateItemValue(formId, name || id, e)
            }
            setProps({ value: e })
        }
    }

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <TreeSelect
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={{
                    width: '100%',
                    ...style
                }}
                popupClassName={popupClassName}
                key={key}
                treeData={
                    treeNodeKeyToTitle ?
                        (
                            replaceNodeTitle(
                                cloneDeep(treeDataMode === 'flat' ? flatToTreeData : treeData),
                                treeNodeKeyToTitle
                            )
                        ) :
                        (
                            treeDataMode === 'flat' ? flatToTreeData : treeData
                        )
                }
                allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                variant={(
                    !variant ?
                        (bordered ? 'outlined' : 'borderless') :
                        variant
                )}
                treeLine={treeLine}
                listHeight={listHeight}
                placeholder={placeholder}
                defaultValue={
                    formId && (name || id) && enableBatchControl ?
                        undefined :
                        defaultValue
                }
                value={
                    formId && (name || id) && enableBatchControl ?
                        currentFormValue :
                        value
                }
                maxCount={maxCount}
                maxTagCount={maxTagCount}
                maxTagPlaceholder={maxTagPlaceholder}
                maxTagTextLength={maxTagTextLength}
                multiple={multiple}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                prefix={prefix}
                suffixIcon={suffixIcon}
                switcherIcon={switcherIcon}
                treeCheckable={treeCheckable}
                showCheckedStrategy={str2ShowCheckedStrategy.get(showCheckedStrategy)}
                treeCheckStrictly={treeCheckStrictly}
                treeDefaultExpandAll={treeDefaultExpandAll}
                treeDefaultExpandedKeys={treeDefaultExpandedKeys}
                treeExpandedKeys={treeExpandedKeys}
                onChange={readOnly ? undefined : updateSelectedValue}
                showSearch={readOnly ? false : true}
                virtual={virtual}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                placement={placement}
                status={status}
                treeNodeFilterProp={treeNodeFilterProp}
                filterTreeNode={
                    (inputValue, treeNode) => {
                        // 处理''特殊情况
                        inputValue = inputValue || ''
                        if (inputValue !== '') {
                            if (treeNodeFilterMode === 'case-insensitive') {
                                // 进行大小写不敏感筛选
                                return (treeNode[treeNodeFilterProp] || '').toLowerCase()
                                    .includes(inputValue.toLowerCase())
                            } else if (treeNodeFilterMode === 'case-sensitive') {
                                // 判断输入的内容是否是当前选项筛选依据字段值的子串
                                return treeNode[treeNodeFilterProp].includes(inputValue)
                            } else if (treeNodeFilterMode === 'regex') {
                                // 判断输入的正则规则是否匹配当前选项筛选依据字段值
                                try {
                                    // 尝试进行正则匹配
                                    return eval(`/${inputValue}/`).test(treeNode[treeNodeFilterProp])
                                } catch {
                                    // 忽略非法的正则表达式
                                    return false
                                }
                            }
                        }
                        return false
                    }
                }
                autoClearSearchValue={autoClearSearchValue}
                dropdownRender={
                    (dropdownBefore || dropdownAfter) ?
                        (menu) => {
                            return (
                                <>
                                    {dropdownBefore}
                                    {menu}
                                    {dropdownAfter}
                                </>
                            );
                        } : undefined
                }
                onTreeExpand={(e) => {
                    setProps({ treeExpandedKeys: e })
                }}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={useLoading()}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                open={isUndefined(readOnly) || !readOnly ? undefined : false}
                loadData={
                    enableAsyncLoad ?
                        (node) => {
                            // 更新最新的异步加载数据目标节点
                            setProps({
                                loadingNode: {
                                    key: node.key,
                                    title: node.title,
                                    value: node.value
                                }
                            })
                            return new Promise(
                                (resolve) => {
                                    // 更新数据异步加载标识
                                    dataLoading.current = true;
                                    // 轮询检测是否加载完成
                                    const timer = setInterval(
                                        () => {
                                            if (!dataLoading.current) {
                                                clearInterval(timer);
                                                resolve();
                                            }
                                        },
                                        200
                                    );
                                }
                            )
                        } :
                        undefined
                }
            />
        </ConfigProvider>
    );
}

export default AntdTreeSelect;

AntdTreeSelect.defaultProps = defaultProps;
AntdTreeSelect.propTypes = propTypes;