// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Rate } from 'antd';
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
import {
    propTypes,
    defaultProps,
} from '../../components/dataEntry/AntdRate.react';

/**
 * 评分组件AntdRate
 */
const AntdRate = (props) => {
    const {
        id,
        className,
        style,
        key,
        name,
        enableBatchControl,
        allowClear,
        allowHalf,
        count,
        disabled,
        autoFocus,
        tooltips,
        defaultValue,
        value,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        ...others
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            const _batchPropsValues = {};
            for (const propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues,
            });
        }
    });

    const context = useContext(PropsContext);
    const formId = useContext(FormContext);

    const updateItemValue = useFormStore((state) => state.updateItemValue);
    const deleteItemValue = useFormStore((state) => state.deleteItemValue);

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(
        (state) => state.values?.[formId]?.[name || id]
    );

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                deleteItemValue(formId, name || id);
            }
        };
    }, [name, id]);

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue });
        }
    }, []);

    // 监听change事件
    const onChange = (e) => {
        // AntdForm表单批量控制
        if (formId && (name || id) && enableBatchControl) {
            // 表单值更新
            updateItemValue(formId, name || id, e);
        }
        setProps({ value: e });
    };

    return (
        <Rate
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            key={key}
            allowClear={allowClear}
            allowHalf={allowHalf}
            count={count}
            disabled={
                context && !isUndefined(context.componentDisabled)
                    ? context.componentDisabled
                    : disabled
            }
            autoFocus={autoFocus}
            tooltips={tooltips}
            value={
                formId && (name || id) && enableBatchControl
                    ? currentFormValue
                    : value
            }
            onChange={onChange}
            data-dash-is-loading={useLoading()}
        />
    );
};

export default AntdRate;

AntdRate.defaultProps = defaultProps;
AntdRate.propTypes = propTypes;
