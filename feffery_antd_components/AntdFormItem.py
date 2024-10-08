# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFormItem(Component):
    """An AntdFormItem component.
表单项组件AntdFormItem

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌相关常用表单输入类组件.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- required (boolean; default False):
    是否显示表示必填项的额外“*”标识  默认值：`False`.

- labelCol (dict; optional):
    配置表单项标签部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数.

    `labelCol` is a dict with keys:

    - span (number; optional):
        标签部分所占宽度份数（总份数24）.

    - offset (number; optional):
        标签部分向右偏移宽度份数.

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制标签部分所占宽度.

- wrapperCol (dict; optional):
    配置表单项控件部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数.

    `wrapperCol` is a dict with keys:

    - span (number; optional):
        控件部分所占宽度份数（总份数24）.

    - offset (number; optional):
        控件部分向右偏移宽度份数.

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制控件部分所占宽度.

- colon (boolean; optional):
    当`layput='horizontal'`时，控制是否在表单项标签部分末尾添加冒号，优先级高于所属`AntdForm`中的`colon`参数.

- label (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项标签内容.

- labelAlign (a value equal to: 'left', 'right'; optional):
    表单项标签部分文本对齐方式，可选项有`'left'`、`'right'`，优先级高于所属`AntdForm`中的`labelAlign`参数
    默认值：`'right'`.

- tooltip (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项标签内容后的额外文字提示信息.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，当前表单项额外提示信息.

- validateStatus (a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    控制校验状态，可选项有`'success'`、`'warning'`、`'error'`、`'validating'`.

- hasFeedback (boolean; default False):
    与`validateStatus`设定的状态对应，用于控制是否显示额外的状态图标  默认值：`False`.

- help (a list of or a singular dash component, string or number; optional):
    组件型，与`validateStatus`状态一致的额外说明内容.

- hidden (boolean; default False):
    是否隐藏当前字段  默认值：`False`.

- layout (a value equal to: 'horizontal', 'vertical'; optional):
    表单项布局模式，可选项有`'horizontal'`、`'vertical'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['label', 'tooltip', 'extra', 'help']
    _base_nodes = ['label', 'tooltip', 'extra', 'help', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFormItem'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, required=Component.UNDEFINED, labelCol=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, colon=Component.UNDEFINED, label=Component.UNDEFINED, labelAlign=Component.UNDEFINED, tooltip=Component.UNDEFINED, extra=Component.UNDEFINED, validateStatus=Component.UNDEFINED, hasFeedback=Component.UNDEFINED, help=Component.UNDEFINED, hidden=Component.UNDEFINED, layout=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'required', 'labelCol', 'wrapperCol', 'colon', 'label', 'labelAlign', 'tooltip', 'extra', 'validateStatus', 'hasFeedback', 'help', 'hidden', 'layout', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'required', 'labelCol', 'wrapperCol', 'colon', 'label', 'labelAlign', 'tooltip', 'extra', 'validateStatus', 'hasFeedback', 'help', 'hidden', 'layout', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFormItem, self).__init__(children=children, **args)
