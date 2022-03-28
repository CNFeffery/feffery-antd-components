# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdwatermark

"""
    'feffery'_antdwatermark(;kwargs...)
    'feffery'_antdwatermark(children::Any;kwargs...)
    'feffery'_antdwatermark(children_maker::Function;kwargs...)


An AntdWatermark component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `content` (String; optional)
- `fontColor` (String; optional)
- `fontSize` (Real; optional)
- `gapX` (Real; optional)
- `gapY` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `rotate` (Real; optional)
- `style` (Dict; optional)
- `zIndex` (Real; optional)
"""
function 'feffery'_antdwatermark(; kwargs...)
        available_props = Symbol[:children, :id, :className, :content, :fontColor, :fontSize, :gapX, :gapY, :loading_state, :rotate, :style, :zIndex]
        wild_props = Symbol[]
        return Component("'feffery'_antdwatermark", "AntdWatermark", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdwatermark(children::Any; kwargs...) = 'feffery'_antdwatermark(;kwargs..., children = children)
'feffery'_antdwatermark(children_maker::Function; kwargs...) = 'feffery'_antdwatermark(children_maker(); kwargs...)

