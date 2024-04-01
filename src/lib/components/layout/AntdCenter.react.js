// react核心
import PropTypes from 'prop-types';
// 辅助库
import { isString } from 'lodash';
import { parseChildrenToArray } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 居中组件AntdCenter
 */
const AntdCenter = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        inline,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <div id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={{
                display: inline ? 'inline-flex' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
            key={key}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </div>
    );
}

AntdCenter.propTypes = {
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
     * 是否渲染为行内元素
     * 默认值：`false`
     */
    inline: PropTypes.bool,

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
AntdCenter.defaultProps = {
    inline: false
}

export default AntdCenter;