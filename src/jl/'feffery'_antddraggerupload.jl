# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddraggerupload

"""
    'feffery'_antddraggerupload(;kwargs...)

An AntdDraggerUpload component.

Keyword arguments:
- `id` (String; optional)
- `apiUrl` (String; optional)
- `className` (String; optional)
- `directory` (Bool; optional)
- `failedTooltipInfo` (String; optional)
- `fileListMaxLength` (Real; optional)
- `fileMaxSize` (Real; optional)
- `fileTypes` (Array of Strings; optional)
- `hint` (String; optional)
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
- `multiple` (Bool; optional)
- `showUploadList` (Bool; optional)
- `style` (Dict; optional)
- `text` (String; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antddraggerupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :className, :directory, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :hint, :lastUploadTaskRecord, :listUploadTaskRecord, :loading_state, :locale, :multiple, :showUploadList, :style, :text, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antddraggerupload", "AntdDraggerUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

