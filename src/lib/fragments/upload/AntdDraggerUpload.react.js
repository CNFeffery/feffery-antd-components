import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Upload, message, Modal, ConfigProvider } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
import useCss from '../../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { pick } from 'ramda';
import { str2Locale, locale2text } from '../../components/locales.react';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
import { propTypes, defaultProps } from '../../components/dataEntry/upload/AntdDraggerUpload.react';

const { Dragger } = Upload;

// 解析历史任务完成时间信息
const parseHistoryTaskCompleteTime = (e) => {
    let uid2CompleteTime = new Map()
    e.forEach((item) => {
        uid2CompleteTime.set(item.uid, item.completeTimestamp)
    })
    return uid2CompleteTime
}

const draggerUploadStatus2Style = new Map([
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

// 定义文件拖拽上传组件AntdDraggerUpload，api参数参考https://ant.design/components/upload-cn/
const AntdDraggerUpload = (props) => {

    // 取得必要属性或参数
    let {
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

    // 更新已上传文件 -> 上传完成时间映射字典
    const uploadedFile2CompleteTime = parseHistoryTaskCompleteTime(listUploadTaskRecord || [])

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

    let uploadProps = {
        name: 'file',
        action: (file) => {
            if (withOriginFileObj) {
                return apiUrl + `?uploadId=${uploadId}&webkitRelativePath=${encodeURI(file.webkitRelativePath)}`;
            } return apiUrl + `?uploadId=${uploadId}`;
        },
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

            // 当上传模式为multiple或directory时
            if (multiple || directory) {
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
                                ...responseInfo,
                                // 处理originFileObj信息携带
                                ...(
                                    withOriginFileObj ?
                                        {
                                            originFileObj: pick(['name', 'size', 'type', 'webkitRelativePath'], file.originFileObj)
                                        } :
                                        {}
                                )
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
                } else {
                    // 其他常规事件
                    // 判断此次任务所有文件是否已上传结束（done或error）
                    if (info.fileList.slice(-lastTaskCount).every(file => file.status !== 'uploading')) {

                        if (info.fileList.slice(-lastTaskCount).every(file => !file.status)) {

                        } else {
                            if (lastTaskCount > 0) {
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
                                            ...responseInfo,
                                            // 处理originFileObj信息携带
                                            ...(
                                                withOriginFileObj ?
                                                    {
                                                        originFileObj: pick(['name', 'size', 'type', 'webkitRelativePath'], file.originFileObj)
                                                    } :
                                                    {}
                                            )
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
                                    lastUploadTaskRecord: info.fileList.slice(-lastTaskCount).map(
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
                                                completeTimestamp: new Date().getTime(),
                                                taskStatus: (file.status === 'done' || file.status === 'success') ? 'success' : 'failed',
                                                taskId: uploadId,
                                                ...urlInfo,
                                                ...responseInfo
                                            }
                                        }
                                    ),
                                    listUploadTaskRecord: _listUploadTaskRecord
                                })
                            }
                        }

                    }

                }

            } else {
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
                                ...responseInfo,
                                // 处理originFileObj信息携带
                                ...(
                                    withOriginFileObj ?
                                        {
                                            originFileObj: pick(['name', 'size', 'type', 'webkitRelativePath'], file.originFileObj)
                                        } :
                                        {}
                                )
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
                                ...responseInfo,
                                // 处理originFileObj信息携带
                                ...(
                                    withOriginFileObj ?
                                        {
                                            originFileObj: pick(['name', 'size', 'type', 'webkitRelativePath'], file.originFileObj)
                                        } :
                                        {}
                                )
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

    // 返回定制化的前端组件
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
                    ...draggerUploadStatus2Style.get(status),
                    ...style
                }}
                key={key}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                <Dragger
                    draggerStyle={draggerStyle}
                    draggerClassName={
                        isString(draggerClassName) ?
                            draggerClassName :
                            (draggerClassName ? useCss(draggerClassName) : undefined)
                    }
                    fileList={fileList}
                    showUploadList={showUploadList}
                    multiple={multiple}
                    directory={directory}
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
                                        }
                                    });
                                });
                            } :
                            undefined
                    }
                    {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        {icon || <AntdIcon icon={'antd-cloud-upload'} />}
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

export default AntdDraggerUpload;

AntdDraggerUpload.defaultProps = defaultProps;
AntdDraggerUpload.propTypes = propTypes;