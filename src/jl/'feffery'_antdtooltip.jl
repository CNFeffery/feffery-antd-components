# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtooltip

"""
    'feffery'_antdtooltip(;kwargs...)
    'feffery'_antdtooltip(children::Any;kwargs...)
    'feffery'_antdtooltip(children_maker::Function;kwargs...)


An AntdTooltip component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `containerId` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mouseEnterDelay` (Real; optional)
- `mouseLeaveDelay` (Real; optional)
- `overlayClassName` (String; optional)
- `overlayInnerStyle` (Dict; optional)
- `overlayStyle` (Dict; optional)
- `placement` (String; optional)
- `style` (Dict; optional)
- `title` (String; optional)
- `trigger` (String | Array of Strings; optional)
"""
function 'feffery'_antdtooltip(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :containerId, :loading_state, :mouseEnterDelay, :mouseLeaveDelay, :overlayClassName, :overlayInnerStyle, :overlayStyle, :placement, :style, :title, :trigger]
        wild_props = Symbol[]
        return Component("'feffery'_antdtooltip", "AntdTooltip", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtooltip(children::Any; kwargs...) = 'feffery'_antdtooltip(;kwargs..., children = children)
'feffery'_antdtooltip(children_maker::Function; kwargs...) = 'feffery'_antdtooltip(children_maker(); kwargs...)

