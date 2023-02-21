import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd';
import { isString } from 'lodash';
import useCss from '../hooks/useCss';


// 定义徽标组件AntdBadge，api参数参考https://ant.design/components/badge-cn/
const AntdBadge = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        color,
        count,
        dot,
        offset,
        overflowCount,
        showZero,
        status,
        text,
        title,
        size,
        nClicks,
        loading_state,
        setProps
    } = props;

    return (
        <Badge
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            color={color}
            count={count}
            dot={dot}
            offset={(offset && offset.length === 2) ? offset : undefined}
            overflowCount={overflowCount}
            showZero={showZero}
            status={status}
            text={text}
            title={title}
            size={size}
            onClick={() => {
                nClicks++;
                setProps({ nClicks: nClicks })
            }}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Badge>
    );
}

// 定义参数或属性
AntdBadge.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 可选，传入要对其添加徽标的目标元素
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

    // 自定义徽标颜色
    color: PropTypes.string,

    // 自定义展示的数字，为0时若不设置showZero=true则会自动隐藏
    // 可配合overflowCount参数设置展示封顶的数值大小，譬如count=105时
    // 设置overflowCount=99，会显示为99+
    count: PropTypes.number,

    // 设置是否不展示数字，只显示一个小红点，默认为false
    dot: PropTypes.bool,

    // 设置当count=0时，是否仍然显示0数值，默认为false
    showZero: PropTypes.bool,

    // 设置数字值封顶大小，默认为99
    overflowCount: PropTypes.number,

    // 设置徽标的位置像素偏移，格式为[x方向偏移, y方向偏移]
    offset: PropTypes.arrayOf(PropTypes.number),

    // 设置徽标状态，可选的有'success'、'processing'、'default'、'error'及'warning'
    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),

    // 当status已设置时有效，用于设置状态徽标的文本内容
    text: PropTypes.string,

    // 设置鼠标放在状态徽标上时显示的文字内容
    title: PropTypes.string,

    // 设置徽标规格大小，可选的有'default'和'small'
    size: PropTypes.oneOf(['default', 'small']),

    // 记录徽标被点击次数，默认为0
    nClicks: PropTypes.number,

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
AntdBadge.defaultProps = {
    nClicks: 0,
    dot: false,
    showZero: false,
    overflowCount: 99,
    size: 'default'
}

export default AntdBadge;