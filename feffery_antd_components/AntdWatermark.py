# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdWatermark(Component):
    """An AntdWatermark component.
水印组件AntdWatermark

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string; optional):
    当前组件css类名.

- markClassName (string; optional):
    水印层css类名.

- markStyle (dict; optional):
    水印层css样式.

- content (string | list of strings; optional):
    配置水印内容，传入数组时渲染多行水印.

- rotate (number; default -22):
    水印旋转角度  默认值：`-22`.

- zIndex (number; optional):
    水印z-index.

- fontColor (string; optional):
    文字水印颜色.

- fontSize (number; default 16):
    文字水印字体大小  默认值：`16`.

- gapX (number; default 212):
    水印之间的水平像素间距  默认值：`212`.

- gapY (number; default 222):
    水印之间的垂直像素间距  默认值：`222`.

- image (string; optional):
    图片水印地址.

- width (number; optional):
    图片水印像素宽度.

- height (number; optional):
    图片水印像素高度.

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
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdWatermark'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, markClassName=Component.UNDEFINED, markStyle=Component.UNDEFINED, content=Component.UNDEFINED, rotate=Component.UNDEFINED, zIndex=Component.UNDEFINED, fontColor=Component.UNDEFINED, fontSize=Component.UNDEFINED, gapX=Component.UNDEFINED, gapY=Component.UNDEFINED, image=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'markClassName', 'markStyle', 'content', 'rotate', 'zIndex', 'fontColor', 'fontSize', 'gapX', 'gapY', 'image', 'width', 'height', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'markClassName', 'markStyle', 'content', 'rotate', 'zIndex', 'fontColor', 'fontSize', 'gapX', 'gapY', 'image', 'width', 'height', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdWatermark, self).__init__(children=children, **args)
