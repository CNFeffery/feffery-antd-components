# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdImage(Component):
    """An AntdImage component.
图片组件AntdImage

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

- alt (string; optional):
    图片alt信息.

- width (number | string; optional):
    图片宽度.

- height (number | string; optional):
    图片高度.

- src (string | list of strings; optional):
    配置图片资源地址，当传入数组时为多图片模式.

- fallback (string; optional):
    图片加载失败占位图资源地址.

- multiImageMode (a value equal to: 'fold', 'unfold'; default 'fold'):
    多图片模式展示方式，可选项有`'fold'`、`'unfold'`  默认值：`'fold'`.

- previewVisible (boolean; optional):
    监听或控制当前图片预览层是否处于打开状态.

- previewCurrent (number; optional):
    监听或控制当前图片预览对应切换到的图片下标.

- preview (dict; default True):
    配置图片预览相关功能，传入`False`时会禁用预览功能  默认值：`True`.

    `preview` is a boolean | dict with keys:

    - src (string; optional):
        自定义预览图链接地址.

    - movable (boolean; optional):
        预览模式下是否可移动图片.

    - mask (a list of or a singular dash component, string or number; optional):
        组件型，用于自定义缩略图遮罩元素.

    - maskClassName (string; optional):
        缩略图遮罩元素css类名.

    - rootClassName (string; optional):
        缩略图根节点css类名.

    - scaleStep (number; optional):
        `1+scaleStep`值为每一步缩放的倍数  默认值：`0.5`.

    - minScale (number; optional):
        最小缩放倍数  默认值：`1`.

    - maxScale (number; optional):
        最大缩放倍数  默认值：`50`.

- toolbarExtra (a list of or a singular dash component, string or number; optional):
    针对预览模式下的工具栏，末尾扩充自定义工具图标元素.

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
    _children_props = ['preview.mask', 'toolbarExtra']
    _base_nodes = ['toolbarExtra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdImage'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, alt=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, src=Component.UNDEFINED, fallback=Component.UNDEFINED, multiImageMode=Component.UNDEFINED, previewVisible=Component.UNDEFINED, previewCurrent=Component.UNDEFINED, preview=Component.UNDEFINED, toolbarExtra=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'locale', 'alt', 'width', 'height', 'src', 'fallback', 'multiImageMode', 'previewVisible', 'previewCurrent', 'preview', 'toolbarExtra', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'locale', 'alt', 'width', 'height', 'src', 'fallback', 'multiImageMode', 'previewVisible', 'previewCurrent', 'preview', 'toolbarExtra', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdImage, self).__init__(**args)
