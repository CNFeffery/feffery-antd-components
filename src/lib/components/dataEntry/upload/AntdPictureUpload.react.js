import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdPictureUpload = React.lazy(() => import(/* webpackChunkName: "antd_upload" */ '../../../fragments/upload/AntdPictureUpload.react'));

const AntdPictureUpload = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdPictureUpload {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdPictureUpload.propTypes = {
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置文件上传服务的接口url
    apiUrl: PropTypes.string,

    // 设置文件上传服务额外的headers信息
    headers: PropTypes.object,

    // 可选，用于设置已上传完成文件的下载接口，get接口，具有参数taskId、filename
    downloadUrl: PropTypes.string,

    // 设置是否添加图片裁切、旋转预处理功能，默认为false
    editable: PropTypes.bool,

    // 图片裁切、旋转预处理功能的配置参数
    editConfig: PropTypes.exact({
        // 设置裁切区域的宽高比，默认为1，即1:1
        aspect: PropTypes.number,
        // 设置裁切区域形状，可选的有'rect'、'round'，默认为'rect'
        shape: PropTypes.oneOf(['rect', 'round']),
        // 设置是否显示裁切区域辅助网格线，默认为false
        grid: PropTypes.bool,
        // 设置图片质量，默认为0.4，取值范围为0-1
        quality: PropTypes.number,
        // 设置是否启用图片缩放功能，默认为true
        zoom: PropTypes.bool,
        // 设置是否启用图片旋转功能，默认为false
        rotate: PropTypes.bool,
        // 当开启缩放功能时，用于设置最小缩放倍数，默认为1
        minZoom: PropTypes.number,
        // 当开启缩放功能时，用于设置最大缩放倍数，默认为3
        maxZoom: PropTypes.number,
        // 设置编辑弹窗的标题，默认为'编辑图片'
        modalTitle: PropTypes.string,
        // 设置编辑弹窗的宽度，默认为520
        modalWidth: PropTypes.number,
        // 设置编辑弹窗确定按钮的文字内容，默认为'确定'
        modalOk: PropTypes.string,
        // 设置编辑弹窗取消按钮的文字内容，默认为'取消'
        modalCancel: PropTypes.string
    }),

    // 设置已上传文件列表的最大显示长度，默认为3
    fileListMaxLength: PropTypes.number,

    // 设置允许上传的文件后缀名数组，默认为['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'ico', 'tif']
    fileTypes: PropTypes.arrayOf(PropTypes.string),

    // 按钮模式下设置按钮内的文字内容
    buttonContent: PropTypes.node,

    // 设置当前组件生命周期内的上传路径id信息，若未传入则会自动生成uuid
    uploadId: PropTypes.string,

    // 设置文件上传尺寸上限，单位：兆
    fileMaxSize: PropTypes.number,

    // 自定义上传失败文件鼠标悬浮tooltip文字内容，默认为'上传失败'
    failedTooltipInfo: PropTypes.string,

    // 设置已上传图片是否显示删除按钮，默认为true
    showRemoveIcon: PropTypes.bool,

    // 设置已上传图片是否显示预览图标，默认为true
    showPreviewIcon: PropTypes.bool,

    // 设置是否为删除操作添加二次确认模态框，默认为false
    confirmBeforeDelete: PropTypes.bool,

    // 用于设置是否启用进度百分比显示，配合progressProps.format实现更多配置功能
    // 默认为false
    showPercent: PropTypes.bool,

    // 用于配置进度条相关参数
    progressProps: PropTypes.exact({
        // 设置进度条的颜色，与css接受的颜色值格式相同
        strokeColor: PropTypes.oneOfType([
            PropTypes.string,
            // 配置渐变色
            PropTypes.exact({
                // 配置开始颜色
                from: PropTypes.string,

                // 配置结束颜色
                to: PropTypes.string
            })
        ]),

        // 配置进度条线像素宽度
        strokeWidth: PropTypes.number,

        // 自定义提示格式
        format: PropTypes.exact({
            // 设置前缀文字，默认为''
            prefix: PropTypes.string,

            // 设置后缀文字，默认为'%'
            suffix: PropTypes.string
        })
    }),

    // 设置是否在每次文件上传成功后，弹出提示消息，默认为true
    showSuccessMessage: PropTypes.bool,

    // 设置是否在每次文件上传失败后，弹出提示消息，默认为true
    showErrorMessage: PropTypes.bool,

    // 用于在每次文件上传动作完成后，记录相关的信息
    lastUploadTaskRecord: PropTypes.oneOfType([
        // 单文件
        PropTypes.exact({
            // 记录文件名称
            fileName: PropTypes.string,

            // 记录文件大小
            fileSize: PropTypes.number,

            // 记录完成时间戳信息
            completeTimestamp: PropTypes.number,

            // 记录此次上传任务的状态信息，'success'表示成功，'failed'表示失败
            taskStatus: PropTypes.string,

            // 记录本次任务的id信息，若最近一次任务状态为'failed'，则不会携带此信息
            taskId: PropTypes.string

        }),
        // 文件夹或多文件上传
        PropTypes.arrayOf(
            PropTypes.exact({
                // 记录文件名称
                fileName: PropTypes.string,

                // 记录文件大小
                fileSize: PropTypes.number,

                // 记录完成时间戳信息
                completeTimestamp: PropTypes.number,

                // 记录此次上传任务的状态信息，'success'表示成功，'failed'表示失败
                taskStatus: PropTypes.string,

                // 记录本次任务的id信息，若最近一次任务状态为'failed'，则不会携带此信息
                taskId: PropTypes.string

            })
        )
    ]),

    // 用于在每次的上传任务完成后，更新当前文件列表中全部文件的上传信息
    listUploadTaskRecord: PropTypes.arrayOf(
        PropTypes.exact({
            // 记录文件名称
            fileName: PropTypes.string,

            // 记录文件大小
            fileSize: PropTypes.number,

            // 记录完成时间戳信息
            completeTimestamp: PropTypes.number,

            // 记录此次上传任务的状态信息，'success'表示成功，'failed'表示失败
            taskStatus: PropTypes.string,

            // 记录本次任务的id信息，若最近一次任务状态为'failed'，则不会携带此信息
            taskId: PropTypes.string,

            // 唯一标识当前任务的uuid信息，前端生成与后端无关
            uid: PropTypes.string,

            url: PropTypes.string
        })
    ),

    // 仅作初始化展示用，用于定义组件初始化时已存在在上传列表中的附件信息
    defaultFileList: PropTypes.arrayOf(
        PropTypes.exact({
            // 文件名称
            name: PropTypes.string,

            // 文件状态，可选的有'done'、'error'、'removed'
            status: PropTypes.oneOf(['done', 'error', 'removed']),

            // 唯一标识当前任务的uuid信息
            uid: PropTypes.any,

            // 可选，用于渲染当前文件的下载链接
            url: PropTypes.string,

            // 标识当前任务的taskId，若设置，则默认会被作为当前组件的uploadId使用
            taskId: PropTypes.string,

            // 可选，记录文件大小
            fileSize: PropTypes.number
        })
    ),

    // 设置是否禁用当前组件，默认为false
    disabled: PropTypes.bool,

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

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
AntdPictureUpload.defaultProps = {
    disabled: false,
    editable: false,
    fileTypes: ['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'ico', 'tif'],
    fileListMaxLength: null,
    fileMaxSize: 10,
    showRemoveIcon: true,
    showPreviewIcon: true,
    confirmBeforeDelete: false,
    showPercent: false,
    showSuccessMessage: true,
    showErrorMessage: true,
    lastUploadTaskRecord: null,
    listUploadTaskRecord: [],
    locale: 'zh-cn'
}

export default AntdPictureUpload;

export const propTypes = AntdPictureUpload.propTypes;
export const defaultProps = AntdPictureUpload.defaultProps;