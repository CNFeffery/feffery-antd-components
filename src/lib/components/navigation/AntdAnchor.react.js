// react核心
import PropTypes from 'prop-types';
// antd核心
import { Anchor } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { Link } = Anchor;

/**
 * 锚点组件AntdAnchor
 */
const AntdAnchor = ({
    id,
    className,
    style,
    key,
    linkDict,
    align = 'right',
    containerId,
    targetOffset,
    affix = true,
    bounds = 5,
    offsetTop,
    setProps,
    ...others
}) => {

    const renderAnchorTree = (obj) => {
        // 当anchorObj类型为对象时
        if (obj.hasOwnProperty('href')) {
            //当anchorObj具有children属性时
            if (obj.hasOwnProperty('children')) {
                obj = <Link
                    href={obj.href}
                    title={obj.title}
                    target={obj.target}
                >
                    {renderAnchorTree(obj.children)}
                </Link>
            } else {
                obj = <Link
                    href={obj.href}
                    title={obj.title}
                    target={obj.target}
                />
            }
        } else {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = renderAnchorTree(obj[i])
            }
        }
        return obj;
    }

    // 监听锚点被点击情况
    const onClick = (e, link) => {
        setProps({
            clickedLink: link
        })
    }

    return (
        <div
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            style={{ float: align }}
            data-dash-is-loading={useLoading()}
        >
            {
                <Anchor
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    key={key}
                    onClick={onClick}
                    getContainer={
                        containerId ? (
                            document.getElementById(containerId) ?
                                () => document.getElementById(containerId) :
                                undefined
                        ) :
                            undefined
                    }
                    targetOffset={targetOffset}
                    affix={affix}
                    bounds={bounds}
                    offsetTop={offsetTop}>
                    {renderAnchorTree(linkDict)}
                </Anchor>
            }
        </div>
    );
}

// 定义递归PropTypes
const PropLinkNodeShape = {
    /**
     * 节点标题
     */
    title: PropTypes.string,

    /**
     * 节点目标链接地址
     */
    href: PropTypes.string,

    /**
     * 节点链接跳转行为
     */
    target: PropTypes.string
};

const PropLinkNode = PropTypes.shape(PropLinkNodeShape);
PropLinkNodeShape.children = PropTypes.arrayOf(PropLinkNode);
const linkDictPropTypes = PropTypes.arrayOf(PropLinkNode);

AntdAnchor.propTypes = {
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
     * 目录层次数据结构
     */
    linkDict: linkDictPropTypes.isRequired,

    /**
     * 锚点位置，可选项有`'left'`、`'right'`
     * 默认值：`'right'`
     */
    align: PropTypes.oneOf(['left', 'right']),

    /**
     * 锚点目标容器id
     */
    containerId: PropTypes.string,

    /**
     * 锚点位移偏移量，默认同参数offsetTop
     */
    targetOffset: PropTypes.number,

    /**
     * 是否开启固定模式
     * 默认值：`true`
     */
    affix: PropTypes.bool,

    /**
     * 锚点像素边距
     * 默认值：`5`
     */
    bounds: PropTypes.number,

    /**
     * 设置距离窗口顶部触发锚定效果的指定像素偏移量
     */
    offsetTop: PropTypes.number,

    /**
     * 监听锚点节点点击事件
     */
    clickedLink: PropTypes.object,

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

export default AntdAnchor;