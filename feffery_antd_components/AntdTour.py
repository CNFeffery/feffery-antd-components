# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTour(Component):
    """An AntdTour component.
漫游式引导组件AntdTour

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

- steps (list of dicts; optional):
    配置引导步骤.

    `steps` is a list of dicts with keys:

    - targetId (string; optional):
        当前步骤目标元素id，优先级高于`targetSelector`.

    - targetSelector (string; optional):
        定位当前步骤目标元素的javascript代码字符串.

    - arrow (dict; optional):
        配置当前步骤箭头  默认值：`True`.

        `arrow` is a boolean

      Or dict with keys:

        - pointAtCenter (boolean; optional):

            箭头是否指向目标中心.

    - cover (a list of or a singular dash component, string or number; optional):
        组件型，当前步骤弹框的封面内容.

    - title (a list of or a singular dash component, string or number; optional):
        组件型，当前步骤弹框的标题内容.

    - description (a list of or a singular dash component, string or number; optional):
        组件型，当前步骤弹框的描述内容.

    - placement (a value equal to: 'center', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom', 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; optional):
        当前引导步骤弹框相对目标元素的位置，可选项有`'center'`、`'left'`、`'leftTop'`、`'leftBottom'`、`'right'`、`'rightTop'`、`'rightBottom'`、`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`.

    - mask (dict; optional):
        配置当前步骤蒙版层  默认值：`True`.

        `mask` is a boolean | dict with keys:

        - style (dict; optional):

            当前步骤蒙版层css样式.

        - color (string; optional):

            当前步骤蒙版层颜色.

    - type (a value equal to: 'default', 'primary'; optional):
        当前步骤弹框类型，可选项有`'default'`、`'primary'`  默认值：`'default'`.

    - nextButtonProps (dict; optional):
        配置当前步骤下一步按钮.

        `nextButtonProps` is a dict with keys:

        - children (a list of or a singular dash component, string or number; optional):
            组件型，按钮内嵌元素.

    - prevButtonProps (dict; optional):
        配置当前步骤上一步按钮.

        `prevButtonProps` is a dict with keys:

        - children (a list of or a singular dash component, string or number; optional):
            组件型，按钮内嵌元素.

- arrow (dict; default True):
    统一配置引导步骤弹框箭头  默认值：`True`.

    `arrow` is a boolean | dict with keys:

    - pointAtCenter (boolean; optional):
        箭头是否指向目标中心.

- placement (a value equal to: 'center', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom', 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; default 'bottom'):
    统一配置引导步骤弹框相对于目标元素的展开方向，可选项有`'center'`、`'left'`、`'leftTop'`、`'leftBottom'`、`'right'`、`'rightTop'`、`'rightBottom'`、`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`
    默认值：`'bottom'`.

- mask (dict; default True):
    统一配置引导弹框蒙版  默认值：`True`.

    `mask` is a boolean | dict with keys:

    - style (dict; optional):
        蒙版层css样式.

    - color (string; optional):
        蒙版层颜色.

- type (a value equal to: 'default', 'primary'; default 'default'):
    统一设置引导步骤弹框类型，可选项有`'default'`、`'primary'`  默认值：`'default'`.

- open (boolean; default False):
    监听或设置当前漫游式引导的打开状态  默认值：`False`.

- current (number; optional):
    监听或设置当前漫游式引导所在步骤序号.

- zIndex (number; default 1001):
    当前漫游式引导z-index  默认值：`1001`.

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
    _children_props = ['steps[].cover', 'steps[].title', 'steps[].description', 'steps[].nextButtonProps.children', 'steps[].prevButtonProps.children']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTour'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, steps=Component.UNDEFINED, arrow=Component.UNDEFINED, placement=Component.UNDEFINED, mask=Component.UNDEFINED, type=Component.UNDEFINED, open=Component.UNDEFINED, current=Component.UNDEFINED, zIndex=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'locale', 'steps', 'arrow', 'placement', 'mask', 'type', 'open', 'current', 'zIndex', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'locale', 'steps', 'arrow', 'placement', 'mask', 'type', 'open', 'current', 'zIndex', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTour, self).__init__(**args)
