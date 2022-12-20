import React from 'react';
import PropTypes from 'prop-types';
import useCss from '../hooks/useCss';
import { isString } from 'lodash';
import { Anchor } from 'antd';

const { Link } = Anchor;

// 定义锚点组件AntdAnchor，api参数参考https://ant.design/components/anchor-cn/
const AntdAnchor = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        linkDict,
        align,
        containerId,
        targetOffset,
        affix,
        bounds,
        offsetTop,
        loading_state,
        setProps
    } = props;

    const renderAnchorTree = (obj) => {
        // 当anchorObj类型为对象时
        if (obj.hasOwnProperty('href')) {
            //当anchorObj具有children属性时
            if (obj.hasOwnProperty('children')) {

                obj = <Link
                    href={obj.href}
                    title={obj.title}
                >
                    {renderAnchorTree(obj.children)}
                </Link>

            } else {

                obj = <Link
                    href={obj.href}
                    title={obj.title}
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
            style={{ float: align }}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
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
                    getContainer={containerId ? (
                        document.getElementById(containerId) ? () => document.getElementById(containerId) : undefined
                    ) : undefined}
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
    // 标题
    title: PropTypes.string.isRequired,

    // 对应所绑定页面内锚点的id
    href: PropTypes.string.isRequired
};

const PropLinkNode = PropTypes.shape(PropLinkNodeShape);
PropLinkNodeShape.children = PropTypes.arrayOf(PropLinkNode);
const linkDictPropTypes = PropTypes.arrayOf(PropLinkNode);

// 定义参数或属性
AntdAnchor.propTypes = {
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

    // 用于构造目录层次结构的json字典
    linkDict: linkDictPropTypes.isRequired,

    // 控制锚点组件位置，'left'代表靠左侧，'right'代表靠右侧，默认为'right'
    align: PropTypes.oneOf(['left', 'right']),

    // 设置其绑定的容器id
    containerId: PropTypes.string,

    // 设置锚点位移偏移量，默认与offsetTop相同
    targetOffset: PropTypes.number,

    // 设置是否开启“固定模式”，默认为true
    affix: PropTypes.bool,

    // 设置锚点区域的边界像素大小，默认为5
    bounds: PropTypes.number,

    // 设置距离窗口顶部触发锚定效果的指定像素偏移量
    offsetTop: PropTypes.number,

    // 监听锚点被点击事件
    clickedLink: PropTypes.object,

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
AntdAnchor.defaultProps = {
    align: 'right'
}

export default AntdAnchor;