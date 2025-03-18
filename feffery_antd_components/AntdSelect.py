# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdSelect(Component):
    """An AntdSelect component.
下拉选择组件AntdSelect

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果F.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- popupClassName (string; optional):
    展开菜单css类名.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- options (list of dicts; optional):
    配置下拉选项.

    `options` is a list of string | number | dict with keys:

    - label (a list of or a singular dash component, string or number; required):
        组件型，当前选项标签内容.

    - value (string

      Or number; required):
        当前选项值.

    - disabled (boolean; optional):
        是否禁用当前选项  默认值：`False`.

    - colors (list of strings; optional):
        针对色带特殊渲染模式，设置生成渐变色带所需的色彩值数组. | dict with keys:

    - group (a list of or a singular dash component, string or number; optional):
        组件型，当前分组标签内容.

    - options (list of dicts; optional):
        配置当前分组内选项.

        `options` is a list of dicts with keys:

        - label (a list of or a singular dash component, string or number; required):

            组件型，当前选项标签内容.

        - value (string | number; required):

            当前选项值.

        - disabled (boolean; optional):

            是否禁用当前选项  默认值：`False`.

        - colors (list of strings; optional):

            针对色带特殊渲染模式，设置生成渐变色带所需的色彩值数组.s

- listHeight (number; default 256):
    下拉菜单最大像素高度.

- colorsMode (a value equal to: 'sequential', 'diverging'; default 'sequential'):
    色带特殊渲染模式下，设置渲染形式，可选项有`'sequential'`、`'diverging'`.

- colorsNameWidth (number; default 40):
    色带特殊渲染模式下，设置各选项名称部分像素宽度  默认值：`40`.

- mode (a value equal to: 'multiple', 'tags'; optional):
    选择模式，可选项有`'multiple'`（多选）、`'tags'`（自由新增）.

- disabled (boolean; optional):
    是否禁用当前组件  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- placeholder (string; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- value (string | number | list of string | numbers; optional):
    监听或设置已选值.

- defaultValue (string | number | list of string | numbers; optional):
    初始化已选值.

- maxTagCount (number | a value equal to: 'responsive'; default 5):
    当`multiple=True`时，已选值展示的最大数量  默认值：`5`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- optionFilterProp (a value equal to: 'value', 'label'; default 'value'):
    基于搜索框中输入内容进行搜索的目标字段，可选项有`'value'`、`'label'`  默认值：`'value'`.

- searchValue (string; optional):
    监听搜索框已输入内容.

- optionFilterMode (a value equal to: 'case-insensitive', 'case-sensitive', 'regex', 'remote-match'; default 'case-insensitive'):
    搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）、`'remote-match'`（远程匹配模式）
    默认值：`'case-insensitive'`.

- debounceSearchValue (string; optional):
    以防抖延时的方式监听搜索框已输入内容.

- debounceWait (number; default 0):
    防抖延时时长，单位：毫秒  默认值：`0`.

- autoSpin (boolean; default False):
    是否在当前组件相关属性处理回调更新中状态时，以加载中状态进行渲染  默认值：`False`.

- autoClearSearchValue (boolean; default True):
    当`mode`为`'multiple'`或`'tags'`时，设置是否在选中项后自动清空搜索框中的内容  默认值：`True`.

- emptyContent (a list of or a singular dash component, string or number; optional):
    组件型，自定义空数据状态提示内容.

- loadingEmptyContent (a list of or a singular dash component, string or number; optional):
    组件型，自定义加载中状态下的空数据状态提示内容.

- dropdownBefore (a list of or a singular dash component, string or number; optional):
    组件型，选择菜单前缀内容.

- dropdownAfter (a list of or a singular dash component, string or number; optional):
    组件型，选择菜单后缀内容.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，前缀内嵌内容.

- suffixIcon (a list of or a singular dash component, string or number; optional):
    自定义选择框后缀图标内容.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- popupMatchSelectWidth (boolean; default True):
    选择菜单是否与选择框同宽，设置为`False`时将关闭虚拟滚动功能  默认值：`True`.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- maxCount (number; optional):
    `'multiple'`及 `'tags'`模式下有效，限制已选项数量上限.

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
    _children_props = ['options[].label', 'options[].group', 'options[].options[].label', 'emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter', 'prefix', 'suffixIcon']
    _base_nodes = ['emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter', 'prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSelect'
    Options = TypedDict(
        "Options",
            {
            "group": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "options": NotRequired[typing.Sequence["OptionsOptions"]]
        }
    )

    OptionsOptions = TypedDict(
        "OptionsOptions",
            {
            "label": typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]],
            "value": typing.Union[str, typing.Union[int, float, numbers.Number]],
            "disabled": NotRequired[bool],
            "colors": NotRequired[typing.Sequence[str]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        popupClassName: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        options: typing.Optional[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number], "Options"]]] = None,
        listHeight: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        colorsMode: typing.Optional[Literal["sequential", "diverging"]] = None,
        colorsNameWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        mode: typing.Optional[Literal["multiple", "tags"]] = None,
        disabled: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        placeholder: typing.Optional[str] = None,
        placement: typing.Optional[Literal["bottomLeft", "bottomRight", "topLeft", "topRight"]] = None,
        value: typing.Optional[typing.Union[typing.Union[str, typing.Union[int, float, numbers.Number]], typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]]]] = None,
        defaultValue: typing.Optional[typing.Union[typing.Union[str, typing.Union[int, float, numbers.Number]], typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number]]]]] = None,
        maxTagCount: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], Literal["responsive"]]] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        optionFilterProp: typing.Optional[Literal["value", "label"]] = None,
        searchValue: typing.Optional[str] = None,
        optionFilterMode: typing.Optional[Literal["case-insensitive", "case-sensitive", "regex", "remote-match"]] = None,
        debounceSearchValue: typing.Optional[str] = None,
        debounceWait: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        autoSpin: typing.Optional[bool] = None,
        autoClearSearchValue: typing.Optional[bool] = None,
        emptyContent: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        loadingEmptyContent: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        dropdownBefore: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        dropdownAfter: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        prefix: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        suffixIcon: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        allowClear: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        popupMatchSelectWidth: typing.Optional[bool] = None,
        readOnly: typing.Optional[bool] = None,
        maxCount: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, typing.Union[int, float, numbers.Number]]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'options', 'listHeight', 'colorsMode', 'colorsNameWidth', 'mode', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'maxTagCount', 'status', 'optionFilterProp', 'searchValue', 'optionFilterMode', 'debounceSearchValue', 'debounceWait', 'autoSpin', 'autoClearSearchValue', 'emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter', 'prefix', 'suffixIcon', 'allowClear', 'autoFocus', 'popupMatchSelectWidth', 'readOnly', 'maxCount', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'options', 'listHeight', 'colorsMode', 'colorsNameWidth', 'mode', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'maxTagCount', 'status', 'optionFilterProp', 'searchValue', 'optionFilterMode', 'debounceSearchValue', 'debounceWait', 'autoSpin', 'autoClearSearchValue', 'emptyContent', 'loadingEmptyContent', 'dropdownBefore', 'dropdownAfter', 'prefix', 'suffixIcon', 'allowClear', 'autoFocus', 'popupMatchSelectWidth', 'readOnly', 'maxCount', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSelect, self).__init__(**args)
