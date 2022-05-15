# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcard

"""
    'feffery'_antdcard(;kwargs...)
    'feffery'_antdcard(children::Any;kwargs...)
    'feffery'_antdcard(children_maker::Function;kwargs...)


An AntdCard component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `bodyStyle` (Dict; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `coverImg` (optional): . coverImg has the following type: lists containing elements 'src', 'alt', 'style'.
Those elements have the following types:
  - `src` (String; optional)
  - `alt` (String; optional)
  - `style` (Dict; optional)
- `extraLink` (optional): . extraLink has the following type: lists containing elements 'content', 'href', 'target', 'className', 'style'.
Those elements have the following types:
  - `content` (String; optional)
  - `href` (String; optional)
  - `target` (String; optional)
  - `className` (String; optional)
  - `style` (Dict; optional)
- `headStyle` (Dict; optional)
- `hoverable` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'default', 'small'; optional)
- `style` (Dict; optional)
- `title` (String; optional)
"""
function 'feffery'_antdcard(; kwargs...)
        available_props = Symbol[:children, :id, :bodyStyle, :bordered, :className, :coverImg, :extraLink, :headStyle, :hoverable, :key, :loading_state, :size, :style, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdcard", "AntdCard", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcard(children::Any; kwargs...) = 'feffery'_antdcard(;kwargs..., children = children)
'feffery'_antdcard(children_maker::Function; kwargs...) = 'feffery'_antdcard(children_maker(); kwargs...)

