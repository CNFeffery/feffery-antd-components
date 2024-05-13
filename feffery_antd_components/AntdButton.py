# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdButton(Component):
    """An AntdButton component.
按钮组件AntdButton

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- autoInsertSpace (boolean; default True):
    按钮两个汉字内是否插入空格  默认值：`True`.

- autoSpin (boolean; default False):
    当前按钮在每次点击后是否自动进入加载中状态  默认值：`False`.

- block (boolean; default False):
    按钮是否渲染为块级元素（宽度撑满父容器）  默认值：`False`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - icon (string; optional):
        按钮图标元素css类名.

- clickExecuteJsString (string; optional):
    按钮点击时需要附带执行的js程序字符串.

- danger (boolean; default False):
    按钮是否呈现危险样式  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- debounceWait (number; default 0):
    按钮点击事件监听防抖延时，单位：毫秒  默认值：`0`.

- disabled (boolean; default False):
    按钮是否呈现禁用状态  默认值：`False`.

- ghost (boolean; default False):
    按钮是否呈现透明背景状态  默认值：`False`.

- href (string; optional):
    按钮点击跳转链接地址.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌前缀图标元素.

- iconPosition (a value equal to: 'start', 'end'; default 'start'):
    按钮图标组件的位置，可选项有`'start'`、`'end'`  默认值：`'start'`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading (boolean; optional):
    按钮是否呈现加载状态  默认值：`False`.

- loadingChildren (a list of or a singular dash component, string or number; optional):
    组件型，按钮加载状态下显示的内嵌元素.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- motionType (a value equal to: 'happy-work'; optional):
    按钮额外的特殊交互类型，可选项有`'happy-work'`.

- nClicks (number; default 0):
    按钮累计点击次数，用于监听按钮点击行为  默认值：`0`.

- shape (a value equal to: 'default', 'circle', 'round'; default 'default'):
    按钮形状，可选项有`'default'`、`'circle'`、`'round'`  默认值：`'default'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- style (dict; optional):
    当前组件css样式.

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - icon (dict; optional):
        按钮图标元素css样式.

- target (string; default '_blank'):
    按钮点击跳转链接方式  默认值：`'_blank'`.

- type (a value equal to: 'default', 'primary', 'ghost', 'dashed', 'link', 'text'; default 'default'):
    按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
    默认值：`'default'`."""
    _children_props = ['loadingChildren', 'icon']
    _base_nodes = ['loadingChildren', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdButton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, loadingChildren=Component.UNDEFINED, type=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, autoInsertSpace=Component.UNDEFINED, block=Component.UNDEFINED, danger=Component.UNDEFINED, disabled=Component.UNDEFINED, ghost=Component.UNDEFINED, shape=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, clickExecuteJsString=Component.UNDEFINED, debounceWait=Component.UNDEFINED, icon=Component.UNDEFINED, iconPosition=Component.UNDEFINED, loading=Component.UNDEFINED, autoSpin=Component.UNDEFINED, motionType=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'autoInsertSpace', 'autoSpin', 'block', 'className', 'classNames', 'clickExecuteJsString', 'danger', 'data-*', 'debounceWait', 'disabled', 'ghost', 'href', 'icon', 'iconPosition', 'key', 'loading', 'loadingChildren', 'loading_state', 'motionType', 'nClicks', 'shape', 'size', 'style', 'styles', 'target', 'type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'autoInsertSpace', 'autoSpin', 'block', 'className', 'classNames', 'clickExecuteJsString', 'danger', 'data-*', 'debounceWait', 'disabled', 'ghost', 'href', 'icon', 'iconPosition', 'key', 'loading', 'loadingChildren', 'loading_state', 'motionType', 'nClicks', 'shape', 'size', 'style', 'styles', 'target', 'type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdButton, self).__init__(children=children, **args)
