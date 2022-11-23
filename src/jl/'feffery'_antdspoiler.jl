# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdspoiler

"""
    'feffery'_antdspoiler(;kwargs...)
    'feffery'_antdspoiler(children::Any;kwargs...)
    'feffery'_antdspoiler(children_maker::Function;kwargs...)


An AntdSpoiler component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `contentClassName` (String; optional)
- `contentStyle` (Dict; optional)
- `hideLabel` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxHeight` (Real; optional)
- `open` (Bool; optional)
- `showLabel` (String; optional)
- `style` (Dict; optional)
- `transitionDuration` (String; optional)
"""
function 'feffery'_antdspoiler(; kwargs...)
        available_props = Symbol[:children, :id, :className, :contentClassName, :contentStyle, :hideLabel, :key, :loading_state, :locale, :maxHeight, :open, :showLabel, :style, :transitionDuration]
        wild_props = Symbol[]
        return Component("'feffery'_antdspoiler", "AntdSpoiler", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdspoiler(children::Any; kwargs...) = 'feffery'_antdspoiler(;kwargs..., children = children)
'feffery'_antdspoiler(children_maker::Function; kwargs...) = 'feffery'_antdspoiler(children_maker(); kwargs...)

