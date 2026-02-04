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


class AntdPictureUpload(Component):
    """An AntdPictureUpload component.
    图片上传组件AntdPictureUpload

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
        是否在请求上传服务接口时自动携带cookies等凭据信息 默认值：`False`.

    - downloadUrl (string; optional):
        对应已上传文件的`GET`类型下载服务接口地址，自带参数`taskId`、`filename`.

    - downloadUrlExtraParams (dict; optional):
        配合`downloadUrl`参数，设置文件下载服务接口额外参数.

    - downloadUrlFromBackend (boolean; default False):
        是否将文件上传接口返回信息中的`url`属性作为下载链接地址 默认值：`False`.

    - editable (boolean; default False):
        是否为图片上传过程添加裁切、旋转等预处理功能 默认值：`False`.

    - editConfig (dict; optional):
        当`editable=True`时，配置图片编辑相关功能.

        `editConfig` is a dict with keys:

        - aspect (number; optional):
            裁切区域宽高比 默认值：`1`.

        - shape (a value equal to: 'rect', 'round'; optional):
            裁切区域形状，可选项有`'rect'`、`'round'` 默认值：`'rect'`.

        - grid (boolean; optional):
            是否显示裁切区域辅助网格线 默认值：`False`.

        - quality (number; optional):
            图片质量，取值应在0到1之间 默认值：`0.4`.

        - zoom (boolean; optional):
            是否启用图片缩放功能 默认值：`True`.

        - rotate (boolean; optional):
            是否启用图片旋转功能 默认值：`False`.

        - minZoom (number; optional):
            开启缩放功能时，设置最小缩放倍数 默认值：`1`.

        - maxZoom (number; optional):
            开启缩放功能时，设置最大缩放倍数 默认值：`3`.

        - modalTitle (a list of or a singular dash component, string or number; optional):
            组件型，图片编辑模态框的标题 默认值：`'编辑图片'`.

        - modalWidth (number; optional):
            图片编辑模态框像素宽度 默认值：`520`.

        - modalOk (a list of or a singular dash component, string or number; optional):
            组件型，图片编辑模态框确认按钮内容 默认值：`'确定'`.

        - modalCancel (a list of or a singular dash component, string or number; optional):
            组件型，图片编辑模态框取消按钮内容 默认值：`'取消'`.

    - fileListMaxLength (number; optional):
        限制已上传文件列表长度上限.

    - fileTypes (list of strings; default [    'tiff',    'bmp',    'gif',    'png',    'jpeg',    'jpg',    'webp',    'ico',    'tif',]):
        允许上传的文件后缀名列表 默认值：`['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg',
        'webp', 'ico', 'tif']`.

    - buttonContent (a list of or a singular dash component, string or number; optional):
        组件型，上传按钮内容.

    - uploadId (string; optional):
        自定义当前组件发起文件上传请求时携带的`uploadId`参数，可用于辅助后端创建文件上传所在文件夹.

    - fileMaxSize (number; default 10):
        文件上传尺寸上限，单位：兆.

    - failedTooltipInfo (string; optional):
        文件上传失败消息提示文字内容 默认值：`'上传失败'`.

    - showRemoveIcon (boolean; default True):
        已上传图片是否显示删除按钮 默认值：`True`.

    - showPreviewIcon (boolean; default True):
        已上传图片是否显示预览按钮 默认值：`True`.

    - confirmBeforeDelete (boolean; default False):
        是否为已上传文件删除操作添加二次确认模态框 默认值：`False`.

    - showPercent (boolean; default False):
        是否显示上传进度条 默认值：`False`.

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
                进度文字后缀内容 默认值：`'%'`.

    - showSuccessMessage (boolean; default True):
        是否在每个文件上传成功后，分别弹出消息提示 默认值：`True`.

    - showErrorMessage (boolean; default True):
        是否在每个文件上传失败后，分别弹出消息提示 默认值：`True`.

    - pastable (boolean; default False):
        是否开启粘贴上传，即本地复制文件后，在页面任意位置粘贴即可完成上传 默认值：`False`.

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
        是否禁用当前组件 默认值：`False`.

    - status (a value equal to: 'error', 'warning'; optional):
        控制校验状态，可选项有`'error'`、`'warning'`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = [
        'editConfig.modalTitle',
        'editConfig.modalOk',
        'editConfig.modalCancel',
        'buttonContent',
    ]
    _base_nodes = ['buttonContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPictureUpload'
    EditConfig = TypedDict(
        'EditConfig',
        {
            'aspect': NotRequired[NumberType],
            'shape': NotRequired[Literal['rect', 'round']],
            'grid': NotRequired[bool],
            'quality': NotRequired[NumberType],
            'zoom': NotRequired[bool],
            'rotate': NotRequired[bool],
            'minZoom': NotRequired[NumberType],
            'maxZoom': NotRequired[NumberType],
            'modalTitle': NotRequired[ComponentType],
            'modalWidth': NotRequired[NumberType],
            'modalOk': NotRequired[ComponentType],
            'modalCancel': NotRequired[ComponentType],
        },
    )

    ProgressPropsStrokeColor = TypedDict(
        'ProgressPropsStrokeColor', {'from': NotRequired[str], 'to': NotRequired[str]}
    )

    ProgressPropsFormat = TypedDict(
        'ProgressPropsFormat', {'prefix': NotRequired[str], 'suffix': NotRequired[str]}
    )

    ProgressProps = TypedDict(
        'ProgressProps',
        {
            'strokeColor': NotRequired[typing.Union[str, 'ProgressPropsStrokeColor']],
            'strokeWidth': NotRequired[NumberType],
            'format': NotRequired['ProgressPropsFormat'],
        },
    )

    LastUploadTaskRecord = TypedDict(
        'LastUploadTaskRecord',
        {
            'fileName': NotRequired[str],
            'fileSize': NotRequired[NumberType],
            'completeTimestamp': NotRequired[NumberType],
            'taskStatus': NotRequired[str],
            'taskId': NotRequired[str],
            'url': NotRequired[str],
            'uploadResponse': NotRequired[typing.Any],
        },
    )

    ListUploadTaskRecord = TypedDict(
        'ListUploadTaskRecord',
        {
            'fileName': NotRequired[str],
            'fileSize': NotRequired[NumberType],
            'completeTimestamp': NotRequired[NumberType],
            'taskStatus': NotRequired[str],
            'taskId': NotRequired[str],
            'uid': NotRequired[str],
            'url': NotRequired[str],
            'uploadResponse': NotRequired[typing.Any],
        },
    )

    DefaultFileList = TypedDict(
        'DefaultFileList',
        {
            'name': NotRequired[str],
            'status': NotRequired[Literal['done', 'error', 'removed']],
            'uid': NotRequired[typing.Any],
            'url': NotRequired[str],
            'taskId': NotRequired[str],
            'fileSize': NotRequired[NumberType],
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
        locale: typing.Optional[Literal['zh-cn', 'en-us', 'de-de', 'ru-ru']] = None,
        apiUrl: typing.Optional[str] = None,
        apiUrlExtraParams: typing.Optional[dict] = None,
        headers: typing.Optional[dict] = None,
        withCredentials: typing.Optional[bool] = None,
        downloadUrl: typing.Optional[str] = None,
        downloadUrlExtraParams: typing.Optional[dict] = None,
        downloadUrlFromBackend: typing.Optional[bool] = None,
        editable: typing.Optional[bool] = None,
        editConfig: typing.Optional['EditConfig'] = None,
        fileListMaxLength: typing.Optional[NumberType] = None,
        fileTypes: typing.Optional[typing.Sequence[str]] = None,
        buttonContent: typing.Optional[ComponentType] = None,
        uploadId: typing.Optional[str] = None,
        fileMaxSize: typing.Optional[NumberType] = None,
        failedTooltipInfo: typing.Optional[str] = None,
        showRemoveIcon: typing.Optional[bool] = None,
        showPreviewIcon: typing.Optional[bool] = None,
        confirmBeforeDelete: typing.Optional[bool] = None,
        showPercent: typing.Optional[bool] = None,
        progressProps: typing.Optional['ProgressProps'] = None,
        showSuccessMessage: typing.Optional[bool] = None,
        showErrorMessage: typing.Optional[bool] = None,
        pastable: typing.Optional[bool] = None,
        lastUploadTaskRecord: typing.Optional[
            typing.Union['LastUploadTaskRecord', typing.Sequence['LastUploadTaskRecord']]
        ] = None,
        listUploadTaskRecord: typing.Optional[typing.Sequence['ListUploadTaskRecord']] = None,
        defaultFileList: typing.Optional[typing.Sequence['DefaultFileList']] = None,
        disabled: typing.Optional[bool] = None,
        status: typing.Optional[Literal['error', 'warning']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'name',
            'enableBatchControl',
            'locale',
            'apiUrl',
            'apiUrlExtraParams',
            'headers',
            'withCredentials',
            'downloadUrl',
            'downloadUrlExtraParams',
            'downloadUrlFromBackend',
            'editable',
            'editConfig',
            'fileListMaxLength',
            'fileTypes',
            'buttonContent',
            'uploadId',
            'fileMaxSize',
            'failedTooltipInfo',
            'showRemoveIcon',
            'showPreviewIcon',
            'confirmBeforeDelete',
            'showPercent',
            'progressProps',
            'showSuccessMessage',
            'showErrorMessage',
            'pastable',
            'lastUploadTaskRecord',
            'listUploadTaskRecord',
            'defaultFileList',
            'disabled',
            'status',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'name',
            'enableBatchControl',
            'locale',
            'apiUrl',
            'apiUrlExtraParams',
            'headers',
            'withCredentials',
            'downloadUrl',
            'downloadUrlExtraParams',
            'downloadUrlFromBackend',
            'editable',
            'editConfig',
            'fileListMaxLength',
            'fileTypes',
            'buttonContent',
            'uploadId',
            'fileMaxSize',
            'failedTooltipInfo',
            'showRemoveIcon',
            'showPreviewIcon',
            'confirmBeforeDelete',
            'showPercent',
            'progressProps',
            'showSuccessMessage',
            'showErrorMessage',
            'pastable',
            'lastUploadTaskRecord',
            'listUploadTaskRecord',
            'defaultFileList',
            'disabled',
            'status',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdPictureUpload, self).__init__(**args)


setattr(AntdPictureUpload, '__init__', _explicitize_args(AntdPictureUpload.__init__))
