# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdPopconfirm(Component):
    """An AntdPopconfirm component.
气泡确认框组件AntdPopconfirm

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，气泡确认框挂载元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - root (dict; optional):
        根元素（包含箭头、内容元素）css样式.

    - body (dict; optional):
        内容元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - root (string; optional):
        根元素（包含箭头、内容元素）css类名.

    - body (string; optional):
        内容元素css类名.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，提示图标.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- description (a list of or a singular dash component, string or number; optional):
    组件型，描述内容.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; default 'top'):
    气泡确认框弹出位置，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
    默认值：`'top'`.

- mouseEnterDelay (number; default 0.1):
    从鼠标移入挂载元素，到气泡确认框显示的延时，单位：秒  默认值：`0.1`.

- mouseLeaveDelay (number; default 0.1):
    从鼠标移出挂载元素，到气泡确认框消失的延时，单位：秒  默认值：`0.1`.

- okText (a list of or a singular dash component, string or number; optional):
    组件型，确认按钮内容.

- okButtonProps (dict; optional):
    配置确认按钮相关参数.

    `okButtonProps` is a dict with keys:

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

    - danger (boolean; optional):
        按钮是否呈现危险样式  默认值：`False`.

    - disabled (boolean; optional):
        按钮是否呈现禁用状态  默认值：`False`.

    - shape (a value equal to: 'circle', 'round'; optional):
        按钮形状，可选项有`'default'`、`'circle'`、`'round'`  默认值：`'default'`.

    - style (dict; optional):
        按钮css样式.

    - className (string; optional):
        按钮css类名.

- cancelText (a list of or a singular dash component, string or number; optional):
    组件型，取消按钮内容.

- cancelButtonProps (dict; optional):
    配置取消按钮相关参数.

    `cancelButtonProps` is a dict with keys:

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

    - danger (boolean; optional):
        按钮是否呈现危险样式  默认值：`False`.

    - disabled (boolean; optional):
        按钮是否呈现禁用状态  默认值：`False`.

    - shape (a value equal to: 'circle', 'round'; optional):
        按钮形状，可选项有`'default'`、`'circle'`、`'round'`  默认值：`'default'`.

    - style (dict; optional):
        按钮css样式.

    - className (string; optional):
        按钮css类名.

- showCancel (boolean; default True):
    是否显示取消按钮  默认值：`True`.

- confirmCounts (number; default 0):
    监听确认按钮累计点击次数  默认值：`0`.

- cancelCounts (number; default 0):
    监听取消按钮累计点击次数  默认值：`0`.

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'click'):
    气泡确认框触发行为，可选项有`'hover'`、`'focus'`、`'click'`，可多选组合  默认值：`'click'`.

- zIndex (number; optional):
    气泡确认框z-index.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
    指示箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`  默认值：`'show'`.

- fresh (boolean; default False):
    是否保持内容更新  默认值：`False`.

- open (boolean; default False):
    监听或设置气泡确认框的显示状态  默认值：`False`.

- permanent (boolean; default False):
    是否保持气泡确认框显示/隐藏  默认值：`False`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    悬浮层渲染挂载父节点策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

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
    _children_props = ['icon', 'title', 'description', 'okText', 'cancelText']
    _base_nodes = ['icon', 'title', 'description', 'okText', 'cancelText', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopconfirm'
    Styles = TypedDict(
        "Styles",
            {
            "root": NotRequired[dict],
            "body": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "root": NotRequired[str],
            "body": NotRequired[str]
        }
    )

    OkButtonProps = TypedDict(
        "OkButtonProps",
            {
            "size": NotRequired[Literal["small", "middle", "large"]],
            "type": NotRequired[Literal["primary", "ghost", "dashed", "link", "text", "default"]],
            "danger": NotRequired[bool],
            "disabled": NotRequired[bool],
            "shape": NotRequired[Literal["circle", "round"]],
            "style": NotRequired[dict],
            "className": NotRequired[str]
        }
    )

    CancelButtonProps = TypedDict(
        "CancelButtonProps",
            {
            "size": NotRequired[Literal["small", "middle", "large"]],
            "type": NotRequired[Literal["primary", "ghost", "dashed", "link", "text", "default"]],
            "danger": NotRequired[bool],
            "disabled": NotRequired[bool],
            "shape": NotRequired[Literal["circle", "round"]],
            "style": NotRequired[dict],
            "className": NotRequired[str]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        icon: typing.Optional[ComponentType] = None,
        title: typing.Optional[ComponentType] = None,
        description: typing.Optional[ComponentType] = None,
        disabled: typing.Optional[bool] = None,
        placement: typing.Optional[Literal["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]] = None,
        mouseEnterDelay: typing.Optional[NumberType] = None,
        mouseLeaveDelay: typing.Optional[NumberType] = None,
        okText: typing.Optional[ComponentType] = None,
        okButtonProps: typing.Optional["OkButtonProps"] = None,
        cancelText: typing.Optional[ComponentType] = None,
        cancelButtonProps: typing.Optional["CancelButtonProps"] = None,
        showCancel: typing.Optional[bool] = None,
        confirmCounts: typing.Optional[NumberType] = None,
        cancelCounts: typing.Optional[NumberType] = None,
        trigger: typing.Optional[typing.Union[Literal["hover", "focus", "click"], typing.Sequence[Literal["hover", "focus", "click"]]]] = None,
        zIndex: typing.Optional[NumberType] = None,
        arrow: typing.Optional[Literal["show", "hide", "center"]] = None,
        fresh: typing.Optional[bool] = None,
        open: typing.Optional[bool] = None,
        permanent: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'locale', 'icon', 'title', 'description', 'disabled', 'placement', 'mouseEnterDelay', 'mouseLeaveDelay', 'okText', 'okButtonProps', 'cancelText', 'cancelButtonProps', 'showCancel', 'confirmCounts', 'cancelCounts', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'locale', 'icon', 'title', 'description', 'disabled', 'placement', 'mouseEnterDelay', 'mouseLeaveDelay', 'okText', 'okButtonProps', 'cancelText', 'cancelButtonProps', 'showCancel', 'confirmCounts', 'cancelCounts', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopconfirm, self).__init__(children=children, **args)

setattr(AntdPopconfirm, "__init__", _explicitize_args(AntdPopconfirm.__init__))
