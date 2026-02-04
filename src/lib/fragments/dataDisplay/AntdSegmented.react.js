// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Segmented } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
// 辅助库
import { isString, isUndefined, isNumber } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdSegmented.react';

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
        shape,
        vertical,
        disabled,
        size,
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

    options = options || [];

    useEffect(() => {
        if (defaultValue && !value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue });
        }
    }, []);

    const onSelect = (v) => {
        setProps({ value: v });
    };

    return (
        <Segmented
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
            options={
                options.every((item) => isNumber(item) || isString(item))
                    ? // 快捷方式
                      options.map((item) => ({ label: item, value: item }))
                    : options.map((item) => {
                          return {
                              ...item,
                              icon:
                                  item.icon &&
                                  (item.iconRenderer === 'fontawesome' ? (
                                      React.createElement('i', {
                                          className: item.icon,
                                      })
                                  ) : (
                                      <AntdIcon icon={item.icon} />
                                  )),
                          };
                      })
            }
            defaultValue={defaultValue}
            value={value}
            block={block}
            shape={shape}
            vertical={vertical}
            disabled={
                context && !isUndefined(context.componentDisabled)
                    ? context.componentDisabled
                    : disabled
            }
            size={
                context && !isUndefined(context.componentSize)
                    ? context.componentSize
                    : size
            }
            onChange={onSelect}
            data-dash-is-loading={useLoading()}
        />
    );
};

export default AntdSegmented;

AntdSegmented.defaultProps = defaultProps;
AntdSegmented.propTypes = propTypes;
