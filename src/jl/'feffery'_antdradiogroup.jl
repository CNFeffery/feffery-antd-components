# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdradiogroup

"""
    'feffery'_antdradiogroup(;kwargs...)

An AntdRadioGroup component.

Keyword arguments:
- `id` (String; optional)
- `buttonStyle` (a value equal to: 'outline', 'solid'; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `direction` (a value equal to: 'horizontal', 'vertical'; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `optionType` (a value equal to: 'default', 'button'; optional)
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String; required)
  - `value` (String; required)
  - `disabled` (Bool; optional)s
- `size` (a value equal to: 'large', 'middle', 'small'; optional)
- `style` (Dict; optional)
- `value` (String | Real; optional)
"""
function 'feffery'_antdradiogroup(; kwargs...)
        available_props = Symbol[:id, :buttonStyle, :className, :defaultValue, :direction, :disabled, :loading_state, :optionType, :options, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdradiogroup", "AntdRadioGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

