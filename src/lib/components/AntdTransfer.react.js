import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Transfer, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义穿梭框部件AntdTransfer，api参数参考https://ant.design/components/transfer-cn/
export default class AntdTransfer extends Component {
    render() {
        // 取得必要属性或参数
        var {
            id,
            className,
            style,
            setProps,
            dataSource,
            height,
            pagination,
            operations,
            showSearch,
            showSelectAll,
            titles,
            disabled,
            targetKeys,
            loading_state
        } = this.props;

        if (!titles) {
            titles = ['待选区', '选定区']
        }

        // 构造监听函数，其中：
        // nextTargetKeys：
        // moveDirection：
        // moveKeys：
        function listenMove(nextTargetKeys, moveDirection, moveKeys) {
            setProps({ targetKeys: nextTargetKeys })
            setProps({ moveDirection: moveDirection })
            setProps({ moveKeys: moveKeys })
        }

        // 返回定制化的前端部件
        return (
            <ConfigProvider locale={zhCN}>
                <Transfer
                    id={id}
                    style={style}
                    className={className}
                    dataSource={dataSource}
                    targetKeys={targetKeys}
                    onChange={listenMove}
                    render={item => item.title}
                    pagination={pagination}
                    operations={operations}
                    showSearch={showSearch}
                    showSelectAll={showSelectAll}
                    titles={titles}
                    disabled={disabled}
                    listStyle={{
                        overflowX: 'auto',
                        height: height,
                        width: '100%'
                    }}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                />
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdTransfer.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css
    style: PropTypes.object,

    // 用于定义穿梭框中的每个选项信息
    dataSource: PropTypes.arrayOf(PropTypes.exact(
        {
            // 选项对应的唯一id
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            // 选项对应显示的文字标签内容
            title: PropTypes.string
        }
    )),

    // 自定义组件高度，接受css中合法的高度单位
    height: PropTypes.string,

    // 用于设置是否以分页模式展示左右区域内部超长的项目集合，默认为false
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.exact({ pageSize: PropTypes.number })]),

    // 用于设置左右移动操作按钮的文本内容，默认为['', '']
    operations: PropTypes.array,

    // 用于设置是否渲染搜索框，默认为false
    showSearch: PropTypes.bool,

    // 用于设置是否展示全选勾选框，默认为true
    showSelectAll: PropTypes.bool,

    // 用于设置左右半边的标题内容，默认为['待选区', '选定区']
    titles: PropTypes.array,

    // 对应右半边区域内已选择的项目的key值数组，默认为空数组
    targetKeys: PropTypes.array,

    // 对应每次发生项目转换时的转换方向
    moveDirection: PropTypes.string,

    // 对应每次发生项目转换时涉及的项目对应key值数组
    moveKeys: PropTypes.array,

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

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
};

// 设置默认参数
AntdTransfer.defaultProps = {
    targetKeys: [],
    pagination: false,
    showSearch: false,
    showSelectAll: true
}