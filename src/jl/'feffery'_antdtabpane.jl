# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtabpane

"""
    'feffery'_antdtabpane(;kwargs...)
    'feffery'_antdtabpane(children::Any;kwargs...)
    'feffery'_antdtabpane(children_maker::Function;kwargs...)


An AntdTabPane component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String | Dict; optional)
- `closable` (Bool; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `tab` (String; optional)
- `titleSideInfoPopover` (optional): . titleSideInfoPopover has the following type: lists containing elements 'title', 'content'.
Those elements have the following types:
  - `title` (String; optional)
  - `content` (String; optional)
"""
function 'feffery'_antdtabpane(; kwargs...)
        available_props = Symbol[:children, :id, :className, :closable, :disabled, :key, :loading_state, :style, :tab, :titleSideInfoPopover]
        wild_props = Symbol[]
        return Component("'feffery'_antdtabpane", "AntdTabPane", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtabpane(children::Any; kwargs...) = 'feffery'_antdtabpane(;kwargs..., children = children)
'feffery'_antdtabpane(children_maker::Function; kwargs...) = 'feffery'_antdtabpane(children_maker(); kwargs...)

