# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdsider

"""
    'feffery'_antdsider(;kwargs...)
    'feffery'_antdsider(children::Any;kwargs...)
    'feffery'_antdsider(children_maker::Function;kwargs...)


An AntdSider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `breakpoint` (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'; optional)
- `className` (String; optional)
- `collapsed` (Bool; optional)
- `collapsedWidth` (Real; optional)
- `collapsible` (Bool; optional)
- `defaultCollapsed` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `reverseArrow` (Bool; optional)
- `style` (Dict; optional)
- `theme` (a value equal to: 'light', 'dark'; optional)
- `trigger` (a list of or a singular dash component, string or number; optional)
- `width` (Real; optional)
"""
function 'feffery'_antdsider(; kwargs...)
        available_props = Symbol[:children, :id, :breakpoint, :className, :collapsed, :collapsedWidth, :collapsible, :defaultCollapsed, :key, :loading_state, :reverseArrow, :style, :theme, :trigger, :width]
        wild_props = Symbol[]
        return Component("'feffery'_antdsider", "AntdSider", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdsider(children::Any; kwargs...) = 'feffery'_antdsider(;kwargs..., children = children)
'feffery'_antdsider(children_maker::Function; kwargs...) = 'feffery'_antdsider(children_maker(); kwargs...)

