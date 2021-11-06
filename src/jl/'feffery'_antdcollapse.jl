# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcollapse

"""
    'feffery'_antdcollapse(;kwargs...)
    'feffery'_antdcollapse(children::Any;kwargs...)
    'feffery'_antdcollapse(children_maker::Function;kwargs...)


An AntdCollapse component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `collapsible` (a value equal to: 'header', 'disabled'; optional)
- `ghost` (Bool; optional)
- `is_open` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pureMode` (Bool; optional)
- `showArrow` (Bool; optional)
- `style` (Dict; optional)
- `title` (String; optional)
"""
function 'feffery'_antdcollapse(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :className, :collapsible, :ghost, :is_open, :loading_state, :pureMode, :showArrow, :style, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdcollapse", "AntdCollapse", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcollapse(children::Any; kwargs...) = 'feffery'_antdcollapse(;kwargs..., children = children)
'feffery'_antdcollapse(children_maker::Function; kwargs...) = 'feffery'_antdcollapse(children_maker(); kwargs...)

