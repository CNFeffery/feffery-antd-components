# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdicon

"""
    'feffery'_antdicon(;kwargs...)

An AntdIcon component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `icon` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdicon(; kwargs...)
        available_props = Symbol[:id, :className, :icon, :key, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdicon", "AntdIcon", "feffery_antd_components", available_props, wild_props; kwargs...)
end

