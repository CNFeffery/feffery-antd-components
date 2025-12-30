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


class AntdUpload(Component):
    """An AntdUpload component.
文件上传组件AntdUpload

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
    控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能  默认值：`True`.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- apiUrl (string; optional):
    文件上传服务接口地址.

- apiUrlExtraParams (dict; optional):
    文件上传服务接口额外参数.

- headers (dict; optional):
    文件上传服务接口额外headers参数.

- withCredentials (boolean; default False):
    是否在请求上传服务接口时自动携带cookies等凭据信息  默认值：`False`.

- withOriginFileObj (boolean; default False):
    `listUploadTaskRecord`监听结果中是否额外记录浏览器原生`originFileObj`相关信息
    默认值：`False`.

- downloadUrl (string; optional):
    对应已上传文件的`GET`类型下载服务接口地址，自带参数`taskId`、`filename`.

- downloadUrlExtraParams (dict; optional):
    配合`downloadUrl`参数，设置文件下载服务接口额外参数.

- downloadUrlFromBackend (boolean; default False):
    是否将文件上传接口返回信息中的`url`属性作为下载链接地址  默认值：`False`.

- fileListMaxLength (number; optional):
    限制已上传文件列表长度上限.

- fileTypes (list of strings; optional):
    允许上传的文件后缀名列表，默认不限制.

- buttonContent (a list of or a singular dash component, string or number; optional):
    组件型，自定义上传按钮内容.

- buttonIcon (a list of or a singular dash component, string or number; optional):
    组件型，自定义上传按钮图标.

- buttonProps (dict; optional):
    配置上传按钮相关参数.

    `buttonProps` is a dict with keys:

    - size (a value equal to: 'default', 'small', 'large'; optional):
        按钮尺寸规格，可选项有`'default'`、`'small'`、`'large'`  默认值：`'default'`.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

    - danger (boolean; optional):
        按钮是否渲染危险状态  默认值：`False`.

    - block (boolean; optional):
        按钮是否撑满父元素  默认值：`False`.

    - style (dict; optional):
        按钮css样式.

    - className (string; optional):
        按钮css类名.

- uploadId (string; optional):
    自定义当前组件发起文件上传请求时携带的`uploadId`参数，可用于辅助后端创建文件上传所在文件夹.

- fileMaxSize (number; default 500):
    文件上传尺寸上限，单位：兆.

- multiple (boolean; default False):
    是否开启多文件上传模式  默认值：`False`.

- directory (boolean; default False):
    是否开启文件夹上传模式  默认值：`False`.

- failedTooltipInfo (string; optional):
    文件上传失败消息提示文字内容  默认值：`'上传失败'`.

- showUploadList (boolean; default True):
    是否显示已上传文件列表  默认值：`True`.

- confirmBeforeDelete (boolean; default False):
    是否为已上传文件删除操作添加二次确认模态框  默认值：`False`.

- showPercent (boolean; default False):
    是否显示上传进度条  默认值：`False`.

- progressProps (dict; optional):
    配置上传进度条相关参数.

    `progressProps` is a dict with keys:

    - strokeColor (dict; optional):
        进度条颜色.

        `strokeColor` is a string

      Or dict with keys:

        - from (string; optional):

            渐变色开始颜色.

        - to (string; optional):

            渐变色结束颜色.

    - strokeWidth (number; optional):
        进度条像素宽度.

    - format (dict; optional):
        进度文字格式.

        `format` is a dict with keys:

        - prefix (string; optional):
            进度文字前缀内容.

        - suffix (string; optional):
            进度文字后缀内容  默认值：`'%'`.

- showSuccessMessage (boolean; default True):
    是否在每个文件上传成功后，分别弹出消息提示  默认值：`True`.

- showErrorMessage (boolean; default True):
    是否在每个文件上传失败后，分别弹出消息提示  默认值：`True`.

- pastable (boolean; default False):
    是否开启粘贴上传，即本地复制文件后，在页面任意位置粘贴即可完成上传  默认值：`False`.

- lastUploadTaskRecord (dict; optional):
    监听最近一次文件上传任务相关信息.

    `lastUploadTaskRecord` is a dict with keys:

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - url (string; optional):
        当前文件的下载链接.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息. | list of dicts with keys:

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - url (string; optional):
        当前文件的下载链接.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息.

- listUploadTaskRecord (list of dicts; optional):
    监听当前已上传文件列表中上传任务相关信息.

    `listUploadTaskRecord` is a list of dicts with keys:

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - uid (string; optional):
        当前文件上传唯一识别id，前端自动生成.

    - url (string; optional):
        当前文件下载链接.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息.

    - originFileObj (boolean | number | string | dict | list; optional):
        当`withOriginFileObj=True`时，监听当前文件上传任务对应的`originFileObj`主要信息.

- defaultFileList (list of dicts; optional):
    初始化文件列表展示信息.

    `defaultFileList` is a list of dicts with keys:

    - name (string; optional):
        当前文件名称.

    - status (a value equal to: 'done', 'error', 'removed'; optional):
        当前文件展示状态，可选项有`'done'`、`'error'`、`'removed'`.

    - uid (boolean | number | string | dict | list; optional):
        当前文件唯一识别id.

    - url (string; optional):
        当前文件下载链接.

    - taskId (string; optional):
        若传入有效值，将作为当前组件的`uploadId`参数.

    - fileSize (number; optional):
        当前文件大小.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

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
    _children_props: typing.List[str] = ['buttonContent', 'buttonIcon']
    _base_nodes = ['buttonContent', 'buttonIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdUpload'
    ButtonProps = TypedDict(
        "ButtonProps",
            {
            "size": NotRequired[Literal["default", "small", "large"]],
            "type": NotRequired[Literal["primary", "ghost", "dashed", "link", "text", "default"]],
            "danger": NotRequired[bool],
            "block": NotRequired[bool],
            "style": NotRequired[dict],
            "className": NotRequired[str]
        }
    )

    ProgressPropsStrokeColor = TypedDict(
        "ProgressPropsStrokeColor",
            {
            "from": NotRequired[str],
            "to": NotRequired[str]
        }
    )

    ProgressPropsFormat = TypedDict(
        "ProgressPropsFormat",
            {
            "prefix": NotRequired[str],
            "suffix": NotRequired[str]
        }
    )

    ProgressProps = TypedDict(
        "ProgressProps",
            {
            "strokeColor": NotRequired[typing.Union[str, "ProgressPropsStrokeColor"]],
            "strokeWidth": NotRequired[NumberType],
            "format": NotRequired["ProgressPropsFormat"]
        }
    )

    LastUploadTaskRecord = TypedDict(
        "LastUploadTaskRecord",
            {
            "fileName": NotRequired[str],
            "fileSize": NotRequired[NumberType],
            "completeTimestamp": NotRequired[NumberType],
            "taskStatus": NotRequired[str],
            "taskId": NotRequired[str],
            "url": NotRequired[str],
            "uploadResponse": NotRequired[typing.Any]
        }
    )

    ListUploadTaskRecord = TypedDict(
        "ListUploadTaskRecord",
            {
            "fileName": NotRequired[str],
            "fileSize": NotRequired[NumberType],
            "completeTimestamp": NotRequired[NumberType],
            "taskStatus": NotRequired[str],
            "taskId": NotRequired[str],
            "uid": NotRequired[str],
            "url": NotRequired[str],
            "uploadResponse": NotRequired[typing.Any],
            "originFileObj": NotRequired[typing.Any]
        }
    )

    DefaultFileList = TypedDict(
        "DefaultFileList",
            {
            "name": NotRequired[str],
            "status": NotRequired[Literal["done", "error", "removed"]],
            "uid": NotRequired[typing.Any],
            "url": NotRequired[str],
            "taskId": NotRequired[str],
            "fileSize": NotRequired[NumberType]
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
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        apiUrl: typing.Optional[str] = None,
        apiUrlExtraParams: typing.Optional[dict] = None,
        headers: typing.Optional[dict] = None,
        withCredentials: typing.Optional[bool] = None,
        withOriginFileObj: typing.Optional[bool] = None,
        downloadUrl: typing.Optional[str] = None,
        downloadUrlExtraParams: typing.Optional[dict] = None,
        downloadUrlFromBackend: typing.Optional[bool] = None,
        fileListMaxLength: typing.Optional[NumberType] = None,
        fileTypes: typing.Optional[typing.Sequence[str]] = None,
        buttonContent: typing.Optional[ComponentType] = None,
        buttonIcon: typing.Optional[ComponentType] = None,
        buttonProps: typing.Optional["ButtonProps"] = None,
        uploadId: typing.Optional[str] = None,
        fileMaxSize: typing.Optional[NumberType] = None,
        multiple: typing.Optional[bool] = None,
        directory: typing.Optional[bool] = None,
        failedTooltipInfo: typing.Optional[str] = None,
        showUploadList: typing.Optional[bool] = None,
        confirmBeforeDelete: typing.Optional[bool] = None,
        showPercent: typing.Optional[bool] = None,
        progressProps: typing.Optional["ProgressProps"] = None,
        showSuccessMessage: typing.Optional[bool] = None,
        showErrorMessage: typing.Optional[bool] = None,
        pastable: typing.Optional[bool] = None,
        lastUploadTaskRecord: typing.Optional[typing.Union["LastUploadTaskRecord", typing.Sequence["LastUploadTaskRecord"]]] = None,
        listUploadTaskRecord: typing.Optional[typing.Sequence["ListUploadTaskRecord"]] = None,
        defaultFileList: typing.Optional[typing.Sequence["DefaultFileList"]] = None,
        disabled: typing.Optional[bool] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'locale', 'apiUrl', 'apiUrlExtraParams', 'headers', 'withCredentials', 'withOriginFileObj', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'fileListMaxLength', 'fileTypes', 'buttonContent', 'buttonIcon', 'buttonProps', 'uploadId', 'fileMaxSize', 'multiple', 'directory', 'failedTooltipInfo', 'showUploadList', 'confirmBeforeDelete', 'showPercent', 'progressProps', 'showSuccessMessage', 'showErrorMessage', 'pastable', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'defaultFileList', 'disabled', 'status', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'locale', 'apiUrl', 'apiUrlExtraParams', 'headers', 'withCredentials', 'withOriginFileObj', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'fileListMaxLength', 'fileTypes', 'buttonContent', 'buttonIcon', 'buttonProps', 'uploadId', 'fileMaxSize', 'multiple', 'directory', 'failedTooltipInfo', 'showUploadList', 'confirmBeforeDelete', 'showPercent', 'progressProps', 'showSuccessMessage', 'showErrorMessage', 'pastable', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'defaultFileList', 'disabled', 'status', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdUpload, self).__init__(**args)

setattr(AntdUpload, "__init__", _explicitize_args(AntdUpload.__init__))
