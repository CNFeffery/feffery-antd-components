# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPagination(Component):
    """An AntdPagination component.
分页组件AntdPagination

Keyword arguments:

- id (string; optional):
    组件唯一id.

- align (a value equal to: 'start', 'center', 'end'; default 'start'):
    组件尺寸规格，可选项有`'start'`、`'center'`、`'end'`  默认值：`'start'`.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- batchPropsNames (list of strings; optional):
    需要纳入批属性监听的属性名  默认值：`[]`.

- batchPropsValues (dict; optional):
    批量监听与当前batchPropsNames对应的属性值.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- current (number; optional):
    监听或设置当前页码.

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultCurrent (number; default 1):
    初始化时的当前页码  默认值：`1`.

- defaultPageSize (number; default 10):
    初始化时的每页条数  默认值：`10`.

- disabled (boolean; default False):
    是否禁用当前组件功能  默认值：`False`.

- hideOnSinglePage (boolean; default False):
    仅有一页时是否隐藏分页器  默认值：`False`.

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

- pageSize (number; optional):
    监听或设置每页条数.

- pageSizeOptions (list of numbers; optional):
    每页条数切换可选项.

- persisted_props (list of a value equal to: 'current', 'pageSize's; default ['current', 'pageSize']):
    当前组件启用持久化的属性值数组，可选项有`'current'`、`'pageSize'`  默认值：`['current',
    'pageSize']`.

- persistence (boolean | string | number; optional):
    是否为当前组件开启持久化功能.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    当前组件的属性持久化存储类型  默认值：`'local'`.

- showLessItems (boolean; default False):
    是否显示较少的跳页按钮  默认值：`False`.

- showQuickJumper (boolean; default False):
    是否渲染快捷跳页控件  默认值：`False`.

- showSizeChanger (boolean; default False):
    是否渲染每页条数切换器  默认值：`False`.

- showTotal (boolean; default True):
    是否渲染总记录数描述内容  默认值：`True`.

- showTotalPrefix (string; optional):
    总记录数描述前缀内容.

- showTotalSuffix (string; optional):
    总记录数描述后缀内容.

- simple (boolean; default False):
    是否启用简洁模式  默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    组件尺寸规格，可选项有`'default'`、`'small'`  默认值：`'default'`.

- style (dict; optional):
    当前组件css样式.

- total (number; optional):
    总记录数."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPagination'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, align=Component.UNDEFINED, defaultCurrent=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, current=Component.UNDEFINED, disabled=Component.UNDEFINED, hideOnSinglePage=Component.UNDEFINED, pageSize=Component.UNDEFINED, pageSizeOptions=Component.UNDEFINED, showSizeChanger=Component.UNDEFINED, showQuickJumper=Component.UNDEFINED, showTotalPrefix=Component.UNDEFINED, showTotalSuffix=Component.UNDEFINED, simple=Component.UNDEFINED, size=Component.UNDEFINED, total=Component.UNDEFINED, showTotal=Component.UNDEFINED, showLessItems=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'align', 'aria-*', 'batchPropsNames', 'batchPropsValues', 'className', 'current', 'data-*', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'key', 'loading_state', 'locale', 'pageSize', 'pageSizeOptions', 'persisted_props', 'persistence', 'persistence_type', 'showLessItems', 'showQuickJumper', 'showSizeChanger', 'showTotal', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'align', 'aria-*', 'batchPropsNames', 'batchPropsValues', 'className', 'current', 'data-*', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'key', 'loading_state', 'locale', 'pageSize', 'pageSizeOptions', 'persisted_props', 'persistence', 'persistence_type', 'showLessItems', 'showQuickJumper', 'showSizeChanger', 'showTotal', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdPagination, self).__init__(**args)
