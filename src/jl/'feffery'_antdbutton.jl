# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdbutton

"""
    'feffery'_antdbutton(;kwargs...)
    'feffery'_antdbutton(children::Any;kwargs...)
    'feffery'_antdbutton(children_maker::Function;kwargs...)


An AntdButton component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `block` (Bool; optional)
- `className` (String; optional)
- `danger` (Bool; optional)
- `debounceWait` (Real; optional)
- `disabled` (Bool; optional)
- `href` (String; optional)
- `key` (String; optional)
- `loading` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `nClicks` (Real; optional)
- `shape` (a value equal to: 'circle', 'round'; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `target` (String; optional)
- `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
"""
function 'feffery'_antdbutton(; kwargs...)
        available_props = Symbol[:children, :id, :block, :className, :danger, :debounceWait, :disabled, :href, :key, :loading, :loading_state, :nClicks, :shape, :size, :style, :target, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdbutton", "AntdButton", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdbutton(children::Any; kwargs...) = 'feffery'_antdbutton(;kwargs..., children = children)
'feffery'_antdbutton(children_maker::Function; kwargs...) = 'feffery'_antdbutton(children_maker(); kwargs...)

