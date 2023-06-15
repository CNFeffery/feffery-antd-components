# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtext

"""
    'feffery'_antdtext(;kwargs...)
    'feffery'_antdtext(children::Any;kwargs...)
    'feffery'_antdtext(children_maker::Function;kwargs...)


An AntdText component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the text.
- `id` (String; optional): Component id.
- `className` (String | Dict; optional): CSS class name.
- `code` (Bool; optional): Sets whether to render the content in code mode.
- `copyable` (Bool; optional): Sets whether the content can be quickly copied.
- `disabled` (Bool; optional): Sets whether the content is disabled.
- `italic` (Bool; optional): Sets whether the content should be italic.
- `key` (String; optional): A unique identifier key used for refreshing assistance.
- `keyboard` (Bool; optional): Sets whether to add keyboard key style.
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional): Sets the language environment. Possible options are 'zh-cn' and 'en-us'.
- `mark` (Bool; optional): Sets whether to add mark style.
- `strikethrough` (Bool; optional): Sets whether to render the content with strikethrough mode.
- `strong` (Bool; optional): Sets whether the content should be bold.
- `style` (Dict; optional): Custom CSS styles.
- `type` (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional): Sets the text status type for rendering. Possible options are 'secondary', 'success', 'warning', and 'danger'. Default is no status.
- `underline` (Bool; optional): Sets whether to add underline.
"""
function 'feffery'_antdtext(; kwargs...)
        available_props = Symbol[:children, :id, :className, :code, :copyable, :disabled, :italic, :key, :keyboard, :loading_state, :locale, :mark, :strikethrough, :strong, :style, :type, :underline]
        wild_props = Symbol[]
        return Component("'feffery'_antdtext", "AntdText", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtext(children::Any; kwargs...) = 'feffery'_antdtext(;kwargs..., children = children)
'feffery'_antdtext(children_maker::Function; kwargs...) = 'feffery'_antdtext(children_maker(); kwargs...)

