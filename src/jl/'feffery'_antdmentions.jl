# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmentions

"""
    'feffery'_antdmentions(;kwargs...)
    'feffery'_antdmentions(children::Any;kwargs...)
    'feffery'_antdmentions(children_maker::Function;kwargs...)


An AntdMentions component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `autoSize` (optional): . autoSize has the following type: Bool | lists containing elements 'minRows', 'maxRows'.
Those elements have the following types:
  - `minRows` (Real; optional)
  - `maxRows` (Real; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; optional)
  - `value` (String; optional)s
- `placement` (a value equal to: 'top', 'bottom'; optional)
- `prefix` (String; optional)
- `selectedOptions` (Array of Strings; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function 'feffery'_antdmentions(; kwargs...)
        available_props = Symbol[:children, :id, :autoSize, :className, :defaultValue, :disabled, :loading_state, :options, :placement, :prefix, :selectedOptions, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdmentions", "AntdMentions", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdmentions(children::Any; kwargs...) = 'feffery'_antdmentions(;kwargs..., children = children)
'feffery'_antdmentions(children_maker::Function; kwargs...) = 'feffery'_antdmentions(children_maker(); kwargs...)

