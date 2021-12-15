# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdskeleton

"""
    'feffery'_antdskeleton(;kwargs...)
    'feffery'_antdskeleton(children::Any;kwargs...)
    'feffery'_antdskeleton(children_maker::Function;kwargs...)


An AntdSkeleton component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `active` (Bool; optional)
- `avatar` (optional): . avatar has the following type: Bool | lists containing elements 'active', 'shape', 'size'.
Those elements have the following types:
  - `active` (Bool; optional)
  - `shape` (a value equal to: 'circle', 'square'; optional)
  - `size` (Real | a value equal to: 'large', 'small', 'default'; optional)
- `className` (String; optional)
- `debug` (Bool; optional)
- `excludeProps` (Array of Strings; optional)
- `includeProps` (Array of Strings; optional)
- `listenPropsMode` (a value equal to: 'default', 'exclude', 'include'; optional)
- `loading` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `paragraph` (optional): . paragraph has the following type: Bool | lists containing elements 'rows', 'width'.
Those elements have the following types:
  - `rows` (Real; optional)
  - `width` (Real | String | Array of Real | Strings; optional)
- `round` (Bool; optional)
- `style` (Dict; optional)
- `title` (optional): . title has the following type: Bool | lists containing elements 'width'.
Those elements have the following types:
  - `width` (Real | String; optional)
"""
function 'feffery'_antdskeleton(; kwargs...)
        available_props = Symbol[:children, :id, :active, :avatar, :className, :debug, :excludeProps, :includeProps, :listenPropsMode, :loading, :loading_state, :paragraph, :round, :style, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdskeleton", "AntdSkeleton", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdskeleton(children::Any; kwargs...) = 'feffery'_antdskeleton(;kwargs..., children = children)
'feffery'_antdskeleton(children_maker::Function; kwargs...) = 'feffery'_antdskeleton(children_maker(); kwargs...)

