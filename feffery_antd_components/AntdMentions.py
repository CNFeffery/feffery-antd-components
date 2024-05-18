# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMentions(Component):
    """An AntdMentions component.
提及组件AntdMentions

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- autoSize (dict; default False):
    配置输入框高度自适应相关功能  默认值：`False`.

    `autoSize` is a boolean | dict with keys:

    - maxRows (number; optional):
        输入框最大行数.

    - minRows (number; optional):
        输入框最小行数.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultValue (string; optional):
    初始化已输入值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- options (list of dicts; required):
    必填，配置选择菜单子项.

    `options` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前选项标签内容.

    - value (string; optional):
        当前选项值.

- placeholder (string; optional):
    输入框占位文字内容.

- placement (a value equal to: 'top', 'bottom'; default 'bottom'):
    选择菜单弹出方向，可选项有`'top'`、`'bottom'`  默认值：`'bottom'`.

- popupClassName (string; optional):
    展开菜单css类名.

- popupContainer (a value equal to: 'parent', 'body'; optional):
    相关展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- prefix (string; default '@'):
    触发选择菜单展开的关键字  默认值：`'@'`.

- selectedOptions (list of strings; optional):
    监听输入内容中对应的已选子项值.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- value (string; optional):
    监听或设置已输入值.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高."""
    _children_props = ['options[].label']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMentions'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, popupClassName=Component.UNDEFINED, name=Component.UNDEFINED, autoSize=Component.UNDEFINED, prefix=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, options=Component.REQUIRED, selectedOptions=Component.UNDEFINED, disabled=Component.UNDEFINED, placement=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, status=Component.UNDEFINED, autoFocus=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'autoFocus', 'autoSize', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'data-*', 'defaultValue', 'disabled', 'key', 'loading_state', 'name', 'options', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'prefix', 'selectedOptions', 'status', 'style', 'value', 'variant']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'autoFocus', 'autoSize', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'data-*', 'defaultValue', 'disabled', 'key', 'loading_state', 'name', 'options', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'prefix', 'selectedOptions', 'status', 'style', 'value', 'variant']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['options']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdMentions, self).__init__(**args)
