# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCard(Component):
    """An AntdCard component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- actions (list of a list of or a singular dash component, string or numbers; optional)

- bodyStyle (dict; optional)

- bordered (boolean; default True)

- className (string | dict; optional)

- coverImg (dict; optional)

    `coverImg` is a dict with keys:

    - alt (string; optional)

    - className (string; optional)

    - src (string; optional)

    - style (dict; optional)

- extra (a list of or a singular dash component, string or number; optional):
    设置卡片右上角额外元素，优先级高于extraLink.

- extraLink (dict; optional)

    `extraLink` is a dict with keys:

    - className (string; optional)

    - content (string; optional)

    - href (string; optional)

    - style (dict; optional)

    - target (string; optional)

- headStyle (dict; optional)

- hoverable (boolean; default False)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0):
    监听当前卡片累计点击次数  默认：0.

- size (a value equal to: 'default', 'small'; default 'default')

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['actions', 'title', 'extra']
    _base_nodes = ['actions', 'title', 'extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, actions=Component.UNDEFINED, title=Component.UNDEFINED, extraLink=Component.UNDEFINED, extra=Component.UNDEFINED, coverImg=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, headStyle=Component.UNDEFINED, bordered=Component.UNDEFINED, hoverable=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'actions', 'bodyStyle', 'bordered', 'className', 'coverImg', 'extra', 'extraLink', 'headStyle', 'hoverable', 'key', 'loading_state', 'nClicks', 'size', 'style', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'actions', 'bodyStyle', 'bordered', 'className', 'coverImg', 'extra', 'extraLink', 'headStyle', 'hoverable', 'key', 'loading_state', 'nClicks', 'size', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCard, self).__init__(children=children, **args)
