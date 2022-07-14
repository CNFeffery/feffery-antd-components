# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcopytext

"""
    'feffery'_antdcopytext(;kwargs...)
    'feffery'_antdcopytext(children::Any;kwargs...)
    'feffery'_antdcopytext(children_maker::Function;kwargs...)


An AntdCopyText component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
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
        available_props = Symbol[:children, :id, :className, :key, :loading_state, :locale, :style, :text]
        wild_props = Symbol[]
        return Component("'feffery'_antdcopytext", "AntdCopyText", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcopytext(children::Any; kwargs...) = 'feffery'_antdcopytext(;kwargs..., children = children)
'feffery'_antdcopytext(children_maker::Function; kwargs...) = 'feffery'_antdcopytext(children_maker(); kwargs...)

