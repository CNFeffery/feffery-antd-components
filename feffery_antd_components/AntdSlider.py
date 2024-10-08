# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSlider(Component):
    """An AntdSlider component.
滑动输入条组件AntdSlider

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- railStyle (dict; optional):
    滑轨部分css样式.

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - track (dict; optional):
        选择条css样式.

    - rail (dict; optional):
        背景条css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - track (string; optional):
        选择条css类名.

    - rail (string; optional):
        背景条css类名.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- vertical (boolean; default False):
    是否以垂直模式显示  默认值：`False`.

- range (boolean; default False):
    是否以范围模式显示.

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
    是否禁用当前组件  默认值：`False`.

- value (number | list of numbers; optional):
    监听或设置已选值.

- defaultValue (number | list of numbers; optional):
    初始化已选值.

- autoFocus (boolean; default False):
    是否允许一键清空已选值  默认值：`True`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    相关展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- readOnly (boolean; default False):
    是否渲染为只读状态  默认值：`False`.

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
    _children_props = ['marks{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSlider'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, railStyle=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, name=Component.UNDEFINED, vertical=Component.UNDEFINED, range=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, marks=Component.UNDEFINED, tooltipVisible=Component.UNDEFINED, tooltipPrefix=Component.UNDEFINED, tooltipSuffix=Component.UNDEFINED, disabled=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, autoFocus=Component.UNDEFINED, popupContainer=Component.UNDEFINED, readOnly=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'railStyle', 'styles', 'classNames', 'name', 'vertical', 'range', 'min', 'max', 'step', 'marks', 'tooltipVisible', 'tooltipPrefix', 'tooltipSuffix', 'disabled', 'value', 'defaultValue', 'autoFocus', 'popupContainer', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'railStyle', 'styles', 'classNames', 'name', 'vertical', 'range', 'min', 'max', 'step', 'marks', 'tooltipVisible', 'tooltipPrefix', 'tooltipSuffix', 'disabled', 'value', 'defaultValue', 'autoFocus', 'popupContainer', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSlider, self).__init__(**args)
