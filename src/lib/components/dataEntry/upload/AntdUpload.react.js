import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdUpload = React.lazy(() => import(/* webpackChunkName: "upload" */ '../../../fragments/upload/AntdUpload.react'));

const AntdUpload = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdUpload {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdUpload.propTypes = {
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

    /**
     * 用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名
     * 缺省时会以id作为字段名
     */
    name: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置文件上传服务的接口url
    apiUrl: PropTypes.string,

    // 设置文件上传服务所需额外参数
    apiUrlExtraParams: PropTypes.object,

    // 设置文件上传服务额外的headers信息
    headers: PropTypes.object,

    // 可选，设置上传请求时是否携带凭据信息如cookie，当上传接口与前端页面同域时，该参数设置无效，参考https://juejin.cn/post/7163597193058729998
    withCredentials: PropTypes.bool,

    /**
     * listUploadTaskRecord信息中是否记录浏览器原生originFileObj相关信息
     * 默认值：`false`
     */
    withOriginFileObj: PropTypes.bool,

    // 可选，用于设置已上传完成文件的下载接口，get接口，具有参数taskId、filename
    downloadUrl: PropTypes.string,

    // 可选，用于配合downloadUrl参数，设置除参数taskId、filename以外的其他请求参数
    downloadUrlExtraParams: PropTypes.object,

    // 可选，用于设置已上传完成文件的自定义后端下载接口，get接口，接口响应必须要有url参数
    downloadUrlFromBackend: PropTypes.bool,

    // 设置已上传文件列表的最大显示长度，默认为3
    fileListMaxLength: PropTypes.number,

    // 设置允许上传的文件后缀名数组
    fileTypes: PropTypes.arrayOf(PropTypes.string),

    /**
     * 自定义下载按钮内容
     */
    buttonContent: PropTypes.node,

    /**
     * 自定义下载按钮前缀图标
     */
    buttonIcon: PropTypes.node,

    // 配置上传按钮常用参数
    buttonProps: PropTypes.exact({
        // 设置按钮尺寸规格，可选的有'default'/'small'/'large'
        size: PropTypes.oneOf(['default', 'small', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool,

        // 设置按钮是否宽度撑满父元素
        // 默认：false
        block: PropTypes.bool,

        // 设置按钮的css样式
        style: PropTypes.object,

        // 设置按钮的css类名
        className: PropTypes.string
    }),

    // 设置当前组件生命周期内的上传路径id信息，若未传入则会自动生成uuid
    uploadId: PropTypes.string,

    // 设置 文件上传尺寸上限，单位：兆
    fileMaxSize: PropTypes.number,

    // 设置是否开启多文件上传模式，默认为false
    multiple: PropTypes.bool,

    // 设置是否开启文件夹上传模式，默认为false
    directory: PropTypes.bool,

    // 自定义上传失败文件鼠标悬浮tooltip文字内容，默认为'上传失败'
    failedTooltipInfo: PropTypes.string,

    // 设置是否显示已上传文件列表，默认为true
    showUploadList: PropTypes.bool,

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
            taskId: PropTypes.string,

            url: PropTypes.string,

            // 记录本次上传的接口响应信息
            uploadResponse: PropTypes.any
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
                taskId: PropTypes.string,

                url: PropTypes.string,

                // 记录本次上传的接口响应信息
                uploadResponse: PropTypes.any
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

            url: PropTypes.string,

            // 记录本次上传的接口响应信息
            uploadResponse: PropTypes.any,

            /**
             * 监听当前文件上传任务对应的originFileObj主要信息
             */
            originFileObj: PropTypes.any
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
AntdUpload.defaultProps = {
    disabled: false,
    multiple: false,
    directory: false,
    showUploadList: true,
    fileListMaxLength: null,
    fileMaxSize: 500,
    confirmBeforeDelete: false,
    showPercent: false,
    showSuccessMessage: true,
    showErrorMessage: true,
    lastUploadTaskRecord: null,
    listUploadTaskRecord: [],
    downloadUrlExtraParams: {},
    downloadUrlFromBackend: false,
    withCredentials: false,
    withOriginFileObj: false,
    locale: 'zh-cn'
}

export default AntdUpload;

export const propTypes = AntdUpload.propTypes;
export const defaultProps = AntdUpload.defaultProps;