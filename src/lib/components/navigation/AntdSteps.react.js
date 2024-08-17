// react核心
import PropTypes from 'prop-types';
// antd核心
import { Steps } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 步骤条组件AntdSteps
 */
const AntdSteps = (props) => {
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
        percent,
        setProps,
        loading_state
    } = props;

    // 限制current上限
    setProps({ current: current < steps.length ? current : steps.length })

    // 限制current下限
    setProps({ current: current >= 0 ? current : 0 })

    return (
        <Steps
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
            items={steps}
            current={current}
            direction={direction}
            labelPlacement={labelPlacement}
            progressDot={progressDot}
            size={size}
            status={status}
            type={type}
            responsive={responsive}
            percent={percent}
            onChange={allowClick ? (current) => setProps({ current: current }) : undefined}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

AntdSteps.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 必填，步骤内容定义数据结构
     */
    steps: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 步骤标题
             */
            title: PropTypes.node.isRequired,
            /**
             * 步骤子标题
             */
            subTitle: PropTypes.node,
            /**
             * 步骤描述内容
             */
            description: PropTypes.node,
            /**
             * 步骤自定义图标
             */
            icon: PropTypes.node,
            /**
             * 是否禁用当前步骤
             */
            disabled: PropTypes.bool,
            /**
             * 强制设置当前步骤状态，同参数status
             */
            status: PropTypes.oneOf(['wait', 'process', 'finish', 'error'])
        })
    ).isRequired,

    /**
     * 当前所处的步骤序号
     * 默认值：`0`
     */
    current: PropTypes.number,

    /**
     * 步骤条显示方向，可选项有`'horizontal'`、`'vertical'`
     * 默认值：`'horizontal'`
     */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * 标签内容显示方位，可选项有`'horizontal'`、`'vertical'`
     */
    labelPlacement: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * 是否渲染为点状步骤条
     * 默认值：`false`
     */
    progressDot: PropTypes.bool,

    /**
     * 步骤条尺寸规格，可选项有`'default'`、`'small'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 步骤条状态，可选项有`'wait'`、`'process'`、`'finish'`、`'error'`
     * 默认值：`'process'`
     */
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /**
     * 步骤条类型，可选项有`'default'`、`'navigation'`、`'inline'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'navigation', 'inline']),

    /**
     * 是否可点击切换步骤
     * 默认值：`false`
     */
    allowClick: PropTypes.bool,

    /**
     * 是否在页面宽度小于532px时自动强制垂直显示
     * 默认值：`true`
     */
    responsive: PropTypes.bool,

    /**
     * 当前步骤进度，取值应在0到100之间，适用于常规步骤条
     */
    percent: PropTypes.number,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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