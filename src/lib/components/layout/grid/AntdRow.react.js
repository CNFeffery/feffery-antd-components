// react核心
import PropTypes from 'prop-types';
// antd核心
import { Row } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 行组件AntdRow
 */
const AntdRow = ({
    id,
    children,
    className,
    style,
    key,
    align = 'top',
    gutter = 0,
    justify = 'start',
    wrap = true,
    setProps,
    ...others
}) => {

    children = parseChildrenToArray(children)

    return (
        <Row
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            align={align}
            gutter={gutter}
            justify={justify}
            wrap={wrap}
            data-dash-is-loading={useLoading()}>
            {children}
        </Row>
    );
}

AntdRow.propTypes = {
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
     * 竖直方向对齐方式，可选项有`'top'`、`'middle'`、`'bottom'`
     * 默认值：`'top'`
     */
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),

    /**
     * 网格间隔，传入数值型时为水平像素间隔，传入数组时分别设置水平、垂直像素间隔，传入字典时可为响应式各断点设置水平像素间隔
     */
    gutter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.exact({
            /**
             * 页面宽度小于567px时的水平像素间隔
             */
            xs: PropTypes.number,
            /**
             * 页面宽度大于等于567px时的水平像素间隔
             */
            sm: PropTypes.number,
            /**
             * 页面宽度大于等于768px时的水平像素间隔
             */
            md: PropTypes.number,
            /**
             * 页面宽度大于等于992px时的水平像素间隔
             */
            lg: PropTypes.number,
            /**
             * 页面宽度大于等于1200px时的水平像素间隔
             */
            xl: PropTypes.number,
            /**
             * 页面宽度大于等于1600px时的水平像素间隔
             */
            xxl: PropTypes.number
        })
    ]),

    /**
     * 水平排列方式，可选项有`'start'`、`'end'`、`'center'`、`'space-around'`、`'space-between'`
     * 默认值：`'start'`
     */
    justify: PropTypes.oneOf([
        'start', 'end', 'center', 'space-around', 'space-between'
    ]),

    /**
     * 是否允许自动换行
     * 默认值：`true`
     */
    wrap: PropTypes.bool,

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

export default AntdRow;