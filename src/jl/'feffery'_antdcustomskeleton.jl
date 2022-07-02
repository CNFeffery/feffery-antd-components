# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcustomskeleton

"""
    'feffery'_antdcustomskeleton(;kwargs...)
    'feffery'_antdcustomskeleton(children::Any;kwargs...)
    'feffery'_antdcustomskeleton(children_maker::Function;kwargs...)


An AntdCustomSkeleton component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `debug` (Bool; optional)
- `excludeProps` (Array of Strings; optional)
- `includeProps` (Array of Strings; optional)
- `key` (String; optional)
- `listenPropsMode` (a value equal to: 'default', 'exclude', 'include'; optional)
- `loading` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `skeletonContent` (a list of or a singular dash component, string or number; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdcustomskeleton(; kwargs...)
        available_props = Symbol[:children, :id, :className, :debug, :excludeProps, :includeProps, :key, :listenPropsMode, :loading, :loading_state, :skeletonContent, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdcustomskeleton", "AntdCustomSkeleton", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcustomskeleton(children::Any; kwargs...) = 'feffery'_antdcustomskeleton(;kwargs..., children = children)
'feffery'_antdcustomskeleton(children_maker::Function; kwargs...) = 'feffery'_antdcustomskeleton(children_maker(); kwargs...)

