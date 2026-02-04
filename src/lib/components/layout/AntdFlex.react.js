// react核心
import { Flex } from 'antd';
import PropTypes from 'prop-types';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 弹性布局组件AntdFlex
 */
const AntdFlex = ({
    id,
    children,
    className,
    style,
    key,
    vertical = false,
    wrap = 'nowrap',
    justify = 'normal',
    align = 'normal',
    flex = 'normal',
    gap,
    setProps,
    ...others
}) => {
    children = parseChildrenToArray(children);

    return (
        <Flex
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            key={key}
            vertical={vertical}
            wrap={wrap}
            justify={justify}
            align={align}
            flex={flex}
            gap={gap}
            data-dash-is-loading={useLoading()}
        >
            {children}
        </Flex>
    );
};

AntdFlex.propTypes = {
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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 是否使用垂直主轴
     * 默认值：`false`
     */
    vertical: PropTypes.bool,

    /**
     * 子元素换行显示行为，同css中的flex-wrap，也可直接传入布尔型设置是否自动换行
     * 默认值：`'nowrap'`
     */
    wrap: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * 子元素在主轴方向上的对齐方式，同css中的justify-content
     * 默认值：`'normal'`
     */
    justify: PropTypes.string,

    /**
     * 子元素在交叉轴方向上的对齐方式，同css中的align-items
     * 默认值：`'normal'`
     */
    align: PropTypes.string,

    /**
     * 同css中的flex
     * 默认值：`'normal'`
     */
    flex: PropTypes.string,

    /**
     * 子元素之间的间隙，可选项有`'small'`、`'middle'`、`'large'`，也可传入字符型css宽度，或数值型像素宽度
     */
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['small', 'middle', 'large']),
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
    setProps: PropTypes.func,
};

export default AntdFlex;
