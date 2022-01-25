# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpageheader

"""
    'feffery'_antdpageheader(;kwargs...)
    'feffery'_antdpageheader(children::Any;kwargs...)
    'feffery'_antdpageheader(children_maker::Function;kwargs...)


An AntdPageHeader component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `backClicks` (Real; optional)
- `className` (String; optional)
- `ghost` (Bool; optional)
- `historyBackDisabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `showBackIcon` (Bool; optional)
- `style` (Dict; optional)
- `subTitle` (String; optional)
- `title` (String; optional)
"""
function 'feffery'_antdpageheader(; kwargs...)
        available_props = Symbol[:children, :id, :backClicks, :className, :ghost, :historyBackDisabled, :loading_state, :showBackIcon, :style, :subTitle, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdpageheader", "AntdPageHeader", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdpageheader(children::Any; kwargs...) = 'feffery'_antdpageheader(;kwargs..., children = children)
'feffery'_antdpageheader(children_maker::Function; kwargs...) = 'feffery'_antdpageheader(children_maker(); kwargs...)

