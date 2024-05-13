# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCarousel(Component):
    """An AntdCarousel component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- arrows (boolean; default False):
    设置是否显示箭头  默认值：`False`.

- autoplay (boolean; default False)

- autoplaySpeed (number; default 3000)

- className (string | dict; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- dotPosition (a value equal to: 'top', 'bottom', 'left', 'right'; default 'bottom')

- easing (string; default 'linear')

- effect (a value equal to: 'scrollx', 'fade'; default 'scrollx')

- infinite (boolean; default True):
    是否启用无限循环切换  默认：True.

- key (string; optional)

- lazyLoad (boolean; default False):
    是否针对走马灯中的子项实施懒加载效果  默认：False.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- pauseOnHover (boolean; default False)

- speed (number; default 500)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCarousel'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, arrows=Component.UNDEFINED, autoplay=Component.UNDEFINED, dotPosition=Component.UNDEFINED, easing=Component.UNDEFINED, effect=Component.UNDEFINED, autoplaySpeed=Component.UNDEFINED, speed=Component.UNDEFINED, pauseOnHover=Component.UNDEFINED, infinite=Component.UNDEFINED, lazyLoad=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'arrows', 'autoplay', 'autoplaySpeed', 'className', 'data-*', 'dotPosition', 'easing', 'effect', 'infinite', 'key', 'lazyLoad', 'loading_state', 'pauseOnHover', 'speed', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'arrows', 'autoplay', 'autoplaySpeed', 'className', 'data-*', 'dotPosition', 'easing', 'effect', 'infinite', 'key', 'lazyLoad', 'loading_state', 'pauseOnHover', 'speed', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCarousel, self).__init__(children=children, **args)
