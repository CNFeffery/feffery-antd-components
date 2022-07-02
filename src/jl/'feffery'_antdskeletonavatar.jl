# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdskeletonavatar

"""
    'feffery'_antdskeletonavatar(;kwargs...)

An AntdSkeletonAvatar component.

Keyword arguments:
- `id` (String; optional)
- `active` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `shape` (a value equal to: 'circle', 'square'; optional)
- `size` (Real | a value equal to: 'large', 'small', 'default'; optional)
"""
function 'feffery'_antdskeletonavatar(; kwargs...)
        available_props = Symbol[:id, :active, :loading_state, :shape, :size]
        wild_props = Symbol[]
        return Component("'feffery'_antdskeletonavatar", "AntdSkeletonAvatar", "feffery_antd_components", available_props, wild_props; kwargs...)
end

