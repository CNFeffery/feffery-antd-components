# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcarousel

"""
    'feffery'_antdcarousel(;kwargs...)
    'feffery'_antdcarousel(children::Any;kwargs...)
    'feffery'_antdcarousel(children_maker::Function;kwargs...)


An AntdCarousel component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `autoplay` (Bool; optional)
- `className` (String; optional)
- `dotPosition` (a value equal to: 'top', 'bottom', 'left', 'right'; optional)
- `easing` (String; optional)
- `effect` (a value equal to: 'scrollx', 'fade'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdcarousel(; kwargs...)
        available_props = Symbol[:children, :id, :autoplay, :className, :dotPosition, :easing, :effect, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdcarousel", "AntdCarousel", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcarousel(children::Any; kwargs...) = 'feffery'_antdcarousel(;kwargs..., children = children)
'feffery'_antdcarousel(children_maker::Function; kwargs...) = 'feffery'_antdcarousel(children_maker(); kwargs...)

