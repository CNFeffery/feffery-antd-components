# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdModal(Component):
    """An AntdModal component.
对话框组件AntdModal

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

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- visible (boolean; default False):
    监听或设置对话框是否可见  默认值：`False`.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- renderFooter (boolean; default False):
    是否渲染底部操作按钮  默认值：`False`.

- okText (a list of or a singular dash component, string or number; optional):
    组件型，确认按钮内容.

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

- cancelText (a list of or a singular dash component, string or number; optional):
    组件型，取消按钮内容.

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

- width (number | string; default 520):
    对话框像素宽度  默认值：`520`.

- centered (boolean; default False):
    是否垂直居中显示对话框  默认值：`False`.

- keyboard (boolean; default True):
    是否支持键盘esc关闭对话框  默认值：`True`.

- closable (boolean; default True):
    是否显示右上角的关闭按钮  默认值：`True`.

- mask (boolean; default True):
    是否显示背景遮罩  默认值：`True`.

- maskClosable (boolean; default True):
    是否允许点击遮罩层关闭对话框  默认值：`True`.

- okClickClose (boolean; default True):
    是否点击确认按钮触发对话框关闭  默认值：`True`.

- zIndex (number; default 1000):
    模态框z-index  默认值：`1000`.

- maskStyle (dict; optional):
    遮罩层css样式.

- bodyStyle (dict; optional):
    内容区域css样式.

- okCounts (number; default 0):
    监听确认按钮累计点击次数  默认值：`0`.

- cancelCounts (number; default 0):
    监听取消按钮累计点击次数  默认值：`0`.

- closeCounts (number; default 0):
    监听关闭按钮累计点击次数  默认值：`0`.

- confirmAutoSpin (boolean; default False):
    是否在每次确认按钮点击之后，自动更新`confirmLoading=True`  默认值：`False`.

- loadingOkText (a list of or a singular dash component, string or number; optional):
    组件型，`confirmLoading=True`时，确认按钮的内容.

- confirmLoading (boolean; default False):
    底部确认按钮是否处于加载中状态  默认值：`False`.

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'zoom'):
    模态框显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
    默认值：`'zoom'`.

- destroyOnClose (boolean; default True):
    是否在模态框关闭后自动销毁内部元素  默认值：`True`.

- loading (boolean; default False):
    是否整体渲染为加载中状态  默认值：`False`.

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
    _children_props = ['title', 'okText', 'cancelText', 'loadingOkText']
    _base_nodes = ['title', 'okText', 'cancelText', 'loadingOkText', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdModal'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, renderFooter=Component.UNDEFINED, okText=Component.UNDEFINED, okButtonProps=Component.UNDEFINED, cancelText=Component.UNDEFINED, cancelButtonProps=Component.UNDEFINED, width=Component.UNDEFINED, centered=Component.UNDEFINED, keyboard=Component.UNDEFINED, closable=Component.UNDEFINED, mask=Component.UNDEFINED, maskClosable=Component.UNDEFINED, okClickClose=Component.UNDEFINED, zIndex=Component.UNDEFINED, maskStyle=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, okCounts=Component.UNDEFINED, cancelCounts=Component.UNDEFINED, closeCounts=Component.UNDEFINED, confirmAutoSpin=Component.UNDEFINED, loadingOkText=Component.UNDEFINED, confirmLoading=Component.UNDEFINED, transitionType=Component.UNDEFINED, destroyOnClose=Component.UNDEFINED, loading=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'locale', 'visible', 'title', 'renderFooter', 'okText', 'okButtonProps', 'cancelText', 'cancelButtonProps', 'width', 'centered', 'keyboard', 'closable', 'mask', 'maskClosable', 'okClickClose', 'zIndex', 'maskStyle', 'bodyStyle', 'okCounts', 'cancelCounts', 'closeCounts', 'confirmAutoSpin', 'loadingOkText', 'confirmLoading', 'transitionType', 'destroyOnClose', 'loading', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'locale', 'visible', 'title', 'renderFooter', 'okText', 'okButtonProps', 'cancelText', 'cancelButtonProps', 'width', 'centered', 'keyboard', 'closable', 'mask', 'maskClosable', 'okClickClose', 'zIndex', 'maskStyle', 'bodyStyle', 'okCounts', 'cancelCounts', 'closeCounts', 'confirmAutoSpin', 'loadingOkText', 'confirmLoading', 'transitionType', 'destroyOnClose', 'loading', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdModal, self).__init__(children=children, **args)
