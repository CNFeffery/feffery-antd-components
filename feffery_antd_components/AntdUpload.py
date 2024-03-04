# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdUpload(Component):
    """An AntdUpload component.


Keyword arguments:

- id (string; optional)

- apiUrl (string; optional)

- apiUrlExtraParams (dict; optional)

- buttonContent (a list of or a singular dash component, string or number; optional):
    自定义下载按钮内容.

- buttonIcon (a list of or a singular dash component, string or number; optional):
    自定义下载按钮前缀图标.

- buttonProps (dict; optional)

    `buttonProps` is a dict with keys:

    - block (boolean; optional)

    - className (string; optional)

    - danger (boolean; optional)

    - size (a value equal to: 'default', 'small', 'large'; optional)

    - style (dict; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- className (string | dict; optional)

- confirmBeforeDelete (boolean; default False)

- defaultFileList (list of dicts; optional)

    `defaultFileList` is a list of dicts with keys:

    - fileSize (number; optional)

    - name (string; optional)

    - status (a value equal to: 'done', 'error', 'removed'; optional)

    - taskId (string; optional)

    - uid (boolean | number | string | dict | list; optional)

    - url (string; optional)

- directory (boolean; default False)

- disabled (boolean; default False)

- downloadUrl (string; optional)

- downloadUrlExtraParams (dict; optional)

- downloadUrlFromBackend (boolean; default False)

- failedTooltipInfo (string; optional)

- fileListMaxLength (number; optional)

- fileMaxSize (number; default 500)

- fileTypes (list of strings; optional)

- headers (dict; optional)

- key (string; optional)

- lastUploadTaskRecord (dict; optional)

    `lastUploadTaskRecord` is a dict with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

    - uploadResponse (boolean | number | string | dict | list; optional)

    - url (string; optional) | list of dicts with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

    - uploadResponse (boolean | number | string | dict | list; optional)

    - url (string; optional)

- listUploadTaskRecord (list of dicts; optional)

    `listUploadTaskRecord` is a list of dicts with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

    - uid (string; optional)

    - uploadResponse (boolean | number | string | dict | list; optional)

    - url (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- multiple (boolean; default False)

- name (string; optional):
    用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名  缺省时会以id作为字段名.

- progressProps (dict; optional)

    `progressProps` is a dict with keys:

    - format (dict; optional)

        `format` is a dict with keys:

        - prefix (string; optional)

        - suffix (string; optional)

    - strokeColor (dict; optional)

        `strokeColor` is a string

      Or dict with keys:

        - from (string; optional)

        - to (string; optional)

    - strokeWidth (number; optional)

- showErrorMessage (boolean; default True)

- showPercent (boolean; default False)

- showSuccessMessage (boolean; default True)

- showUploadList (boolean; default True)

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- uploadId (string; optional)

- withCredentials (boolean; default False)"""
    _children_props = ['buttonContent', 'buttonIcon']
    _base_nodes = ['buttonContent', 'buttonIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdUpload'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, apiUrl=Component.UNDEFINED, apiUrlExtraParams=Component.UNDEFINED, headers=Component.UNDEFINED, withCredentials=Component.UNDEFINED, downloadUrl=Component.UNDEFINED, downloadUrlExtraParams=Component.UNDEFINED, downloadUrlFromBackend=Component.UNDEFINED, fileListMaxLength=Component.UNDEFINED, fileTypes=Component.UNDEFINED, buttonContent=Component.UNDEFINED, buttonIcon=Component.UNDEFINED, buttonProps=Component.UNDEFINED, uploadId=Component.UNDEFINED, fileMaxSize=Component.UNDEFINED, multiple=Component.UNDEFINED, directory=Component.UNDEFINED, failedTooltipInfo=Component.UNDEFINED, showUploadList=Component.UNDEFINED, confirmBeforeDelete=Component.UNDEFINED, showPercent=Component.UNDEFINED, progressProps=Component.UNDEFINED, showSuccessMessage=Component.UNDEFINED, showErrorMessage=Component.UNDEFINED, lastUploadTaskRecord=Component.UNDEFINED, listUploadTaskRecord=Component.UNDEFINED, defaultFileList=Component.UNDEFINED, disabled=Component.UNDEFINED, status=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'apiUrl', 'apiUrlExtraParams', 'buttonContent', 'buttonIcon', 'buttonProps', 'className', 'confirmBeforeDelete', 'defaultFileList', 'directory', 'disabled', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'headers', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'multiple', 'name', 'progressProps', 'showErrorMessage', 'showPercent', 'showSuccessMessage', 'showUploadList', 'status', 'style', 'uploadId', 'withCredentials']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'apiUrl', 'apiUrlExtraParams', 'buttonContent', 'buttonIcon', 'buttonProps', 'className', 'confirmBeforeDelete', 'defaultFileList', 'directory', 'disabled', 'downloadUrl', 'downloadUrlExtraParams', 'downloadUrlFromBackend', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'headers', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'multiple', 'name', 'progressProps', 'showErrorMessage', 'showPercent', 'showSuccessMessage', 'showUploadList', 'status', 'style', 'uploadId', 'withCredentials']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdUpload, self).__init__(**args)
