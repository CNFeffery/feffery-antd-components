# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdskeletonimage

"""
    'feffery'_antdskeletonimage(;kwargs...)

An AntdSkeletonImage component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdskeletonimage(; kwargs...)
        available_props = Symbol[:id, :className, :key, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdskeletonimage", "AntdSkeletonImage", "feffery_antd_components", available_props, wild_props; kwargs...)
end

