# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdselect

"""
    'feffery'_antdselect(;kwargs...)

An AntdSelect component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `className` (String; optional)
- `colorsMode` (a value equal to: 'sequential', 'diverging'; optional)
- `colorsNameWidth` (Real; optional)
- `defaultValue` (String | Real | Array of String | Reals; optional)
- `disabled` (Bool; optional)
- `listHeight` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxTagCount` (Real; optional)
- `mode` (a value equal to: 'multiple', 'tags'; optional)
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled', 'colors'.
Those elements have the following types:
  - `label` (String | Real; required)
  - `value` (String | Real; required)
  - `disabled` (Bool; optional)
  - `colors` (Array of Strings; optional) | lists containing elements 'group', 'options'.
Those elements have the following types:
  - `group` (String; required)
  - `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled', 'colors'.
Those elements have the following types:
  - `label` (String | Real; required)
  - `value` (String | Real; required)
  - `disabled` (Bool; optional)
  - `colors` (Array of Strings; optional)ss
- `placeholder` (String; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `value` (String | Real | Array of String | Reals; optional)
"""
function 'feffery'_antdselect(; kwargs...)
        available_props = Symbol[:id, :allowClear, :className, :colorsMode, :colorsNameWidth, :defaultValue, :disabled, :listHeight, :loading_state, :maxTagCount, :mode, :options, :placeholder, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdselect", "AntdSelect", "feffery_antd_components", available_props, wild_props; kwargs...)
end

