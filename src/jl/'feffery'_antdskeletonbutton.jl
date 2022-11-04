# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdskeletonbutton

"""
    'feffery'_antdskeletonbutton(;kwargs...)

An AntdSkeletonButton component.

Keyword arguments:
- `id` (String; optional)
- `active` (Bool; optional)
- `block` (Bool; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `shape` (a value equal to: 'circle', 'round', 'default'; optional)
- `size` (a value equal to: 'large', 'small', 'default'; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdskeletonbutton(; kwargs...)
        available_props = Symbol[:id, :active, :block, :className, :loading_state, :shape, :size, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdskeletonbutton", "AntdSkeletonButton", "feffery_antd_components", available_props, wild_props; kwargs...)
end

