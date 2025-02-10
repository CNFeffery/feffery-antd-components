// react核心
import React from 'react';
// antd核心
import { Card } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataDisplay/card/AntdCardGrid.react';

/**
 * 卡片网格组件AntdCardGrid
 */
const AntdCardGrid = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        hoverable,
        nClicks,
        setProps,
        ...others
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Card.Grid
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            hoverable={hoverable}
            onClick={(e) => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={useLoading()}>
            {children}
        </Card.Grid>
    );
}

export default AntdCardGrid;

AntdCardGrid.defaultProps = defaultProps;
AntdCardGrid.propTypes = propTypes;