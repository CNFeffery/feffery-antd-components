# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdspin

"""
    'feffery'_antdspin(;kwargs...)
    'feffery'_antdspin(children::Any;kwargs...)
    'feffery'_antdspin(children_maker::Function;kwargs...)


An AntdSpin component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `debug` (Bool; optional)
- `delay` (Real; optional)
- `excludeProps` (Array of Strings; optional)
- `includeProps` (Array of Strings; optional)
- `listenPropsMode` (a value equal to: 'default', 'exclude', 'include'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `spinning` (Bool; optional)
- `style` (Dict; optional)
- `text` (String; optional)
- `wrapperClassName` (String; optional)
"""
function 'feffery'_antdspin(; kwargs...)
        available_props = Symbol[:children, :id, :className, :debug, :delay, :excludeProps, :includeProps, :listenPropsMode, :loading_state, :size, :spinning, :style, :text, :wrapperClassName]
        wild_props = Symbol[]
        return Component("'feffery'_antdspin", "AntdSpin", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdspin(children::Any; kwargs...) = 'feffery'_antdspin(;kwargs..., children = children)
'feffery'_antdspin(children_maker::Function; kwargs...) = 'feffery'_antdspin(children_maker(); kwargs...)

