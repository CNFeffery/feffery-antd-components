# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTour(Component):
    """An AntdTour component.


Keyword arguments:

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- arrow (dict; default True):
    配置各引导步骤弹框的箭头  默认：True.

    `arrow` is a boolean | dict with keys:

    - pointAtCenter (boolean; optional):
        设置箭头是否指向元素中心.

- className (string | dict; optional)

- current (number; optional):
    设置或监听当前漫游式引导所处的步骤序号.

- data-* (string; optional):
    `data-*`格式属性通配.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- mask (dict; default True):
    为各引导步骤条设置蒙版层相关配置  默认：True.

    `mask` is a boolean | dict with keys:

    - color (string; optional):
        设置蒙版层颜色.

    - style (dict; optional):
        设置蒙版层css样式.

- open (boolean; default False):
    设置或监听当前漫游式引导的开关状态  默认：False.

- placement (a value equal to: 'center', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom', 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; default 'bottom'):
    设置各引导步骤弹框相对于目标元素的位置
    可选的有'center'、'left'、'leftTop'、'leftBottom'、'right'、'rightTop'、'rightBottom'
    、'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
    默认：'bottom'.

- steps (list of dicts; optional):
    用于定义各引导步骤，其中当targetId、targetSelector  默认：[].

    `steps` is a list of dicts with keys:

    - arrow (dict; optional):
        配置当前引导步骤弹框的箭头  默认：True.

        `arrow` is a boolean

      Or dict with keys:

        - pointAtCenter (boolean; optional):

            设置箭头是否指向元素中心.

    - cover (a list of or a singular dash component, string or number; optional):
        设置当前引导步骤弹框的封面内容.

    - description (a list of or a singular dash component, string or number; optional):
        设置当前引导步骤弹框的描述内容.

    - mask (dict; optional):
        为当前引导步骤设置蒙版层相关配置  默认：True.

        `mask` is a boolean | dict with keys:

        - color (string; optional):

            设置蒙版层颜色.

        - style (dict; optional):

            设置蒙版层css样式.

    - nextButtonProps (dict; optional):
        设置当前引导步骤框下一步按钮的相关属性.

        `nextButtonProps` is a dict with keys:

        - children (a list of or a singular dash component, string or number; optional):
            设置按钮子元素.

    - placement (a value equal to: 'center', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom', 'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'; optional):
        设置当前引导步骤弹框相对目标元素的位置
        可选的有'center'、'left'、'leftTop'、'leftBottom'、'right'、'rightTop'、'rightBottom'
        、'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'.

    - prevButtonProps (dict; optional):
        设置当前引导步骤框上一步按钮的相关属性.

        `prevButtonProps` is a dict with keys:

        - children (a list of or a singular dash component, string or number; optional):
            设置按钮子元素.

    - targetId (string; optional):
        设置当前引导步骤指向的目标元素id，优先级最高.

    - targetSelector (string; optional):
        用于传入js代码字符串进行目标元素的定位，优先级低于targetId.

    - title (a list of or a singular dash component, string or number; optional):
        设置当前引导步骤弹框的标题.

    - type (a value equal to: 'default', 'primary'; optional):
        设置当前引导步骤弹框类型，可选的有'default'、'primary'  默认：'default'.

- style (dict; optional)

- type (a value equal to: 'default', 'primary'; default 'default'):
    为各引导步骤弹框设置类型，可选的有'default'、'primary'  默认：'default'.

- zIndex (number; default 1001):
    设置当前漫游式引导的z-index  默认：1001."""
    _children_props = ['steps[].cover', 'steps[].title', 'steps[].description', 'steps[].nextButtonProps.children', 'steps[].prevButtonProps.children']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTour'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, steps=Component.UNDEFINED, arrow=Component.UNDEFINED, placement=Component.UNDEFINED, mask=Component.UNDEFINED, type=Component.UNDEFINED, open=Component.UNDEFINED, current=Component.UNDEFINED, zIndex=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'arrow', 'className', 'current', 'data-*', 'key', 'loading_state', 'locale', 'mask', 'open', 'placement', 'steps', 'style', 'type', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'arrow', 'className', 'current', 'data-*', 'key', 'loading_state', 'locale', 'mask', 'open', 'placement', 'steps', 'style', 'type', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTour, self).__init__(**args)
