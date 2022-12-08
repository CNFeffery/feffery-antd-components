# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdavatargroup

"""
    'feffery'_antdavatargroup(;kwargs...)
    'feffery'_antdavatargroup(children::Any;kwargs...)
    'feffery'_antdavatargroup(children_maker::Function;kwargs...)


An AntdAvatarGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String | Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxCount` (Real; optional)
- `maxPopoverPlacement` (a value equal to: 'top', 'bottom'; optional)
- `maxPopoverTrigger` (a value equal to: 'hover', 'focus', 'click'; optional)
- `maxStyle` (Dict; optional)
- `size` (optional): . size has the following type: Real | a value equal to: 'large', 'small', 'default' | lists containing elements 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'.
Those elements have the following types:
  - `xs` (Real; optional)
  - `sm` (Real; optional)
  - `md` (Real; optional)
  - `lg` (Real; optional)
  - `xl` (Real; optional)
  - `xxl` (Real; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdavatargroup(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :loading_state, :maxCount, :maxPopoverPlacement, :maxPopoverTrigger, :maxStyle, :size, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdavatargroup", "AntdAvatarGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdavatargroup(children::Any; kwargs...) = 'feffery'_antdavatargroup(;kwargs..., children = children)
'feffery'_antdavatargroup(children_maker::Function; kwargs...) = 'feffery'_antdavatargroup(children_maker(); kwargs...)

