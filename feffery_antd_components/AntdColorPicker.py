# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdColorPicker(Component):
    """An AntdColorPicker component.
颜色选择器组件AntdColorPicker

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- allowClear (boolean; default False):
    是否允许清除已选颜色  默认值：`False`.

- arrow (dict; optional):
    配置颜色选择面板额外箭头  默认值：`True`.

    `arrow` is a boolean | dict with keys:

    - pointAtCenter (boolean; optional):
        箭头是否指向面板中心  默认值：`False`.

- defaultValue (string; optional):
    初始化已输入值.

- value (string; optional):
    监听或设置选中颜色值  默认值：`'#1677FF'`.

- format (a value equal to: 'rgb', 'hex', 'hsb'; default 'hex'):
    监听或设置颜色格式，可选项有`'rgb'`、`'hex'`、`'hsb'`  默认值：`'hex'`.

- mode (a value equal to: 'single', 'gradient' | list of a value equal to: 'single', 'gradient's; default 'single'):
    选择器模式，用于配置单色与渐变，可选项有`'single'`、`'gradient'`，支持单选项或多选项组合
    默认值：`single`.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- disabledAlpha (boolean; default True):
    是否禁用透明度选择  默认值：`True`.

- open (boolean; optional):
    监听或设置颜色选择面板展开状态.

- presets (list of dicts; optional):
    配置预设颜色选择项.

    `presets` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前预设项标签内容.

    - colors (list of strings; optional):
        当前预设项所包含的颜色值数组.

    - defaultOpen (boolean; optional):
        当前预设项默认是否展开  默认值：`True`.

- placement (a value equal to: 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; default 'bottomLeft'):
    颜色选择面板展开方向，可选项有`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`
    默认值：`'bottomRight'`.

- showText (boolean; default False):
    是否显示颜色值文本  默认值：`False`.

- size (a value equal to: 'large', 'middle', 'small'; default 'middle'):
    设置触发控件尺寸规格，可选项有`'large'`、`'middle'`、`'small'`  默认值：`'middle'`.

- trigger (a value equal to: 'hover', 'click'; default 'click'):
    颜色选择面板触发方式，可选项有`'hover'`、`'click'`  默认值：`'click'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['presets[].label']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdColorPicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, name=Component.UNDEFINED, allowClear=Component.UNDEFINED, arrow=Component.UNDEFINED, defaultValue=Component.UNDEFINED, value=Component.UNDEFINED, format=Component.UNDEFINED, mode=Component.UNDEFINED, disabled=Component.UNDEFINED, disabledAlpha=Component.UNDEFINED, open=Component.UNDEFINED, presets=Component.UNDEFINED, placement=Component.UNDEFINED, showText=Component.UNDEFINED, size=Component.UNDEFINED, trigger=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'locale', 'name', 'allowClear', 'arrow', 'defaultValue', 'value', 'format', 'mode', 'disabled', 'disabledAlpha', 'open', 'presets', 'placement', 'showText', 'size', 'trigger', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'locale', 'name', 'allowClear', 'arrow', 'defaultValue', 'value', 'format', 'mode', 'disabled', 'disabledAlpha', 'open', 'presets', 'placement', 'showText', 'size', 'trigger', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdColorPicker, self).__init__(**args)
