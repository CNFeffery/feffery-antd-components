# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSteps(Component):
    """An AntdSteps component.
步骤条组件AntdSteps

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- steps (list of dicts; required):
    必填，步骤内容定义数据结构.

    `steps` is a list of dicts with keys:

    - title (a list of or a singular dash component, string or number; required):
        步骤标题.

    - subTitle (a list of or a singular dash component, string or number; optional):
        步骤子标题.

    - description (a list of or a singular dash component, string or number; optional):
        步骤描述内容.

    - icon (a list of or a singular dash component, string or number; optional):
        步骤自定义图标.

    - disabled (boolean; optional):
        是否禁用当前步骤.

    - status (a value equal to: 'wait', 'process', 'finish', 'error'; optional):
        强制设置当前步骤状态，同参数status.

- current (number; default 0):
    当前所处的步骤序号  默认值：`0`.

- direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    步骤条显示方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- labelPlacement (a value equal to: 'horizontal', 'vertical'; optional):
    标签内容显示方位，可选项有`'horizontal'`、`'vertical'`.

- progressDot (boolean; default False):
    是否渲染为点状步骤条  默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    步骤条尺寸规格，可选项有`'default'`、`'small'`  默认值：`'default'`.

- status (a value equal to: 'wait', 'process', 'finish', 'error'; default 'process'):
    步骤条状态，可选项有`'wait'`、`'process'`、`'finish'`、`'error'`
    默认值：`'process'`.

- type (a value equal to: 'default', 'navigation', 'inline'; default 'default'):
    步骤条类型，可选项有`'default'`、`'navigation'`、`'inline'`  默认值：`'default'`.

- allowClick (boolean; default False):
    是否可点击切换步骤  默认值：`False`.

- responsive (boolean; default True):
    是否在页面宽度小于532px时自动强制垂直显示  默认值：`True`.

- percent (number; optional):
    当前步骤进度，取值应在0到100之间，适用于常规步骤条.

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
        Holds the name of the component that is loading."""
    _children_props = ['steps[].title', 'steps[].subTitle', 'steps[].description', 'steps[].icon']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSteps'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, steps=Component.REQUIRED, current=Component.UNDEFINED, direction=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, progressDot=Component.UNDEFINED, size=Component.UNDEFINED, status=Component.UNDEFINED, type=Component.UNDEFINED, allowClick=Component.UNDEFINED, responsive=Component.UNDEFINED, percent=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'steps', 'current', 'direction', 'labelPlacement', 'progressDot', 'size', 'status', 'type', 'allowClick', 'responsive', 'percent', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'steps', 'current', 'direction', 'labelPlacement', 'progressDot', 'size', 'status', 'type', 'allowClick', 'responsive', 'percent', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['steps']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdSteps, self).__init__(**args)
