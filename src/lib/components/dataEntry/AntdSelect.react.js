import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const LazyAntdSelect = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSelect.react'));

const AntdSelect = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSelect {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdSelect.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    /**
     * 设置弹框菜单css类名
     */
    popupClassName: PropTypes.string,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 定义下拉框可选项
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.exact({
                // 选项对应显示的label
                label: PropTypes.node.isRequired,

                // 选相对应的值
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]).isRequired,

                // 控制选项的禁止点击状态
                disabled: PropTypes.bool,

                // 设置色带特殊渲染模式，接受以css色彩字符串为元素的数组
                // 会基于linear-gradient()对传入的色彩数组按顺序进行线性渲染
                colors: PropTypes.arrayOf(PropTypes.string)
            }),
            PropTypes.exact({
                // 分组对应组标签
                group: PropTypes.string,

                // 组内选项集合
                options: PropTypes.arrayOf(
                    PropTypes.exact({
                        // 选项对应显示的label
                        label: PropTypes.node.isRequired,

                        // 选相对应的值
                        value: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.number
                        ]).isRequired,

                        // 控制选项的禁止点击状态
                        disabled: PropTypes.bool,

                        // 设置色带特殊渲染模式，接受以css色彩字符串为元素的数组
                        // 会基于linear-gradient()对传入的色彩数组按顺序进行线性渲染
                        colors: PropTypes.arrayOf(PropTypes.string)
                    })
                )
            })
        ])
    ),

    // 设置下拉菜单的高度，默认256
    listHeight: PropTypes.number,

    // 色带模式下用于设置连续色带还是离散色带，可选的有'sequential'、'diverging'
    colorsMode: PropTypes.oneOf(['sequential', 'diverging']),

    // 手动设置colors模式下，颜色名称的像素宽度，默认为40
    colorsNameWidth: PropTypes.number,

    // 设置选择模式（multiple：多选，tags：自由新增模式。默认为单选）
    mode: PropTypes.oneOf(['multiple', 'tags']),

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    // 设置组件尺寸规格，可选的有'small'、'middle'及'large'
    // 默认为'middle'
    size: PropTypes.oneOf([
        'small',
        'middle',
        'large'
    ]),

    // 设置当前下拉选择组件是否渲染边框，默认为true
    bordered: PropTypes.bool,

    // 选择框默认文本
    placeholder: PropTypes.string,

    // 用于设置悬浮展开层的方位，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 对应已被选中的选项值或选项值数组
    value: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
    ]),

    // 设置默认被选中的选项，默认为空数组
    defaultValue: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
    ]),

    // 设置最大显示的已选择选项，默认为5，超出部分会自动省略
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置输入框下输入内容进行搜索的字段，可选的有'value'、'label'，默认为'value'
    optionFilterProp: PropTypes.oneOf(['value', 'label']),

    // 监听搜索框中的已输入搜索文字内容
    searchValue: PropTypes.string,

    // 用于设置搜索框内容与选项目标值的匹配方式，可选的有'case-insensitive'、'case-sensitive'、'regex'
    // 默认为'case-insensitive'
    optionFilterMode: PropTypes.oneOf(['case-insensitive', 'case-sensitive', 'regex']),

    // 防抖模式下用于监听搜索框中的已输入搜索文字内容
    debounceSearchValue: PropTypes.string,

    // 用于配置debounceValue变化更新的防抖等待时长（-单位：毫秒），默认为0
    debounceWait: PropTypes.number,

    // 设置当组件内的prop正处于回调加载中状态时，是否渲染后缀加载图标
    // 默认为false
    autoSpin: PropTypes.bool,

    // 设置是否在选中项后清空搜索框中的搜索文字内容，mode为'multiple'/'tags'时有效，默认为true
    autoClearSearchValue: PropTypes.bool,

    // 自定义空数据状态内容
    emptyContent: PropTypes.node,

    // 自定义loading激活状态下的emptyContent，默认为加载动画
    loadingEmptyContent: PropTypes.node,

    // 可选，自定义悬浮层前缀内容
    dropdownBefore: PropTypes.node,

    // 可选，自定义悬浮层后缀内容
    dropdownAfter: PropTypes.node,

    // 设置是否渲染内容清空按钮，默认为true
    allowClear: PropTypes.bool,

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    /**
     * 设置下拉菜单是否与选择框同款，设置为false时将关闭虚拟滚动功能
     * 默认：true
     */
    popupMatchSelectWidth: PropTypes.bool,

    // 设置是否以只读模式进行渲染，底层利用Select的open参数
    // 默认为false
    readOnly: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
    batchPropsValues: PropTypes.object,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdSelect.defaultProps = {
    allowClear: true,
    autoFocus: false,
    disabled: false,
    size: 'middle',
    bordered: true,
    maxTagCount: 5,
    listHeight: 256,
    placement: 'bottomLeft',
    options: [],
    colorsNameWidth: 40,
    colorsMode: 'sequential',
    autoClearSearchValue: true,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    optionFilterProp: 'value',
    optionFilterMode: 'case-insensitive',
    autoSpin: false,
    debounceWait: 200,
    popupMatchSelectWidth: true,
    popupContainer: 'body',
    loadingEmptyContent: (
        <div style={{ display: 'flex', 'justifyContent': 'center' }}>
            <Spin />
        </div>
    ),
    batchPropsNames: []
}

export default AntdSelect;

export const propTypes = AntdSelect.propTypes;
export const defaultProps = AntdSelect.defaultProps;