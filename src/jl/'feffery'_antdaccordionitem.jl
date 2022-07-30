# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdaccordionitem

"""
    'feffery'_antdaccordionitem(;kwargs...)
    'feffery'_antdaccordionitem(children::Any;kwargs...)
    'feffery'_antdaccordionitem(children_maker::Function;kwargs...)


An AntdAccordionItem component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `collapsible` (a value equal to: 'header', 'disabled'; optional)
- `forceRender` (Bool; optional)
- `key` (String | Real; required)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `showArrow` (Bool; optional)
- `style` (Dict; optional)
- `title` (String; optional)
"""
function 'feffery'_antdaccordionitem(; kwargs...)
        available_props = Symbol[:children, :id, :className, :collapsible, :forceRender, :key, :loading_state, :showArrow, :style, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdaccordionitem", "AntdAccordionItem", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdaccordionitem(children::Any; kwargs...) = 'feffery'_antdaccordionitem(;kwargs..., children = children)
'feffery'_antdaccordionitem(children_maker::Function; kwargs...) = 'feffery'_antdaccordionitem(children_maker(); kwargs...)

