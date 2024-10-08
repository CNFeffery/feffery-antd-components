# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTitle(Component):
    """An AntdTitle component.
标题组件AntdTitle

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- level (number; default 1):
    标题级别，可选项有`1`、`2`、`3`、`4`、`5`  默认值：`1`.

- code (boolean; optional):
    是否渲染为代码形式.

- copyable (boolean; optional):
    是否开启快捷复制功能.

- strikethrough (boolean; optional):
    是否渲染为删除线形式.

- disabled (boolean; optional):
    是否渲染为禁用形式.

- mark (boolean; optional):
    是否渲染为高亮形式.

- strong (boolean; optional):
    是否渲染为加粗形式.

- italic (boolean; optional):
    是否渲染为斜体形式.

- underline (boolean; optional):
    是否渲染为下划线形式.

- keyboard (boolean; optional):
    是否渲染为键盘形式.

- type (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional):
    设置内容特殊状态形式，可选项有`'secondary'`、`'success'`、`'warning'`、`'danger'`.

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
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTitle'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, level=Component.UNDEFINED, code=Component.UNDEFINED, copyable=Component.UNDEFINED, strikethrough=Component.UNDEFINED, disabled=Component.UNDEFINED, mark=Component.UNDEFINED, strong=Component.UNDEFINED, italic=Component.UNDEFINED, underline=Component.UNDEFINED, keyboard=Component.UNDEFINED, type=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'locale', 'level', 'code', 'copyable', 'strikethrough', 'disabled', 'mark', 'strong', 'italic', 'underline', 'keyboard', 'type', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'locale', 'level', 'code', 'copyable', 'strikethrough', 'disabled', 'mark', 'strong', 'italic', 'underline', 'keyboard', 'type', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdTitle, self).__init__(children=children, **args)
