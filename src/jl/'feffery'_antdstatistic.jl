# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdstatistic

"""
    'feffery'_antdstatistic(;kwargs...)

An AntdStatistic component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `precision` (Real; optional)
- `prefix` (optional): . prefix has the following type: lists containing elements 'mode', 'content'.
Those elements have the following types:
  - `mode` (a value equal to: 'text', 'icon'; optional)
  - `content` (String; optional)
- `showGroupSeparator` (Bool; optional)
- `style` (Dict; optional)
- `suffix` (optional): . suffix has the following type: lists containing elements 'mode', 'content'.
Those elements have the following types:
  - `mode` (a value equal to: 'text', 'icon'; optional)
  - `content` (String; optional)
- `title` (String; optional)
- `titleTooltip` (String; optional)
- `value` (Real; optional)
- `valueStyle` (Dict; optional)
"""
function 'feffery'_antdstatistic(; kwargs...)
        available_props = Symbol[:id, :className, :loading_state, :precision, :prefix, :showGroupSeparator, :style, :suffix, :title, :titleTooltip, :value, :valueStyle]
        wild_props = Symbol[]
        return Component("'feffery'_antdstatistic", "AntdStatistic", "feffery_antd_components", available_props, wild_props; kwargs...)
end

