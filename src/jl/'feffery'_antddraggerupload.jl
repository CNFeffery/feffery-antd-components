# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddraggerupload

"""
    'feffery'_antddraggerupload(;kwargs...)

An AntdDraggerUpload component.

Keyword arguments:
- `id` (String; optional)
- `apiUrl` (String; optional)
- `buttonContent` (String; optional)
- `className` (String; optional)
- `directory` (Bool; optional)
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
  - `taskId` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional)
- `style` (Dict; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antddraggerupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :buttonContent, :className, :directory, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :lastUploadTaskRecord, :loading_state, :multiple, :style, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antddraggerupload", "AntdDraggerUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

