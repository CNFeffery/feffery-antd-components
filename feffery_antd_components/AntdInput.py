# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdInput(Component):
    """An AntdInput component.


Keyword arguments:

- id (string; optional)

- addonAfter (a list of or a singular dash component, string or number; optional)

- addonBefore (a list of or a singular dash component, string or number; optional)

- allowClear (boolean; default False)

- autoComplete (a value equal to: 'off', 'on'; default 'on')

- autoFocus (boolean; default False)

- autoSize (dict; default False)

    `autoSize` is a boolean | dict with keys:

    - maxRows (number; optional)

    - minRows (number; optional)

- batchFormValuesMode (boolean; optional):
    设置作为表单项时表单值是否开启多值模式，可以监听多个参数，默认为False.

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- bordered (boolean; default True):
    设置是否渲染边框，设置为True时等价于variant='outlined'  默认：True.

- className (string | dict; optional)

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - count (string; optional):
        控制文字计数元素css类.

    - input (string; optional):
        控制input元素css类.

    - prefix (string; optional):
        控制前缀容器css类.

    - suffix (string; optional):
        控制后缀容器css类.

    - textarea (string; optional):
        控制textarea元素css类.

- countFormat (string; optional)

- debounceValue (string; optional)

- debounceWait (number; default 0)

- defaultValue (string; optional)

- disabled (boolean; default False)

- emptyAsNone (boolean; default False)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxLength (number; optional)

- md5Value (string; optional)

- mode (a value equal to: 'default', 'search', 'text-area', 'password'; default 'default')

- nClicksSearch (number; default 0)

- nSubmit (number; default 0)

- passwordUseMd5 (boolean; default False)

- persisted_props (list of a value equal to: 'value', 'md5Value's; default ['value', 'md5Value']):
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

- placeholder (string; optional)

- prefix (a list of or a singular dash component, string or number; optional)

- readOnly (boolean; optional)

- showCount (boolean; default False)

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - count (dict; optional):
        控制文字计数元素css样式.

    - input (dict; optional):
        控制input元素css样式.

    - prefix (dict; optional):
        控制前缀容器css样式.

    - suffix (dict; optional):
        控制后缀容器css样式.

    - textarea (dict; optional):
        控制textarea元素css样式.

- suffix (a list of or a singular dash component, string or number; optional)

- value (string; optional)

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
    其中'outlined'等价于bordered=True，优先级高于bordered."""
    _children_props = ['addonBefore', 'addonAfter', 'prefix', 'suffix']
    _base_nodes = ['addonBefore', 'addonAfter', 'prefix', 'suffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdInput'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, key=Component.UNDEFINED, mode=Component.UNDEFINED, autoComplete=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, md5Value=Component.UNDEFINED, debounceValue=Component.UNDEFINED, passwordUseMd5=Component.UNDEFINED, debounceWait=Component.UNDEFINED, addonBefore=Component.UNDEFINED, addonAfter=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, maxLength=Component.UNDEFINED, showCount=Component.UNDEFINED, countFormat=Component.UNDEFINED, autoSize=Component.UNDEFINED, nSubmit=Component.UNDEFINED, nClicksSearch=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, readOnly=Component.UNDEFINED, emptyAsNone=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, batchFormValuesMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'addonAfter', 'addonBefore', 'allowClear', 'autoComplete', 'autoFocus', 'autoSize', 'batchFormValuesMode', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'classNames', 'countFormat', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'emptyAsNone', 'key', 'loading_state', 'maxLength', 'md5Value', 'mode', 'nClicksSearch', 'nSubmit', 'passwordUseMd5', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'prefix', 'readOnly', 'showCount', 'size', 'status', 'style', 'styles', 'suffix', 'value', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'addonAfter', 'addonBefore', 'allowClear', 'autoComplete', 'autoFocus', 'autoSize', 'batchFormValuesMode', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'classNames', 'countFormat', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'emptyAsNone', 'key', 'loading_state', 'maxLength', 'md5Value', 'mode', 'nClicksSearch', 'nSubmit', 'passwordUseMd5', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'prefix', 'readOnly', 'showCount', 'size', 'status', 'style', 'styles', 'suffix', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdInput, self).__init__(**args)
