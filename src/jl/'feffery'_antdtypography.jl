# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtypography

"""
    'feffery'_antdtypography(;kwargs...)
    'feffery'_antdtypography(children::Any;kwargs...)
    'feffery'_antdtypography(children_maker::Function;kwargs...)


An AntdTypography component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdtypography(; kwargs...)
        available_props = Symbol[:children, :id, :className, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdtypography", "AntdTypography", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtypography(children::Any; kwargs...) = 'feffery'_antdtypography(;kwargs..., children = children)
'feffery'_antdtypography(children_maker::Function; kwargs...) = 'feffery'_antdtypography(children_maker(); kwargs...)

