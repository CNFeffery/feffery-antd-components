# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopconfirm(Component):
    """An AntdPopconfirm component.
气泡确认框组件AntdPopconfirm

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，气泡确认框挂载元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
    指示箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`  默认值：`'show'`.

- cancelButtonProps (dict; optional):
    配置取消按钮相关参数.

    `cancelButtonProps` is a dict with keys:

    - className (string; optional):
        按钮css类名.

    - danger (boolean; optional):
        按钮是否呈现危险样式  默认值：`False`.

    - disabled (boolean; optional):
        按钮是否呈现禁用状态  默认值：`False`.

    - shape (a value equal to: 'circle', 'round'; optional):
        按钮形状，可选项有`'default'`、`'circle'`、`'round'`  默认值：`'default'`.

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

    - style (dict; optional):
        按钮css样式.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

- cancelCounts (number; default 0):
    监听取消按钮累计点击次数  默认值：`0`.

- cancelText (a list of or a singular dash component, string or number; optional):
    组件型，取消按钮内容.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- confirmCounts (number; default 0):
    监听确认按钮累计点击次数  默认值：`0`.

- data-* (string; optional):
    `data-*`格式属性通配.

- description (a list of or a singular dash component, string or number; optional):
    组件型，描述内容.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- fresh (boolean; default False):
    是否保持内容更新  默认值：`False`.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，提示图标.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- mouseEnterDelay (number; default 0.1):
    从鼠标移入挂载元素，到气泡确认框显示的延时，单位：秒  默认值：`0.1`.

- mouseLeaveDelay (number; default 0.1):
    从鼠标移出挂载元素，到气泡确认框消失的延时，单位：秒  默认值：`0.1`.

- okButtonProps (dict; optional):
    配置确认按钮相关参数.

    `okButtonProps` is a dict with keys:

    - className (string; optional):
        按钮css类名.

    - danger (boolean; optional):
        按钮是否呈现危险样式  默认值：`False`.

    - disabled (boolean; optional):
        按钮是否呈现禁用状态  默认值：`False`.

    - shape (a value equal to: 'circle', 'round'; optional):
        按钮形状，可选项有`'default'`、`'circle'`、`'round'`  默认值：`'default'`.

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

    - style (dict; optional):
        按钮css样式.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

- okText (a list of or a singular dash component, string or number; optional):
    组件型，确认按钮内容.

- open (boolean; default False):
    监听或设置气泡确认框的显示状态  默认值：`False`.

- overlayClassName (string | dict; optional):
    气泡确认框css类名.

- overlayInnerStyle (dict; optional):
    内容区域css样式.

- overlayStyle (dict; optional):
    气泡确认框css样式.

- permanent (boolean; default False):
    是否保持气泡确认框显示/隐藏  默认值：`False`.

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; default 'top'):
    气泡确认框弹出位置，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
    默认值：`'top'`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    悬浮层渲染挂载父节点策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- showCancel (boolean; default True):
    是否显示取消按钮  默认值：`True`.

- style (dict; optional):
    当前组件css样式.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'click'):
    气泡确认框触发行为，可选项有`'hover'`、`'focus'`、`'click'`，可多选组合  默认值：`'click'`.

- zIndex (number; optional):
    气泡确认框z-index."""
    _children_props = ['icon', 'title', 'description', 'okText', 'cancelText']
    _base_nodes = ['icon', 'title', 'description', 'okText', 'cancelText', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopconfirm'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, icon=Component.UNDEFINED, title=Component.UNDEFINED, description=Component.UNDEFINED, disabled=Component.UNDEFINED, placement=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, okText=Component.UNDEFINED, okButtonProps=Component.UNDEFINED, cancelText=Component.UNDEFINED, cancelButtonProps=Component.UNDEFINED, showCancel=Component.UNDEFINED, confirmCounts=Component.UNDEFINED, cancelCounts=Component.UNDEFINED, trigger=Component.UNDEFINED, zIndex=Component.UNDEFINED, arrow=Component.UNDEFINED, fresh=Component.UNDEFINED, open=Component.UNDEFINED, permanent=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'arrow', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'data-*', 'description', 'disabled', 'fresh', 'icon', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'showCancel', 'style', 'title', 'trigger', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'arrow', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'data-*', 'description', 'disabled', 'fresh', 'icon', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'showCancel', 'style', 'title', 'trigger', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopconfirm, self).__init__(children=children, **args)
