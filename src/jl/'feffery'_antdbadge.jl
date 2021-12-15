# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdbadge

"""
    'feffery'_antdbadge(;kwargs...)
    'feffery'_antdbadge(children::Any;kwargs...)
    'feffery'_antdbadge(children_maker::Function;kwargs...)


An AntdBadge component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `count` (Real; optional)
- `dot` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `offset` (Array of Reals; optional)
- `overflowCount` (Real; optional)
- `showZero` (Bool; optional)
- `size` (a value equal to: 'default', 'small'; optional)
- `status` (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional)
- `style` (Dict; optional)
- `text` (String; optional)
- `title` (String; optional)
"""
function 'feffery'_antdbadge(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :count, :dot, :loading_state, :offset, :overflowCount, :showZero, :size, :status, :style, :text, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdbadge", "AntdBadge", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdbadge(children::Any; kwargs...) = 'feffery'_antdbadge(;kwargs..., children = children)
'feffery'_antdbadge(children_maker::Function; kwargs...) = 'feffery'_antdbadge(children_maker(); kwargs...)

