# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcol

"""
    'feffery'_antdcol(;kwargs...)
    'feffery'_antdcol(children::Any;kwargs...)
    'feffery'_antdcol(children_maker::Function;kwargs...)


An AntdCol component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `flex` (String | Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `offset` (Real; optional)
- `order` (Real; optional)
- `pull` (Real; optional)
- `push` (Real; optional)
- `span` (Real; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdcol(; kwargs...)
        available_props = Symbol[:children, :id, :className, :flex, :loading_state, :offset, :order, :pull, :push, :span, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdcol", "AntdCol", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcol(children::Any; kwargs...) = 'feffery'_antdcol(;kwargs..., children = children)
'feffery'_antdcol(children_maker::Function; kwargs...) = 'feffery'_antdcol(children_maker(); kwargs...)

