import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义分页组件AntdPagination，api参数参考https://ant.design/components/pagination-cn/
export default class AntdPagination extends Component {

    constructor(props) {
        super(props)
        if (!props.current) {
            props.setProps({ current: props.defaultCurrent })
        }

        if (!props.pageSize) {
            props.setProps({ pageSize: props.defaultPageSize })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            defaultCurrent,
            defaultPageSize,
            current,
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
            setProps,
            loading_state
        } = this.props;

        const onChange = (page, pageSize) => {

            setProps({ current: page })
        }

        const onShowSizeChange = (current, size) => {

            setProps({ pageSize: size })
        }

        const renderShowTotal = (e) => {
            return (showTotalPrefix ? showTotalPrefix : "共有记录") + ' ' + e.toString() + ' ' + (showTotalSuffix ? showTotalSuffix : "条")
        }

        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={zhCN}>
                <Pagination
                    id={id}
                    className={className}
                    style={style}
                    defaultCurrent={defaultCurrent}
                    defaultPageSize={defaultPageSize}
                    current={current}
                    disabled={disabled}
                    hideOnSinglePage={hideOnSinglePage}
                    pageSizeOptions={pageSizeOptions}
                    showQuickJumper={showQuickJumper}
                    showSizeChanger={showSizeChanger}
                    showTotal={renderShowTotal}
                    simple={simple}
                    size={size}
                    total={total}
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
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
    setProps: PropTypes.func
};

// 设置默认参数
AntdPagination.defaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 10
}
