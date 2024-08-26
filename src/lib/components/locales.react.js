import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import deDE from 'antd/lib/locale/de_DE';

const str2Locale = new Map([
    ['zh-cn', zhCN],
    ['en-us', enUS],
    ['de-de', deDE]
])

const locale2text = {
    AntdSpoiler: {
        'zh-cn': {
            hideLabel: '收起',
            showLabel: '查看更多'
        },
        'en-us': {
            hideLabel: 'Hide',
            showLabel: 'Show more'
        },
        'de-de': {
            hideLabel: 'Verbergen',
            showLabel: 'Mehr anzeigen'
        }
    },
    AntdPictureUpload: {
        'zh-cn': {
            confirmBeforeDeleteTitle: '确认删除',
            confirmBeforeDeleteOkText: '确认',
            confirmBeforeDeleteCancelText: '取消'
        },
        'en-us': {
            confirmBeforeDeleteTitle: 'Confirm Delete',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Cancel'
        },
        'de-de': {
            confirmBeforeDeleteTitle: 'Löschen bestätigen',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Abbrechen'
        }
    },
    AntdPagination: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录'
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items'
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items'
        }
    },
    AntdTable: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录'
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items'
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items'
        }
    },
    AntdTransfer: {
        'zh-cn': {
            titles: ['待选区', '选定区']
        },
        'en-us': {
            titles: ['Source', 'Target']
        },
        'de-de': {
            titles: ['Quelle', 'Ziel']
        }
    },
    Upload: {
        'zh-cn': {
            uploadSuccess: '上传成功！',
            uploadFailed: '上传失败！',
            sizeError: ['文件大小超出', 'MB限制！'],
            typeError: ['上传失败，', '文件格式不符合要求！'],
            buttonContent: '点击上传文件'
        },
        'en-us': {
            uploadSuccess: 'upload success!',
            uploadFailed: 'upload failed!',
            sizeError: ['File size exceeds the ', 'MB limit!'],
            typeError: ['Uploading failed, The format of ', ' does not meet requirements!'],
            buttonContent: 'Click to upload file'
        },
        'de-de': {
            uploadSuccess: 'Hochladen erfolgreich!',
            uploadFailed: 'Hochladen fehlgeschlagen!',
            sizeError: ['Dateigröße überschreitet das Limit von ', 'MB!'],
            typeError: ['Hochladen fehlgeschlagen. Das Format von ', ' entspricht nicht den Anforderungen!'],
            buttonContent: 'Klicken, um eine Datei hochzuladen'
        }
    }
}

export { str2Locale, locale2text }
