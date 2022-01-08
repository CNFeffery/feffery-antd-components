import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import 'antd/dist/antd.css';

// 定义分页组件AntdPagination，api参数参考https://ant.design/components/pagination-cn/
export default class AntdPagination extends Component {

    constructor(props) {
        super(props)

        if (!props.current) {
            if (props.defaultCurrent) {
                props.setProps({ current: props.defaultCurrent })
            } else {
                props.setProps({ current: 1 })
            }
        }

    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            locale,
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
            persistence,
            persisted_props,
            persistence_type,
            setProps,
            loading_state
        } = this.props;

        const onChange = (page, pageSize) => {

            setProps({ current: page, pageSize: pageSize })
        }

        const renderShowTotal = (e) => {
            return (showTotalPrefix ? showTotalPrefix : "共有记录") + ' ' + e.toString() + ' ' + (showTotalSuffix ? showTotalSuffix : "条")
        }

        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Pagination
                    id={id}
                    className={className}
                    style={style}
                    current={current}
                    pageSize={pageSize}
                    disabled={disabled}
                    hideOnSinglePage={hideOnSinglePage}
                    pageSizeOptions={pageSizeOptions}
                    showQuickJumper={showQuickJumper}
                    showSizeChanger={showSizeChanger}
                    showTotal={renderShowTotal}
                    simple={simple}
                    size={size}
                    total={total}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    onChange={onChange}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                />
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdPagination.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置初始化时停留的页码
    defaultCurrent: PropTypes.number,

    // 设置默认的每页记录数量
    defaultPageSize: PropTypes.number,

    // 对应当前停留的页数
    current: PropTypes.number,

    // 设置是否禁用分页组件
    disabled: PropTypes.bool,

    // 只有一页时是否隐藏分页器
    hideOnSinglePage: PropTypes.bool,

    // 对应当前的每页记录条数
    pageSize: PropTypes.number,

    // 设置可选的每页条数列表
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

    // 设置是否渲染快速页面跳转输入框
    showQuickJumper: PropTypes.bool,

    // 设置是否渲染【每页记录数】调节组件，当total大于50时默认为true，否则默认为false
    showSizeChanger: PropTypes.bool,

    // 定义总记录行数显示部分的前缀文字，默认为"共 "
    showTotalPrefix: PropTypes.string,

    // 定义总记录行数显示部分的后缀文字，默认为" 条记录"
    showTotalSuffix: PropTypes.string,

    // 是否以简洁模式渲染分页组件，默认为false
    simple: PropTypes.bool,

    // 设置组件尺寸大小，可选的有'default'和'small'，默认为'default'
    size: PropTypes.oneOf(['default', 'small']),

    // 设置总记录条数
    total: PropTypes.number,

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
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['current', 'pageSize'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdPagination.defaultProps = {
    persisted_props: ['current', 'pageSize'],
    persistence_type: 'local',
    locale: 'zh-cn',
    pageSize: 10
}
