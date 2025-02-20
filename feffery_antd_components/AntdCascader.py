# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


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

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

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

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; optional):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['optionsNodeKeyToLabel{}', 'prefix', 'suffixIcon']
    _base_nodes = ['prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCascader'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        popupClassName: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        optionsMode: typing.Optional[Literal["tree", "flat"]] = None,
        options: typing.Optional[typing.Union[typing.Any, typing.Sequence[typing.Any]]] = None,
        optionsNodeKeyToLabel: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]]] = None,
        optionFilterProp: typing.Optional[Literal["value", "label"]] = None,
        panelMode: typing.Optional[bool] = None,
        disabled: typing.Optional[bool] = None,
        changeOnSelect: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        placeholder: typing.Optional[str] = None,
        placement: typing.Optional[Literal["bottomLeft", "bottomRight", "topLeft", "topRight"]] = None,
        value: typing.Optional[typing.Union[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]], typing.Sequence[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]]]]] = None,
        defaultValue: typing.Optional[typing.Union[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]], typing.Sequence[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]]]]] = None,
        multiple: typing.Optional[bool] = None,
        maxTagCount: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], Literal["responsive"]]] = None,
        expandTrigger: typing.Optional[Literal["click", "hover"]] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        allowClear: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        showCheckedStrategy: typing.Optional[Literal["show-parent", "show-child"]] = None,
        prefix: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        suffixIcon: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        readOnly: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, typing.Union[int, float, numbers.Number]]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'optionsMode', 'options', 'optionsNodeKeyToLabel', 'optionFilterProp', 'panelMode', 'disabled', 'changeOnSelect', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'multiple', 'maxTagCount', 'expandTrigger', 'status', 'allowClear', 'autoFocus', 'showCheckedStrategy', 'prefix', 'suffixIcon', 'readOnly', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'optionsMode', 'options', 'optionsNodeKeyToLabel', 'optionFilterProp', 'panelMode', 'disabled', 'changeOnSelect', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'multiple', 'maxTagCount', 'expandTrigger', 'status', 'allowClear', 'autoFocus', 'showCheckedStrategy', 'prefix', 'suffixIcon', 'readOnly', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
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
