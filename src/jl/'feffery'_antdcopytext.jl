# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcopytext

"""
    'feffery'_antdcopytext(;kwargs...)

An AntdCopyText component.

Keyword arguments:
- `id` (String; optional)
- `afterIcon` (a list of or a singular dash component, string or number; optional)
- `beforeIcon` (a list of or a singular dash component, string or number; optional)
- `className` (String | Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `style` (Dict; optional)
- `text` (String; optional)
"""
function 'feffery'_antdcopytext(; kwargs...)
        available_props = Symbol[:id, :afterIcon, :beforeIcon, :className, :key, :loading_state, :locale, :style, :text]
        wild_props = Symbol[]
        return Component("'feffery'_antdcopytext", "AntdCopyText", "feffery_antd_components", available_props, wild_props; kwargs...)
end

