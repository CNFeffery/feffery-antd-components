import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';

import { parseChildrenToArray } from '../utils';

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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Card.Grid>
    );
}

// 定义参数或属性
AntdCardGrid.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置网格是否可鼠标悬浮呈现浮起效果，默认为true
    hoverable: PropTypes.bool,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCardGrid.defaultProps = {
    hoverable: true
}

export default AntdCardGrid;