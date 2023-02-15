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
    }
}

export { str2Locale, locale2text }