# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFlex(Component):
    """An AntdFlex component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- align (string; default 'normal'):
    设置元素在交叉轴方向上的对齐方式，同css中的align-items  默认：'normal'.

- className (string | dict; optional)

- flex (string; default 'normal'):
    设置flex css简写属性  默认：'normal'.

- gap (string | number | a value equal to: 'small', 'middle', 'large'; optional):
    设置网格之间的间隙，可选的有'small'、'middle'、'large'，也可传入字符型css宽度，或数值型像素宽度.

- justify (string; default 'normal'):
    设置元素在主轴方向上的对齐方式，同css中的justify-content  默认：'normal'.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional)

- vertical (boolean; default False):
    设置flex主轴是否垂直  默认：False.

- wrap (string; default 'nowrap'):
    设置元素的换行显示行为，同css中的flex-wrap  默认：'nowrap'."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFlex'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, vertical=Component.UNDEFINED, wrap=Component.UNDEFINED, justify=Component.UNDEFINED, align=Component.UNDEFINED, flex=Component.UNDEFINED, gap=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'align', 'className', 'flex', 'gap', 'justify', 'key', 'loading_state', 'style', 'vertical', 'wrap']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'align', 'className', 'flex', 'gap', 'justify', 'key', 'loading_state', 'style', 'vertical', 'wrap']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFlex, self).__init__(children=children, **args)
