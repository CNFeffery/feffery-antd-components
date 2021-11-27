# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDraggerUpload(Component):
    """An AntdDraggerUpload component.


Keyword arguments:

- id (string; optional)

- apiUrl (string; optional)

- buttonContent (string; optional)

- className (string; optional)

- directory (boolean; optional)

- failedTooltipInfo (string; optional)

- fileListMaxLength (number; default 3)

- fileMaxSize (number; default 500)

- fileTypes (list of strings; optional)

- lastUploadTaskRecord (dict; optional)

    `lastUploadTaskRecord` is a dict with keys:

    - completeTimestamp (number; optional)

    - fileName (string; optional)

    - fileSize (number; optional)

    - taskId (string; optional)

    - taskStatus (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiple (boolean; optional)

- style (dict; optional)

- uploadId (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, apiUrl=Component.UNDEFINED, fileListMaxLength=Component.UNDEFINED, fileTypes=Component.UNDEFINED, buttonContent=Component.UNDEFINED, uploadId=Component.UNDEFINED, fileMaxSize=Component.UNDEFINED, multiple=Component.UNDEFINED, directory=Component.UNDEFINED, failedTooltipInfo=Component.UNDEFINED, lastUploadTaskRecord=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'apiUrl', 'buttonContent', 'className', 'directory', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'lastUploadTaskRecord', 'loading_state', 'multiple', 'style', 'uploadId']
        self._type = 'AntdDraggerUpload'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'apiUrl', 'buttonContent', 'className', 'directory', 'failedTooltipInfo', 'fileListMaxLength', 'fileMaxSize', 'fileTypes', 'lastUploadTaskRecord', 'loading_state', 'multiple', 'style', 'uploadId']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDraggerUpload, self).__init__(**args)
