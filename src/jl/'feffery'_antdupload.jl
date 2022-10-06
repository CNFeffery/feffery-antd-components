# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdupload

"""
    'feffery'_antdupload(;kwargs...)

An AntdUpload component.

Keyword arguments:
- `id` (String; optional)
- `apiUrl` (String; optional)
- `buttonContent` (String; optional)
- `className` (String; optional)
- `defaultFileList` (optional): . defaultFileList has the following type: Array of lists containing elements 'name'.
Those elements have the following types:
  - `name` (String; optional)s
- `directory` (Bool; optional)
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
- `listUploadTaskRecord` (optional): . listUploadTaskRecord has the following type: lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId', 'uid'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)
  - `uid` (String; optional) | Array of lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId', 'uid'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)
  - `uid` (String; optional)s
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `multiple` (Bool; optional)
- `showUploadList` (Bool; optional)
- `style` (Dict; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antdupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :buttonContent, :className, :defaultFileList, :directory, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :key, :lastUploadTaskRecord, :listUploadTaskRecord, :loading_state, :locale, :multiple, :showUploadList, :style, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antdupload", "AntdUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

