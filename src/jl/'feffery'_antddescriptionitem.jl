# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddescriptionitem

"""
    'feffery'_antddescriptionitem(;kwargs...)
    'feffery'_antddescriptionitem(children::Any;kwargs...)
    'feffery'_antddescriptionitem(children_maker::Function;kwargs...)


An AntdDescriptionItem component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `contentStyle` (Dict; optional)
- `key` (String; optional)
- `label` (String; optional)
- `labelStyle` (Dict; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `span` (Real; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antddescriptionitem(; kwargs...)
        available_props = Symbol[:children, :id, :className, :contentStyle, :key, :label, :labelStyle, :loading_state, :span, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antddescriptionitem", "AntdDescriptionItem", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antddescriptionitem(children::Any; kwargs...) = 'feffery'_antddescriptionitem(;kwargs..., children = children)
'feffery'_antddescriptionitem(children_maker::Function; kwargs...) = 'feffery'_antddescriptionitem(children_maker(); kwargs...)

