# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtext

"""
    'feffery'_antdtext(;kwargs...)
    'feffery'_antdtext(children::Any;kwargs...)
    'feffery'_antdtext(children_maker::Function;kwargs...)


An AntdText component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String | Dict; optional)
- `code` (Bool; optional)
- `copyable` (Bool; optional)
- `disabled` (Bool; optional)
- `italic` (Bool; optional)
- `key` (String; optional)
- `keyboard` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `mark` (Bool; optional)
- `strikethrough` (Bool; optional)
- `strong` (Bool; optional)
- `style` (Dict; optional)
- `type` (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional)
- `underline` (Bool; optional)
"""
function 'feffery'_antdtext(; kwargs...)
        available_props = Symbol[:children, :id, :className, :code, :copyable, :disabled, :italic, :key, :keyboard, :loading_state, :locale, :mark, :strikethrough, :strong, :style, :type, :underline]
        wild_props = Symbol[]
        return Component("'feffery'_antdtext", "AntdText", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtext(children::Any; kwargs...) = 'feffery'_antdtext(;kwargs..., children = children)
'feffery'_antdtext(children_maker::Function; kwargs...) = 'feffery'_antdtext(children_maker(); kwargs...)

