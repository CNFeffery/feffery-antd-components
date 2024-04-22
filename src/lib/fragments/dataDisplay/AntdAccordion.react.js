import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdAccordion.react';

const { Panel } = Collapse;

// 定义手风琴组件AntdAccordion，api参数参考https://ant.design/components/collapse/#components-collapse-demo-accordion
const AntdAccordion = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        items,
        accordion,
        activeKey,
        defaultActiveKey,
        bordered,
        collapsible,
        expandIconPosition,
        ghost,
        loading_state,
        setProps
    } = props;

    useEffect(() => {
        if (defaultActiveKey && !activeKey) {
            setProps({ activeKey: defaultActiveKey })
        }
    }, [])

    return (
        <Collapse
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
            accordion={accordion}
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            bordered={bordered}
            collapsible={collapsible}
            expandIconPosition={expandIconPosition}
            ghost={ghost}
            onChange={(e) => setProps({ activeKey: e })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {
                items ? (
                    items.map(
                        item => (
                            <Panel
                                className={
                                    isString(item.className) ?
                                        item.className :
                                        (item.className ? useCss(item.className) : undefined)
                                }
                                style={item.style}
                                key={item.key}
                                collapsible={item.collapsible}
                                header={item.title}
                                extra={item.extra}
                                showArrow={item.showArrow}
                                forceRender={item.forceRender}>
                                {item.children}
                            </Panel>
                        )
                    )
                ) : null
            }
        </Collapse>
    );
}

export default AntdAccordion;

AntdAccordion.defaultProps = defaultProps;
AntdAccordion.propTypes = propTypes;