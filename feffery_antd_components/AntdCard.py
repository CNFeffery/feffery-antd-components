# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCard(Component):
    """An AntdCard component.


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

- actions (a list of or a singular dash component, string or number; optional):
    组件型，底部操作区元素.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- extraLink (dict; optional):
    配置卡片右上角额外链接相关参数.

    `extraLink` is a dict with keys:

    - content (string; optional):
        链接文字内容.

    - href (string; optional):
        链接地址.

    - target (string; optional):
        链接跳转行为.

    - className (string; optional):
        链接css类名.

    - style (dict; optional):
        链接css样式.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，卡片右上角额外元素，优先级高于`extraLink`.

- coverImg (dict; optional):
    配置封面图片相关参数.

    `coverImg` is a dict with keys:

    - src (string; optional):
        图片资源地址.

    - alt (string; optional):
        图片alt信息.

    - className (string; optional):
        图片css类名.

    - style (dict; optional):
        图片css样式.

- bodyStyle (dict; optional):
    内容区css样式.

- headStyle (dict; optional):
    标题css样式.

- bordered (boolean; default True):
    是否渲染边框  默认值：`True`.

- hoverable (boolean; default False):
    是否在鼠标悬停时显示特殊样式  默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    卡片尺寸规格，可选项有`'default'`、`'small'`  默认值：`'default'`.

- nClicks (number; default 0):
    监听当前卡片累计点击次数  默认值：`0`.

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
    _children_props = ['actions', 'title', 'extra']
    _base_nodes = ['actions', 'title', 'extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, actions=Component.UNDEFINED, title=Component.UNDEFINED, extraLink=Component.UNDEFINED, extra=Component.UNDEFINED, coverImg=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, headStyle=Component.UNDEFINED, bordered=Component.UNDEFINED, hoverable=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'actions', 'title', 'extraLink', 'extra', 'coverImg', 'bodyStyle', 'headStyle', 'bordered', 'hoverable', 'size', 'nClicks', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'actions', 'title', 'extraLink', 'extra', 'coverImg', 'bodyStyle', 'headStyle', 'bordered', 'hoverable', 'size', 'nClicks', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCard, self).__init__(children=children, **args)
