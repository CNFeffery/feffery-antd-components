# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCarousel(Component):
    """An AntdCarousel component.
走马灯组件AntdCarousel

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，定义走马灯中需要轮播的若干元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- arrows (boolean; default False):
    是否显示箭头  默认值：`False`.

- autoplay (boolean; default False):
    是否自动轮播  默认值：`False`.

- dotPosition (a value equal to: 'top', 'bottom', 'left', 'right'; default 'bottom'):
    面板指示器位置，可选项有`'top'`、`'bottom'`、`'left'`、`'right'`  默认值：`'bottom'`.

- easing (string; default 'linear'):
    调整动画效果，同css中的`animation-timing-function`  默认值：'linear'.

- effect (a value equal to: 'scrollx', 'fade'; default 'scrollx'):
    动化效果，可选项有`'scrollx'`、`'fade'`  默认值：'scrollx'.

- autoplaySpeed (number; default 3000):
    轮播间隔时长，单位：毫秒  默认值：`3000`.

- speed (number; default 500):
    轮播动画耗时，单位：毫秒  默认值：`500`.

- pauseOnHover (boolean; default False):
    是否在鼠标悬停时暂停轮播  默认值：`False`.

- infinite (boolean; default True):
    是否启用无限循环轮播  默认值：`True`.

- lazyLoad (boolean; default False):
    是否针对走马灯中的子项实施懒加载效果  默认值：`False`.

- slidesToShow (number; default 1):
    同时展示的子项数量  默认值：`1`.

- slidesToScroll (number; default 1):
    一次轮播划过的子项数量  默认值：`1`.

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
    _type = 'AntdCarousel'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, arrows=Component.UNDEFINED, autoplay=Component.UNDEFINED, dotPosition=Component.UNDEFINED, easing=Component.UNDEFINED, effect=Component.UNDEFINED, autoplaySpeed=Component.UNDEFINED, speed=Component.UNDEFINED, pauseOnHover=Component.UNDEFINED, infinite=Component.UNDEFINED, lazyLoad=Component.UNDEFINED, slidesToShow=Component.UNDEFINED, slidesToScroll=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'arrows', 'autoplay', 'dotPosition', 'easing', 'effect', 'autoplaySpeed', 'speed', 'pauseOnHover', 'infinite', 'lazyLoad', 'slidesToShow', 'slidesToScroll', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'arrows', 'autoplay', 'dotPosition', 'easing', 'effect', 'autoplaySpeed', 'speed', 'pauseOnHover', 'infinite', 'lazyLoad', 'slidesToShow', 'slidesToScroll', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCarousel, self).__init__(children=children, **args)
