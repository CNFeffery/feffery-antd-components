# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPictureUpload(Component):
    """An AntdPictureUpload component.


Keyword arguments:

- id (string; optional)

- apiUrl (string; optional)

- buttonContent (string; optional)

- className (string; optional)

- defaultFileList (list of dicts; optional)

    `defaultFileList` is a list of dicts with keys:

    - name (string; optional)

    - status (a value equal to: 'done', 'error', 'removed'; optional)

    - uid (boolean | number | string | dict | list; optional)

    - url (string; optional)

- downloadUrl (string; optional)

- editConfig (dict; optional)

    `editConfig` is a dict with keys:

    - aspect (number; optional)

    - grid (boolean; optional)

    - maxZoom (number; optional)

    - minZoom (number; optional)

    - modalCancel (string; optional)

    - modalOk (string; optional)

    - modalTitle (string; optional)

    - modalWidth (number; optional)

    - quality (number; optional)

    - rotate (boolean; optional)

    - shape (a value equal to: 'rect', 'round'; optional)

    - zoom (boolean; optional)

- editable (boolean; default False)

- failedTooltipInfo (string; optional)

- fileListMaxLength (number; optional)

- fileMaxSize (number; default 10)

- fileTypes (list of strings; default ['tiff', 'bmp', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'ico', 'tif'])

- key (string; optional)

- lastUploadTaskRecord (dict; optional)

    `lastUploadTaskRecord` is a dict with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional) | list of dicts with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

- listUploadTaskRecord (dict; optional)

    `listUploadTaskRecord` is a dict with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

    - uid (string; optional)

    - url (string; optional) | list of dicts with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

    - uid (string; optional)

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

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- uploadId (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPictureUpload'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, apiUrl=Component.UNDEFINED, downloadUrl=Component.UNDEFINED, editable=Component.UNDEFINED, editConfig=Component.UNDEFINED, fileListMaxLength=Component.UNDEFINED, fileTypes=Component.UNDEFINED, buttonContent=Component.UNDEFINED, uploadId=Component.UNDEFINED, fileMaxSize=Component.UNDEFINED, failedTooltipInfo=Component.UNDEFINED, lastUploadTaskRecord=Component.UNDEFINED, listUploadTaskRecord=Component.UNDEFINED, defaultFileList=Component.UNDEFINED, status=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'apiUrl', 'buttonContent', 'className', 'defaultFileList', 'downloadUrl', 'editConfig', 'editable', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'status', 'style', 'uploadId']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'apiUrl', 'buttonContent', 'className', 'defaultFileList', 'downloadUrl', 'editConfig', 'editable', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'key', 'lastUploadTaskRecord', 'listUploadTaskRecord', 'loading_state', 'locale', 'status', 'style', 'uploadId']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdPictureUpload, self).__init__(**args)
