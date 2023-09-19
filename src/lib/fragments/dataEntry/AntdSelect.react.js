import React, { useEffect, useContext } from 'react';
import { useRequest } from 'ahooks';
import { Select, ConfigProvider } from 'antd';
import { isUndefined, isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { str2Locale } from '../../components/locales.react';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSelect.react';

const { Option, OptGroup } = Select;

// 定义下拉选择组件AntdSelect，api参数参考https://ant.design/components/select-cn/
const AntdSelect = (props) => {

    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        locale,
        setProps,
        placeholder,
        size,
        bordered,
        options,
        colorsNameWidth,
        allowClear,
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
        popupContainer,
        readOnly,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
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

    // 处理multiple模式下，defaultValue或value为None的显示异常问题 #78
    if (mode === 'multiple') {
        defaultValue = defaultValue || []
        value = value || []
    }

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    // 用于获取用户已选择值的回调函数
    const updateSelectedValue = (value) => {
        setProps({ value: value })
    }

    const { run: onDebounceSearch } = useRequest(
        (e) => {
            setProps({ debounceSearchValue: e })
        },
        {
            debounceWait: Math.max(debounceWait, 200),
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

    // 处理optionFilterProp映射
    if (optionFilterProp === 'label') {
        optionFilterProp = 'children'
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Select
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                mode={mode}
                allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                placeholder={placeholder}
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                bordered={bordered}
                value={value}
                defaultValue={defaultValue}
                onChange={updateSelectedValue}
                maxTagCount={maxTagCount}
                listHeight={listHeight}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                showSearch={true}
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
                                return (option[optionFilterProp] || '').toLowerCase()
                                    .includes(inputValue.toLowerCase())
                            } else if (optionFilterMode === 'case-sensitive') {
                                // 判断输入的内容是否是当前选项筛选依据字段值的子串
                                return option[optionFilterProp].includes(inputValue)
                            } else if (optionFilterMode === 'regex') {
                                // 判断输入的正则规则是否匹配当前选项筛选依据字段值
                                try {
                                    // 尝试进行正则匹配
                                    return eval(`/${inputValue}/`).test(option[optionFilterProp])
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
                onSearch={(e) => {
                    onSearch(e)
                    onDebounceSearch(e)
                }}
                loading={autoSpin && loading_state.is_loading}
                notFoundContent={autoSpin && loading_state.is_loading ? loadingEmptyContent : emptyContent}
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
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                open={isUndefined(readOnly) || !readOnly ? undefined : false}
            >
                {optionsJsx}
            </Select>
        </ConfigProvider>
    );
}

export default AntdSelect;

AntdSelect.defaultProps = defaultProps;
AntdSelect.propTypes = propTypes;