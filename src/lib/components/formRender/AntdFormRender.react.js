import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdFormRender = React.lazy(() => import(/* webpackChunkName: "form_render" */ '../../fragments/formRender/AntdFormRender.react'));

const AntdFormRender = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdFormRender {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdFormRender.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * css类名
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 自定义css字典
     */
    style: PropTypes.object,

    /**
     * 辅助刷新用唯一标识key值
     */
    key: PropTypes.string,

    /**
     * 必填，设置表单的schema
     */
    schema: PropTypes.exact({
        /**
         * 固定配置为type: 'object'
         */
        type: PropTypes.oneOf(['object']),

        /**
         * 设置表单表单项label布局方式，可选的有'column'、'row'与'inline'，默认为'column'
         */
        displayType: PropTypes.oneOf(['column', 'row', 'inline']),

        /**
         * 设置表单布局，一行应该有几列，默认为3
         */
        column: PropTypes.number,

        /**
         * 设置表单项标签的宽度
         */
        labelWidth: PropTypes.number,

        /**
         * 设置表单项控件的最大宽度
         */
        maxWidth: PropTypes.number,

        /**
         * 设置表单标签占位格数
         */
        labelCol: PropTypes.number,

        /**
         * 设置表单控件占位格数
         */
        fieldCol: PropTypes.number,

        /**
         * 设置表单控件
         */
        properties: PropTypes.objectOf(PropTypes.oneOfType([
            /**
             * 基础控件配置项
             */
            PropTypes.shape({
                /**
                 * 设置表单字段的类型，可选的有'string'、'number'、'boolean'、'array'、'range'、'html'、'block'
                 */
                type: PropTypes.oneOf(['string', 'number', 'boolean', 'array', 'range', 'html', 'block']),

                /**
                 * 设置表单字段的标签
                 */
                title: PropTypes.string,

                /**
                 * 设置表单项标签的宽度
                 */
                labelWidth: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置表单项控件的最大宽度
                 */
                maxWidth: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置表单标签占位格数
                 */
                labelCol: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置表单控件占位格数
                 */
                fieldCol: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置表单项跨列展示，目前需配合lableWidth来使用，否则无法与其他表单项在样式上对齐，通过配置单个表单项的labelCol、fieldCol勉强能改善
                 */
                cellSpan: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置表单项列宽度，表单布局会被切割成 24 等份，可以通过设置 span 来自定义表单项所占的宽度
                 */
                span: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置指定渲染的控件名称
                 */
                widget: PropTypes.oneOf([
                    'input', 'inputNumber', 'select', 'multiSelect', 'radio', 'checkboxes', 
                    'textArea', 'checkbox', 'switch', 'rate', 'slider', 'datePicker', 
                    'dateRange', 'timePicker', 'timeRange', 'cascader', 'treeSelect', 'color',
                    'imageInput', 'urlInput', 'html'
                ]),

                /**
                 * 设置输入内容提示
                 */
                placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

                /**
                 * 设置副标题描述
                 */
                description: PropTypes.string,

                /**
                 * 设置气泡提示，支持html格式，可传入一个antd的tooltip配置对象支持更多配置
                 */
                tooltip: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({
                        /**
                         * 设置显示的文字内容
                         */
                        title: PropTypes.any,

                        /**
                         * 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
                         * 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
                         * 、'rightTop'、'rightBottom'，默认为'top'
                         */
                        placement: PropTypes.oneOf([
                            'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
                            'bottomRight'
                        ]),

                        /**
                         * 设置背景颜色
                         */
                        color: PropTypes.string,

                        /**
                         * 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
                         */
                        mouseEnterDelay: PropTypes.number,

                        /**
                         * 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
                         */
                        mouseLeaveDelay: PropTypes.number,

                        /**
                         * 设置卡片css类
                         */
                        overlayClassName: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.object
                        ]),

                        /**
                         * 设置卡片样式
                         */
                        overlayStyle: PropTypes.object,

                        /**
                         * 设置卡片内容区域的样式
                         */
                        overlayInnerStyle: PropTypes.object,

                        /**
                         * 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
                         */
                        trigger: PropTypes.oneOfType(
                            [
                                PropTypes.oneOf(['hover', 'focus', 'click']),
                                PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
                            ]
                        ),

                        /**
                         * 设置悬浮层zIndex
                         */
                        zIndex: PropTypes.number,

                        /**
                         * 设置修改箭头的显示状态以及修改箭头是否指向目标元素中心，默认为'show'
                         */
                        arrow: PropTypes.oneOf(['show', 'hide', 'center']),

                        /**
                         * 用于设置是否始终保持更新内容，默认为false。默认情况下，Tooltip 在关闭时会缓存内容，设置该属性后会始终保持更新。
                         */
                        fresh: PropTypes.bool,

                        /**
                         * 用于监听或控制当前tooltip的显隐，默认为false
                         */
                        open: PropTypes.bool,

                        /**
                         * 用于设置气泡被遮挡时自动调整位置,默认为true
                         */
                        autoAdjustOverflow: PropTypes.bool,

                        /**
                         * 设置默认是否显隐，默认为false
                         */
                        defaultOpen: PropTypes.bool,

                        /**
                         * 设置关闭后是否销毁Tooltip，默认为false
                         */
                        destroyTooltipOnHide: PropTypes.bool
                    })
                ]),

                /**
                 * 设置更多的说明信息，支持html格式，会紧贴在元素下面一行展示
                 */
                extra: PropTypes.string,

                /**
                 * 设置是否必填，默认为false
                 */
                required: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.string
                ]),

                /**
                 * 设置string类型为字符串最小长度；number类型时为最小值；array 类型时为数组最小长度
                 */
                min: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置string类型为字符串最大长度；number类型时为最大值；array 类型时为数组最大长度
                 */
                max: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 在已设置的type下，如何处理这个type
                 */
                format: PropTypes.oneOf(['image', 'textarea', 'color', 'email', 'url', 'dateTime', 'date', 'time', 'upload']),

                /**
                 * 设置表单元素的校验规则
                 */
                rules: PropTypes.arrayOf(PropTypes.shape({
                    /**
                     * 仅在 type 为 array 类型时有效，用于指定数组元素的校验规则
                     */
                    defaultField: PropTypes.object,

                    /**
                     * 是否匹配枚举中的值（需要将 type 设置为 enum）
                     */
                    enum: PropTypes.any,

                    /**
                     * 仅在 type 为 array 或 object 类型时有效，用于指定子元素的校验规则
                     */
                    fields: PropTypes.any,

                    /**
                     * string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度
                     */
                    len: PropTypes.number,

                    /**
                     * 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度
                     */
                    max: PropTypes.number,

                    /**
                     * 错误信息，不设置时会通过模板自动生成
                     */
                    message: PropTypes.string,

                    /**
                     * 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度
                     */
                    min: PropTypes.number,

                    /**
                     * 正则表达式匹配
                     */
                    pattern: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.instanceOf(RegExp)
                    ]),

                    /**
                     * 是否为必选字段
                     */
                    required: PropTypes.bool,

                    /**
                     * 类型，常见有 string |number |boolean |url | email等
                     */
                    type: PropTypes.oneOf([
                        'string',
                        'number',
                        'boolean',
                        'method',
                        'regexp',
                        'integer',
                        'float',
                        'array',
                        'object',
                        'enum',
                        'date',
                        'url',
                        'hex',
                        'email',
                        'any'
                    ]),

                    /**
                     * 设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange
                     */
                    validateTrigger: PropTypes.oneOf([
                        'onChange',
                        'onBlur',
                        'onFocus'
                    ]),

                    /**
                     * 设置自定义校验，值需要是字符串格式的js函数
                     */
                    validator: PropTypes.string,

                    /**
                     * 仅警告，不阻塞表单提交
                     */
                    warningOnly: PropTypes.bool,

                    /**
                     * 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效
                     */
                    whitespace: PropTypes.bool
                })),

                /**
                 * 设置是否隐藏，默认为false
                 */
                hidden: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.string
                ]),

                /**
                 * 设置是否禁用，默认为false
                 */
                disabled: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.string
                ]),

                /**
                 * 设置是否为可读模式，默认为false
                 */
                readOnly: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.string
                ]),

                /**
                 * 指定只读渲染组件名称
                 */
                readOnlyWidget: PropTypes.string,

                /**
                 * 设置表单依赖元素，当依赖的元素更新时，会触发本元素的重新渲染，用于复杂的表单联动
                 */
                dependencies: PropTypes.arrayOf(PropTypes.string),

                /**
                 * 设置自定义控件class名称
                 */
                className: PropTypes.string,

                /**
                 * 当title未设置时，通过配置reserveLabel: true可以保留labelWidth占位，使得输入控件和其他控件上下对齐
                 */
                reserveLabel: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.string
                ]),

                /**
                 * 设置额外属性，如果使用的是antd组件，对应的就是antd组件的其他属性
                 */
                props: PropTypes.object
            }),
            /**
             * 嵌套控件配置项
             */
            PropTypes.shape({
                /**
                 * 固定配置为type: 'object'
                 */
                type: PropTypes.oneOf(['object']),

                /**
                 * 设置标题
                 */
                title: PropTypes.string,

                /**
                 * 设置希望使用的嵌套组件名称，可选的有'collapse'、'card'、'lineTitle'、'subInline'，默认为'card'
                 */
                widget: PropTypes.oneOf(['collapse', 'card', 'lineTitle', 'subInline']),

                /**
                 * 设置表单元素集合
                 */
                properties: PropTypes.object,

                /**
                 * 设置表单布局，一行应该有几列，默认为3
                 */
                column: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置副标题描述
                 */
                description: PropTypes.string,

                /**
                 * 设置气泡提示，支持html格式，可传入一个antd的tooltip配置对象支持更多配置
                 */
                tooltip: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({
                        /**
                         * 设置显示的文字内容
                         */
                        title: PropTypes.any,

                        /**
                         * 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
                         * 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
                         * 、'rightTop'、'rightBottom'，默认为'top'
                         */
                        placement: PropTypes.oneOf([
                            'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
                            'bottomRight'
                        ]),

                        /**
                         * 设置背景颜色
                         */
                        color: PropTypes.string,

                        /**
                         * 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
                         */
                        mouseEnterDelay: PropTypes.number,

                        /**
                         * 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
                         */
                        mouseLeaveDelay: PropTypes.number,

                        /**
                         * 设置卡片css类
                         */
                        overlayClassName: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.object
                        ]),

                        /**
                         * 设置卡片样式
                         */
                        overlayStyle: PropTypes.object,

                        /**
                         * 设置卡片内容区域的样式
                         */
                        overlayInnerStyle: PropTypes.object,

                        /**
                         * 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
                         */
                        trigger: PropTypes.oneOfType(
                            [
                                PropTypes.oneOf(['hover', 'focus', 'click']),
                                PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
                            ]
                        ),

                        /**
                         * 设置悬浮层zIndex
                         */
                        zIndex: PropTypes.number,

                        /**
                         * 设置修改箭头的显示状态以及修改箭头是否指向目标元素中心，默认为'show'
                         */
                        arrow: PropTypes.oneOf(['show', 'hide', 'center']),

                        /**
                         * 用于设置是否始终保持更新内容，默认为false。默认情况下，Tooltip 在关闭时会缓存内容，设置该属性后会始终保持更新。
                         */
                        fresh: PropTypes.bool,

                        /**
                         * 用于监听或控制当前tooltip的显隐，默认为false
                         */
                        open: PropTypes.bool,

                        /**
                         * 用于设置气泡被遮挡时自动调整位置,默认为true
                         */
                        autoAdjustOverflow: PropTypes.bool,

                        /**
                         * 设置默认是否显隐，默认为false
                         */
                        defaultOpen: PropTypes.bool,

                        /**
                         * 设置关闭后是否销毁Tooltip，默认为false
                         */
                        destroyTooltipOnHide: PropTypes.bool
                    })
                ]),

                /**
                 * 设置额外属性，透传到对应的嵌套组件中
                 */
                props: PropTypes.object
            }),

            /**
             * 列表控件配置项
             */
            PropTypes.shape({
                /**
                 * 固定配置为type: 'array'
                 */
                type: PropTypes.oneOf(['array']),

                /**
                 * 设置标题
                 */
                title: PropTypes.string,

                /**
                 * 设置希望使用的列表组件名称，可选的有'cardList'、'simpleList'、'tableList'、'drawerList'、'virtualList'，默认为'cardList'
                 */
                widget: PropTypes.oneOf(['cardList', 'simpleList', 'tableList', 'drawerList', 'virtualList']),

                /**
                 * 设置列表的最大长度
                 */
                max: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置列表的最小长度
                 */
                min: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]),

                /**
                 * 设置列表控件
                 */
                props: PropTypes.shape({
                    /**
                     * 设置添加按钮属性，参考 Antd Button Props()
                     */
                    addBtnProps: PropTypes.object,

                    /**
                     * 设置删除确认弹窗属性，参考 Antd PopConfirm Props
                     */
                    delConfirmProps: PropTypes.object,

                    /**
                     * 设置tableList | drawerList | virtualList 中操作列的属性，参考 Antd Table ColumnType。 其中 title 使用 colHeaderText 代替。
                     */
                    actionColumnProps: PropTypes.object,

                    /**
                     * 设置是否隐藏添加按钮
                     */
                    hideAdd: PropTypes.bool,

                    /**
                     * 设置是否隐藏复制按钮
                     */
                    hideCopy: PropTypes.bool,

                    /**
                     * 设置是否隐藏移动按钮
                     */
                    hideMove: PropTypes.bool,

                    /**
                     * 设置是否隐藏删除按钮
                     */
                    hideDelete: PropTypes.bool
                }),

                /**
                 * 动态项配置，可以是一个嵌套控件
                 */
                items: PropTypes.object
            })
        ])),
    }).isRequired,

    /**
     * 设置表单布局模式，表单元素与 label 同行 or 分两行展示, inline 则整个展示自然顺排，
     * 可选的有'column'、'row'与'inline'，默认为'column'
     */
    displayType: PropTypes.oneOf(['column', 'row', 'inline']),

    /**
     * 设置label标签的文本对齐方式，可选的有'left'和'right'，默认为'right'
     */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /**
     * 设置表单标签固定宽度
     */
    lableWidth: PropTypes.number,

    /**
     * 设置表单项控件的最大宽度
     */
    maxWidth: PropTypes.number,

    /**
     * 设置表单标签占位格数
     */
    labelCol: PropTypes.number,

    /**
     * 设置表单控件占位格数
     */
    fieldCol: PropTypes.number,

    /**
     * 设置是否是否显示label后面的冒号，默认为true
     */
    colon: PropTypes.bool,

    /**
     * 设置表单全局配置
     */
    globalConfig: PropTypes.exact({
        /**
         * 设置是否禁用表达式
         */
        mustacheDisabled: PropTypes.bool,

        /**
         * 设置列表表单配置
         */
        listOperate: PropTypes.exact({
            /**
             * 设置列表表单操作按钮样式
             */
            btnType: PropTypes.oneOf(['icon', 'text']),

            /**
             * 设置是否隐藏移动按钮
             */
            hideMove: PropTypes.bool
        })
    }),

    /**
     * 监听表单的数据变化，属性值需要是字符串格式的js函数
     */
    watch: PropTypes.objectOf(PropTypes.string),

    /**
     * 设置提交数据的时候是否去掉已经被隐藏的元素的数据，默认为true
     */
    removeHiddenData: PropTypes.bool,

    /**
     * 设否开启只读模式，一般用于预览展示，全文text展示，默认为false
     */
    readOnly: PropTypes.bool,

    /**
     * 设置一行展示多少列
     */
    column: PropTypes.number,

    /**
     * 设置是否禁用全部表单项，默认为false
     */
    disabled: PropTypes.bool,

    /**
     * 设置提交失败是否自动滚动到第一个错误字段，默认为false
     */
    scrollToFirstError: PropTypes.bool,

    /**
     * 设置展示语言，目前只支持中文、英文，
     * 可选的有'zh-CN'与'en-US'，默认为'zh-CN'
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 设置底部操作区域
     */
    footer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            /**
             * 设置提交按钮
             */
            submit: PropTypes.shape({
                /**
                 * 设置按钮文字
                 */
                text: PropTypes.string,

                /**
                 * 设置是否显示
                 */
                hide: PropTypes.bool,

                /**
                 * 设置其他按钮属性，参考 Antd Button Props()
                 */
                btnProps: PropTypes.object
            }),
            /**
             * 设置重置按钮
             */
            reset: PropTypes.shape({
                /**
                 * 设置按钮文字
                 */
                text: PropTypes.string,

                /**
                 * 设置是否显示
                 */
                hide: PropTypes.bool,

                /**
                 * 设置其他按钮属性，参考 Antd Button Props()
                 */
                btnProps: PropTypes.object
            })
        }),
        PropTypes.node
    ]),

    /**
     * 同antd的configProvider
     */
    configProvider: PropTypes.object,

    /**
     * 设置默认的校验提示信息
     */
    validateMessages: PropTypes.exact({
        default: PropTypes.string,
        required: PropTypes.string,
        whitespace: PropTypes.string,
        date: PropTypes.exact({
            format: PropTypes.string,
            parse: PropTypes.string,
            invalid: PropTypes.string
        }),
        types: PropTypes.exact({
            string: PropTypes.string,
            method: PropTypes.string,
            array: PropTypes.string,
            object: PropTypes.string,
            number: PropTypes.string,
            date: PropTypes.string,
            boolean: PropTypes.string,
            integer: PropTypes.string,
            float: PropTypes.string,
            regexp: PropTypes.string,
            email: PropTypes.string,
            url: PropTypes.string,
            hex: PropTypes.string
        }),
        string: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        number: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        array: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        pattern: PropTypes.exact({
            mismatch: PropTypes.string
        })
    }),

    /**
     * 设置与监听表单数据
     */
    values: PropTypes.object,

    /**
     * 监听表单校验结果
     */
    validateStatuses: PropTypes.bool,

    /**
     * 控制参数，用于提交表单时手动搜集表单的校验结果，回调设置为true后会自动变为false
     */
    submitForm: PropTypes.bool,

    /**
     * 辅助监听表单提交参数
     */
    submitFormClicks: PropTypes.number,

    /**
     * 控制参数，用于重置表单项校验状态（不能重置表单项包裹的组件的值，需要通过回调重置表单项包裹的组件的值），回调设置为true后会自动变为false
     */
    resetForm: PropTypes.bool,

    /**
     * 辅助监听表单重置参数
     */
    resetFormClicks: PropTypes.number,

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
AntdFormRender.defaultProps = {
    displayType: 'column',
    labelAlign: 'right',
    colon: true,
    removeHiddenData: true,
    readOnly: false,
    column: 1,
    disabled: false,
    scrollToFirstError: false,
    locale: 'zh-CN',
    submitFormClicks: 0,
    resetFormClicks: 0
}

export default AntdFormRender;

export const propTypes = AntdFormRender.propTypes;
export const defaultProps = AntdFormRender.defaultProps;