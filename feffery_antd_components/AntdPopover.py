# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopover(Component):
    """An AntdPopover component.
气泡卡片组件Popover

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，气泡卡片触发目标元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- content (a list of or a singular dash component, string or number; optional):
    组件型，内容区元素.

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; default 'top'):
    气泡卡片展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
    默认值：`top'`.

- color (string; optional):
    背景颜色.

- mouseEnterDelay (number; default 0.1):
    鼠标移入到气泡卡片弹出延时，单位：秒  默认值：`0.1`.

- mouseLeaveDelay (number; default 0.1):
    鼠标移出到气泡卡片消失延时，单位：秒  默认值：`0.1`.

- overlayClassName (string | dict; optional):
    气泡卡片css类名，支持[动态css](/advanced-classname).

- overlayStyle (dict; optional):
    气泡卡片css样式.

- overlayInnerStyle (dict; optional):
    内容区css样式.

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'hover'):
    触发方式，可选项有`'hover'`、`'focus'`、`'click'`，可多选  默认值：`'hover'`.

- zIndex (number; optional):
    气泡卡片z-index.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
    控制气泡卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`  默认值：`'show'`.

- fresh (boolean; default False):
    是否始终保持更新内容  默认值：`False`.

- open (boolean; default False):
    监听或设置当前气泡卡片的展开状态  默认值：`False`.

- permanent (boolean; default False):
    是否保持气泡卡片处于`open`对应状态不变  默认值：`False`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    气泡卡片展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

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
    _children_props = ['title', 'content']
    _base_nodes = ['title', 'content', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopover'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, content=Component.UNDEFINED, placement=Component.UNDEFINED, color=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, trigger=Component.UNDEFINED, zIndex=Component.UNDEFINED, arrow=Component.UNDEFINED, fresh=Component.UNDEFINED, open=Component.UNDEFINED, permanent=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'title', 'content', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'title', 'content', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopover, self).__init__(children=children, **args)
