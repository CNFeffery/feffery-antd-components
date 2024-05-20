// react核心
import React, { useState, useEffect, useContext } from 'react';
// antd核心
import { Upload, message, Modal, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
// 辅助库
import { str2Locale, locale2text } from '../../components/locales.react';
import { isUndefined, isString } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/upload/AntdPictureUpload.react';

// 解析历史任务完成时间信息
const parseHistoryTaskCompleteTime = (e) => {
    let uid2CompleteTime = new Map()
    e.forEach((item) => {
        uid2CompleteTime.set(item.uid, item.completeTimestamp)
    })
    return uid2CompleteTime
}

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const pictureUploadStatus2Style = new Map([
    ['warning', {
        border: "1px solid #faad14",
        borderRadius: "2px",
        padding: "6px 10px 0 10px",
        transition: "border 0.3s"
    }],
    ['error', {
        border: "1px solid #ff4d4f",
        borderRadius: "2px",
        padding: "6px 10px 0 10px",
        transition: "border 0.3s"
    }]
])

/**
 * 图片上传组件AntdPictureUpload
 */
const AntdPictureUpload = (props) => {
    let {
        id,
        className,
        style,
        key,
        name,
        locale,
        apiUrl,
        apiUrlExtraParams,
        headers,
        withCredentials,
        downloadUrl,
        downloadUrlExtraParams,
        downloadUrlFromBackend,
        editable,
        editConfig,
        uploadId,
        fileListMaxLength,
        buttonContent,
        fileTypes,
        fileMaxSize,
        failedTooltipInfo,
        showRemoveIcon,
        showPreviewIcon,
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

    const context = useContext(PropsContext)
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    locale = (context && context.locale) || locale
    downloadUrlFromBackend = downloadUrl ? false : downloadUrlFromBackend

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 针对上传类组件，特殊处理由表单值控制上传列表的清空
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formId && (name || id)) {
            if (!currentFormValue || currentFormValue.length === 0) {
                // 清空上传列表
                updateFileList([])
                setProps({
                    listUploadTaskRecord: [],
                    lastUploadTaskRecord: null
                })
            }
        }
    }, [currentFormValue])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

    listUploadTaskRecord = listUploadTaskRecord || []

    // 更新已上传文件 -> 上传完成时间映射字典
    const uploadedFile2CompleteTime = parseHistoryTaskCompleteTime(listUploadTaskRecord)

    useEffect(() => {
        // 初始化uploadId
        if (!uploadId) {
            if (defaultFileList && defaultFileList.length > 0) {
                setProps({ uploadId: defaultFileList[0].taskId || uuidv4() })
            } else {
                setProps({ uploadId: uuidv4() })
            }
        }
    }, [])

    const [fileList, updateFileList] = useState(defaultFileList || listUploadTaskRecord.map((item) => {
        return {
            name: item.fileName,
            status: item.taskStatus,
            uid: item.uid,
            url: item.url,
            uploadResponse: item.uploadResponse,
            fileSize: item.fileSize
        };
    }));
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
        headers: headers,
        data: {
            uploadId: uploadId,
            ...apiUrlExtraParams
        },
        withCredentials: withCredentials,
        beforeUpload: (file) => {
            const sizeCheck = file.size / 1024 / 1024 < fileMaxSize;
            if (!sizeCheck) {
                message.error(`${file.name}${locale2text.Upload[locale].sizeError[0]}${fileMaxSize}${locale2text.Upload[locale].sizeError[1]}`);
            }

            if (fileTypes) {
                if (fileTypes.indexOf(file.name.split('.')[file.name.split('.').length - 1]) === -1) {
                    message.error(`${locale2text.Upload[locale].typeError[0]}${file.name}${locale2text.Upload[locale].typeError[1]}`);
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

                let _listUploadTaskRecord = info.fileList.map(
                    (file) => {
                        // 配置已完成上传文件下载链接
                        let urlInfo = downloadUrlFromBackend ?
                            (file.response ? { url: file.response.url } : {}) :
                            (
                                downloadUrl && (file.status === 'done' || file.status === 'success') ?
                                    {
                                        url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}` + (
                                            Object.keys(downloadUrlExtraParams).map(key => `&${key}=${downloadUrlExtraParams[key]}`).join('')
                                        )
                                    } :
                                    {}
                            )
                        // 配置已完成上传文件接口响应信息
                        let responseInfo = file.response ? { uploadResponse: file.response } : {}
                        return {
                            fileName: file.name,
                            fileSize: file.size,
                            completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                            taskStatus: (file.status === 'done' || file.status === 'success') ? 'success' : 'failed',
                            taskId: uploadId,
                            uid: file.uid,
                            ...urlInfo,
                            ...responseInfo
                        }
                    }
                )

                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(formId, name || id, _listUploadTaskRecord)
                }
                // 更新任务记录
                setProps({
                    listUploadTaskRecord: _listUploadTaskRecord
                })
            } else if (info.file.status === 'done' || info.file.status === 'success' || info.file.status === 'error' || !info.file.status) {
                let _listUploadTaskRecord = info.fileList.map(
                    (file) => {
                        // 配置已完成上传文件下载链接
                        let urlInfo = downloadUrlFromBackend ?
                            (file.response ? { url: file.response.url } : {}) :
                            (
                                downloadUrl && (file.status === 'done' || file.status === 'success') ?
                                    {
                                        url: downloadUrl + `?taskId=${uploadId}&filename=${file.name}` + (
                                            Object.keys(downloadUrlExtraParams).map(key => `&${key}=${downloadUrlExtraParams[key]}`).join('')
                                        )
                                    } :
                                    {}
                            )
                        // 配置已完成上传文件接口响应信息
                        let responseInfo = file.response ? { uploadResponse: file.response } : {}
                        return {
                            fileName: file.name,
                            fileSize: file.size,
                            completeTimestamp: uploadedFile2CompleteTime.get(file.uid) || new Date().getTime(),
                            taskStatus: (file.status === 'done' || file.status === 'success') ? 'success' : 'failed',
                            taskId: uploadId,
                            uid: file.uid,
                            ...urlInfo,
                            ...responseInfo
                        }
                    }
                )

                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(formId, name || id, _listUploadTaskRecord)
                }
                setProps({
                    lastUploadTaskRecord: {
                        fileName: info.file.name,
                        fileSize: info.file.size,
                        completeTimestamp: new Date().getTime(),
                        taskStatus: (info.file.status === 'done' || info.file.status === 'success') ? 'success' : 'failed',
                        taskId: uploadId,
                        ...(
                            downloadUrlFromBackend ?
                                (info.file.response ? { url: info.file.response.url } : {}) :
                                (
                                    downloadUrl && (info.file.status === 'done' || info.file.status === 'success') ?
                                        {
                                            url: downloadUrl + `?taskId=${uploadId}&filename=${info.file.name}` + (
                                                Object.keys(downloadUrlExtraParams).map(key => `&${key}=${downloadUrlExtraParams[key]}`).join('')
                                            )
                                        } :
                                        {}
                                )
                        ),
                        ...(
                            info.file.response ? { uploadResponse: info.file.response } : {}
                        )
                    },
                    listUploadTaskRecord: _listUploadTaskRecord
                })
            }

            if ((info.file.status === 'done' || info.file.status === 'success') && showSuccessMessage) {
                message.success(`${info.file.name} ${locale2text.Upload[locale].uploadSuccess}`);
            } else if (info.file.status === 'error' && showErrorMessage) {
                message.error(`${info.file.name} ${locale2text.Upload[locale].uploadFailed}`);
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
                            // 配置已完成上传文件接口响应信息
                            let responseInfo = item.response ? { uploadResponse: item.response } : {}
                            return {
                                ...item,
                                url: downloadUrl + `?taskId=${uploadId}&filename=${item.name}` + (
                                    Object.keys(downloadUrlExtraParams).map(key => `&${key}=${downloadUrlExtraParams[key]}`).join('')
                                ),
                                ...responseInfo
                            }
                        }
                    )
                )
            } else if (downloadUrlFromBackend) {
                updateFileList(
                    _fileList.map(
                        item => {
                            if (item.response) {
                                return {
                                    ...item,
                                    url: item.response.url,
                                    uploadResponse: item.response
                                }
                            }
                            return {
                                ...item
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

    if (editable) {

        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <div
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={{
                        border: "1px solid transparent",
                        transition: "border 0.3s",
                        ...pictureUploadStatus2Style.get(status),
                        ...style
                    }}
                    key={key}>
                    <ImgCrop modalOk={locale === 'zh-cn' ? '确定' : 'OK'}
                        modalCancel={locale === 'zh-cn' ? '取消' : 'Cancel'}
                        {...editConfig}>
                        <Upload {...uploadProps}
                            fileList={fileList}
                            listType="picture-card"
                            disabled={
                                context && !isUndefined(context.componentDisabled) ?
                                    context.componentDisabled :
                                    disabled
                            }
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
                            showUploadList={{
                                showRemoveIcon,
                                showPreviewIcon
                            }}
                            onPreview={handlePreview}
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

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <div
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={{
                    border: "1px solid transparent",
                    transition: "border 0.3s",
                    ...pictureUploadStatus2Style.get(status),
                    ...style
                }}
                key={key}>
                <Upload {...uploadProps}
                    fileList={fileList}
                    listType="picture-card"
                    disabled={
                        context && !isUndefined(context.componentDisabled) ?
                            context.componentDisabled :
                            disabled
                    }
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
                    showUploadList={{
                        showRemoveIcon,
                        showPreviewIcon
                    }}
                    onPreview={handlePreview}
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

export default AntdPictureUpload;

AntdPictureUpload.defaultProps = defaultProps;
AntdPictureUpload.propTypes = propTypes;