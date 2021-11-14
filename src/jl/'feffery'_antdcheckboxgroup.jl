# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcheckboxgroup

"""
    'feffery'_antdcheckboxgroup(;kwargs...)

An AntdCheckboxGroup component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String; optional)
  - `value` (String; optional)
  - `disabled` (Bool; optional)s
- `style` (Dict; optional)
- `value` (Array of Strings; optional)
"""
function 'feffery'_antdcheckboxgroup(; kwargs...)
        available_props = Symbol[:id, :className, :disabled, :loading_state, :options, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcheckboxgroup", "AntdCheckboxGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

