import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as jsonx from 'jsonx';
import { Anchor } from 'antd';
import 'antd/dist/antd.css';

const { Link } = Anchor;

// 定义分割线部件AntdAnchor，api参数参考https://ant.design/components/anchor-cn/
export default class AntdAnchor extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            linkDict,
            align,
            containerId,
            targetOffset,
            loading_state
        } = this.props;


        function renderAnchorTree(obj) {
            // 当anchorObj类型为字典时
            if (obj.hasOwnProperty('href')) {
                //当anchorObj具有children属性时
                if (obj.hasOwnProperty('children')) {

                    obj = {
                        component: Link,
                        props: {
                            href: obj.href,
                            title: obj.title
                        },
                        children: renderAnchorTree(obj.children)
                    }

                } else {

                    obj = {
                        component: Link,
                        props: {
                            href: obj.href,
                            title: obj.title
                        },
                    }
                }

            } else {
                for (let i = 0; i < obj.length; i++) {
                    obj[i] = renderAnchorTree(obj[i])
                }
            }

            return obj;
        }

        linkDict = renderAnchorTree(linkDict)

        return (
            <div
                style={{ float: align }}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {
                    jsonx.getReactElement(
                        {
                            component: Anchor,
                            props: {
                                id: id,
                                className: className,
                                style: style,
                                getContainer: containerId ? () => document.getElementById(containerId) : containerId,
                                targetOffset: targetOffset
                            },
                            children: linkDict
                        }
                    )
                }
            </div>
        );
    }
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
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于构造目录层次结构的json字典
    linkDict: linkDictPropTypes.isRequired,

    // 控制锚点部件位置，'left'代表靠左侧，'right'代表靠右侧，默认为'right'
    align: PropTypes.oneOf(['left', 'right']),

    // 设置其绑定的容器id
    containerId: PropTypes.string,

    // 设置锚点位移偏移量
    targetOffset: PropTypes.number,

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
