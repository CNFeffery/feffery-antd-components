// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Segmented } from 'antd';
import AntdIcon from "../../components/general/AntdIcon.react";
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdSegmented.react';

/**
 * 分段控制器组件AntdSegmented
 */
const AntdSegmented = (props) => {
    let {
        id,
        style,
        className,
        key,
        options,
        defaultValue,
        value,
        block,
        vertical,
        disabled,
        size,
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

    options = options || []

    useEffect(() => {
        if (defaultValue && !value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = (v) => {
        setProps({ value: v })
    }

    return (
        <Segmented
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            options={
                options.map(item => {
                    return {
                        ...item,
                        icon: item.icon && (
                            item.iconRenderer === 'fontawesome' ?
                                (
                                    React.createElement(
                                        'i',
                                        {
                                            className: item.icon
                                        }
                                    )
                                ) :
                                (
                                    <AntdIcon icon={item.icon} />
                                )
                        )
                    }
                })
            }
            defaultValue={defaultValue}
            value={value}
            block={block}
            vertical={vertical}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            onChange={onSelect}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdSegmented;

AntdSegmented.defaultProps = defaultProps;
AntdSegmented.propTypes = propTypes;