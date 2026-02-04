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


class AntdSlider(Component):
    """An AntdSlider component.
    滑动输入条组件AntdSlider

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - styles (dict; optional):
        细分控制子元素css样式.

        `styles` is a dict with keys:

        - root (dict; optional):
            根元素css样式.

        - track (dict; optional):
            范围选择下，点和点之间单个选取条css样式.

        - tracks (dict; optional):
            范围选择下，整个范围选取条css样式.

        - rail (dict; optional):
            背景条css样式.

        - handle (dict; optional):
            抓取点元素css样式.

    - classNames (dict; optional):
        细分控制子元素css类名.

        `classNames` is a dict with keys:

        - root (string; optional):
            根元素css类名.

        - track (string; optional):
            范围选择下，点和点之间单个选取条css类名.

        - tracks (string; optional):
            范围选择下，整个范围选取条css类名.

        - rail (string; optional):
            背景条css类名.

        - handle (string; optional):
            抓取点元素css类名.

    - name (string; optional):
        配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

    - enableBatchControl (boolean; default True):
        控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能 默认值：`True`.

    - vertical (boolean; default False):
        是否以垂直模式显示 默认值：`False`.

    - range (dict; default False):
        是否以范围模式显示.

        `range` is a boolean | dict with keys:

        - editable (boolean; optional):
            是否开启节点动态增减功能 默认值：`False`.

        - minCount (number; optional):
            开启节点动态增减功能后，允许的最小节点数量 默认值：`0`.

        - maxCount (number; optional):
            开启节点动态增减功能后，允许的最大节点数量.

    - min (number; default 0):
        必填，可滑动范围下限.

    - max (number; default 100):
        必填，可滑动范围上限.

    - step (number; default 1):
        滑动步长.

    - marks (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
        为部分数值设置刻度信息.

    - tooltipVisible (boolean; optional):
        滑动数值文字提示显示策略，`True`表示持续显示，`False`表示始终不显示.

    - tooltipPrefix (string; default ''):
        滑动数值文字提示前缀信息.

    - tooltipSuffix (string; default ''):
        滑动数值文字提示后缀信息.

    - disabled (boolean; default False):
        是否禁用当前组件 默认值：`False`.

    - value (number | list of numbers; optional):
        监听或设置已选值.

    - defaultValue (number | list of numbers; optional):
        初始化已选值.

    - autoFocus (boolean; default False):
        是否允许一键清空已选值 默认值：`True`.

    - popupContainer (a value equal to: 'parent', 'body'; default 'body'):
        相关展开层锚定策略，可选项有`'parent'`、`'body'` 默认值：`'body'`.

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

    - persistence (boolean | string | number; optional):
        是否开启[属性持久化](/prop-persistence).

    - persisted_props (list of a value equal to: 'value's; optional):
        开启属性持久化功能的若干属性名，可选项有`'value'` 默认值：`['value']`.

    - persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
        属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
        默认值：`'local'`."""

    _children_props: typing.List[str] = ['marks{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSlider'
    Styles = TypedDict(
        'Styles',
        {
            'root': NotRequired[dict],
            'track': NotRequired[dict],
            'tracks': NotRequired[dict],
            'rail': NotRequired[dict],
            'handle': NotRequired[dict],
        },
    )

    ClassNames = TypedDict(
        'ClassNames',
        {
            'root': NotRequired[str],
            'track': NotRequired[str],
            'tracks': NotRequired[str],
            'rail': NotRequired[str],
            'handle': NotRequired[str],
        },
    )

    Range = TypedDict(
        'Range',
        {
            'editable': NotRequired[bool],
            'minCount': NotRequired[NumberType],
            'maxCount': NotRequired[NumberType],
        },
    )

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional['Styles'] = None,
        classNames: typing.Optional['ClassNames'] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        vertical: typing.Optional[bool] = None,
        range: typing.Optional[typing.Union[bool, 'Range']] = None,
        min: typing.Optional[NumberType] = None,
        max: typing.Optional[NumberType] = None,
        step: typing.Optional[NumberType] = None,
        marks: typing.Optional[typing.Dict[typing.Union[str, float, int], ComponentType]] = None,
        tooltipVisible: typing.Optional[bool] = None,
        tooltipPrefix: typing.Optional[str] = None,
        tooltipSuffix: typing.Optional[str] = None,
        disabled: typing.Optional[bool] = None,
        value: typing.Optional[typing.Union[NumberType, typing.Sequence[NumberType]]] = None,
        defaultValue: typing.Optional[typing.Union[NumberType, typing.Sequence[NumberType]]] = None,
        autoFocus: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal['parent', 'body']] = None,
        readOnly: typing.Optional[bool] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal['value']]] = None,
        persistence_type: typing.Optional[Literal['local', 'session', 'memory']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'styles',
            'classNames',
            'name',
            'enableBatchControl',
            'vertical',
            'range',
            'min',
            'max',
            'step',
            'marks',
            'tooltipVisible',
            'tooltipPrefix',
            'tooltipSuffix',
            'disabled',
            'value',
            'defaultValue',
            'autoFocus',
            'popupContainer',
            'readOnly',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
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
            'styles',
            'classNames',
            'name',
            'enableBatchControl',
            'vertical',
            'range',
            'min',
            'max',
            'step',
            'marks',
            'tooltipVisible',
            'tooltipPrefix',
            'tooltipSuffix',
            'disabled',
            'value',
            'defaultValue',
            'autoFocus',
            'popupContainer',
            'readOnly',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
            'persistence',
            'persisted_props',
            'persistence_type',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSlider, self).__init__(**args)


setattr(AntdSlider, '__init__', _explicitize_args(AntdSlider.__init__))
