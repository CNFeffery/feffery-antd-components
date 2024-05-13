# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdBadge(Component):
    """An AntdBadge component.
徽标组件AntdBadge

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，定义徽标添加目标元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - indicator (string; optional):
        控制徽标元素css类.

    - root (string; optional):
        控制根元素css类.

- color (string; optional):
    徽标颜色.

- count (number; optional):
    徽标显示的数字.

- data-* (string; optional):
    `data-*`格式属性通配.

- dot (boolean; default False):
    是否用圆点代替数字显示  默认值：`False`.

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

- nClicks (number; default 0):
    监听徽标累计被点击次数  默认值：`0`.

- offset (list of numbers; optional):
    徽标在水平、竖直方向上的像素偏移，格式为`[水平偏移, 竖直偏移]`.

- overflowCount (number; default 99):
    数字显示上限，超出会以显示`+`后缀  默认值：`99`.

- showZero (boolean; default False):
    当`count=0`时，是否强制显示数字  默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    徽标尺寸规格，可选项有`'default'`、`'small'`.

- status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional):
    徽标状态，可选项有`'success'`、`'processing'`、`'default'`、`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - indicator (dict; optional):
        控制徽标元素css样式.

    - root (dict; optional):
        控制根元素css样式.

- text (string; optional):
    参数`status`有效时，设置徽标文本内容.

- title (string; optional):
    徽标鼠标悬停显示文字内容."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBadge'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, color=Component.UNDEFINED, count=Component.UNDEFINED, dot=Component.UNDEFINED, showZero=Component.UNDEFINED, overflowCount=Component.UNDEFINED, offset=Component.UNDEFINED, status=Component.UNDEFINED, text=Component.UNDEFINED, title=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'classNames', 'color', 'count', 'data-*', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'styles', 'text', 'title']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'classNames', 'color', 'count', 'data-*', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'styles', 'text', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdBadge, self).__init__(children=children, **args)
