# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdinput

"""
    'feffery'_antdinput(;kwargs...)

An AntdInput component.

Keyword arguments:
- `id` (String; optional)
- `addonAfter` (String; optional)
- `addonBefore` (String; optional)
- `allowClear` (Bool; optional)
- `autoComplete` (a value equal to: 'off', 'on'; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxLength` (Real; optional)
- `mode` (a value equal to: 'default', 'search', 'text-area', 'password'; optional)
- `nClicksSearch` (Real; optional)
- `nSubmit` (Real; optional)
- `placeholder` (String; optional)
- `showCount` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function 'feffery'_antdinput(; kwargs...)
        available_props = Symbol[:id, :addonAfter, :addonBefore, :allowClear, :autoComplete, :bordered, :className, :defaultValue, :disabled, :loading_state, :maxLength, :mode, :nClicksSearch, :nSubmit, :placeholder, :showCount, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdinput", "AntdInput", "feffery_antd_components", available_props, wild_props; kwargs...)
end

