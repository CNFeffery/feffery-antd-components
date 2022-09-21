# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdbacktop

"""
    'feffery'_antdbacktop(;kwargs...)

An AntdBackTop component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `containerId` (String; optional)
- `duration` (Real; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `visibilityHeight` (Real; optional)
"""
function 'feffery'_antdbacktop(; kwargs...)
        available_props = Symbol[:id, :className, :containerId, :duration, :key, :loading_state, :style, :visibilityHeight]
        wild_props = Symbol[]
        return Component("'feffery'_antdbacktop", "AntdBackTop", "feffery_antd_components", available_props, wild_props; kwargs...)
end

