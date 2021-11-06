# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtag

"""
    'feffery'_antdtag(;kwargs...)

An AntdTag component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `content` (String; optional)
- `href` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `target` (String; optional)
"""
function 'feffery'_antdtag(; kwargs...)
        available_props = Symbol[:id, :className, :color, :content, :href, :loading_state, :style, :target]
        wild_props = Symbol[]
        return Component("'feffery'_antdtag", "AntdTag", "feffery_antd_components", available_props, wild_props; kwargs...)
end

