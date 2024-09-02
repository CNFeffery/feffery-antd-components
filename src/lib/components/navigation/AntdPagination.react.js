// react核心
import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Pagination, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale, locale2text } from '../locales.react';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 分页组件AntdPagination
 */
const AntdPagination = (props) => {
    let {
        id,
        style,
        className,
        key,
        locale,
        align,
        defaultCurrent,
        defaultPageSize,
        current,
        pageSize,
        disabled,
        hideOnSinglePage,
        pageSizeOptions,
        showQuickJumper,
        showSizeChanger,
        showTotalPrefix,
        showTotalSuffix,
        simple,
        size,
        total,
        showTotal,
        showLessItems,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    useEffect(() => {
        if (defaultCurrent && !current) {
            setProps({ current: defaultCurrent })
        }

        if (defaultPageSize && !pageSize) {
            setProps({ pageSize: defaultPageSize })
        }
    }, [])

    const onChange = (page, pageSize) => {

        setProps({ current: page, pageSize: pageSize })
    }

    const renderShowTotal = (e) => {
        return `${showTotalPrefix || locale2text.AntdPagination[locale].showTotalPrefix} ${e.toString()} ${showTotalSuffix || locale2text.AntdPagination[locale].showTotalSuffix}`
    }

    // 返回定制化的前端部件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Pagination
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                pageSize={pageSize || defaultPageSize}
                align={align}
                defaultCurrent={defaultCurrent}
                defaultPageSize={defaultPageSize}
                current={current}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                hideOnSinglePage={hideOnSinglePage}
                pageSizeOptions={pageSizeOptions}
                showQuickJumper={showQuickJumper}
                showSizeChanger={showSizeChanger}
                showTotal={showTotal ? renderShowTotal : undefined}
                simple={simple}
                size={size}
                total={total}
                showLessItems={showLessItems}
                onChange={onChange}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        </ConfigProvider>
    );
}

AntdPagination.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 组件尺寸规格，可选项有`'start'`、`'center'`、`'end'`
     * 默认值：`'start'`
     */
    align: PropTypes.oneOf(['start', 'center', 'end']),

    /**
     * 初始化时的当前页码
     * 默认值：`1`
     */
    defaultCurrent: PropTypes.number,

    /**
     * 初始化时的每页条数
     * 默认值：`10`
     */
    defaultPageSize: PropTypes.number,

    /**
     * 监听或设置当前页码
     */
    current: PropTypes.number,

    /**
     * 是否禁用当前组件功能
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 仅有一页时是否隐藏分页器
     * 默认值：`false`
     */
    hideOnSinglePage: PropTypes.bool,

    /**
     * 监听或设置每页条数
     */
    pageSize: PropTypes.number,

    /**
     * 每页条数切换可选项
     */
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

    /**
     * 是否渲染每页条数切换器
     * 默认值：`false`
     */
    showSizeChanger: PropTypes.bool,

    /**
     * 是否渲染快捷跳页控件
     * 默认值：`false`
     */
    showQuickJumper: PropTypes.bool,

    /**
     * 总记录数描述前缀内容
     */
    showTotalPrefix: PropTypes.string,

    /**
     * 总记录数描述后缀内容
     */
    showTotalSuffix: PropTypes.string,

    /**
     * 是否启用简洁模式
     * 默认值：`false`
     */
    simple: PropTypes.bool,

    /**
     * 组件尺寸规格，可选项有`'default'`、`'small'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 总记录数
     */
    total: PropTypes.number,

    /**
     * 是否渲染总记录数描述内容
     * 默认值：`true`
     */
    showTotal: PropTypes.bool,

    /**
     * 是否显示较少的跳页按钮
     * 默认值：`false`
     */
    showLessItems: PropTypes.bool,

    /**
     * 需要纳入批属性监听的属性名
     * 默认值：`[]`
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 批量监听与当前batchPropsNames对应的属性值
     */
    batchPropsValues: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
    setProps: PropTypes.func,

    /**
     * 是否为当前组件开启持久化功能
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 当前组件启用持久化的属性值数组，可选项有`'current'`、`'pageSize'`
     * 默认值：`['current', 'pageSize']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['current', 'pageSize'])),

    /**
     * 当前组件的属性持久化存储类型
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdPagination.defaultProps = {
    locale: 'zh-cn',
    align: 'start',
    defaultCurrent: 1,
    defaultPageSize: 10,
    disabled: false,
    hideOnSinglePage: false,
    showSizeChanger: false,
    showQuickJumper: false,
    simple: false,
    size: 'default',
    showTotal: true,
    showLessItems: false,
    persisted_props: ['current', 'pageSize'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdPagination;