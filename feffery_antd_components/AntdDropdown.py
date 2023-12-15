# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDropdown(Component):
    """An AntdDropdown component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    自定义下拉菜单锚定的自定义元素，优先级最高.

- id (string; optional)

- arrow (boolean; default False)

- autoAdjustOverflow (boolean; default True)

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- buttonMode (boolean; default False)

- buttonProps (dict; optional)

    `buttonProps` is a dict with keys:

    - className (string; optional)

    - danger (boolean; optional)

    - size (a value equal to: 'default', 'small', 'large'; optional)

    - style (dict; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- className (string | dict; optional)

- clickedKey (string; optional)

- disabled (boolean; default False)

- freePosition (boolean; default False)

- freePositionClassName (string; optional)

- freePositionStyle (dict; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- menuItems (list of dicts; optional)

    `menuItems` is a list of dicts with keys:

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - isDivider (boolean; optional)

    - key (string; optional)

    - target (string; optional)

    - title (a list of or a singular dash component, string or number; optional)

- multiple (boolean; optional):
    设置菜单是否允许多选  默认：False.

- nClicks (number; default 0)

- nonSelectableKeys (list of strings; optional):
    设置不可选中项key值数组  默认：[].

- overlayClassName (string | dict; optional)

- overlayStyle (dict; optional)

- placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional)

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- selectable (boolean; optional):
    设置菜单项是否可选中  默认：False.

- selectedKeys (list of strings; optional):
    设置或监听当前已选中菜单项key值数组.

- style (dict; optional)

- title (string; optional)

- trigger (a value equal to: 'click', 'hover'; default 'hover')

- visible (boolean; default False)

- wrapperClassName (string | dict; optional):
    针对自定义锚定元素的父容器设置css类名.

- wrapperStyle (dict; optional):
    针对自定义锚定元素的父容器设置css样式."""
    _children_props = ['menuItems[].title']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDropdown'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, wrapperStyle=Component.UNDEFINED, wrapperClassName=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, buttonMode=Component.UNDEFINED, buttonProps=Component.UNDEFINED, freePosition=Component.UNDEFINED, freePositionStyle=Component.UNDEFINED, freePositionClassName=Component.UNDEFINED, clickedKey=Component.UNDEFINED, nClicks=Component.UNDEFINED, menuItems=Component.UNDEFINED, selectable=Component.UNDEFINED, multiple=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, nonSelectableKeys=Component.UNDEFINED, arrow=Component.UNDEFINED, disabled=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, placement=Component.UNDEFINED, trigger=Component.UNDEFINED, autoAdjustOverflow=Component.UNDEFINED, visible=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'arrow', 'autoAdjustOverflow', 'batchPropsNames', 'batchPropsValues', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'multiple', 'nClicks', 'nonSelectableKeys', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'selectable', 'selectedKeys', 'style', 'title', 'trigger', 'visible', 'wrapperClassName', 'wrapperStyle']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'arrow', 'autoAdjustOverflow', 'batchPropsNames', 'batchPropsValues', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'multiple', 'nClicks', 'nonSelectableKeys', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'selectable', 'selectedKeys', 'style', 'title', 'trigger', 'visible', 'wrapperClassName', 'wrapperStyle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDropdown, self).__init__(children=children, **args)
