# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCustomSkeleton(Component):
    """An AntdCustomSkeleton component.
自定义骨架屏组件AntdCustomSkeleton

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- skeletonContent (a list of or a singular dash component, string or number; optional):
    组件型，加载状态下显示的内容.

- loading (boolean; default False):
    是否处于加载中状态.

- delay (number; optional):
    加载动画渲染延时，单位：毫秒  默认值：`0`.

- debug (boolean; default False):
    是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印相关`prop`信息  默认值：`False`.

- listenPropsMode (a value equal to: 'default', 'exclude', 'include'; default 'default'):
    监听模式，可选项有`'default'`、`'exclude'`、`'include'`  默认值：`'default'`.

- excludeProps (list of strings; optional):
    `listenPropsMode='exclude'`时，设置需要排除监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- includeProps (list of strings; optional):
    `listenPropsMode='include'`时，设置需要包含监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- manual (boolean; default False):
    是否开启手动控制模式，开启后是否处于加载状态将由`loading`参数控制，与内部元素参与的回调状态无关  默认值：`False`.

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
    _children_props = ['skeletonContent']
    _base_nodes = ['skeletonContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCustomSkeleton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, skeletonContent=Component.UNDEFINED, loading=Component.UNDEFINED, delay=Component.UNDEFINED, debug=Component.UNDEFINED, listenPropsMode=Component.UNDEFINED, excludeProps=Component.UNDEFINED, includeProps=Component.UNDEFINED, manual=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'skeletonContent', 'loading', 'delay', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'manual', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'skeletonContent', 'loading', 'delay', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'manual', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCustomSkeleton, self).__init__(children=children, **args)
