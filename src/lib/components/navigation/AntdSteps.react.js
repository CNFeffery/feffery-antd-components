import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';

const { Step } = Steps;

// 定义步骤条组件AntdSteps，api参数参考https://ant.design/components/steps-cn/
const AntdSteps = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        current,
        direction,
        labelPlacement,
        progressDot,
        size,
        status,
        type,
        steps,
        allowClick,
        responsive,
        setProps,
        loading_state
    } = props;

    // 限制current上限
    setProps({ current: current < steps.length ? current : steps.length })

    // 限制current下限
    setProps({ current: current >= 0 ? current : 0 })

    return (
        <Steps
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            current={current}
            direction={direction}
            labelPlacement={labelPlacement}
            progressDot={progressDot}
            size={size}
            status={status}
            type={type}
            responsive={responsive}
            onChange={allowClick ? (current) => setProps({ current: current }) : undefined}
        >
            {
                steps.map(
                    item => (
                        <Step title={item.title}
                            subTitle={item.subTitle}
                            description={item.description} />
                    )
                )
            }
        </Steps>
    );
}

// 定义参数或属性
AntdSteps.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 定义各步骤参数信息，必填
    steps: PropTypes.arrayOf(
        PropTypes.exact({
            // 步骤对应的标题内容
            title: PropTypes.node.isRequired,

            // 步骤对应的子标题内容
            subTitle: PropTypes.node,

            // 步骤对应的描述内容
            description: PropTypes.node
        })
    ).isRequired,

    // 指定当前处于的步骤序号，默认为0
    current: PropTypes.number,

    // 指定进度条方向样式，'horizontal'代表水平，'vertical'代表垂直，默认为'horizontal'
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    // 指定标签放置位置，默认'horizontal'放图标右侧，可选'vertical'放图标下方
    labelPlacement: PropTypes.oneOf(['horizontal', 'vertical']),

    // 是否以“点状步骤条”形式渲染，默认为false
    progressDot: PropTypes.bool,

    // 设置尺寸大小，默认'default'代表常规尺寸，'small'代表迷你尺寸
    size: PropTypes.oneOf(['default', 'small']),

    // 指定当前步骤条的状态，有'wait'、'process'、'finish'以及'error'四种，默认为'process'
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /**
     * 设置步骤条渲染形式，可选的有'default'、'navigation'、'inline'
     * 默认：'default'
     */
    type: PropTypes.oneOf(['default', 'navigation', 'inline']),

    // 设置是否允许点击进行步骤切换，默认为false
    allowClick: PropTypes.bool,

    // 设置是否在屏幕宽度小于532px时自动强制垂直渲染，默认为True
    responsive: PropTypes.bool,

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
AntdSteps.defaultProps = {
    current: 0,
    direction: 'horizontal',
    progressDot: false,
    size: 'default',
    status: 'process',
    type: 'default',
    allowClick: false,
    responsive: true
}

export default AntdSteps;