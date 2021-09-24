# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcheckbox

"""
    'feffery'_antdcheckbox(;kwargs...)

An AntdCheckbox component.

Keyword arguments:
- `id` (String; optional)
- `checked` (Bool; optional)
- `className` (String; optional)
- `disabled` (Bool; optional)
- `label` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdcheckbox(; kwargs...)
        available_props = Symbol[:id, :checked, :className, :disabled, :label, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdcheckbox", "AntdCheckbox", "feffery_antd_components", available_props, wild_props; kwargs...)
end

