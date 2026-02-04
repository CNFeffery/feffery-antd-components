# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401

from dash.development.base_component import Component, _explicitize_args
from typing_extensions import Literal, NotRequired, TypedDict  # noqa: F401

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]


class AntdSwitch(Component):
    """An AntdSwitch component.
    开关组件AntdSwitch

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - name (string; optional):
        配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

    - enableBatchControl (boolean; default True):
        控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能 默认值：`True`.

    - disabled (boolean; default False):
        是否禁用当前组件 默认值：`False`.

    - autoFocus (boolean; default False):
        是否自动获取焦点 默认值：`False`.

    - checked (boolean; optional):
        监听或设置当前开关是否打开.

    - checkedChildren (a list of or a singular dash component, string or number; optional):
        组件型，打开状态下内嵌内容.

    - unCheckedChildren (a list of or a singular dash component, string or number; optional):
        组件型，关闭状态下内嵌内容.

    - size (a value equal to: 'default', 'small'; default 'default'):
        当前组件尺寸规格，可选项有`'small'`、`'middle'` 默认值：`'default'`.

    - loading (boolean; default False):
        是否渲染加载中状态 默认值：`False`.

    - readOnly (boolean; default False):
        是否渲染为只读状态 默认值：`False`.

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

    - persisted_props (list of a value equal to: 'checked's; optional):
        开启属性持久化功能的若干属性名，可选项有`'checked'` 默认值：`['checked']`.

    - persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
        属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
        默认值：`'local'`."""

    _children_props: typing.List[str] = ['checkedChildren', 'unCheckedChildren']
    _base_nodes = ['checkedChildren', 'unCheckedChildren', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSwitch'
    LoadingState = TypedDict(
        'LoadingState',
        {
            'is_loading': NotRequired[bool],
            'prop_name': NotRequired[str],
            'component_name': NotRequired[str],
        },
    )

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        disabled: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        checked: typing.Optional[bool] = None,
        checkedChildren: typing.Optional[ComponentType] = None,
        unCheckedChildren: typing.Optional[ComponentType] = None,
        size: typing.Optional[Literal['default', 'small']] = None,
        loading: typing.Optional[bool] = None,
        readOnly: typing.Optional[bool] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        loading_state: typing.Optional['LoadingState'] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal['checked']]] = None,
        persistence_type: typing.Optional[Literal['local', 'session', 'memory']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'name',
            'enableBatchControl',
            'disabled',
            'autoFocus',
            'checked',
            'checkedChildren',
            'unCheckedChildren',
            'size',
            'loading',
            'readOnly',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
            'loading_state',
            'persistence',
            'persisted_props',
            'persistence_type',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'name',
            'enableBatchControl',
            'disabled',
            'autoFocus',
            'checked',
            'checkedChildren',
            'unCheckedChildren',
            'size',
            'loading',
            'readOnly',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
            'loading_state',
            'persistence',
            'persisted_props',
            'persistence_type',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSwitch, self).__init__(**args)


setattr(AntdSwitch, '__init__', _explicitize_args(AntdSwitch.__init__))
