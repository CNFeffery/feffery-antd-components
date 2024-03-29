import React from 'react';
import PropTypes from 'prop-types';
import { Space, Divider } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { parseChildrenToArray } from '../utils';

// 定义间距组件AntdSpace，api参数参考https://ant.design/components/space-cn/
const AntdSpace = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        align,
        direction,
        size,
        customSplit,
        wrap,
        addSplitLine,
        styles,
        classNames,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    if (addSplitLine) {
        if (direction === 'horizontal') {
            return (
                <Space id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    styles={styles}
                    classNames={classNames}
                    key={key}
                    align={align}
                    direction={direction}
                    size={size}
                    split={<Divider type="vertical" />}
                    wrap={wrap}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                    {children}
                </Space>
            );
        }
        return (
            <Space id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                styles={styles}
                classNames={classNames}
                key={key}
                align={align}
                direction={direction}
                size={size}
                split={<Divider />}
                wrap={wrap}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Space>
        );
    }

    return (
        <Space id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            styles={styles}
            classNames={classNames}
            key={key}
            align={align}
            direction={direction}
            size={size}
            split={customSplit}
            wrap={wrap}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Space>
    );
}

// 定义参数或属性
AntdSpace.propTypes = {
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

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 控制子项容器元素css样式
         */
        item: PropTypes.object
    }),

    /**
     * 细分控制子元素css类
     */
    classNames: PropTypes.exact({
        /**
         * 控制子项容器元素css类
         */
        item: PropTypes.string
    }),

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 自定义对齐方式，可选的有'start'、'end'、'center'、'baseline'
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),

    // 设置间距方向，可选的有'vertical'、'horizontal'，默认为'horizontal'
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    // 设置间隔尺寸大小，可选的有'small'、'middle'、'large'，或直接设置整数代表像素值，默认为'small'
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['small', 'middle', 'large']),
        PropTypes.number
    ]),

    // 是否添加分隔线，默认为false
    addSplitLine: PropTypes.bool,

    // 设置自定义分隔元素
    customSplit: PropTypes.node,

    // 设置超出长度是否自动换行，仅在direction='horizontal'模式下可用
    wrap: PropTypes.bool,

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
AntdSpace.defaultProps = {
    addSplitLine: false,
    direction: 'horizontal',
    size: 'small',
    wrap: false
}

export default AntdSpace;