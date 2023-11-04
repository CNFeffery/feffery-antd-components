# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdButton(Component):
    """An AntdButton component.
按钮组件AntdButton，api参数参考https://ant.design/components/button-cn/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    当前按钮内嵌元素.

- id (string; optional):
    当前组件唯一id.

- autoSpin (boolean; default False):
    当前按钮在每次点击后是否自动进入加载中状态  默认：False.

- block (boolean; default False):
    当前按钮是否撑满父元素  默认：False.

- className (string | dict; optional):
    当前按钮css类，支持动态css类特性.

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - icon (string; optional):
        控制图标部分元素css类.

- danger (boolean; default False):
    当前按钮是否呈现危险状态  默认：False.

- debounceWait (number; default 200):
    当前按钮点击事件监听防抖延时，单位：毫秒  默认：200.

- disabled (boolean; default False):
    当前按钮是否呈现禁用状态  默认：False.

- ghost (boolean; default False):
    幽灵属性，使当前按钮背景透明  默认：False.

- href (string; optional):
    当前按钮点击跳转链接地址.

- icon (a list of or a singular dash component, string or number; optional):
    当前按钮内嵌元素前缀图标.

- key (string; optional):
    当前组件辅助用唯一id，可通过更新key值实现强制重绘.

- loading (boolean; optional):
    当前按钮是否呈现加载中状态  默认：False.

- loadingChildren (a list of or a singular dash component, string or number; optional):
    当前按钮加载状态下内嵌元素.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0):
    当前按钮累计被点击次数  默认：0.

- shape (a value equal to: 'default', 'circle', 'round'; default 'default'):
    当前按钮形状，可选的有'default'、'circle'、'round'  默认：'default'.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前按钮尺寸规格，可选的有'small'、'middle'、'large'  默认：'middle'.

- style (dict; optional):
    当前按钮css样式.

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - icon (dict; optional):
        控制图标部分元素css样式.

- target (string; optional):
    当前按钮点击跳转链接行为类型.

- type (a value equal to: 'default', 'primary', 'ghost', 'dashed', 'link', 'text'; default 'default'):
    当前按钮类型，可选的有'default'、'primary'、'ghost'、'dashed'、'link'、'text'
    默认：'primary'."""
    _children_props = ['loadingChildren', 'icon']
    _base_nodes = ['loadingChildren', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdButton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, key=Component.UNDEFINED, loadingChildren=Component.UNDEFINED, type=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, block=Component.UNDEFINED, danger=Component.UNDEFINED, disabled=Component.UNDEFINED, ghost=Component.UNDEFINED, shape=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, debounceWait=Component.UNDEFINED, icon=Component.UNDEFINED, loading=Component.UNDEFINED, autoSpin=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoSpin', 'block', 'className', 'classNames', 'danger', 'debounceWait', 'disabled', 'ghost', 'href', 'icon', 'key', 'loading', 'loadingChildren', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'styles', 'target', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoSpin', 'block', 'className', 'classNames', 'danger', 'debounceWait', 'disabled', 'ghost', 'href', 'icon', 'key', 'loading', 'loadingChildren', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'styles', 'target', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdButton, self).__init__(children=children, **args)
