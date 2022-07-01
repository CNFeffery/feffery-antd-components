# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdempty

"""
    'feffery'_antdempty(;kwargs...)
    'feffery'_antdempty(children::Any;kwargs...)
    'feffery'_antdempty(children_maker::Function;kwargs...)


An AntdEmpty component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `description` (a list of or a singular dash component, string or number; optional)
- `image` (String; optional)
- `imageStyle` (Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdempty(; kwargs...)
        available_props = Symbol[:children, :id, :className, :description, :image, :imageStyle, :key, :loading_state, :locale, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdempty", "AntdEmpty", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdempty(children::Any; kwargs...) = 'feffery'_antdempty(;kwargs..., children = children)
'feffery'_antdempty(children_maker::Function; kwargs...) = 'feffery'_antdempty(children_maker(); kwargs...)

