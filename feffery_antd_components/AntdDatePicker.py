# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDatePicker(Component):
    """An AntdDatePicker component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- autoFocus (boolean; default False)

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- bordered (boolean; default True):
    设置是否渲染边框，设置为True时等价于variant='outlined'  默认：True.

- className (string | dict; optional)

- clickedPreset (dict; optional):
    配合presets参数，监听最近一次预设子项点击事件相关信息.

    `clickedPreset` is a dict with keys:

    - timestamp (number; optional):
        监听事件对应时间戳.

    - value (string | number; optional):
        监听事件对应预设子项值.

- defaultPickerValue (string; optional)

- defaultValue (string; optional)

- disabled (boolean; default False)

- disabledDatesStrategy (list of dicts; optional)

    `disabledDatesStrategy` is a list of dicts with keys:

    - mode (a value equal to: 'eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates'; optional)

    - target (a value equal to: 'day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek', 'specific-date'; optional)

    - value (number | string | list of numbers | list of strings; optional)

- extraFooter (a list of or a singular dash component, string or number; optional)

- firstDayOfWeek (number; optional)

- format (string; optional)

- key (string; optional)

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

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

- picker (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; default 'date')

- placeholder (string; optional)

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft')

- popupClassName (string; optional):
    设置弹框菜单css类名.

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- presets (list of dicts; optional):
    配置预设范围触发列表信息.

    `presets` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，设置当前预设子项标题.

    - value (string; optional):
        设置当前预设子项对应日期字符串.

- readOnly (boolean; optional)

- showTime (dict; default False)

    `showTime` is a boolean | dict with keys:

    - defaultValue (string; optional)

    - format (string; optional)

- showToday (boolean; default True)

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- value (string; optional)

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
    其中'outlined'等价于bordered=True，优先级高于bordered."""
    _children_props = ['extraFooter', 'presets[].label']
    _base_nodes = ['extraFooter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDatePicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, popupClassName=Component.UNDEFINED, key=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, format=Component.UNDEFINED, picker=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, disabled=Component.UNDEFINED, showTime=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, defaultPickerValue=Component.UNDEFINED, disabledDatesStrategy=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, readOnly=Component.UNDEFINED, extraFooter=Component.UNDEFINED, showToday=Component.UNDEFINED, presets=Component.UNDEFINED, clickedPreset=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'clickedPreset', 'defaultPickerValue', 'defaultValue', 'disabled', 'disabledDatesStrategy', 'extraFooter', 'firstDayOfWeek', 'format', 'key', 'loading_state', 'locale', 'name', 'persisted_props', 'persistence', 'persistence_type', 'picker', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'presets', 'readOnly', 'showTime', 'showToday', 'size', 'status', 'style', 'value', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'clickedPreset', 'defaultPickerValue', 'defaultValue', 'disabled', 'disabledDatesStrategy', 'extraFooter', 'firstDayOfWeek', 'format', 'key', 'loading_state', 'locale', 'name', 'persisted_props', 'persistence', 'persistence_type', 'picker', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'presets', 'readOnly', 'showTime', 'showToday', 'size', 'status', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDatePicker, self).__init__(**args)
