// react核心
import React from 'react';
// antd核心
import { Descriptions } from 'antd';
// 辅助库
import { omit } from 'ramda';
import {
    parseChildrenToArray,
    resolveChildProps,
    useLoading,
} from '../../../components/utils';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../../components/dataDisplay/descriptions/AntdDescriptions.react';

/**
 * 描述列表组件AntdDescriptions
 */
const AntdDescriptions = (props) => {
    let {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        items,
        title,
        column,
        bordered,
        size,
        layout,
        extra,
        setProps,
        ...others
    } = props;

    const size2size = new Map([
        ['small', 'small'],
        ['default', 'middle'],
        ['large', 'default'],
    ]);

    if (items) {
        return (
            <Descriptions
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
                styles={styles}
                classNames={classNames}
                key={key}
                title={title}
                column={column}
                bordered={bordered}
                size={size2size.get(size)}
                layout={layout}
                extra={extra}
                data-dash-is-loading={useLoading()}
            >
                {items.map((item, index) => (
                    <Descriptions.Item key={index} {...item} />
                ))}
            </Descriptions>
        );
    }

    children = parseChildrenToArray(children);

    const descriptionItems = children.map((child) => {
        const childProps = resolveChildProps(child);

        const {
            id,
            className,
            style,
            styles,
            classNames,
            label,
            span,
            ...otherProps
        } = childProps;

        return (
            <Descriptions.Item
                id={id}
                className={className}
                style={style}
                styles={styles}
                classNames={classNames}
                label={label}
                span={span}
                {...omit(
                    [
                        'setProps',
                        'persistence',
                        'persistence_type',
                        'persisted_props',
                    ],
                    otherProps
                )}
            >
                {child}
            </Descriptions.Item>
        );
    });

    return (
        <Descriptions
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
            styles={styles}
            classNames={classNames}
            key={key}
            title={title}
            column={column}
            bordered={bordered}
            size={size2size.get(size)}
            layout={layout}
            extra={extra}
            data-dash-is-loading={useLoading()}
        >
            {descriptionItems}
        </Descriptions>
    );
};

export default AntdDescriptions;

AntdDescriptions.defaultProps = defaultProps;
AntdDescriptions.propTypes = propTypes;
