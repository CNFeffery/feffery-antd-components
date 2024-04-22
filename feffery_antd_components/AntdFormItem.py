# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFormItem(Component):
    """An AntdFormItem component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional)

- colon (boolean; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- extra (a list of or a singular dash component, string or number; optional)

- hasFeedback (boolean; default False):
    是否配合不同的validateStatus值，呈现对应的状态图标，建议仅用于AntdInput  默认：False.

- help (a list of or a singular dash component, string or number; optional)

- hidden (boolean; default False)

- key (string; optional)

- label (a list of or a singular dash component, string or number; optional)

- labelAlign (a value equal to: 'left', 'right'; optional)

- labelCol (dict; optional)

    `labelCol` is a dict with keys:

    - flex (string | number; optional)

    - offset (number; optional)

    - span (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- required (boolean; default False)

- style (dict; optional)

- tooltip (a list of or a singular dash component, string or number; optional)

- validateStatus (a value equal to: 'success', 'warning', 'error', 'validating'; optional)

- wrapperCol (dict; optional)

    `wrapperCol` is a dict with keys:

    - flex (string | number; optional)

    - offset (number; optional)

    - span (number; optional)"""
    _children_props = ['label', 'tooltip', 'extra', 'help']
    _base_nodes = ['label', 'tooltip', 'extra', 'help', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFormItem'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, required=Component.UNDEFINED, labelCol=Component.UNDEFINED, colon=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, label=Component.UNDEFINED, labelAlign=Component.UNDEFINED, tooltip=Component.UNDEFINED, extra=Component.UNDEFINED, validateStatus=Component.UNDEFINED, hasFeedback=Component.UNDEFINED, help=Component.UNDEFINED, hidden=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'colon', 'data-*', 'extra', 'hasFeedback', 'help', 'hidden', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'required', 'style', 'tooltip', 'validateStatus', 'wrapperCol']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'colon', 'data-*', 'extra', 'hasFeedback', 'help', 'hidden', 'key', 'label', 'labelAlign', 'labelCol', 'loading_state', 'required', 'style', 'tooltip', 'validateStatus', 'wrapperCol']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFormItem, self).__init__(children=children, **args)
