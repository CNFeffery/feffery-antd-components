import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Upload, message, Modal, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { str2Locale } from './locales.react';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';

const uuid = uuidv4();

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// 定义图片上传组件AntdPictureUpload，api参数参考https://ant.design/components/upload-cn/
const AntdPictureUpload = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        locale,
        apiUrl,
        editable,
        editConfig,
        uploadId,
        fileListMaxLength,
        buttonContent,
        fileTypes,
        fileMaxSize,
        failedTooltipInfo,
        listUploadTaskRecord,
        loading_state,
        setProps
    } = props;

    uploadId = uploadId || uuid;

    const [fileList, updateFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))

    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>
                {buttonContent}
            </div>
        </div>
    );

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

            // 单文件上传模式
            // 若当前事件为removed
            if (info.file.status === 'removed') {

                // 更新任务记录
                setProps({
                    listUploadTaskRecord: info.fileList.map(
                        (file) => {
                            return {
                                fileName: file.name,
                                fileSize: file.size,
                                completeTimestamp: new Date().getTime(),
                                taskStatus: file.status === 'done' ? 'success' : 'failed',
                                taskId: uploadId
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
                            return {
                                fileName: file.name,
                                fileSize: file.size,
                                completeTimestamp: new Date().getTime(),
                                taskStatus: file.status === 'done' ? 'success' : 'failed',
                                taskId: uploadId
                            }
                        }
                    )
                })
            }

            if (info.file.status === 'done') {
                message.success(`${info.file.name} 上传成功！`);
            } else if (info.file.status === 'error') {
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

            updateFileList(_fileList)
        }
    };

    // 添加accept参数
    if (fileTypes && fileTypes.length != 0) {

        Object.assign(uploadProps, { accept: '.' + fileTypes.join(',.') })
    }

    if (editable) {
        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <div id={id}
                    className={className}
                    style={style}>
                    <ImgCrop {...editConfig}>
                        <Upload {...uploadProps}
                            fileList={fileList}
                            listType="picture-card"
                            onPreview={handlePreview}
                            data-dash-is-loading={
                                (loading_state && loading_state.is_loading) || undefined
                            }>
                            {uploadButton}
                        </Upload>
                    </ImgCrop>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <img alt="" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
            </ConfigProvider>
        );
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <div id={id}
                className={className}
                style={style}>
                <Upload {...uploadProps}
                    fileList={fileList}
                    listType="picture-card"
                    onPreview={handlePreview}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                    {uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img alt="" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdPictureUpload.propTypes = {
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
    buttonContent: PropTypes.string,

    // 设置当前组件生命周期内的上传路径id信息，若未传入则会自动生成uuid
    uploadId: PropTypes.string,

    // 设置文件上传尺寸上限，单位：兆
    fileMaxSize: PropTypes.number,

    // 自定义上传失败文件鼠标悬浮tooltip文字内容，默认为'上传失败'
    failedTooltipInfo: PropTypes.string,

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
    listUploadTaskRecord: PropTypes.oneOfType([
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
    editable: false,
    fileTypes: ['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'ico', 'tif'],
    fileListMaxLength: null,
    fileMaxSize: 10,
    lastUploadTaskRecord: null,
    listUploadTaskRecord: [],
    locale: 'zh-cn'
}

export default AntdPictureUpload;
