import React from 'react';
import PropTypes from 'prop-types';
import { Transfer, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';


// 定义穿梭框组件AntdTransfer，api参数参考https://ant.design/components/transfer-cn/
const AntdTransfer = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
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
        status,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    if (!titles) {
        titles = [locale === 'zh-cn' ? '待选区' : 'Source', locale === 'zh-cn' ? '选定区' : 'Target']
    }

    // 监听选项移动事件
    const listenMove = (nextTargetKeys, moveDirection, moveKeys) => {
        setProps({
            targetKeys: nextTargetKeys,
            moveDirection: moveDirection,
            moveKeys: moveKeys
        })
    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Transfer
                id={id}
                style={style}
                className={className}
                key={key}
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
                status={status}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
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

// 定义参数或属性
AntdTransfer.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

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

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['targetKeys'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTransfer.defaultProps = {
    targetKeys: [],
    pagination: false,
    showSearch: false,
    showSelectAll: true,
    persisted_props: ['targetKeys'],
    persistence_type: 'local',
    locale: 'zh-cn'
}

export default AntdTransfer;