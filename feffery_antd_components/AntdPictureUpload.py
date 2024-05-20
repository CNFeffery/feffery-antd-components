# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPictureUpload(Component):
    """An AntdPictureUpload component.
图片上传组件AntdPictureUpload

Keyword arguments:

- id (string; optional):
    组件唯一id.

- apiUrl (string; optional):
    文件上传服务接口地址.

- apiUrlExtraParams (dict; optional):
    文件上传服务接口额外参数.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- buttonContent (a list of or a singular dash component, string or number; optional):
    组件型，上传按钮内容.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- confirmBeforeDelete (boolean; default False):
    是否为已上传文件删除操作添加二次确认模态框  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultFileList (list of dicts; optional):
    初始化文件列表展示信息.

    `defaultFileList` is a list of dicts with keys:

    - fileSize (number; optional):
        当前文件大小.

    - name (string; optional):
        当前文件名称.

    - status (a value equal to: 'done', 'error', 'removed'; optional):
        当前文件展示状态，可选项有`'done'`、`'error'`、`'removed'`.

    - taskId (string; optional):
        若传入有效值，将作为当前组件的`uploadId`参数.

    - uid (boolean | number | string | dict | list; optional):
        当前文件唯一识别id.

    - url (string; optional):
        当前文件下载链接.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- downloadUrl (string; optional):
    对应已上传文件的`GET`类型下载服务接口地址，自带参数`taskId`、`filename`.

- downloadUrlExtraParams (dict; optional):
    配合`downloadUrl`参数，设置文件下载服务接口额外参数.

- downloadUrlFromBackend (boolean; default False):
    是否将文件上传接口返回信息中的`url`属性作为下载链接地址  默认值：`False`.

- editConfig (dict; optional):
    当`editable=True`时，配置图片编辑相关功能.

    `editConfig` is a dict with keys:

    - aspect (number; optional):
        裁切区域宽高比  默认值：`1`.

    - grid (boolean; optional):
        是否显示裁切区域辅助网格线  默认值：`False`.

    - maxZoom (number; optional):
        开启缩放功能时，设置最大缩放倍数  默认值：`3`.

    - minZoom (number; optional):
        开启缩放功能时，设置最小缩放倍数  默认值：`1`.

    - modalCancel (a list of or a singular dash component, string or number; optional):
        组件型，图片编辑模态框取消按钮内容  默认值：`'取消'`.

    - modalOk (a list of or a singular dash component, string or number; optional):
        组件型，图片编辑模态框确认按钮内容  默认值：`'确定'`.

    - modalTitle (a list of or a singular dash component, string or number; optional):
        组件型，图片编辑模态框的标题  默认值：`'编辑图片'`.

    - modalWidth (number; optional):
        图片编辑模态框像素宽度  默认值：`520`.

    - quality (number; optional):
        图片质量，取值应在0到1之间  默认值：`0.4`.

    - rotate (boolean; optional):
        是否启用图片旋转功能  默认值：`False`.

    - shape (a value equal to: 'rect', 'round'; optional):
        裁切区域形状，可选项有`'rect'`、`'round'`  默认值：`'rect'`.

    - zoom (boolean; optional):
        是否启用图片缩放功能  默认值：`True`.

- editable (boolean; default False):
    是否为图片上传过程添加裁切、旋转等预处理功能  默认值：`False`.

- failedTooltipInfo (string; optional):
    文件上传失败消息提示文字内容  默认值：`'上传失败'`.

- fileListMaxLength (number; optional):
    限制已上传文件列表长度上限.

- fileMaxSize (number; default 10):
    文件上传尺寸上限，单位：兆.

- fileTypes (list of strings; default ['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'ico', 'tif']):
    允许上传的文件后缀名列表  默认值：`['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg',
    'webp', 'ico', 'tif']`.

- headers (dict; optional):
    文件上传服务接口额外headers参数.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- lastUploadTaskRecord (dict; optional):
    监听最近一次文件上传任务相关信息.

    `lastUploadTaskRecord` is a dict with keys:

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息.

    - url (string; optional):
        当前文件的下载链接. | list of dicts with keys:

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息.

    - url (string; optional):
        当前文件的下载链接.

- listUploadTaskRecord (list of dicts; optional):
    监听当前已上传文件列表中上传任务相关信息.

    `listUploadTaskRecord` is a list of dicts with keys:

    - completeTimestamp (number; optional):
        上传完成时间戳.

    - fileName (string; optional):
        文件名称.

    - fileSize (number; optional):
        文件大小.

    - taskId (string; optional):
        上传任务唯一识别id，当任务状态为`'failed'`时不会携带此信息.

    - taskStatus (string; optional):
        上传任务状态，`'success'`表示成功，`'failed'`表示失败.

    - uploadResponse (boolean | number | string | dict | list; optional):
        上传任务的接口响应信息.

    - url (string; optional):
        当前文件下载链接.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`、`'en-us'`  默认值：`'zh-cn'`.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- progressProps (dict; optional):
    配置上传进度条相关参数.

    `progressProps` is a dict with keys:

    - format (dict; optional):
        进度文字格式.

        `format` is a dict with keys:

        - prefix (string; optional):
            进度文字前缀内容.

        - suffix (string; optional):
            进度文字后缀内容  默认值：`'%'`.

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

- showErrorMessage (boolean; default True):
    是否在每个文件上传失败后，分别弹出消息提示  默认值：`True`.

- showPercent (boolean; default False):
    是否显示上传进度条  默认值：`False`.

- showPreviewIcon (boolean; default True):
    已上传图片是否显示预览按钮  默认值：`True`.

- showRemoveIcon (boolean; default True):
    已上传图片是否显示删除按钮  默认值：`True`.

- showSuccessMessage (boolean; default True):
    是否在每个文件上传成功后，分别弹出消息提示  默认值：`True`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- uploadId (string; optional):
    自定义当前组件发起文件上传请求时携带的`uploadId`参数，可用于辅助后端创建文件上传所在文件夹.

- withCredentials (boolean; default False):
    是否在请求上传服务接口时自动携带cookies等凭据信息  默认值：`False`."""
    _children_props = ['editConfig.modalTitle', 'editConfig.modalOk', 'editConfig.modalCancel', 'buttonContent']
    _base_nodes = ['buttonContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPictureUpload'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, apiUrl=Component.UNDEFINED, apiUrlExtraParams=Component.UNDEFINED, headers=Component.UNDEFINED, withCredentials=Component.UNDEFINED, downloadUrl=Component.UNDEFINED, downloadUrlExtraParams=Component.UNDEFINED, downloadUrlFromBackend=Component.UNDEFINED, editable=Component.UNDEFINED, editConfig=Component.UNDEFINED, fileListMaxLength=Component.UNDEFINED, fileTypes=Component.UNDEFINED, buttonContent=Component.UNDEFINED, uploadId=Component.UNDEFINED, fileMaxSize=Component.UNDEFINED, failedTooltipInfo=Component.UNDEFINED, showRemoveIcon=Component.UNDEFINED, showPreviewIcon=Component.UNDEFINED, confirmBeforeDelete=Component.UNDEFINED, showPercent=Component.UNDEFINED, progressProps=Component.UNDEFINED, showSuccessMessage=Component.UNDEFINED, showErrorMessage=Component.UNDEFINED, lastUploadTaskRecord=Component.UNDEFINED, listUploadTaskRecord=Component.UNDEFINED, defaultFileList=Component.UNDEFINED, disabled=Component.UNDEFINED, status=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'apiUrl', 'apiUrlExtraParams', 'aria-*', 'buttonContent', 'className', 'confirmBeforeDelete', 'data-*', 'defaultFileList', 'disabled', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'editConfig', 'editable', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'headers', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'name', 'progressProps', 'showErrorMessage', 'showPercent', 'showPreviewIcon', 'showRemoveIcon', 'showSuccessMessage', 'status', 'style', 'uploadId', 'withCredentials']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'apiUrl', 'apiUrlExtraParams', 'aria-*', 'buttonContent', 'className', 'confirmBeforeDelete', 'data-*', 'defaultFileList', 'disabled', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'editConfig', 'editable', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'headers', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'name', 'progressProps', 'showErrorMessage', 'showPercent', 'showPreviewIcon', 'showRemoveIcon', 'showSuccessMessage', 'status', 'style', 'uploadId', 'withCredentials']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdPictureUpload, self).__init__(**args)
