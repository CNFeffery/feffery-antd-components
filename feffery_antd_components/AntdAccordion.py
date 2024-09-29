# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAccordion(Component):
    """An AntdAccordion component.
手风琴组件AntdAccordion

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- items (list of dicts; optional):
    定义手风琴子项.

    `items` is a list of dicts with keys:

    - children (a list of or a singular dash component, string or number; optional):
        当前子项内部元素.

    - className (string | dict; optional):
        当前子项css类名，支持[动态css](/advanced-classname).

    - style (dict; optional):
        当前子项css样式.

    - key (string | number; required):
        必填，当前子项唯一key值.

    - collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
        当前子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`.

    - title (a list of or a singular dash component, string or number; optional):
        当前子项标题元素.

    - extra (a list of or a singular dash component, string or number; optional):
        当前子项右上角额外元素.

    - showArrow (boolean; optional):
        是否展示当前手风琴项的箭头图标  默认值：`True`.

    - forceRender (boolean; optional):
        是否强制渲染内部元素  默认值：`False`.

- accordion (boolean; default True):
    是否开启手风琴模式  默认值：`True`.

- activeKey (string | list of strings | number | list of numbers; optional):
    监听或设置当前处于展开状态的手风琴项key值.

- defaultActiveKey (string | list of strings | number | list of numbers; optional):
    设置初始化处于展开状态的手风琴项key值.

- bordered (boolean; default True):
    是否渲染边框  默认值：`True`.

- collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
    设置所有子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`.

- expandIconPosition (a value equal to: 'left', 'right'; default 'left'):
    设置折叠图标位置，可选项有`'left'`、`'right'`.

- ghost (boolean; default False):
    是否开启透明无边框模式  默认值：`False`.

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
    _children_props = ['items[].children', 'items[].title', 'items[].extra']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAccordion'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, items=Component.UNDEFINED, accordion=Component.UNDEFINED, activeKey=Component.UNDEFINED, defaultActiveKey=Component.UNDEFINED, bordered=Component.UNDEFINED, collapsible=Component.UNDEFINED, expandIconPosition=Component.UNDEFINED, ghost=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'items', 'accordion', 'activeKey', 'defaultActiveKey', 'bordered', 'collapsible', 'expandIconPosition', 'ghost', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'items', 'accordion', 'activeKey', 'defaultActiveKey', 'bordered', 'collapsible', 'expandIconPosition', 'ghost', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAccordion, self).__init__(**args)
