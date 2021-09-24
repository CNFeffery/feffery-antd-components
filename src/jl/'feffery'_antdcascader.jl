# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcascader

"""
    'feffery'_antdcascader(;kwargs...)

An AntdCascader component.

Keyword arguments:
- `id` (String; optional)
- `bordered` (Bool; optional)
- `changeOnSelect` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (Array of Strings; optional)
- `disabled` (Bool; optional)
- `expandTrigger` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `options` (optional)
- `placeholder` (String; optional)
- `popupPlacement` (String; optional)
- `size` (String; optional)
- `style` (Dict; optional)
- `value` (Array of Strings; optional)
"""
function 'feffery'_antdcascader(; kwargs...)
        available_props = Symbol[:id, :bordered, :changeOnSelect, :className, :defaultValue, :disabled, :expandTrigger, :loading_state, :options, :placeholder, :popupPlacement, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcascader", "AntdCascader", "feffery_antd_components", available_props, wild_props; kwargs...)
end

