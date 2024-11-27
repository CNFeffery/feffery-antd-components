# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCascader(Component):
    """An AntdCascader component.
级联选择组件AntdCascader

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

- optionsMode (a value equal to: 'tree', 'flat'; default 'tree'):
    对应`options`格式的渲染模式，可选项有`'tree'`（树形模式）、`'flat'`（扁平模式）
    默认值：`'tree'`.

- options (list; required):
    定义构造级联选择所需的数据结构，与`optionsMode`一致.

- optionsNodeKeyToLabel (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    针对级联结构中的指定节点，定义作为标题的组件型内容，优先级高于`options`中对应的`label`值.

- optionFilterProp (a value equal to: 'value', 'label'; default 'label'):
    选项关键词搜索时的目标字段，可选项有`'value'`、`'label'`  默认值：`'label'`.

- panelMode (boolean; default False):
    是否开启内嵌面板模式  默认值：`False`.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- changeOnSelect (boolean; default False):
    是否当级联选择中的任意节点被选择时均进行选中值更新  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; optional):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- placeholder (string; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- value (list of string | numbers | list of list of string | numberss; optional):
    监听或设置已选值.

- defaultValue (list of string | numbers | list of list of string | numberss; optional):
    初始化已选值.

- multiple (boolean; default False):
    是否开启多选模式  默认值：`False`.

- maxTagCount (number | a value equal to: 'responsive'; optional):
    当`multiple=True`时，已选值展示的最大数量.

- expandTrigger (a value equal to: 'click', 'hover'; default 'click'):
    选择菜单展开触发方式，可选项有`'click'`、`'hover'`  默认值：`'click'`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- showCheckedStrategy (a value equal to: 'show-parent', 'show-child'; optional):
    已选项回填策略，可选项有`'show-parent'`、`'show-child'`.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，前缀内嵌内容.

- suffixIcon (a list of or a singular dash component, string or number; optional):
    自定义选择框后缀图标内容.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

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
    _children_props = ['optionsNodeKeyToLabel{}', 'prefix', 'suffixIcon']
    _base_nodes = ['prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCascader'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, popupClassName=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, optionsMode=Component.UNDEFINED, options=Component.REQUIRED, optionsNodeKeyToLabel=Component.UNDEFINED, optionFilterProp=Component.UNDEFINED, panelMode=Component.UNDEFINED, disabled=Component.UNDEFINED, changeOnSelect=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, multiple=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, expandTrigger=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, showCheckedStrategy=Component.UNDEFINED, prefix=Component.UNDEFINED, suffixIcon=Component.UNDEFINED, readOnly=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'optionsMode', 'options', 'optionsNodeKeyToLabel', 'optionFilterProp', 'panelMode', 'disabled', 'changeOnSelect', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'multiple', 'maxTagCount', 'expandTrigger', 'status', 'allowClear', 'autoFocus', 'showCheckedStrategy', 'prefix', 'suffixIcon', 'readOnly', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'optionsMode', 'options', 'optionsNodeKeyToLabel', 'optionFilterProp', 'panelMode', 'disabled', 'changeOnSelect', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'multiple', 'maxTagCount', 'expandTrigger', 'status', 'allowClear', 'autoFocus', 'showCheckedStrategy', 'prefix', 'suffixIcon', 'readOnly', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['options']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdCascader, self).__init__(**args)
