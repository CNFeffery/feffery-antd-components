import React from 'react';
import { Descriptions } from 'antd';
import { omit } from 'ramda';
import { parseChildrenToArray, resolveChildProps } from '../../../components/utils';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { propTypes, defaultProps } from '../../../components/dataDisplay/descriptions/AntdDescriptions.react';

// 定义描述列表组件AntdDescriptions，api参数参考https://ant.design/components/descriptions-cn/
const AntdDescriptions = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        items,
        title,
        column,
        bordered,
        size,
        layout,
        labelStyle,
        contentStyle,
        setProps,
        loading_state
    } = props;

    let size2size = new Map([
        ['small', 'small'],
        ['default', 'middle'],
        ['large', 'default']
    ])

    if (items) {
        return (
            <Descriptions id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                title={title}
                column={column}
                bordered={bordered}
                size={size2size.get(size)}
                layout={layout}
                labelStyle={labelStyle}
                contentStyle={contentStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {
                    items.map(
                        (item, index) => <Descriptions.Item key={index} {...item} />
                    )
                }
            </Descriptions>
        );
    }

    children = parseChildrenToArray(children)

    const descriptionItems = children.map(
        (child) => {
            let childProps = resolveChildProps(child)

            const {
                id,
                className,
                style,
                label,
                span,
                labelStyle,
                contentStyle,
                loading_state,
                ...otherProps
            } = childProps;

            return (
                <Descriptions.Item
                    id={id}
                    className={className}
                    style={style}
                    label={label}
                    span={span}
                    labelStyle={labelStyle}
                    contentStyle={contentStyle}
                    loading_state={loading_state}
                    {...omit(
                        ['setProps', 'persistence', 'persistence_type', 'persisted_props'],
                        otherProps
                    )}>
                    {child}
                </Descriptions.Item>
            );
        }
    )

    return (
        <Descriptions id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            title={title}
            column={column}
            bordered={bordered}
            size={size2size.get(size)}
            layout={layout}
            labelStyle={labelStyle}
            contentStyle={contentStyle}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {descriptionItems}
        </Descriptions>
    );
}

export default AntdDescriptions;

AntdDescriptions.defaultProps = defaultProps;
AntdDescriptions.propTypes = propTypes;