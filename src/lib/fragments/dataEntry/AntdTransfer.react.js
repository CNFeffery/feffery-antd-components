import React, { useContext, useEffect } from 'react';
import { Transfer, ConfigProvider } from 'antd';
import { str2Locale, locale2text } from '../../components/locales.react';
import { isString, isUndefined } from 'lodash';
import { getBatchPropsValues } from '../utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTransfer.react';


// 定义穿梭框组件AntdTransfer，api参数参考https://ant.design/components/transfer-cn/
const AntdTransfer = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
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
        batchPropsNames,
        batchPropsValues,
        batchFormValuesMode
    } = props;

    // 批属性监听
    useEffect(() => {
        if (!batchFormValuesMode && batchPropsNames && batchPropsNames.length !== 0) {
            setProps({
                batchPropsValues: getBatchPropsValues(batchPropsNames, props)
            })
        }
    })

    useEffect(() => {
        if (batchFormValuesMode) {
            setProps({ targetKeys: batchPropsValues?.targetKeys })
        }
    }, [batchPropsValues])

    const context = useContext(PropsContext)

    locale = (context && context.locale) || locale

    if (!titles) {
        titles = locale2text.AntdTransfer[locale].titles
    }

    // 监听选项移动事件
    const listenMove = (nextTargetKeys, moveDirection, moveKeys) => {
        let _batchPropsValues = batchFormValuesMode ? getBatchPropsValues(batchPropsNames, props) : nextTargetKeys
        if (batchFormValuesMode) {
            if (batchPropsNames.includes('targetKeys')) {
                _batchPropsValues['targetKeys'] = nextTargetKeys
            }
            if (batchPropsNames.includes('moveDirection')) {
                _batchPropsValues['moveDirection'] = moveDirection
            }
            if (batchPropsNames.includes('moveKeys')) {
                _batchPropsValues['moveKeys'] = moveKeys
            }
        }
        props?.onChange?.(_batchPropsValues)
        props?.onBlur?.(_batchPropsValues)
        props?.onFocus?.(_batchPropsValues)
        if (!readOnly) {
            setProps({
                targetKeys: nextTargetKeys,
                moveDirection: moveDirection,
                moveKeys: moveKeys
            })
        }
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Transfer
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
                targetKeys={targetKeys}
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