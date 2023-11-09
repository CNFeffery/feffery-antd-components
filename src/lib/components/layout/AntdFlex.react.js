import React from 'react';
import { Flex } from 'antd';
import PropTypes from 'prop-types';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { parseChildrenToArray } from '../utils';

// 定义弹性布局组件AntdFlex
const AntdFlex = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        vertical,
        wrap,
        justify,
        align,
        flex,
        gap,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Flex id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            vertical={vertical}
            wrap={wrap}
            justify={justify}
            align={align}
            flex={flex}
            gap={gap}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Flex>
    );
}

// 定义参数或属性
AntdFlex.propTypes = {
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

    /**
     * 设置flex主轴是否垂直
     * 默认：false
     */
    vertical: PropTypes.bool,

    /**
     * 设置元素的换行显示行为，同css中的flex-wrap
     * 默认：'nowrap'
     */
    wrap: PropTypes.string,

    /**
     * 设置元素在主轴方向上的对齐方式，同css中的justify-content
     * 默认：'normal'
     */
    justify: PropTypes.string,

    /**
     * 设置元素在交叉轴方向上的对齐方式，同css中的align-items
     * 默认：'normal'
     */
    align: PropTypes.string,

    /**
     * 设置flex css简写属性
     * 默认：'normal'
     */
    flex: PropTypes.string,

    /**
     * 设置网格之间的间隙，可选的有'small'、'middle'、'large'，也可传入字符型css宽度，或数值型像素宽度
     */
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['small', 'middle', 'large'])
    ]),

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
AntdFlex.defaultProps = {
    vertical: false,
    wrap: 'nowrap',
    justify: 'normal',
    align: 'normal',
    flex: 'normal'
}

export default AntdFlex;