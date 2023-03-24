import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';

const str2Locale = new Map([
    ['zh-cn', zhCN],
    ['en-us', enUS]
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
        }
    },
    AntdTransfer: {
        'zh-cn': {
            titles: ['待选区', '选定区']
        },
        'en-us': {
            titles: ['Source', 'Target']
        }
    },
    Upload: {
        'zh-cn': {
            sizeError: ['文件大小超出', 'MB限制！'],
            typeError: ['上传失败，', '文件格式不符合要求！']
        },
        'en-us': {
            sizeError: ['File size exceeds the ', 'MB limit!'],
            typeError: ['Uploading failed, The format of ', ' does not meet requirements!']
        }
    }
}

export { str2Locale, locale2text }