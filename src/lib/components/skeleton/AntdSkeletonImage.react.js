/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';

// 定义骨骼屏图片占位图组件AntdSkeletonImage
const AntdSkeletonImage = (props) => {

    // 取得必要属性或参数
    const {
        id,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <Skeleton.Image id={id}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
AntdSkeletonImage.propTypes = {
    // 组件id
    id: PropTypes.string,

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
AntdSkeletonImage.defaultProps = {
}

export default React.memo(AntdSkeletonImage);