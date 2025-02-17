import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDraggerUpload = React.lazy(() => import(/* webpackChunkName: "upload" */ '../../../fragments/upload/AntdDraggerUpload.react'));

/**
 * 文件拖拽上传组件AntdDraggerUpload
 */
const AntdDraggerUpload = ({
    id,
    className,
    style,
    draggerClassName,
    draggerStyle,
    key,
    name,
    locale = 'zh-cn',
    apiUrl,
    apiUrlExtraParams,
    headers,
    withCredentials = false,
    withOriginFileObj = false,
    downloadUrl,
    downloadUrlExtraParams,
    downloadUrlFromBackend = false,
    icon,
    text,
    hint,
    uploadId,
    fileListMaxLength = null,
    fileTypes,
    fileMaxSize = 500,
    showUploadList = true,
    multiple = false,
    directory = false,
    failedTooltipInfo,
    confirmBeforeDelete = false,
    showPercent = false,
    progressProps,
    showSuccessMessage = true,
    showErrorMessage = true,
    listUploadTaskRecord = [],
    defaultFileList,
    disabled = false,
    status,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDraggerUpload {
                ...{
                    id,
                    className,
                    style,
                    draggerClassName,
                    draggerStyle,
                    key,
                    name,
                    locale,
                    apiUrl,
                    apiUrlExtraParams,
                    headers,
                    withCredentials,
                    withOriginFileObj,
                    downloadUrl,
                    downloadUrlExtraParams,
                    downloadUrlFromBackend,
                    icon,
                    text,
                    hint,
                    uploadId,
                    fileListMaxLength,
                    fileTypes,
                    fileMaxSize,
                    showUploadList,
                    multiple,
                    directory,
                    failedTooltipInfo,
                    confirmBeforeDelete,
                    showPercent,
                    progressProps,
                    showSuccessMessage,
                    showErrorMessage,
                    listUploadTaskRecord,
                    defaultFileList,
                    disabled,
                    status,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdDraggerUpload.propTypes = {
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
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 拖拽区域css类名，支持[动态css](/advanced-classname)
     */
    draggerClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 拖拽区域css样式
     */
    draggerStyle: PropTypes.object,

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 文件上传服务接口地址
     */
    apiUrl: PropTypes.string,

    /**
     * 文件上传服务接口额外参数
     */
    apiUrlExtraParams: PropTypes.object,

    /**
     * 文件上传服务接口额外headers参数
     */
    headers: PropTypes.object,

    /**
     * 是否在请求上传服务接口时自动携带cookies等凭据信息
     * 默认值：`false`
     */
    withCredentials: PropTypes.bool,

    /**
     * `listUploadTaskRecord`监听结果中是否额外记录浏览器原生`originFileObj`相关信息
     * 默认值：`false`
     */
    withOriginFileObj: PropTypes.bool,

    /**
     * 对应已上传文件的`GET`类型下载服务接口地址，自带参数`taskId`、`filename`
     */
    downloadUrl: PropTypes.string,

    /**
     * 配合`downloadUrl`参数，设置文件下载服务接口额外参数
     */
    downloadUrlExtraParams: PropTypes.object,

    /**
     * 是否将文件上传接口返回信息中的`url`属性作为下载链接地址
     * 默认值：`false`
     */
    downloadUrlFromBackend: PropTypes.bool,

    /**
     * 组件型，自定义上传图标
     */
    icon: PropTypes.node,

    /**
     * 组件型，上传区域主要文字说明内容
     */
    text: PropTypes.node,

    /**
     * 组件型，上传区域次要文字说明内容
     */
    hint: PropTypes.node,

    /**
     * 限制已上传文件列表长度上限
     */
    fileListMaxLength: PropTypes.number,

    /**
     * 允许上传的文件后缀名列表，默认不限制
     */
    fileTypes: PropTypes.arrayOf(PropTypes.string),

    /**
     * 自定义当前组件发起文件上传请求时携带的`uploadId`参数，可用于辅助后端创建文件上传所在文件夹
     */
    uploadId: PropTypes.string,

    /**
     * 文件上传尺寸上限，单位：兆
     */
    fileMaxSize: PropTypes.number,

    /**
     * 是否开启多文件上传模式
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 是否开启文件夹上传模式
     * 默认值：`false`
     */
    directory: PropTypes.bool,

    /**
     * 文件上传失败消息提示文字内容
     * 默认值：`'上传失败'`
     */
    failedTooltipInfo: PropTypes.string,

    /**
     * 是否显示已上传文件列表
     * 默认值：`true`
     */
    showUploadList: PropTypes.bool,

    /**
     * 是否为已上传文件删除操作添加二次确认模态框
     * 默认值：`false`
     */
    confirmBeforeDelete: PropTypes.bool,

    /**
     * 是否显示上传进度条
     * 默认值：`false`
     */
    showPercent: PropTypes.bool,

    /**
     * 配置上传进度条相关参数
     */
    progressProps: PropTypes.exact({
        /**
         * 进度条颜色
         */
        strokeColor: PropTypes.oneOfType([
            PropTypes.string,
            /**
             * 配置渐变色
             */
            PropTypes.exact({
                /**
                 * 渐变色开始颜色
                 */
                from: PropTypes.string,
                /**
                 * 渐变色结束颜色
                 */
                to: PropTypes.string
            })
        ]),
        /**
         * 进度条像素宽度
         */
        strokeWidth: PropTypes.number,
        /**
         * 进度文字格式
         */
        format: PropTypes.exact({
            /**
             * 进度文字前缀内容
             */
            prefix: PropTypes.string,
            /**
             * 进度文字后缀内容
             * 默认值：`'%'`
             */
            suffix: PropTypes.string
        })
    }),

    /**
     * 是否在每个文件上传成功后，分别弹出消息提示
     * 默认值：`true`
     */
    showSuccessMessage: PropTypes.bool,

    /**
     * 是否在每个文件上传失败后，分别弹出消息提示
     * 默认值：`true`
     */
    showErrorMessage: PropTypes.bool,

    /**
     * 监听最近一次文件上传任务相关信息
     */
    lastUploadTaskRecord: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 文件名称
             */
            fileName: PropTypes.string,
            /**
             * 文件大小
             */
            fileSize: PropTypes.number,
            /**
             * 上传完成时间戳
             */
            completeTimestamp: PropTypes.number,
            /**
             * 上传任务状态，`'success'`表示成功，`'failed'`表示失败
             */
            taskStatus: PropTypes.string,
            /**
             * 上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息
             */
            taskId: PropTypes.string,
            /**
             * 当前文件的下载链接
             */
            url: PropTypes.string,
            /**
             * 上传任务的接口响应信息
             */
            uploadResponse: PropTypes.any
        }),
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * 文件名称
                 */
                fileName: PropTypes.string,
                /**
                 * 文件大小
                 */
                fileSize: PropTypes.number,
                /**
                 * 上传完成时间戳
                 */
                completeTimestamp: PropTypes.number,
                /**
                 * 上传任务状态，`'success'`表示成功，`'failed'`表示失败
                 */
                taskStatus: PropTypes.string,
                /**
                 * 上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息
                 */
                taskId: PropTypes.string,
                /**
                 * 当前文件的下载链接
                 */
                url: PropTypes.string,
                /**
                 * 上传任务的接口响应信息
                 */
                uploadResponse: PropTypes.any
            })
        )
    ]),

    /**
     * 监听当前已上传文件列表中上传任务相关信息
     */
    listUploadTaskRecord: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 文件名称
             */
            fileName: PropTypes.string,
            /**
             * 文件大小
             */
            fileSize: PropTypes.number,
            /**
             * 上传完成时间戳
             */
            completeTimestamp: PropTypes.number,
            /**
             * 上传任务状态，`'success'`表示成功，`'failed'`表示失败
             */
            taskStatus: PropTypes.string,
            /**
             * 上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息
             */
            taskId: PropTypes.string,
            /**
             * 当前文件上传唯一识别id，前端自动生成
             */
            uid: PropTypes.string,
            /**
             * 当前文件下载链接
             */
            url: PropTypes.string,
            /**
             * 上传任务的接口响应信息
             */
            uploadResponse: PropTypes.any,
            /**
             * 当`withOriginFileObj=True`时，监听当前文件上传任务对应的`originFileObj`主要信息
             */
            originFileObj: PropTypes.any
        })
    ),

    /**
     * 初始化文件列表展示信息
     */
    defaultFileList: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前文件名称
             */
            name: PropTypes.string,
            /**
             * 当前文件展示状态，可选项有`'done'`、`'error'`、`'removed'`
             */
            status: PropTypes.oneOf(['done', 'error', 'removed']),
            /**
             * 当前文件唯一识别id
             */
            uid: PropTypes.any,
            /**
             * 当前文件下载链接
             */
            url: PropTypes.string,
            /**
             * 若传入有效值，将作为当前组件的`uploadId`参数
             */
            taskId: PropTypes.string,
            /**
             * 当前文件大小
             */
            fileSize: PropTypes.number
        })
    ),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

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

export default AntdDraggerUpload;

export const propTypes = AntdDraggerUpload.propTypes;
export const defaultProps = AntdDraggerUpload.defaultProps;