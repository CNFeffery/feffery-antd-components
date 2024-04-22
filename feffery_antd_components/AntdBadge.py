# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdBadge(Component):
    """An AntdBadge component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional)

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - indicator (string; optional):
        控制徽标元素css类.

    - root (string; optional):
        控制根元素css类.

- color (string; optional)

- count (number; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- dot (boolean; default False)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0)

- offset (list of numbers; optional)

- overflowCount (number; default 99)

- showZero (boolean; default False)

- size (a value equal to: 'default', 'small'; default 'default')

- status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional)

- style (dict; optional)

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - indicator (dict; optional):
        控制徽标元素css样式.

    - root (dict; optional):
        控制根元素css样式.

- text (string; optional)

- title (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBadge'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, key=Component.UNDEFINED, color=Component.UNDEFINED, count=Component.UNDEFINED, dot=Component.UNDEFINED, showZero=Component.UNDEFINED, overflowCount=Component.UNDEFINED, offset=Component.UNDEFINED, status=Component.UNDEFINED, text=Component.UNDEFINED, title=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'classNames', 'color', 'count', 'data-*', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'styles', 'text', 'title']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'classNames', 'color', 'count', 'data-*', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'styles', 'text', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdBadge, self).__init__(children=children, **args)
