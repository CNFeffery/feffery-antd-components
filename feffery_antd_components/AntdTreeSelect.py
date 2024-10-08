# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTreeSelect(Component):
    """An AntdTreeSelect component.
树选择组件AntdTreeSelect

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- popupClassName (string; optional):
    展开菜单css类名.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- treeDataMode (a value equal to: 'tree', 'flat'; default 'tree'):
    对应`treeData`格式的渲染模式，可选项有`'tree'`（树形模式）、`'flat'`（扁平模式）
    默认值：`'tree'`.

- treeData (list; required):
    定义构造树所需的数据结构，与`treeDataMode`一致.

- treeNodeKeyToTitle (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    针对树结构中的指定节点，定义作为标题的组件型内容，优先级高于`treeData`中对应的`title`值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
    其中'outlined'等价于bordered=True，优先级高于bordered.

- placeholder (string; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- treeLine (boolean; default False):
    是否显示连接线  默认值：`False`.

- value (string | number | list of string | numbers; optional):
    监听或设置已选值.

- defaultValue (string | number | list of string | numbers; optional):
    初始化已选值.

- maxTagCount (number | a value equal to: 'responsive'; optional):
    当`multiple=True`时，已选值tag展示的最大数量.

- maxTagPlaceholder (a list of or a singular dash component, string or number; optional):
    当`multiple=True`时，隐藏已选值tag时显示的内容.

- maxTagTextLength (number; optional):
    当`multiple=True`时，最大显示的已选值tag文本长度.

- listHeight (number; default 256):
    选择菜单最大像素高度  默认值：`256`.

- multiple (boolean; default False):
    是否开启多选模式  默认值：`False`.

- suffixIcon (a list of or a singular dash component, string or number; optional):
    组件型，自定义的选择框后缀图标.

- switcherIcon (a list of or a singular dash component, string or number; optional):
    组件型，自定义树节点的展开/折叠图标.

- treeCheckable (boolean; default False):
    树节点是否可勾选  默认值：`False`.

- treeCheckStrictly (boolean; default False):
    节点与其后代节点之间的选择行为是否彼此独立  默认值：`False`.

- treeDefaultExpandAll (boolean; default False):
    初始化是否展开全部节点  默认值：`False`.

- treeDefaultExpandedKeys (list of strings; optional):
    初始化已展开节点`key`值数组.

- treeExpandedKeys (list of strings; optional):
    监听或设置已展开节点`key`值数组.

- virtual (boolean; default True):
    是否开启虚拟滚动  默认值：`True`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- treeNodeFilterProp (a value equal to: 'title', 'value'; default 'value'):
    基于搜索框中输入内容进行搜索的目标字段，可选项有`'value'`、`'title'`  默认值：`'value'`.

- treeNodeFilterMode (a value equal to: 'case-insensitive', 'case-sensitive', 'regex'; default 'case-insensitive'):
    搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）
    默认值：`'case-insensitive'`.

- autoClearSearchValue (boolean; default True):
    当`multiple=True`时，设置是否在选中项后自动清空搜索框中的内容  默认值：`True`.

- showCheckedStrategy (a value equal to: 'show-all', 'show-parent', 'show-child'; default 'show-all'):
    已选项回填搜索框策略，可选项有`'show-all'`、`'show-parent'`、`'show-child'`
    默认值：`'show-all'`.

- dropdownBefore (a list of or a singular dash component, string or number; optional):
    组件型，选择菜单前缀内容.

- dropdownAfter (a list of or a singular dash component, string or number; optional):
    组件型，选择菜单后缀内容.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- enableAsyncLoad (boolean; default False):
    是否开启子节点异步加载功能，开启后无`children`属性，且未设置`isLeaf`为`True`的节点将可展开并触发`loadingNode`事件更新
    默认值：`False`.

- loadingNode (dict; optional):
    监听触发异步数据加载的节点展开事件信息.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    相关展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

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
        Holds the name of the component that is loading.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; default ['value']):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['treeNodeKeyToTitle{}', 'maxTagPlaceholder', 'suffixIcon', 'switcherIcon', 'dropdownBefore', 'dropdownAfter']
    _base_nodes = ['maxTagPlaceholder', 'suffixIcon', 'switcherIcon', 'dropdownBefore', 'dropdownAfter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTreeSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, popupClassName=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, treeDataMode=Component.UNDEFINED, treeData=Component.REQUIRED, treeNodeKeyToTitle=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, treeLine=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, maxTagPlaceholder=Component.UNDEFINED, maxTagTextLength=Component.UNDEFINED, listHeight=Component.UNDEFINED, multiple=Component.UNDEFINED, suffixIcon=Component.UNDEFINED, switcherIcon=Component.UNDEFINED, treeCheckable=Component.UNDEFINED, treeCheckStrictly=Component.UNDEFINED, treeDefaultExpandAll=Component.UNDEFINED, treeDefaultExpandedKeys=Component.UNDEFINED, treeExpandedKeys=Component.UNDEFINED, virtual=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, treeNodeFilterProp=Component.UNDEFINED, treeNodeFilterMode=Component.UNDEFINED, autoClearSearchValue=Component.UNDEFINED, showCheckedStrategy=Component.UNDEFINED, dropdownBefore=Component.UNDEFINED, dropdownAfter=Component.UNDEFINED, readOnly=Component.UNDEFINED, enableAsyncLoad=Component.UNDEFINED, loadingNode=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'treeDataMode', 'treeData', 'treeNodeKeyToTitle', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'treeLine', 'value', 'defaultValue', 'maxTagCount', 'maxTagPlaceholder', 'maxTagTextLength', 'listHeight', 'multiple', 'suffixIcon', 'switcherIcon', 'treeCheckable', 'treeCheckStrictly', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'virtual', 'status', 'allowClear', 'treeNodeFilterProp', 'treeNodeFilterMode', 'autoClearSearchValue', 'showCheckedStrategy', 'dropdownBefore', 'dropdownAfter', 'readOnly', 'enableAsyncLoad', 'loadingNode', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'treeDataMode', 'treeData', 'treeNodeKeyToTitle', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'treeLine', 'value', 'defaultValue', 'maxTagCount', 'maxTagPlaceholder', 'maxTagTextLength', 'listHeight', 'multiple', 'suffixIcon', 'switcherIcon', 'treeCheckable', 'treeCheckStrictly', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'virtual', 'status', 'allowClear', 'treeNodeFilterProp', 'treeNodeFilterMode', 'autoClearSearchValue', 'showCheckedStrategy', 'dropdownBefore', 'dropdownAfter', 'readOnly', 'enableAsyncLoad', 'loadingNode', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['treeData']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdTreeSelect, self).__init__(**args)
