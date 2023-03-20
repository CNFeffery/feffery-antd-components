# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdstatistic

"""
    'feffery'_antdstatistic(;kwargs...)

An AntdStatistic component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `precision` (Real; optional)
- `prefix` (a list of or a singular dash component, string or number; optional)
- `showGroupSeparator` (Bool; optional)
- `style` (Dict; optional)
- `suffix` (a list of or a singular dash component, string or number; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `titleTooltip` (String; optional)
- `value` (Real | String | a list of or a singular dash component, string or number; optional)
- `valueStyle` (Dict; optional)
"""
function 'feffery'_antdstatistic(; kwargs...)
        available_props = Symbol[:id, :className, :key, :loading_state, :precision, :prefix, :showGroupSeparator, :style, :suffix, :title, :titleTooltip, :value, :valueStyle]
        wild_props = Symbol[]
        return Component("'feffery'_antdstatistic", "AntdStatistic", "feffery_antd_components", available_props, wild_props; kwargs...)
end

