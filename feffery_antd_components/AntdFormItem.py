# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFormItem(Component):
    """An AntdFormItem component.
表单项组件AntdFormItem

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌相关常用表单输入类组件.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- colon (boolean; optional):
    当`layput='horizontal'`时，控制是否在表单项标签部分末尾添加冒号，优先级高于所属`AntdForm`中的`colon`参数.

- data-* (string; optional):
    `data-*`格式属性通配.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项额外提示信息.

- hasFeedback (boolean; default False):
    与`validateStatus`设定的状态对应，用于控制是否显示额外的状态图标  默认值：`False`.

- help (a list of or a singular dash component, string or number; optional):
    组件型，与`validateStatus`状态一致的额外说明内容.

- hidden (boolean; default False):
    是否隐藏当前字段  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- label (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项标签内容.

- labelAlign (a value equal to: 'left', 'right'; optional):
    表单项标签部分文本对齐方式，可选项有`'left'`、`'right'`，优先级高于所属`AntdForm`中的`labelAlign`参数
    默认值：`'right'`.

- labelCol (dict; optional):
    配置表单项标签部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数.

    `labelCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制标签部分所占宽度.

    - offset (number; optional):
        标签部分向右偏移宽度份数.

    - span (number; optional):
        标签部分所占宽度份数（总份数24）.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- required (boolean; default False):
    是否显示表示必填项的额外“*”标识  默认值：`False`.

- style (dict; optional):
    当前组件css样式.

- tooltip (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项标签内容后的额外文字提示信息.

- validateStatus (a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    控制校验状态，可选项有`'success'`、`'warning'`、`'error'`、`'validating'`.

- wrapperCol (dict; optional):
    配置表单项控件部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数.

    `wrapperCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制控件部分所占宽度.

    - offset (number; optional):
        控件部分向右偏移宽度份数.

    - span (number; optional):
        控件部分所占宽度份数（总份数24）."""
    _children_props = ['label', 'tooltip', 'extra', 'help']
    _base_nodes = ['label', 'tooltip', 'extra', 'help', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFormItem'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, required=Component.UNDEFINED, labelCol=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, colon=Component.UNDEFINED, label=Component.UNDEFINED, labelAlign=Component.UNDEFINED, tooltip=Component.UNDEFINED, extra=Component.UNDEFINED, validateStatus=Component.UNDEFINED, hasFeedback=Component.UNDEFINED, help=Component.UNDEFINED, hidden=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'colon', 'data-*', 'extra', 'hasFeedback', 'help', 'hidden', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'required', 'style', 'tooltip', 'validateStatus', 'wrapperCol']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'colon', 'data-*', 'extra', 'hasFeedback', 'help', 'hidden', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'required', 'style', 'tooltip', 'validateStatus', 'wrapperCol']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFormItem, self).__init__(children=children, **args)
