import React from 'react';
import { Card } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { parseChildrenToArray } from '../../../components/utils';
import { propTypes, defaultProps } from '../../../components/dataDisplay/card/AntdCardGrid.react';

// 定义卡片网格组件AntdCardGrid，api参数参考https://ant.design/components/card-cn/
const AntdCardGrid = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        hoverable,
        nClicks,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Card.Grid id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            hoverable={hoverable}
            onClick={(e) => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Card.Grid>
    );
}

export default AntdCardGrid;

AntdCardGrid.defaultProps = defaultProps;
AntdCardGrid.propTypes = propTypes;