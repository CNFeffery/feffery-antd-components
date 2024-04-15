# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFormItem(Component):
    """An AntdFormItem component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional):
    组件id.

- className (string | dict; optional):
    css类名.

- colon (boolean; optional):
    配合label参数，表示是否显示label后面的冒号，默认为True.

- extra (a list of or a singular dash component, string or number; optional):
    设置表单项额外的提示信息.

- hasFeedback (boolean; default False):
    是否配合不同的validateStatus值，呈现对应的状态图标，建议仅用于AntdInput  默认：False.

- help (a list of or a singular dash component, string or number; optional):
    设置与validateStatus状态一致的校验提示信息.

- hidden (boolean; default False):
    设置是否隐藏字段，隐藏后仍然会收集和校验字段，默认为False.

- initialValue (string | dict; optional):
    设置子元素默认值，如果与AntdForm的initialValues冲突则以AntdForm为准.

- key (string; optional):
    辅助刷新用唯一标识key值.

- label (a list of or a singular dash component, string or number; optional):
    设置表单项标签内容.

- labelAlign (a value equal to: 'left', 'right'; optional):
    设置表单项标签文本对齐方式，可选的为'left'与'right'，默认为'right'.

- labelCol (dict; optional):
    设置表单项标签列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm.

    `labelCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性.

    - offset (number; optional):
        设置offset平移宽度.

    - span (number; optional):
        设置span宽度.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- messageVariables (dict; optional):
    设置默认验证字段的信息.

- name (string | number | list of string | numbers; optional):
    设置字段名，支持数组.

- noStyle (boolean; default False):
    为True时不带样式，作为纯字段控件使用，默认为False.

- preserve (boolean; default True):
    设置当字段被删除时是否保留字段值，默认为True.

- required (boolean; optional):
    设置是否为标签添加必填*标识，默认为False.

- rules (list of dicts; optional):
    校验规则，设置字段的校验逻辑.

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

    - validateTrigger (a value equal to: 'onChange', 'onBlur', 'onFocus' | list of a value equal to: 'onChange', 'onBlur', 'onFocus's; optional):
        设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange，必须是AntdFormItem的validateTrigger的子集.

    - validator (string; optional):
        设置自定义校验js函数字符串.

    - warningOnly (boolean; optional):
        仅警告，不阻塞表单提交.

    - whitespace (boolean; optional):
        如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效.

- style (dict; optional):
    自定义css字典.

- tooltip (a list of or a singular dash component, string or number; optional):
    在label后添加额外tooltip鼠标悬浮提示信息.

- validateStatus (a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    设置校验状态，不设置时会根据设置的校验规则自动生成.

- validateTrigger (a value equal to: 'onChange', 'onBlur', 'onFocus' | list of a value equal to: 'onChange', 'onBlur', 'onFocus's; optional):
    设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange.

- valuePropName (string; optional):
    设置子节点的值的属性，默认为'value'.

- wrapperCol (dict; optional):
    设置表单项列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm.

    `wrapperCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性.

    - offset (number; optional):
        设置offset平移宽度.

    - span (number; optional):
        设置span宽度."""
    _children_props = ['label', 'tooltip', 'extra', 'help']
    _base_nodes = ['label', 'tooltip', 'extra', 'help', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFormItem'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, required=Component.UNDEFINED, labelCol=Component.UNDEFINED, colon=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, label=Component.UNDEFINED, labelAlign=Component.UNDEFINED, tooltip=Component.UNDEFINED, extra=Component.UNDEFINED, validateStatus=Component.UNDEFINED, hasFeedback=Component.UNDEFINED, help=Component.UNDEFINED, hidden=Component.UNDEFINED, messageVariables=Component.UNDEFINED, noStyle=Component.UNDEFINED, preserve=Component.UNDEFINED, initialValue=Component.UNDEFINED, name=Component.UNDEFINED, rules=Component.UNDEFINED, validateTrigger=Component.UNDEFINED, valuePropName=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'colon', 'extra', 'hasFeedback', 'help', 'hidden', 'initialValue', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'messageVariables', 'name', 'noStyle', 'preserve', 'required', 'rules', 'style', 'tooltip', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'colon', 'extra', 'hasFeedback', 'help', 'hidden', 'initialValue', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'messageVariables', 'name', 'noStyle', 'preserve', 'required', 'rules', 'style', 'tooltip', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFormItem, self).__init__(children=children, **args)
