# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTooltip(Component):
    """An AntdTooltip component.
文字提示组件AntdTooltip

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，文字提示挂载目标.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- title (a list of or a singular dash component, string or number; optional):
    组件型，文字提示内容.

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; default 'top'):
    文字提示弹出方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
    默认值：`'top'`.

- color (string; optional):
    背景颜色.

- mouseEnterDelay (number; default 0.1):
    鼠标移入到文字提示弹出延时，单位：秒  默认值：`0.1`.

- mouseLeaveDelay (number; default 0.1):
    鼠标移出到文字提示消失延时，单位：秒  默认值：`0.1`.

- overlayClassName (string | dict; optional):
    文字提示卡片css类名，支持[动态css](/advanced-classname).

- overlayStyle (dict; optional):
    文字提示卡片css样式.

- overlayInnerStyle (dict; optional):
    内容区css样式.

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'hover'):
    触发方式，可选项有`'hover'`、`'focus'`、`'click'`，可多选  默认值：`'hover'`.

- zIndex (number; optional):
    文字提示卡片z-index.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
    文字提示卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`  默认值：`'show'`.

- fresh (boolean; default False):
    是否始终保持更新内容  默认值：`False`.

- open (boolean; default False):
    监听或设置当前文字提示卡片的展开状态  默认值：`False`.

- permanent (boolean; default False):
    是否保持文字提示卡片处于`open`对应状态不变  默认值：`False`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    文字提示卡片展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTooltip'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, placement=Component.UNDEFINED, color=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, trigger=Component.UNDEFINED, zIndex=Component.UNDEFINED, arrow=Component.UNDEFINED, fresh=Component.UNDEFINED, open=Component.UNDEFINED, permanent=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'title', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'title', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdTooltip, self).__init__(children=children, **args)
