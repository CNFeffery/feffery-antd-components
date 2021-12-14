import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Empty, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义空状态组件AntdEmpty，api参数参考https://ant.design/components/empty-cn/
export default class AntdEmpty extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            description,
            image,
            imageStyle,
            setProps,
            loading_state
        } = this.props;

        return (
            <ConfigProvider locale={zhCN}>
                <Empty id={id}
                    className={className}
                    style={style}
                    description={description}
                    image={image}
                    imageStyle={imageStyle}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    } />
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdEmpty.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置描述文字内容
    description: PropTypes.string,

    // 设置自定义图片的url地址，默认为内建图片
    image: PropTypes.string,

    // 设置自定义图片的css样式
    imageStyle: PropTypes.object,

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
AntdEmpty.defaultProps = {
}
