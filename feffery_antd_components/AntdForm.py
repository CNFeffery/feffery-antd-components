# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdForm(Component):
    """An AntdForm component.
表单组件AntdForm

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌相关`AntdFormItem`组件或常用表单输入类组件.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- layout (a value equal to: 'horizontal', 'vertical', 'inline'; default 'horizontal'):
    表单布局模式，可选项有`'horizontal'`、`'vertical'`、`'inline'`
    默认值：`'horizontal'`.

- labelCol (dict; optional):
    配置表单项标签部分相关参数.

    `labelCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制标签部分所占宽度.

    - offset (number; optional):
        标签部分向右偏移宽度份数.

    - span (number; optional):
        标签部分所占宽度份数（总份数24）.

- wrapperCol (dict; optional):
    配置表单项控件部分相关参数.

    `wrapperCol` is a dict with keys:

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制控件部分所占宽度.

    - offset (number; optional):
        控件部分向右偏移宽度份数.

    - span (number; optional):
        控件部分所占宽度份数（总份数24）.

- colon (boolean; default True):
    当`layput='horizontal'`时，控制是否在表单项标签部分末尾添加冒号.

- labelAlign (a value equal to: 'left', 'right'; default 'right'):
    表单项标签部分文本对齐方式，可选项有`'left'`、`'right'`  默认值：`'right'`.

- labelWrap (boolean; default False):
    针对超长表单项标签是否允许换行  默认值：`False`.

- enableBatchControl (boolean; default False):
    是否启用表单批量控制功能，开启后会导致部分性能的损耗  默认值：`False`.

- values (dict; optional):
    当`enableBatchControl=True`时，可用于监听或设置搜集内部表单输入类组件的输入值变化情况，开启后内部表单输入类组件自身的`defaultValue`、`value`参数将会失效.

- validateStatuses (dict with strings as keys and values of type a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`validateStatus`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`validateStatus`值.

- helps (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`help`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`help`值.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = ['helps{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdForm'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, layout=Component.UNDEFINED, labelCol=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, colon=Component.UNDEFINED, labelAlign=Component.UNDEFINED, labelWrap=Component.UNDEFINED, enableBatchControl=Component.UNDEFINED, values=Component.UNDEFINED, validateStatuses=Component.UNDEFINED, helps=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'layout', 'labelCol', 'wrapperCol', 'colon', 'labelAlign', 'labelWrap', 'enableBatchControl', 'values', 'validateStatuses', 'helps', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'layout', 'labelCol', 'wrapperCol', 'colon', 'labelAlign', 'labelWrap', 'enableBatchControl', 'values', 'validateStatuses', 'helps', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdForm, self).__init__(children=children, **args)
