# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCol(Component):
    """An AntdCol component.
列组件AntdCol

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- id (string; optional):
    组件唯一id.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- flex (string | number; optional):
    同css中的flex.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- lg (dict; optional):
    配置列在页面宽度大于等于992px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `lg` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- md (dict; optional):
    配置列在页面宽度大于等于768px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `md` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数.

- offset (number; default 0):
    列左侧间隔宽度份数  默认值：`0`.

- order (number; default 0):
    列顺序  默认值：`0`.

- pull (number; default 0):
    列向左移动宽度份数  默认值：`0`.

- push (number; default 0):
    列向右移动宽度份数  默认值：`0`.

- sm (dict; optional):
    配置列在页面宽度大于等于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `sm` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数.

- span (number; optional):
    列所占宽度份数.

- style (dict; optional):
    当前组件css样式.

- xl (dict; optional):
    配置列在页面宽度大于等于1200px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xl` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数.

- xs (dict; optional):
    配置列在页面宽度小于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xs` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数.

- xxl (dict; optional):
    配置列在页面宽度大于等于1600px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xxl` is a number | dict with keys:

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

    - span (number; optional):
        同span参数."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCol'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, span=Component.UNDEFINED, offset=Component.UNDEFINED, order=Component.UNDEFINED, pull=Component.UNDEFINED, push=Component.UNDEFINED, flex=Component.UNDEFINED, xs=Component.UNDEFINED, sm=Component.UNDEFINED, md=Component.UNDEFINED, lg=Component.UNDEFINED, xl=Component.UNDEFINED, xxl=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'flex', 'key', 'lg', 'loading_state', 'md', 'offset', 'order', 'pull', 'push', 'sm', 'span', 'style', 'xl', 'xs', 'xxl']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'flex', 'key', 'lg', 'loading_state', 'md', 'offset', 'order', 'pull', 'push', 'sm', 'span', 'style', 'xl', 'xs', 'xxl']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCol, self).__init__(children=children, **args)
