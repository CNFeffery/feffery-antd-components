// react核心
import PropTypes from 'prop-types';
// antd核心
import { Col } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 列组件AntdCol
 */
const AntdCol = ({
    id,
    children,
    className,
    style,
    key,
    span,
    offset = 0,
    order = 0,
    pull = 0,
    push = 0,
    flex,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    setProps,
    ...others
}) => {

    children = parseChildrenToArray(children)

    return (
        <Col
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={{ height: '100%', ...style }}
            key={key}
            span={span}
            offset={offset}
            order={order}
            pull={pull}
            push={push}
            flex={flex}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            data-dash-is-loading={useLoading()}>
            {children}
        </Col>
    );
}

AntdCol.propTypes = {
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
     * 列所占宽度份数
     */
    span: PropTypes.number,

    /**
     * 列左侧间隔宽度份数
     * 默认值：`0`
     */
    offset: PropTypes.number,

    /**
     * 列顺序
     * 默认值：`0`
     */
    order: PropTypes.number,

    /**
     * 列向左移动宽度份数
     * 默认值：`0`
     */
    pull: PropTypes.number,

    /**
     * 列向右移动宽度份数
     * 默认值：`0`
     */
    push: PropTypes.number,

    /**
     * 同css中的flex
     */
    flex: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 配置列在页面宽度小于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    xs: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * 配置列在页面宽度大于等于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    sm: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * 配置列在页面宽度大于等于768px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    md: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * 配置列在页面宽度大于等于992px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    lg: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * 配置列在页面宽度大于等于1200px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    xl: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * 配置列在页面宽度大于等于1600px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数
     */
    xxl: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            /**
             * 同span参数
             */
            span: PropTypes.number,

            /**
             * 同offset参数
             */
            offset: PropTypes.number,

            /**
             * 同order参数
             */
            order: PropTypes.number,

            /**
             * 同pull参数
             */
            pull: PropTypes.number,

            /**
             * 同push参数
             */
            push: PropTypes.number
        })
    ]),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdCol;