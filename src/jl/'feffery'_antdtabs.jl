# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtabs

"""
    'feffery'_antdtabs(;kwargs...)
    'feffery'_antdtabs(children::Any;kwargs...)
    'feffery'_antdtabs(children_maker::Function;kwargs...)


An AntdTabs component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `activeKey` (String; optional)
- `className` (String; optional)
- `defaultActiveKey` (String; optional)
- `latestDeletePane` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (String; optional)
- `style` (Dict; optional)
- `tabPosition` (String; optional)
- `type` (String; optional)
"""
function 'feffery'_antdtabs(; kwargs...)
        available_props = Symbol[:children, :id, :activeKey, :className, :defaultActiveKey, :latestDeletePane, :loading_state, :size, :style, :tabPosition, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdtabs", "AntdTabs", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtabs(children::Any; kwargs...) = 'feffery'_antdtabs(;kwargs..., children = children)
'feffery'_antdtabs(children_maker::Function; kwargs...) = 'feffery'_antdtabs(children_maker(); kwargs...)

