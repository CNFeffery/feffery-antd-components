import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Upload, message, Button, Modal, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { str2Locale, locale2text } from '../locales.react';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';


// 解析历史任务完成时间信息
const parseHistoryTaskCompleteTime = (e) => {
    let uid2CompleteTime = new Map()
    e.forEach((item) => {
        uid2CompleteTime.set(item.uid, item.completeTimestamp)
    })
    return uid2CompleteTime
}

const uploadStatus2Style = new Map([
    ['warning', {
        border: "1px solid #faad14",
        borderRadius: "2px",
        padding: "6px 10px",
        transition: "border 0.3s"
    }],
    ['error', {
        border: "1px solid #ff4d4f",
        borderRadius: "2px",
        padding: "6px 10px",
        transition: "border 0.3s"
    }]
])

// 定义文件上传组件AntdUpload，api参数参考https://ant.design/components/upload-cn/
const AntdUpload = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        apiUrl,
        downloadUrl,
        uploadId,
        fileListMaxLength,
        buttonContent,
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
        loading_state,
        setProps
    } = props;

    listUploadTaskRecord = listUploadTaskRecord || []

    // 更新已上传文件 -> 上传完成时间映射字典
    const uploadedFile2CompleteTime = parseHistoryTaskCompleteTime(listUploadTaskRecord)

    useEffect(() => {
        // 初始化uploadId
        if (!uploadId) {
            setProps({ uploadId: uuidv4() })
        }
    }, [])

    const [fileList, updateFileList] = useState(defaultFileList || listUploadTaskRecord.map((item) => {
        return {
            name: item.fileName,
            status: item.taskStatus,
            uid: item.uid,
            url: item.url
        };
    }));

    let uploadProps = {
        name: 'file',
        action: apiUrl + `?uploadId=${uploadId}`,
        data: {
            uploadId: uploadId
        },
        beforeUpload: (file) => {
            const sizeCheck = file.size / 1024 / 1024 < fileMaxSize;
            if (!sizeCheck) {
                message.error(`${file.name} 文件大小超出${fileMaxSize}MB限制！`);
            }

            if (fileTypes) {
                if (fileTypes.indexOf(file.name.split('.')[file.name.split('.').length - 1]) === -1) {
                    message.error(`上传失败，${file.name} 文件格式不符合要求！`);
                }

                return sizeCheck && fileTypes.indexOf(file.name.split('.')[file.name.split('.').length - 1]) !== -1;
            }

            return sizeCheck;
        },
        onChange(info) {

            // 计算最近一次任务的子任务数量
            let lastTaskCount
            if (info.file.status === 'removed') {
                lastTaskCount = 0
            } else {
                lastTaskCount = info.fileList.length - listUploadTaskRecord.length;
            }

            // 当上传模式为multiple或directory时
            if (multiple || directory) {
                // 若当前事件为removed
                if (info.file.status === 'removed') {

                    // 更新任务记录
                    setProps({
                        listUploadTaskRecord: info.fileList.map(
                            (file) => {
                                // 配置已完成上传文件下载链接
                                let urlInfo = downloadUrl && file.status === 'done' ? {
                                    url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}`
                                } : {}
                                return {
                                    fileName: file.name,
                                    fileSize: file.size,
                                    completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                                    taskStatus: file.status === 'done' ? 'success' : 'failed',
                                    taskId: uploadId,
                                    uid: file.uid,
                                    ...urlInfo
                                }
                            }
                        )
                    })
                } else {
                    // 其他常规事件
                    // 判断此次任务所有文件是否已上传结束（done或error）
                    if (info.fileList.slice(-lastTaskCount).every(file => file.status !== 'uploading')) {

                        if (info.fileList.slice(-lastTaskCount).every(file => !file.status)) {
                        } else {
                            if (lastTaskCount > 0) {

                                // 更新任务记录
                                setProps({
                                    lastUploadTaskRecord: info.fileList.slice(-lastTaskCount).map(
                                        (file) => {
                                            return {
                                                fileName: file.name,
                                                fileSize: file.size,
                                                completeTimestamp: new Date().getTime(),
                                                taskStatus: file.status === 'done' ? 'success' : 'failed',
                                                taskId: uploadId
                                            }
                                        }
                                    ),
                                    listUploadTaskRecord: info.fileList.map(
                                        (file) => {
                                            // 配置已完成上传文件下载链接
                                            let urlInfo = downloadUrl && file.status === 'done' ? {
                                                url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}`
                                            } : {}
                                            return {
                                                fileName: file.name,
                                                fileSize: file.size,
                                                completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                                                taskStatus: file.status === 'done' ? 'success' : 'failed',
                                                taskId: uploadId,
                                                uid: file.uid,
                                                ...urlInfo
                                            }
                                        }
                                    )
                                })
                            }
                        }
                    }
                }
            } else {
                // 单文件上传模式
                // 若当前事件为removed
                if (info.file.status === 'removed') {

                    // 更新任务记录
                    setProps({
                        listUploadTaskRecord: info.fileList.map(
                            (file) => {
                                // 配置已完成上传文件下载链接
                                let urlInfo = downloadUrl && file.status === 'done' ? {
                                    url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}`
                                } : {}
                                return {
                                    fileName: file.name,
                                    fileSize: file.size,
                                    completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                                    taskStatus: file.status === 'done' ? 'success' : 'failed',
                                    taskId: uploadId,
                                    uid: file.uid,
                                    ...urlInfo
                                }
                            }
                        )
                    })
                } else if (info.file.status === 'done' || info.file.status === 'error' || !info.file.status) {
                    setProps({
                        lastUploadTaskRecord: {
                            fileName: info.file.name,
                            fileSize: info.file.size,
                            completeTimestamp: new Date().getTime(),
                            taskStatus: info.file.status === 'done' ? 'success' : 'failed',
                            taskId: uploadId
                        },
                        listUploadTaskRecord: info.fileList.map(
                            (file) => {
                                // 配置已完成上传文件下载链接
                                let urlInfo = downloadUrl && file.status === 'done' ? {
                                    url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}`
                                } : {}
                                return {
                                    fileName: file.name,
                                    fileSize: file.size,
                                    completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                                    taskStatus: file.status === 'done' ? 'success' : 'failed',
                                    taskId: uploadId,
                                    uid: file.uid,
                                    ...urlInfo
                                }
                            }
                        )
                    })
                }
            }

            if (info.file.status === 'done' && showSuccessMessage) {
                message.success(`${info.file.name} 上传成功！`);
            } else if (info.file.status === 'error' && showErrorMessage) {
                message.error(`${info.file.name} 上传失败！`);
            }

            // 获取当前上传文件列表
            let _fileList = [...info.fileList];

            // 是否限制上传记录列表最大数量
            if (fileListMaxLength) {
                _fileList = _fileList.slice(-fileListMaxLength);
            }

            if (lastTaskCount !== 0) {
                _fileList = _fileList.slice(0, _fileList.length - lastTaskCount)
                    .concat(
                        _fileList.slice(-lastTaskCount).map(
                            item => {
                                if (item.status === 'error' || !item.status) {

                                    item.status = 'error'
                                    item.response = failedTooltipInfo ? failedTooltipInfo : '上传失败'
                                }
                                return item
                            }
                        )
                    )
            }

            if (downloadUrl) {
                updateFileList(
                    _fileList.map(
                        item => {
                            return {
                                ...item,
                                url: downloadUrl + `?taskId=${uploadId}&filename=${item.name}`
                            }
                        }
                    )
                )
            } else {
                updateFileList(_fileList)
            }
        }
    };

    // 添加accept参数
    if (fileTypes && fileTypes.length != 0) {

        Object.assign(uploadProps, { accept: '.' + fileTypes.join(',.') })
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <div id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={{
                    border: "1px solid transparent",
                    transition: "border 0.3s",
                    ...uploadStatus2Style.get(status),
                    ...style
                }}
                key={key}>
                <Upload {...uploadProps}
                    fileList={fileList}
                    multiple={multiple}
                    showUploadList={showUploadList}
                    directory={directory}
                    disabled={disabled}
                    progress={
                        progressProps || showPercent ?
                            {
                                strokeColor: progressProps && progressProps.strokeColor,
                                strokeWidth: (progressProps && progressProps.strokeWidth) || 2,
                                format: (
                                    showPercent ? (
                                        (percent) => percent && `${(progressProps && progressProps.prefix) || ''}${parseFloat(percent.toFixed(1))}${(progressProps && progressProps.suffix) || '%'}`
                                    ) :
                                        undefined
                                )
                            } :
                            undefined
                    }
                    onRemove={
                        confirmBeforeDelete ?
                            () => {
                                return new Promise((resolve, reject) => {
                                    Modal.confirm({
                                        title: locale2text.AntdPictureUpload[locale].confirmBeforeDeleteTitle,
                                        okText: locale2text.AntdPictureUpload[locale].confirmBeforeDeleteOkText,
                                        cancelText: locale2text.AntdPictureUpload[locale].confirmBeforeDeleteCancelText,
                                        onOk: () => {
                                            resolve(true);
                                        },

                                    });
                                });
                            } :
                            undefined
                    }
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                    <Button icon={<UploadOutlined />} disabled={disabled}>
                        {buttonContent ? buttonContent : "点击上传文件"}
                    </Button>
                </Upload>
            </div>
        </ConfigProvider>
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置文件上传服务的接口url
    apiUrl: PropTypes.string,

    // 可选，用于设置已上传完成文件的下载接口，get接口，具有参数taskId、filename
    downloadUrl: PropTypes.string,

    // 设置已上传文件列表的最大显示长度，默认为3
    fileListMaxLength: PropTypes.number,

    // 设置允许上传的文件后缀名数组
    fileTypes: PropTypes.arrayOf(PropTypes.string),

    // 按钮模式下设置按钮内的文字内容
    buttonContent: PropTypes.node,

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
            url: PropTypes.string
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
    locale: 'zh-cn'
}

export default AntdUpload;
