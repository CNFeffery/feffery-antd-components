// react核心
import PropTypes from 'prop-types';
// antd核心
import { Space } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { parseChildrenToArray } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { Compact } = Space;

/**
 * 紧凑排列组件AntdCompact
 */
const AntdCompact = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        direction,
        block,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Compact id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            direction={direction}
            block={block}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Compact>
    );
}

AntdCompact.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

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
     * 排列方向，可选项有`'vertical'`、`'horizontal'`
     * 默认值：`'horizontal'`
     */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /**
     * 是否渲染为块级元素（宽度撑满父容器）
     * 默认值：`false`
     */
    block: PropTypes.bool,

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
AntdCompact.defaultProps = {
    direction: 'horizontal',
    block: false
}

export default AntdCompact;