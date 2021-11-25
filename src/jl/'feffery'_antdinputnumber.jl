# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdinputnumber

"""
    'feffery'_antdinputnumber(;kwargs...)

An AntdInputNumber component.

Keyword arguments:
- `id` (String; optional)
- `addonAfter` (String; optional)
- `addonBefore` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `controls` (Bool; optional)
- `defaultValue` (Real | String; optional)
- `disabled` (Bool; optional)
- `keyboard` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max` (Real | String; optional)
- `min` (Real | String; optional)
- `nSubmit` (Real; optional)
- `precision` (Real; optional)
- `readOnly` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `step` (Real | String; optional)
- `stringMode` (Bool; optional)
- `style` (Dict; optional)
- `value` (Real | String; optional)
"""
function 'feffery'_antdinputnumber(; kwargs...)
        available_props = Symbol[:id, :addonAfter, :addonBefore, :bordered, :className, :controls, :defaultValue, :disabled, :keyboard, :loading_state, :max, :min, :nSubmit, :precision, :readOnly, :size, :step, :stringMode, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdinputnumber", "AntdInputNumber", "feffery_antd_components", available_props, wild_props; kwargs...)
end

