# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdFormRender(Component):
    """An AntdFormRender component.


Keyword arguments:

- id (string; optional):
    组件id.

- className (string | dict; optional):
    css类名.

- key (string; optional):
    辅助刷新用唯一标识key值.

- schema (dict; required):
    必填，设置表单的schema.

    `schema` is a dict with keys:

    - type (a value equal to: 'object'; optional):
        固定配置为type: 'object'.

    - displayType (a value equal to: 'column', 'row', 'inline'; optional):
        设置表单表单项label布局方式，可选的有'column'、'row'与'inline'，默认为'column'.

    - column (number; optional):
        设置表单布局，一行应该有几列，默认为3.

    - labelWidth (number; optional):
        设置表单项标签的宽度.

    - maxWidth (number; optional):
        设置表单项控件的最大宽度.

    - labelCol (number; optional):
        设置表单标签占位格数.

    - fieldCol (number; optional):
        设置表单控件占位格数.

    - properties (dict; optional):
        设置表单控件.

        `properties` is a dict with strings as keys and values of type
        dict with keys:

        - type (a value equal to: 'string', 'number', 'boolean', 'array', 'range', 'html', 'block'; optional):

            设置表单字段的类型，可选的有'string'、'number'、'boolean'、'array'、'range'、'html'、'block'.

        - title (string; optional):

            设置表单字段的标签.

        - labelWidth (number

              Or string; optional):

            设置表单项标签的宽度.

        - maxWidth (number

      Or string; optional):

            设置表单项控件的最大宽度.

        - labelCol (number | string; optional):

            设置表单标签占位格数.

        - fieldCol (number | string; optional):

            设置表单控件占位格数.

        - cellSpan (number | string; optional):

            设置表单项跨列展示，目前需配合lableWidth来使用，否则无法与其他表单项在样式上对齐，通过配置单个表单项的labelCol、fieldCol勉强能改善.

        - span (number | string; optional):

            设置表单项列宽度，表单布局会被切割成 24 等份，可以通过设置 span 来自定义表单项所占的宽度.

        - widget (a value equal to: 'input', 'inputNumber', 'select', 'multiSelect', 'radio', 'checkboxes', 'textArea', 'checkbox', 'switch', 'rate', 'slider', 'datePicker', 'dateRange', 'timePicker', 'timeRange', 'cascader', 'treeSelect', 'color', 'imageInput', 'urlInput', 'html'; optional):

            设置指定渲染的控件名称.

        - placeholder (string | list of strings; optional):

            设置输入内容提示.

        - description (string; optional):

            设置副标题描述.

        - tooltip (dict; optional):

            设置气泡提示，支持html格式，可传入一个antd的tooltip配置对象支持更多配置.

            `tooltip` is a string | dict with keys:

            - title (boolean | number | string | dict | list; optional):

                设置显示的文字内容.

            - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional):

                设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'

                、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'

                、'rightTop'、'rightBottom'，默认为'top'.

            - color (string; optional):

                设置背景颜色.

            - mouseEnterDelay (number; optional):

                设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1.

            - mouseLeaveDelay (number; optional):

                设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1.

            - overlayClassName (string | dict; optional):

                设置卡片css类.

            - overlayStyle (dict; optional):

                设置卡片样式.

            - overlayInnerStyle (dict; optional):

                设置卡片内容区域的样式.

            - trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; optional):

                设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'.

            - zIndex (number; optional):

                设置悬浮层zIndex.

            - arrow (a value equal to: 'show', 'hide', 'center'; optional):

                设置修改箭头的显示状态以及修改箭头是否指向目标元素中心，默认为'show'.

            - fresh (boolean; optional):

                用于设置是否始终保持更新内容，默认为False。默认情况下，Tooltip

                在关闭时会缓存内容，设置该属性后会始终保持更新。.

            - open (boolean; optional):

                用于监听或控制当前tooltip的显隐，默认为False.

            - autoAdjustOverflow (boolean; optional):

                用于设置气泡被遮挡时自动调整位置,默认为True.

            - defaultOpen (boolean; optional):

                设置默认是否显隐，默认为False.

            - destroyTooltipOnHide (boolean; optional):

                设置关闭后是否销毁Tooltip，默认为False.

        - extra (string; optional):

            设置更多的说明信息，支持html格式，会紧贴在元素下面一行展示.

        - required (boolean | string; optional):

            设置是否必填，默认为False.

        - min (number | string; optional):

            设置string类型为字符串最小长度；number类型时为最小值；array 类型时为数组最小长度.

        - max (number | string; optional):

            设置string类型为字符串最大长度；number类型时为最大值；array 类型时为数组最大长度.

        - format (a value equal to: 'image', 'textarea', 'color', 'email', 'url', 'dateTime', 'date', 'time', 'upload'; optional):

            在已设置的type下，如何处理这个type.

        - rules (list of dicts; optional):

            设置表单元素的校验规则.

            `rules` is a list of dicts with keys:

            - defaultField (dict; optional):

                仅在 type 为 array 类型时有效，用于指定数组元素的校验规则.

            - enum (boolean | number | string | dict | list; optional):

                是否匹配枚举中的值（需要将 type 设置为 enum）.

            - fields (boolean | number | string | dict | list; optional):

                仅在 type 为 array 或 object 类型时有效，用于指定子元素的校验规则.

            - len (number; optional):

                string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度.

            - max (number; optional):

                必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度.

            - message (string; optional):

                错误信息，不设置时会通过模板自动生成.

            - min (number; optional):

                必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度.

            - pattern (string; optional):

                正则表达式匹配.

            - required (boolean; optional):

                是否为必选字段.

            - type (a value equal to: 'string', 'number', 'boolean', 'method', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email', 'any'; optional):

                类型，常见有 string |number |boolean |url | email等.

            - validateTrigger (a value equal to: 'onChange', 'onBlur', 'onFocus'; optional):

                设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange.

            - validator (string; optional):

                设置自定义校验，值需要是字符串格式的js函数.

            - warningOnly (boolean; optional):

                仅警告，不阻塞表单提交.

            - whitespace (boolean; optional):

                如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效.

        - hidden (boolean | string; optional):

            设置是否隐藏，默认为False.

        - disabled (boolean | string; optional):

            设置是否禁用，默认为False.

        - readOnly (boolean | string; optional):

            设置是否为可读模式，默认为False.

        - readOnlyWidget (string; optional):

            指定只读渲染组件名称.

        - dependencies (list of strings; optional):

            设置表单依赖元素，当依赖的元素更新时，会触发本元素的重新渲染，用于复杂的表单联动.

        - className (string; optional):

            设置自定义控件class名称.

        - reserveLabel (boolean | string; optional):

            当title未设置时，通过配置reserveLabel:

            True可以保留labelWidth占位，使得输入控件和其他控件上下对齐.

        - props (dict; optional):

            设置额外属性，如果使用的是antd组件，对应的就是antd组件的其他属性. | dict with keys:

        - type (a value equal to: 'object'; optional):

            固定配置为type: 'object'.

        - title (string; optional):

            设置标题.

        - widget (a value equal to: 'collapse', 'card', 'lineTitle', 'subInline'; optional):

            设置希望使用的嵌套组件名称，可选的有'collapse'、'card'、'lineTitle'、'subInline'，默认为'card'.

        - properties (dict; optional):

            设置表单元素集合.

        - column (number | string; optional):

            设置表单布局，一行应该有几列，默认为3.

        - description (string; optional):

            设置副标题描述.

        - tooltip (dict; optional):

            设置气泡提示，支持html格式，可传入一个antd的tooltip配置对象支持更多配置.

            `tooltip` is a string | dict with keys:

            - title (boolean | number | string | dict | list; optional):

                设置显示的文字内容.

            - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional):

                设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'

                、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'

                、'rightTop'、'rightBottom'，默认为'top'.

            - color (string; optional):

                设置背景颜色.

            - mouseEnterDelay (number; optional):

                设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1.

            - mouseLeaveDelay (number; optional):

                设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1.

            - overlayClassName (string | dict; optional):

                设置卡片css类.

            - overlayStyle (dict; optional):

                设置卡片样式.

            - overlayInnerStyle (dict; optional):

                设置卡片内容区域的样式.

            - trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; optional):

                设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'.

            - zIndex (number; optional):

                设置悬浮层zIndex.

            - arrow (a value equal to: 'show', 'hide', 'center'; optional):

                设置修改箭头的显示状态以及修改箭头是否指向目标元素中心，默认为'show'.

            - fresh (boolean; optional):

                用于设置是否始终保持更新内容，默认为False。默认情况下，Tooltip

                在关闭时会缓存内容，设置该属性后会始终保持更新。.

            - open (boolean; optional):

                用于监听或控制当前tooltip的显隐，默认为False.

            - autoAdjustOverflow (boolean; optional):

                用于设置气泡被遮挡时自动调整位置,默认为True.

            - defaultOpen (boolean; optional):

                设置默认是否显隐，默认为False.

            - destroyTooltipOnHide (boolean; optional):

                设置关闭后是否销毁Tooltip，默认为False.

        - props (dict; optional):

            设置额外属性，透传到对应的嵌套组件中. | dict with keys:

        - type (a value equal to: 'array'; optional):

            固定配置为type: 'array'.

        - title (string; optional):

            设置标题.

        - widget (a value equal to: 'cardList', 'simpleList', 'tableList', 'drawerList', 'virtualList'; optional):

            设置希望使用的列表组件名称，可选的有'cardList'、'simpleList'、'tableList'、'drawerList'、'virtualList'，默认为'cardList'.

        - max (number | string; optional):

            设置列表的最大长度.

        - min (number | string; optional):

            设置列表的最小长度.

        - props (dict; optional):

            设置列表控件.

            `props` is a dict with keys:

            - addBtnProps (dict; optional):

                设置添加按钮属性，参考 Antd Button Props().

            - delConfirmProps (dict; optional):

                设置删除确认弹窗属性，参考 Antd PopConfirm Props.

            - actionColumnProps (dict; optional):

                设置tableList | drawerList | virtualList 中操作列的属性，参考 Antd

                Table ColumnType。 其中 title 使用 colHeaderText 代替。.

            - hideAdd (boolean; optional):

                设置是否隐藏添加按钮.

            - hideCopy (boolean; optional):

                设置是否隐藏复制按钮.

            - hideMove (boolean; optional):

                设置是否隐藏移动按钮.

            - hideDelete (boolean; optional):

                设置是否隐藏删除按钮.

        - items (dict; optional):

            动态项配置，可以是一个嵌套控件.

- displayType (a value equal to: 'column', 'row', 'inline'; default 'column'):
    设置表单布局模式，表单元素与 label 同行 or 分两行展示, inline 则整个展示自然顺排，
    可选的有'column'、'row'与'inline'，默认为'column'.

- labelAlign (a value equal to: 'left', 'right'; default 'right'):
    设置label标签的文本对齐方式，可选的有'left'和'right'，默认为'right'.

- lableWidth (number; optional):
    设置表单标签固定宽度.

- maxWidth (number; optional):
    设置表单项控件的最大宽度.

- labelCol (number; optional):
    设置表单标签占位格数.

- fieldCol (number; optional):
    设置表单控件占位格数.

- colon (boolean; default True):
    设置是否是否显示label后面的冒号，默认为True.

- globalConfig (dict; optional):
    设置表单全局配置.

    `globalConfig` is a dict with keys:

    - mustacheDisabled (boolean; optional):
        设置是否禁用表达式.

    - listOperate (dict; optional):
        设置列表表单配置.

        `listOperate` is a dict with keys:

        - btnType (a value equal to: 'icon', 'text'; optional):
            设置列表表单操作按钮样式.

        - hideMove (boolean; optional):
            设置是否隐藏移动按钮.

- watch (dict with strings as keys and values of type string; optional):
    监听表单的数据变化，属性值需要是字符串格式的js函数.

- removeHiddenData (boolean; default True):
    设置提交数据的时候是否去掉已经被隐藏的元素的数据，默认为True.

- readOnly (boolean; default False):
    设否开启只读模式，一般用于预览展示，全文text展示，默认为False.

- column (number; default 1):
    设置一行展示多少列.

- disabled (boolean; default False):
    设置是否禁用全部表单项，默认为False.

- scrollToFirstError (boolean; default False):
    设置提交失败是否自动滚动到第一个错误字段，默认为False.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-CN'):
    设置展示语言，目前只支持中文、英文，  可选的有'zh-CN'与'en-US'，默认为'zh-CN'.

- footer (dict; optional):
    设置底部操作区域.

    `footer` is a boolean | dict with keys:

    - submit (dict; optional):
        设置提交按钮.

        `submit` is a dict with keys:

        - text (string; optional):
            设置按钮文字.

        - hide (boolean; optional):
            设置是否显示.

        - btnProps (dict; optional):
            设置其他按钮属性，参考 Antd Button Props().

    - reset (dict; optional):
        设置重置按钮.

        `reset` is a dict with keys:

        - text (string; optional):
            设置按钮文字.

        - hide (boolean; optional):
            设置是否显示.

        - btnProps (dict; optional):
            设置其他按钮属性，参考 Antd Button Props(). | a list of or a singular dash component, string or number

- configProvider (dict; optional):
    同antd的configProvider.

- validateMessages (dict; optional):
    设置默认的校验提示信息.

    `validateMessages` is a dict with keys:

    - default (string; optional)

    - required (string; optional)

    - whitespace (string; optional)

    - date (dict; optional)

        `date` is a dict with keys:

        - format (string; optional)

        - parse (string; optional)

        - invalid (string; optional)

    - types (dict; optional)

        `types` is a dict with keys:

        - string (string; optional)

        - method (string; optional)

        - array (string; optional)

        - object (string; optional)

        - number (string; optional)

        - date (string; optional)

        - boolean (string; optional)

        - integer (string; optional)

        - float (string; optional)

        - regexp (string; optional)

        - email (string; optional)

        - url (string; optional)

        - hex (string; optional)

    - string (dict; optional)

        `string` is a dict with keys:

        - len (string; optional)

        - min (string; optional)

        - max (string; optional)

        - range (string; optional)

    - number (dict; optional)

        `number` is a dict with keys:

        - len (string; optional)

        - min (string; optional)

        - max (string; optional)

        - range (string; optional)

    - array (dict; optional)

        `array` is a dict with keys:

        - len (string; optional)

        - min (string; optional)

        - max (string; optional)

        - range (string; optional)

    - pattern (dict; optional)

        `pattern` is a dict with keys:

        - mismatch (string; optional)

- values (dict; optional):
    设置与监听表单数据.

- validateStatuses (boolean; optional):
    监听表单校验结果.

- submitForm (boolean; optional):
    控制参数，用于提交表单时手动搜集表单的校验结果，回调设置为True后会自动变为False.

- submitFormClicks (number; default 0):
    辅助监听表单提交参数.

- resetForm (boolean; optional):
    控制参数，用于重置表单项校验状态（不能重置表单项包裹的组件的值，需要通过回调重置表单项包裹的组件的值），回调设置为True后会自动变为False.

- resetFormClicks (number; default 0):
    辅助监听表单重置参数.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['footer']
    _base_nodes = ['footer', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFormRender'
    SchemaPropertiesTooltip = TypedDict(
        "SchemaPropertiesTooltip",
            {
            "title": NotRequired[typing.Any],
            "placement": NotRequired[Literal["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"]],
            "color": NotRequired[str],
            "mouseEnterDelay": NotRequired[NumberType],
            "mouseLeaveDelay": NotRequired[NumberType],
            "overlayClassName": NotRequired[typing.Union[str, dict]],
            "overlayStyle": NotRequired[dict],
            "overlayInnerStyle": NotRequired[dict],
            "trigger": NotRequired[typing.Union[Literal["hover", "focus", "click"], typing.Sequence[Literal["hover", "focus", "click"]]]],
            "zIndex": NotRequired[NumberType],
            "arrow": NotRequired[Literal["show", "hide", "center"]],
            "fresh": NotRequired[bool],
            "open": NotRequired[bool],
            "autoAdjustOverflow": NotRequired[bool],
            "defaultOpen": NotRequired[bool],
            "destroyTooltipOnHide": NotRequired[bool]
        }
    )

    SchemaPropertiesRules = TypedDict(
        "SchemaPropertiesRules",
            {
            "defaultField": NotRequired[dict],
            "enum": NotRequired[typing.Any],
            "fields": NotRequired[typing.Any],
            "len": NotRequired[NumberType],
            "max": NotRequired[NumberType],
            "message": NotRequired[str],
            "min": NotRequired[NumberType],
            "pattern": NotRequired[typing.Union[str, typing.Any]],
            "required": NotRequired[bool],
            "type": NotRequired[Literal["string", "number", "boolean", "method", "regexp", "integer", "float", "array", "object", "enum", "date", "url", "hex", "email", "any"]],
            "validateTrigger": NotRequired[Literal["onChange", "onBlur", "onFocus"]],
            "validator": NotRequired[str],
            "warningOnly": NotRequired[bool],
            "whitespace": NotRequired[bool]
        }
    )

    SchemaProperties = TypedDict(
        "SchemaProperties",
            {
            "type": NotRequired[Literal["array"]],
            "title": NotRequired[str],
            "widget": NotRequired[Literal["cardList", "simpleList", "tableList", "drawerList", "virtualList"]],
            "max": NotRequired[typing.Union[NumberType, str]],
            "min": NotRequired[typing.Union[NumberType, str]],
            "props": NotRequired["SchemaPropertiesProps"],
            "items": NotRequired[dict]
        }
    )

    SchemaPropertiesProps = TypedDict(
        "SchemaPropertiesProps",
            {
            "addBtnProps": NotRequired[dict],
            "delConfirmProps": NotRequired[dict],
            "actionColumnProps": NotRequired[dict],
            "hideAdd": NotRequired[bool],
            "hideCopy": NotRequired[bool],
            "hideMove": NotRequired[bool],
            "hideDelete": NotRequired[bool]
        }
    )

    Schema = TypedDict(
        "Schema",
            {
            "type": NotRequired[Literal["object"]],
            "displayType": NotRequired[Literal["column", "row", "inline"]],
            "column": NotRequired[NumberType],
            "labelWidth": NotRequired[NumberType],
            "maxWidth": NotRequired[NumberType],
            "labelCol": NotRequired[NumberType],
            "fieldCol": NotRequired[NumberType],
            "properties": NotRequired[typing.Dict[typing.Union[str, float, int], typing.Union["SchemaProperties"]]]
        }
    )

    GlobalConfigListOperate = TypedDict(
        "GlobalConfigListOperate",
            {
            "btnType": NotRequired[Literal["icon", "text"]],
            "hideMove": NotRequired[bool]
        }
    )

    GlobalConfig = TypedDict(
        "GlobalConfig",
            {
            "mustacheDisabled": NotRequired[bool],
            "listOperate": NotRequired["GlobalConfigListOperate"]
        }
    )

    FooterSubmit = TypedDict(
        "FooterSubmit",
            {
            "text": NotRequired[str],
            "hide": NotRequired[bool],
            "btnProps": NotRequired[dict]
        }
    )

    FooterReset = TypedDict(
        "FooterReset",
            {
            "text": NotRequired[str],
            "hide": NotRequired[bool],
            "btnProps": NotRequired[dict]
        }
    )

    Footer = TypedDict(
        "Footer",
            {
            "submit": NotRequired["FooterSubmit"],
            "reset": NotRequired["FooterReset"]
        }
    )

    ValidateMessagesDate = TypedDict(
        "ValidateMessagesDate",
            {
            "format": NotRequired[str],
            "parse": NotRequired[str],
            "invalid": NotRequired[str]
        }
    )

    ValidateMessagesTypes = TypedDict(
        "ValidateMessagesTypes",
            {
            "string": NotRequired[str],
            "method": NotRequired[str],
            "array": NotRequired[str],
            "object": NotRequired[str],
            "number": NotRequired[str],
            "date": NotRequired[str],
            "boolean": NotRequired[str],
            "integer": NotRequired[str],
            "float": NotRequired[str],
            "regexp": NotRequired[str],
            "email": NotRequired[str],
            "url": NotRequired[str],
            "hex": NotRequired[str]
        }
    )

    ValidateMessagesString = TypedDict(
        "ValidateMessagesString",
            {
            "len": NotRequired[str],
            "min": NotRequired[str],
            "max": NotRequired[str],
            "range": NotRequired[str]
        }
    )

    ValidateMessagesNumber = TypedDict(
        "ValidateMessagesNumber",
            {
            "len": NotRequired[str],
            "min": NotRequired[str],
            "max": NotRequired[str],
            "range": NotRequired[str]
        }
    )

    ValidateMessagesArray = TypedDict(
        "ValidateMessagesArray",
            {
            "len": NotRequired[str],
            "min": NotRequired[str],
            "max": NotRequired[str],
            "range": NotRequired[str]
        }
    )

    ValidateMessagesPattern = TypedDict(
        "ValidateMessagesPattern",
            {
            "mismatch": NotRequired[str]
        }
    )

    ValidateMessages = TypedDict(
        "ValidateMessages",
            {
            "default": NotRequired[str],
            "required": NotRequired[str],
            "whitespace": NotRequired[str],
            "date": NotRequired["ValidateMessagesDate"],
            "types": NotRequired["ValidateMessagesTypes"],
            "string": NotRequired["ValidateMessagesString"],
            "number": NotRequired["ValidateMessagesNumber"],
            "array": NotRequired["ValidateMessagesArray"],
            "pattern": NotRequired["ValidateMessagesPattern"]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        style: typing.Optional[typing.Any] = None,
        key: typing.Optional[str] = None,
        schema: typing.Optional["Schema"] = None,
        displayType: typing.Optional[Literal["column", "row", "inline"]] = None,
        labelAlign: typing.Optional[Literal["left", "right"]] = None,
        lableWidth: typing.Optional[NumberType] = None,
        maxWidth: typing.Optional[NumberType] = None,
        labelCol: typing.Optional[NumberType] = None,
        fieldCol: typing.Optional[NumberType] = None,
        colon: typing.Optional[bool] = None,
        globalConfig: typing.Optional["GlobalConfig"] = None,
        watch: typing.Optional[typing.Dict[typing.Union[str, float, int], str]] = None,
        removeHiddenData: typing.Optional[bool] = None,
        readOnly: typing.Optional[bool] = None,
        column: typing.Optional[NumberType] = None,
        disabled: typing.Optional[bool] = None,
        scrollToFirstError: typing.Optional[bool] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        footer: typing.Optional[typing.Union[bool, "Footer", ComponentType]] = None,
        configProvider: typing.Optional[dict] = None,
        validateMessages: typing.Optional["ValidateMessages"] = None,
        values: typing.Optional[dict] = None,
        validateStatuses: typing.Optional[bool] = None,
        submitForm: typing.Optional[bool] = None,
        submitFormClicks: typing.Optional[NumberType] = None,
        resetForm: typing.Optional[bool] = None,
        resetFormClicks: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'style', 'key', 'schema', 'displayType', 'labelAlign', 'lableWidth', 'maxWidth', 'labelCol', 'fieldCol', 'colon', 'globalConfig', 'watch', 'removeHiddenData', 'readOnly', 'column', 'disabled', 'scrollToFirstError', 'locale', 'footer', 'configProvider', 'validateMessages', 'values', 'validateStatuses', 'submitForm', 'submitFormClicks', 'resetForm', 'resetFormClicks', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'style', 'key', 'schema', 'displayType', 'labelAlign', 'lableWidth', 'maxWidth', 'labelCol', 'fieldCol', 'colon', 'globalConfig', 'watch', 'removeHiddenData', 'readOnly', 'column', 'disabled', 'scrollToFirstError', 'locale', 'footer', 'configProvider', 'validateMessages', 'values', 'validateStatuses', 'submitForm', 'submitFormClicks', 'resetForm', 'resetFormClicks', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['schema']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdFormRender, self).__init__(**args)

setattr(AntdFormRender, "__init__", _explicitize_args(AntdFormRender.__init__))
