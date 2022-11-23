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
    }
}

export { str2Locale, locale2text }