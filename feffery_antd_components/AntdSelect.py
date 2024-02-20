# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSelect(Component):
    """An AntdSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- autoClearSearchValue (boolean; default True)

- autoFocus (boolean; default False)

- autoSpin (boolean; default False)

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- bordered (boolean; default True):
    设置是否渲染边框，设置为True时等价于variant='outlined'  默认：True.

- className (string | dict; optional)

- colorsMode (a value equal to: 'sequential', 'diverging'; default 'sequential')

- colorsNameWidth (number; default 40)

- debounceSearchValue (string; optional)

- debounceWait (number; default 0)

- defaultValue (string | number | list of string | numbers; optional)

- disabled (boolean; default False)

- dropdownAfter (a list of or a singular dash component, string or number; optional)

- dropdownBefore (a list of or a singular dash component, string or number; optional)

- emptyContent (a list of or a singular dash component, string or number; optional)

- key (string; optional)

- listHeight (number; default 256)

- loadingEmptyContent (a list of or a singular dash component, string or number; default <div style={{ display: 'flex', 'justifyContent': 'center' }}>    <Spin /></div>)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- maxTagCount (number | a value equal to: 'responsive'; default 5)

- mode (a value equal to: 'multiple', 'tags'; optional)

- name (string; optional):
    用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名  缺省时会以id作为字段名.

- optionFilterMode (a value equal to: 'case-insensitive', 'case-sensitive', 'regex'; default 'case-insensitive')

- optionFilterProp (a value equal to: 'value', 'label'; default 'value')

- options (list of dicts; optional)

    `options` is a list of string | number | dict with keys:

    - colors (list of strings; optional)

    - disabled (boolean; optional)

    - label (a list of or a singular dash component, string or number; required)

    - value (string

      Or number; required) | dict with keys:

    - group (string; optional)

    - options (list of dicts; optional)

        `options` is a list of dicts with keys:

        - colors (list of strings; optional)

        - disabled (boolean; optional)

        - label (a list of or a singular dash component, string or number; required)

        - value (string | number; required)s

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

- placeholder (string; optional)

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft')

- popupClassName (string; optional):
    设置弹框菜单css类名.

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- popupMatchSelectWidth (boolean; default True):
    设置下拉菜单是否与选择框同款，设置为False时将关闭虚拟滚动功能  默认：True.

- readOnly (boolean; optional)

- searchValue (string; optional)

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- value (string | number | list of string | numbers; optional)

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
    其中'outlined'等价于bordered=True，优先级高于bordered."""
    _children_props = ['options[].label', 'options[].options[].label', 'emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter']
    _base_nodes = ['emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, popupClassName=Component.UNDEFINED, key=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, options=Component.UNDEFINED, listHeight=Component.UNDEFINED, colorsMode=Component.UNDEFINED, colorsNameWidth=Component.UNDEFINED, mode=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, status=Component.UNDEFINED, optionFilterProp=Component.UNDEFINED, searchValue=Component.UNDEFINED, optionFilterMode=Component.UNDEFINED, debounceSearchValue=Component.UNDEFINED, debounceWait=Component.UNDEFINED, autoSpin=Component.UNDEFINED, autoClearSearchValue=Component.UNDEFINED, emptyContent=Component.UNDEFINED, loadingEmptyContent=Component.UNDEFINED, dropdownBefore=Component.UNDEFINED, dropdownAfter=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, popupMatchSelectWidth=Component.UNDEFINED, readOnly=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'autoClearSearchValue', 'autoFocus', 'autoSpin', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'colorsMode', 'colorsNameWidth', 'debounceSearchValue', 'debounceWait', 'defaultValue', 'disabled', 'dropdownAfter', 'dropdownBefore', 'emptyContent', 'key', 'listHeight', 'loadingEmptyContent', 'loading_state', 'locale', 'maxTagCount', 'mode', 'name', 'optionFilterMode', 'optionFilterProp', 'options', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'popupMatchSelectWidth', 'readOnly', 'searchValue', 'size', 'status', 'style', 'value', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'autoClearSearchValue', 'autoFocus', 'autoSpin', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'colorsMode', 'colorsNameWidth', 'debounceSearchValue', 'debounceWait', 'defaultValue', 'disabled', 'dropdownAfter', 'dropdownBefore', 'emptyContent', 'key', 'listHeight', 'loadingEmptyContent', 'loading_state', 'locale', 'maxTagCount', 'mode', 'name', 'optionFilterMode', 'optionFilterProp', 'options', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'popupMatchSelectWidth', 'readOnly', 'searchValue', 'size', 'status', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSelect, self).__init__(**args)
