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
- `listUploadTaskRecord` (optional): . listUploadTaskRecord has the following type: lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId'.
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
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `style` (Dict; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antdpictureupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :buttonContent, :className, :editConfig, :editable, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :lastUploadTaskRecord, :listUploadTaskRecord, :loading_state, :locale, :style, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antdpictureupload", "AntdPictureUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

