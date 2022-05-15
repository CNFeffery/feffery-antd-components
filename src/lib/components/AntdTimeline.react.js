import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import AntdIcon from './AntdIcon.react';
import 'antd/dist/antd.css';

// 定义时间轴组件AntdTimeline，api参数参考https://ant.design/components/timeline-cn/
export default class AntdTimeline extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            key,
            items,
            mode,
            pending,
            reverse,
            setProps,
            loading_state
        } = this.props;

        return (
            <Timeline id={id}
                className={className}
                style={style}
                key={key}
                mode={mode}
                pending={pending}
                reverse={reverse}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >{items.map(
                item => (
                    <Timeline.Item color={item.color ? item.color : 'blue'}
                        dot={
                            item.icon ?
                                <span style={item.iconStyle}>
                                    {<AntdIcon icon={item.icon} />}
                                </span> : undefined
                        }
                        label={item.label}
                        position={item.position}>
                        {item.content ?
                            item.content.split('\n').map(
                                s => (
                                    <p style={item.contentStyle}>
                                        {s}
                                    </p>
                                )
                            )
                            : <p />}
                    </Timeline.Item>
                )
            )}
            </Timeline>
        );
    }
}

// 定义参数或属性
AntdTimeline.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 用于按顺序定义时间轴节点信息
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置该节点的主体文字内容
            content: PropTypes.string,

            // 设置圆圈颜色来表达对应节点的状态，供参考的状态色有：
            // blue：可表示正在进行或默认状态
            // green：可表示已完成
            // red：可表示警告或错误状态
            // grey：可表示未完成或失效状态
            color: PropTypes.string,

            // 设置时间轴点图标，不设置时则显示默认圆圈
            // 与AntdIcon中的icon参数相通
            icon: PropTypes.string,

            // 定义icon图标的css样式
            iconStyle: PropTypes.object,

            // 设置content文字的css样式
            contentStyle: PropTypes.object,

            // 可选，设置节点在单独另一侧显示的标签内容
            label: PropTypes.string
        })
    ),

    // 设置时间轴在content的哪一侧，可选的有'left'、'alternate'及'right'
    // 默认为'right'
    mode: PropTypes.oneOf(['left', 'alternate', 'right']),

    // 设置在时间轴尾部添加“加载中”幽灵节点对应的文字说明内容
    // 默认不设置则不会渲染该状态节点
    pending: PropTypes.string,

    // 设置是否对时间轴逆序排列（默认false顺序下，方向从上往下）
    reverse: PropTypes.bool,

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
AntdTimeline.defaultProps = {
    mode: 'left'
}