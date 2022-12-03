# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpictureupload

"""
    'feffery'_antdpictureupload(;kwargs...)

An AntdPictureUpload component.

Keyword arguments:
- `id` (String; optional)
- `apiUrl` (String; optional)
- `buttonContent` (String; optional)
- `className` (String; optional)
- `defaultFileList` (optional): . defaultFileList has the following type: Array of lists containing elements 'name', 'status', 'uid', 'url'.
Those elements have the following types:
  - `name` (String; optional)
  - `status` (a value equal to: 'done', 'error', 'removed'; optional)
  - `uid` (Bool | Real | String | Dict | Array; optional)
  - `url` (String; optional)s
- `editConfig` (optional): . editConfig has the following type: lists containing elements 'aspect', 'shape', 'grid', 'quality', 'zoom', 'rotate', 'minZoom', 'maxZoom', 'modalTitle', 'modalWidth', 'modalOk', 'modalCancel'.
Those elements have the following types:
  - `aspect` (Real; optional)
  - `shape` (a value equal to: 'rect', 'round'; optional)
  - `grid` (Bool; optional)
  - `quality` (Real; optional)
  - `zoom` (Bool; optional)
  - `rotate` (Bool; optional)
  - `minZoom` (Real; optional)
  - `maxZoom` (Real; optional)
  - `modalTitle` (String; optional)
  - `modalWidth` (Real; optional)
  - `modalOk` (String; optional)
  - `modalCancel` (String; optional)
- `editable` (Bool; optional)
- `failedTooltipInfo` (String; optional)
- `fileListMaxLength` (Real; optional)
- `fileMaxSize` (Real; optional)
- `fileTypes` (Array of Strings; optional)
- `key` (String; optional)
- `lastUploadTaskRecord` (optional): . lastUploadTaskRecord has the following type: lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional) | Array of lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)s
- `listUploadTaskRecord` (optional): . listUploadTaskRecord has the following type: lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId', 'uid', 'url'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)
  - `uid` (String; optional)
  - `url` (String; optional) | Array of lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId', 'uid', 'url'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)
  - `uid` (String; optional)
  - `url` (String; optional)s
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antdpictureupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :buttonContent, :className, :defaultFileList, :editConfig, :editable, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :key, :lastUploadTaskRecord, :listUploadTaskRecord, :loading_state, :locale, :status, :style, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antdpictureupload", "AntdPictureUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

