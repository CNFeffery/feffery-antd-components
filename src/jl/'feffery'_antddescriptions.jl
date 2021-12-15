# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddescriptions

"""
    'feffery'_antddescriptions(;kwargs...)
    'feffery'_antddescriptions(children::Any;kwargs...)
    'feffery'_antddescriptions(children_maker::Function;kwargs...)


An AntdDescriptions component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `column` (Real; optional)
- `contentStyle` (Dict; optional)
- `labelStyle` (Dict; optional)
- `layout` (a value equal to: 'horizontal', 'vertical'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `style` (Dict; optional)
- `title` (String; optional)
"""
function 'feffery'_antddescriptions(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :className, :column, :contentStyle, :labelStyle, :layout, :loading_state, :size, :style, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antddescriptions", "AntdDescriptions", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antddescriptions(children::Any; kwargs...) = 'feffery'_antddescriptions(;kwargs..., children = children)
'feffery'_antddescriptions(children_maker::Function; kwargs...) = 'feffery'_antddescriptions(children_maker(); kwargs...)

