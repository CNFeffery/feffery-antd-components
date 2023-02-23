# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcountdown

"""
    'feffery'_antdcountdown(;kwargs...)

An AntdCountdown component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `format` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `prefix` (a list of or a singular dash component, string or number; optional)
- `style` (Dict; optional)
- `suffix` (a list of or a singular dash component, string or number; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `titleTooltip` (String; optional)
- `value` (String; optional)
- `valueFormat` (String; optional)
- `valueStyle` (Dict; optional)
"""
function 'feffery'_antdcountdown(; kwargs...)
        available_props = Symbol[:id, :className, :format, :key, :loading_state, :prefix, :style, :suffix, :title, :titleTooltip, :value, :valueFormat, :valueStyle]
        wild_props = Symbol[]
        return Component("'feffery'_antdcountdown", "AntdCountdown", "feffery_antd_components", available_props, wild_props; kwargs...)
end

