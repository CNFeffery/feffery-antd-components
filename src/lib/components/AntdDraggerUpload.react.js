import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Upload, message, ConfigProvider } from 'antd';
import AntdIcon from './AntdIcon.react';
import { str2Locale } from './locales.react';
import 'antd/dist/antd.css';

const uuid = uuidv4();

const { Dragger } = Upload;

// 定义文件拖拽上传组件AntdDraggerUpload，api参数参考https://ant.design/components/upload-cn/
const AntdDraggerUpload = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        locale,
        apiUrl,
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
        loading_state,
        setProps
    } = props;

    uploadId = uploadId || uuid;

    const [fileList, updateFileList] = useState([]);
    const [lastFileError, updateLastFileError] = useState(false);

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
                updateLastFileError(!sizeCheck || fileTypes.indexOf(file.name.split('.')[file.name.split('.').length - 1]) === -1)
                return sizeCheck && fileTypes.indexOf(file.name.split('.')[file.name.split('.').length - 1]) !== -1;
            }

            updateLastFileError(!sizeCheck)
            return sizeCheck;
        },
        onChange(info) {

            if (info.file.status === 'done') {

                // 检查是否为多文件上传模式
                if (multiple || directory) {
                    // 检查上传列表中是否全部文件都已完成上传
                    if (info.fileList.every(file => file.status === 'done')) {
                        console.log(info.fileList)
                        // 更新任务记录
                        setProps({
                            lastUploadTaskRecord: info.fileList.map(
                                (file) => {
                                    return {
                                        fileName: file.name,
                                        fileSize: file.size,
                                        completeTimestamp: new Date().getTime(),
                                        taskStatus: 'success',
                                        taskId: uploadId
                                    }
                                }
                            )
                        })
                    }
                } else {
                    // 更新任务记录
                    setProps({
                        lastUploadTaskRecord: {
                            fileName: info.file.name,
                            fileSize: info.file.size,
                            completeTimestamp: new Date().getTime(),
                            taskStatus: 'success',
                            taskId: uploadId
                        }
                    })
                }
                message.success(`${info.file.name} 上传成功！`);
            } else if (info.file.status === 'error') {

                // 更新任务记录
                setProps({
                    lastUploadTaskRecord: {
                        fileName: info.file.name,
                        fileSize: info.file.size,
                        completeTimestamp: new Date().getTime(),
                        taskStatus: 'failed'
                    }
                })
                message.error(`${info.file.name} 上传失败！`);
            }

            if (lastFileError && info.fileList.length !== 0) {
                info.fileList[info.fileList.length - 1].status = 'error'

                updateLastFileError(false)
            }

            info.fileList = info.fileList.map(
                item => {
                    if (item.status === 'error') {
                        item.response = failedTooltipInfo ? failedTooltipInfo : '上传失败'
                    }
                    return item
                }
            )

            // 基于fileListMaxLength参数设置，对fileList状态进行更新
            if (fileListMaxLength) {
                updateFileList(info.fileList.slice(-fileListMaxLength))
            } else {
                updateFileList(info.fileList)
            }
        },
    };

    // 添加accept参数
    if (fileTypes && fileTypes.length != 0) {

        Object.assign(uploadProps, { accept: '.' + fileTypes.join(',.') })
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <div id={id}
                className={className}
                style={style}>
                <Dragger
                    fileList={fileList}
                    multiple={multiple}
                    directory={directory}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        {<AntdIcon icon={'antd-cloud-upload'} />}
                    </p>
                    <p className="ant-upload-text">{text}</p>
                    <p className="ant-upload-hint">
                        {hint}
                    </p>
                </Dragger>
            </div>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdDraggerUpload.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置文件上传服务的接口url
    apiUrl: PropTypes.string,

    // 设置上传区域主要文字说明内容
    text: PropTypes.string,

    // 设置上传区域次要文字说明内容
    hint: PropTypes.string,

    // 设置已上传文件列表的最大显示长度，默认为3
    fileListMaxLength: PropTypes.number,

    // 设置允许上传的文件后缀名数组，默认为[]即不限制
    fileTypes: PropTypes.arrayOf(PropTypes.string),

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

    // 用于在每次文件上传动作完成后，记录相关的信息
    lastUploadTaskRecord: PropTypes.exact({
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
AntdDraggerUpload.defaultProps = {
    fileListMaxLength: null,
    fileMaxSize: 500,
    lastUploadTaskRecord: {},
    locale: 'zh-cn'
}

export default AntdDraggerUpload;
