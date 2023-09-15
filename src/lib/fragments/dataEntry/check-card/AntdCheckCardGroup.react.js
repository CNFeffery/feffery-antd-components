import React, { useEffect, useContext } from 'react';
import { CheckCard } from '@ant-design/pro-card';
import { parseChildrenToArray } from '../../../components/utils';
import { isString, isUndefined } from 'lodash';
import useCss from '../../../hooks/useCss';
import PropsContext from '../../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../../components/dataEntry/check-card/AntdCheckCardGroup.react';

// 定义组合选择卡片组件AntdCheckCardGroup，api参数参考https://procomponents.ant.design/components/check-card
const AntdCheckCardGroup = (props) => {

    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        multiple,
        allowNoValue,
        bordered,
        value,
        defaultValue,
        disabled,
        size,
        readOnly,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const context = useContext(PropsContext)

    useEffect(() => {
        if (defaultValue && !value) {
            setProps({ value: defaultValue })
        }
    }, [])

    children = parseChildrenToArray(children)

    return (
        <CheckCard.Group id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            multiple={multiple}
            bordered={bordered}
            value={value}
            defaultValue={defaultValue}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={size}
            onChange={(e) => {
                // 只读模式下不进行值更新
                if (!readOnly) {
                    if (allowNoValue) {
                        setProps({ value: e })
                    } else {
                        if (e && e.length !== 0) {
                            setProps({ value: e })
                        }
                    }
                }
            }}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } >
            {children}
        </ CheckCard.Group>
    );
}

export default AntdCheckCardGroup;

AntdCheckCardGroup.defaultProps = defaultProps;
AntdCheckCardGroup.propTypes = propTypes;