# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdOTP(Component):
    """An AntdOTP component.


Keyword arguments:

- id (string; optional):
    组件唯一id.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- defaultValue (string; optional):
    默认已输入值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- length (number; default 6):
    可输入元素长度  默认值：`6`.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- name (string; optional):
    用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名  缺省时会以id作为字段名.

- persisted_props (list of a value equal to: 'value's; default ['value']):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (boolean | string | number; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- status (a value equal to: 'error', 'warning'; optional):
    校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- value (string; optional):
    监听或设置已输入值.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; default 'outlined'):
    形态变体，可选项有`'outlined'`、`'borderless'`、`'filled'`  默认值：`'outlined'`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdOTP'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, defaultValue=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, length=Component.UNDEFINED, status=Component.UNDEFINED, size=Component.UNDEFINED, variant=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'defaultValue', 'disabled', 'key', 'length', 'loading_state', 'name', 'persisted_props', 'persistence', 'persistence_type', 'size', 'status', 'style', 'value', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'defaultValue', 'disabled', 'key', 'length', 'loading_state', 'name', 'persisted_props', 'persistence', 'persistence_type', 'size', 'status', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdOTP, self).__init__(**args)
