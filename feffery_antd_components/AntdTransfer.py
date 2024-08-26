# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTransfer(Component):
    """An AntdTransfer component.
穿梭框组件AntdTransfer

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- dataSource (list of dicts; optional):
    配置选项.

    `dataSource` is a list of dicts with keys:

    - disabled (boolean; optional):
        是否禁用当前选项  默认值：`False`.

    - key (string | number; optional):
        当前选项唯一识别id.

    - title (a list of or a singular dash component, string or number; optional):
        组件型，当前选项标题内容.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- height (string | number; optional):
    穿梭框整体高度.

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

- moveDirection (a value equal to: 'left', 'right'; optional):
    监听最近一次选项移动对应方向，可选项有`'left'`、`'right'`.

- moveKeys (list of number | strings; optional):
    监听最近一次选项移动涉及的选项`key`值.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- oneWay (boolean; default False):
    是否启用单向模式  默认值：`False`.

- operations (list of a list of or a singular dash component, string or numbers; default ['', '']):
    左右移动操作按钮内容  默认值：`'['', '']'`.

- optionFilterMode (a value equal to: 'case-insensitive', 'case-sensitive', 'regex'; default 'case-insensitive'):
    搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）
    默认值：`'case-insensitive'`.

- pagination (dict; default False):
    选项分页展示配置  默认值：`False`.

    `pagination` is a boolean | dict with keys:

    - pageSize (number; optional):
        每页最大选项数.

- persisted_props (list of a value equal to: 'targetKeys's; default ['targetKeys']):
    开启属性持久化功能的若干属性名，可选项有`'targetKeys'`  默认值：`['targetKeys']`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`.

- readOnly (boolean; default False):
    是否渲染为只读状态  默认值：`False`.

- selectionsIcon (a list of or a singular dash component, string or number; optional):
    组件型，自定义下拉菜单图标.

- showSearch (boolean; default False):
    是否显示搜索框  默认值：`False`.

- showSelectAll (boolean; default True):
    是否显示全选勾选框  默认值：`True`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- targetKeys (list of number | strings; optional):
    监听或设置右侧区域已选项`key`值.

- titles (list of a list of or a singular dash component, string or numbers; optional):
    左右标题内容."""
    _children_props = ['dataSource[].title', 'selectionsIcon', 'operations', 'titles']
    _base_nodes = ['selectionsIcon', 'operations', 'titles', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTransfer'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, dataSource=Component.UNDEFINED, selectionsIcon=Component.UNDEFINED, height=Component.UNDEFINED, pagination=Component.UNDEFINED, oneWay=Component.UNDEFINED, operations=Component.UNDEFINED, showSearch=Component.UNDEFINED, optionFilterMode=Component.UNDEFINED, showSelectAll=Component.UNDEFINED, titles=Component.UNDEFINED, targetKeys=Component.UNDEFINED, moveDirection=Component.UNDEFINED, moveKeys=Component.UNDEFINED, disabled=Component.UNDEFINED, status=Component.UNDEFINED, readOnly=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'batchPropsNames', 'batchPropsValues', 'className', 'data-*', 'dataSource', 'disabled', 'height', 'key', 'loading_state', 'locale', 'moveDirection', 'moveKeys', 'name', 'oneWay', 'operations', 'optionFilterMode', 'pagination', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'selectionsIcon', 'showSearch', 'showSelectAll', 'status', 'style', 'targetKeys', 'titles']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'batchPropsNames', 'batchPropsValues', 'className', 'data-*', 'dataSource', 'disabled', 'height', 'key', 'loading_state', 'locale', 'moveDirection', 'moveKeys', 'name', 'oneWay', 'operations', 'optionFilterMode', 'pagination', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'selectionsIcon', 'showSearch', 'showSelectAll', 'status', 'style', 'targetKeys', 'titles']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTransfer, self).__init__(**args)
