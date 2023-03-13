# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcheckcard

"""
    'feffery'_antdcheckcard(;kwargs...)
    'feffery'_antdcheckcard(children::Any;kwargs...)
    'feffery'_antdcheckcard(children_maker::Function;kwargs...)


An AntdCheckCard component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bordered` (Bool; optional)
- `checked` (Bool; optional)
- `className` (String | Dict; optional)
- `defaultChecked` (Bool; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `style` (Dict; optional)
- `value` (Real | String; optional)
"""
function 'feffery'_antdcheckcard(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :checked, :className, :defaultChecked, :disabled, :key, :loading_state, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcheckcard", "AntdCheckCard", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcheckcard(children::Any; kwargs...) = 'feffery'_antdcheckcard(;kwargs..., children = children)
'feffery'_antdcheckcard(children_maker::Function; kwargs...) = 'feffery'_antdcheckcard(children_maker(); kwargs...)

