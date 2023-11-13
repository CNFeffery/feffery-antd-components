# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdColorPicker(Component):
    """An AntdColorPicker component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default False):
    是否允许清除已选颜色  默认：False.

- arrow (dict; optional):
    配置颜色选择面板附带的箭头  默认：True.

    `arrow` is a boolean | dict with keys:

    - pointAtCenter (boolean; optional):
        箭头是否位于面板中心.

- className (string | dict; optional)

- disabled (boolean; default False):
    是否禁用当前组件  默认：False.

- disabledAlpha (boolean; default True):
    是否禁用透明度选择  默认：True.

- format (a value equal to: 'rgb', 'hex', 'hsb'; default 'hex'):
    设置或监听当前的颜色格式，可选的有'rgb'、'hex'、'hsb'  默认：'hex'.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- open (boolean; optional):
    设置或监听当前颜色选择面板展开状态.

- placement (a value equal to: 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; default 'bottomLeft'):
    设置颜色选择面板的展开方位，可选的有'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
    默认：'bottomLeft'.

- presets (list of dicts; optional):
    配置预设颜色选择项列表.

    `presets` is a list of dicts with keys:

    - colors (list of strings; optional):
        当前项对应的预设色彩值数组.

    - defaultOpen (boolean; optional):
        当前项默认是否展开.

    - label (a list of or a singular dash component, string or number; optional):
        当前项的标签内容.

- showText (boolean; default False):
    是否显示颜色值文本  默认：False.

- size (a value equal to: 'large', 'middle', 'small'; default 'middle'):
    设置触发器尺寸规格，可选的有'large'、'middle'、'small'  默认：'middle'.

- style (dict; optional)

- trigger (a value equal to: 'hover', 'click'; default 'click'):
    设置颜色选择面板触发方式，可选的有'hover'、'click'  默认：'click'.

- value (string; default '#1677FF'):
    设置或监听当前选中的颜色值  默认：'#1677FF'."""
    _children_props = ['presets[].label']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdColorPicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, allowClear=Component.UNDEFINED, arrow=Component.UNDEFINED, value=Component.UNDEFINED, format=Component.UNDEFINED, disabled=Component.UNDEFINED, disabledAlpha=Component.UNDEFINED, open=Component.UNDEFINED, presets=Component.UNDEFINED, placement=Component.UNDEFINED, showText=Component.UNDEFINED, size=Component.UNDEFINED, trigger=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'arrow', 'className', 'disabled', 'disabledAlpha', 'format', 'key', 'loading_state', 'open', 'placement', 'presets', 'showText', 'size', 'style', 'trigger', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'arrow', 'className', 'disabled', 'disabledAlpha', 'format', 'key', 'loading_state', 'open', 'placement', 'presets', 'showText', 'size', 'style', 'trigger', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdColorPicker, self).__init__(**args)
