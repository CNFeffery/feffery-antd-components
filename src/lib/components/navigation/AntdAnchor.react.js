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

/**
 * 锚点组件AntdAnchor
 */
const AntdAnchor = ({
    id,
    className,
    style,
    key,
    linkDict,
    direction = 'vertical',
    align = 'right',
    containerId,
    targetOffset,
    affix = true,
    bounds = 5,
    offsetTop,
    replace = false,
    currentAnchor,
    setProps,
    ...others
}) => {

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
                    items={linkDict}
                    direction={direction}
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
                    offsetTop={offsetTop}
                    replace={replace}
                    getCurrentAnchor={
                        currentAnchor ? () => currentAnchor : undefined
                    } />
            }
        </div>
    );
}

// 定义递归PropTypes
const PropLinkNodeShape = {
    /**
     * 节点唯一识别id
     */
    key: PropTypes.string,
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
     * 导航方向，可选项有`'vertical'`、`'horizontal'`，其中`'horizontal'`方向下不支持子目录
     * 默认值：`'vertical'`
     */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

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
     * 设置为`true`后，浏览器后退或前进时，不会跳转到锚点地址
     * 默认值：`false`
     */
    replace: PropTypes.bool,

    /**
     * 强制指定当前处于高亮状态的锚点链接
     */
    currentAnchor: PropTypes.string,

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