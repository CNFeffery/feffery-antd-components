# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAvatarGroup(Component):
    """An AntdAvatarGroup component.
头像组合组件AntdAvatarGroup

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，传入组内各`AntdAvatar`组件.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

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

- maxCount (number; optional):
    最多显示的头像个数，默认无限制.

- maxPopoverPlacement (a value equal to: 'top', 'bottom'; default 'top'):
    超出`maxCount`数量限制之外的头像气泡卡片弹出方位，可选项有`'top'`、`'bottom'`  默认值：`'top'`.

- maxPopoverTrigger (a value equal to: 'hover', 'click'; default 'hover'):
    超出`maxCount`数量限制之外的头像气泡卡片弹出触发方式，可选项有`'hover'`、`'click'`
    默认值：`'hover'`.

- maxStyle (dict; optional):
    头像省略部分css样式.

- size (dict; default 'default'):
    统一设置内部头像尺寸规格，传入数值型表示像素尺寸，传入字符型表示内置规格，可选项有`'large'`、`'small'`、`'default'`，支持响应式断点
    默认值：`'default'`.

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- style (dict; optional):
    当前组件css样式."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatarGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, maxCount=Component.UNDEFINED, maxPopoverPlacement=Component.UNDEFINED, maxPopoverTrigger=Component.UNDEFINED, maxStyle=Component.UNDEFINED, size=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'loading_state', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'loading_state', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdAvatarGroup, self).__init__(children=children, **args)
