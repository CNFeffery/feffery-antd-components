// react核心
import { useEffect, useContext } from 'react';
// antd核心
import { Select, Spin, ConfigProvider } from 'antd';
// 辅助库
import { useRequest } from 'ahooks';
import { isUndefined, isString, isNumber } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSelect.react';

const { Option, OptGroup } = Select;

/**
 * 下拉选择组件AntdSelect
 */
const AntdSelect = (props) => {
    let {
        id,
        style,
        className,
        popupClassName,
        key,
        name,
        enableBatchControl,
        locale,
        setProps,
        placeholder,
        size,
        bordered,
        variant,
        options,
        colorsNameWidth,
        allowClear,
        autoFocus,
        disabled,
        value,
        mode,
        defaultValue,
        maxTagCount,
        listHeight,
        colorsMode,
        placement,
        status,
        optionFilterProp,
        optionFilterMode,
        autoSpin,
        debounceWait,
        autoClearSearchValue,
        emptyContent,
        loadingEmptyContent,
        dropdownBefore,
        dropdownAfter,
        prefix,
        suffixIcon,
        popupContainer,
        readOnly,
        maxCount,
        showSearch,
        popupMatchSelectWidth,
        persistence,
        persisted_props,
        persistence_type,
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
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    // 用于获取用户已选择值的回调函数
    const updateSelectedValue = (e) => {
        // AntdForm表单批量控制
        if (formId && (name || id) && enableBatchControl) {
            // 表单值更新
            updateItemValue(formId, name || id, e)
        }
        setProps({ value: e })
    }

    const { run: onDebounceSearch } = useRequest(
        (e) => {
            setProps({ debounceSearchValue: e })
        },
        {
            debounceWait: debounceWait,
            manual: true
        }
    )

    const onSearch = e => {
        setProps({
            searchValue: e
        })
    }

    // 解决options为none时的问题
    options = options || []

    // 基于dash端传入的options参数，推导出对应的组件
    let optionsJsx = [];
    // 快捷方式
    if (options.every(item => isNumber(item) || isString(item))) {
        optionsJsx = options.map(
            item => (<Option value={item}>{item}</Option>)
        )
    } else {
        for (let i = 0; i < options.length; i++) {
            // 当存在分组时
            if (options[i].hasOwnProperty('group')) {
                let groupOptions = [];
                // 构造OptGroup > Option结构
                for (let j = 0; j < options[i].options.length; j++) {
                    groupOptions.push(
                        <Option value={options[i].options[j].value} disabled={options[i].options[j].disabled}>
                            {
                                options[i].options[j].colors ?
                                    <div style={{ display: 'flex' }}>
                                        <div style={{
                                            flex: 'none',
                                            textAlign: 'center',
                                            width: colorsNameWidth,
                                            fontSize: 12
                                        }}>{options[i].options[j].label}</div>
                                        {
                                            colorsMode === 'sequential' ? <div style={{
                                                margin: "1px 0 1px 10px",
                                                borderRadius: "2px",
                                                flex: 'auto',
                                                background: options[i].options[j].colors.length > 1 ?
                                                    `linear-gradient(to right, ${options[i].options[j].colors.join()})` : options[i].options[j].colors[0]
                                            }} /> : <div style={{
                                                margin: "1px 0 1px 10px",
                                                borderRadius: "2px",
                                                flex: 'auto',
                                                'display': 'flex'
                                            }} >{
                                                    options[i].options[j].colors.map(c => <div style={{
                                                        flex: 'auto',
                                                        background: c
                                                    }} />)
                                                }</ div>
                                        }
                                    </div> : options[i].options[j].label
                            }
                        </Option>
                    )
                }
                optionsJsx.push(<OptGroup label={options[i].group}>{groupOptions}</OptGroup>)
            } else {
                optionsJsx.push(<Option value={options[i].value} disabled={options[i].disabled}>
                    {
                        options[i].colors ?
                            <div style={{ display: 'flex' }}>
                                <div style={{
                                    flex: 'none',
                                    textAlign: 'center',
                                    fontSize: 12,
                                    width: colorsNameWidth
                                }}>{options[i].label}</div>
                                {
                                    colorsMode === 'sequential' ? <div style={{
                                        margin: "1px 0 1px 10px",
                                        borderRadius: "2px",
                                        flex: 'auto',
                                        background: options[i].colors.length > 1 ?
                                            `linear-gradient(to right, ${options[i].colors.join()})` : options[i].colors[0]
                                    }} /> : <div style={{
                                        margin: "1px 0 1px 10px",
                                        borderRadius: "2px",
                                        flex: 'auto',
                                        'display': 'flex'
                                    }} >{
                                            options[i].colors.map(c => <div style={{
                                                flex: 'auto',
                                                background: c
                                            }} />)
                                        }</ div>
                                }

                            </div> : options[i].label
                    }
                </Option>)
            }
        }
    }

    // 处理optionFilterProp映射
    if (optionFilterProp === 'label') {
        optionFilterProp = 'children'
    }

    const component_loading = useLoading();

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Select
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
                mode={mode}
                allowClear={isUndefined(readOnly) || !readOnly ? allowClear : false}
                autoFocus={autoFocus}
                placeholder={placeholder}
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
                onChange={readOnly ? undefined : updateSelectedValue}
                maxTagCount={maxTagCount}
                listHeight={listHeight}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                showSearch={isUndefined(showSearch) ? !readOnly : showSearch}
                placement={placement}
                status={status}
                optionFilterProp={optionFilterProp}
                filterOption={
                    (inputValue, option) => {
                        // 处理''特殊情况
                        inputValue = inputValue || ''
                        if (inputValue !== '') {
                            if (optionFilterMode === 'case-insensitive') {
                                // 进行大小写不敏感筛选
                                return (String(option[optionFilterProp]) || '').toLowerCase()
                                    .includes(inputValue.toLowerCase())
                            } else if (optionFilterMode === 'case-sensitive') {
                                // 判断输入的内容是否是当前选项筛选依据字段值的子串
                                return String(option[optionFilterProp]).includes(inputValue)
                            } else if (optionFilterMode === 'regex') {
                                // 判断输入的正则规则是否匹配当前选项筛选依据字段值
                                try {
                                    // 尝试进行正则匹配
                                    return eval(`/${inputValue}/`).test(String(option[optionFilterProp]))
                                } catch {
                                    // 忽略非法的正则表达式
                                    return false
                                }
                            } else if (optionFilterMode === 'remote-match') {
                                // remote-match模式下，均返回true
                                return true
                            }
                        }
                        return false
                    }
                }
                autoClearSearchValue={autoClearSearchValue}
                onSearch={(e) => {
                    onSearch(e)
                    onDebounceSearch(e)
                }}
                loading={autoSpin && component_loading}
                notFoundContent={
                    autoSpin && component_loading ?
                        (
                            loadingEmptyContent ||
                            (
                                <div style={{ display: 'flex', 'justifyContent': 'center' }}>
                                    <Spin />
                                </div>
                            )
                        ) :
                        emptyContent
                }
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
                prefix={prefix}
                suffixIcon={suffixIcon}
                data-dash-is-loading={component_loading}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                open={isUndefined(readOnly) || !readOnly ? undefined : false}
                maxCount={maxCount}
                popupMatchSelectWidth={popupMatchSelectWidth}
            >
                {optionsJsx}
            </Select>
        </ConfigProvider>
    );
}

export default AntdSelect;

AntdSelect.defaultProps = defaultProps;
AntdSelect.propTypes = propTypes;