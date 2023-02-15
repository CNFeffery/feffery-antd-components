# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmentions

"""
    'feffery'_antdmentions(;kwargs...)

An AntdMentions component.

Keyword arguments:
- `id` (String; optional)
- `autoSize` (optional): . autoSize has the following type: Bool | lists containing elements 'minRows', 'maxRows'.
Those elements have the following types:
  - `minRows` (Real; optional)
  - `maxRows` (Real; optional)
- `className` (String | Dict; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `options` (required): . options has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (a list of or a singular dash component, string or number; optional)
  - `value` (String; optional)s
- `placement` (a value equal to: 'top', 'bottom'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `prefix` (String; optional)
- `selectedOptions` (Array of Strings; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function 'feffery'_antdmentions(; kwargs...)
        available_props = Symbol[:id, :autoSize, :className, :defaultValue, :disabled, :key, :loading_state, :options, :placement, :popupContainer, :prefix, :selectedOptions, :status, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdmentions", "AntdMentions", "feffery_antd_components", available_props, wild_props; kwargs...)
end

