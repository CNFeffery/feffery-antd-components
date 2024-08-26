# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSpoiler(Component):
    """An AntdSpoiler component.
展开收起组件AntdSpoiler

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- contentClassName (string | dict; optional):
    内容区css类名，支持[动态css](/advanced-classname).

- contentStyle (dict; optional):
    内容区css样式.

- data-* (string; optional):
    `data-*`格式属性通配.

- hideLabel (a list of or a singular dash component, string or number; optional):
    组件型，展开状态下，收起按钮的文案内容.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- labelPosition (a value equal to: 'left', 'right'; default 'left'):
    展开/收起按钮的位置，可选项有`'left'`、`'right'`  默认值：`'left'`.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- maxHeight (number; default 50):
    收起状态下，内容区域最大像素高度  默认值：`50`.

- open (boolean; default False):
    监听或设置是否处于展开状态  默认值：`False`.

- showLabel (a list of or a singular dash component, string or number; optional):
    组件型，收起状态下，展开按钮的文案内容.

- style (dict; optional):
    当前组件css样式.

- transitionDuration (number; default 0.1):
    展开/收起过渡动画耗时，单位：秒  默认值：`0.1`."""
    _children_props = ['hideLabel', 'showLabel']
    _base_nodes = ['hideLabel', 'showLabel', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpoiler'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, contentClassName=Component.UNDEFINED, contentStyle=Component.UNDEFINED, locale=Component.UNDEFINED, hideLabel=Component.UNDEFINED, showLabel=Component.UNDEFINED, labelPosition=Component.UNDEFINED, open=Component.UNDEFINED, maxHeight=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'contentClassName', 'contentStyle', 'data-*', 'hideLabel', 'key', 'labelPosition', 'loading_state', 'locale', 'maxHeight', 'open', 'showLabel', 'style', 'transitionDuration']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'contentClassName', 'contentStyle', 'data-*', 'hideLabel', 'key', 'labelPosition', 'loading_state', 'locale', 'maxHeight', 'open', 'showLabel', 'style', 'transitionDuration']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpoiler, self).__init__(children=children, **args)
