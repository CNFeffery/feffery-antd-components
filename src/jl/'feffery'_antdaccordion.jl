# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdaccordion

"""
    'feffery'_antdaccordion(;kwargs...)
    'feffery'_antdaccordion(children::Any;kwargs...)
    'feffery'_antdaccordion(children_maker::Function;kwargs...)


An AntdAccordion component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `accordion` (Bool; optional)
- `activeKey` (String | Array of Strings | Real | Array of Reals; optional)
- `bordered` (Bool; optional)
- `className` (String | Dict; optional)
- `collapsible` (a value equal to: 'header', 'disabled'; optional)
- `defaultActiveKey` (String | Array of Strings | Real | Array of Reals; optional)
- `expandIconPosition` (a value equal to: 'left', 'right'; optional)
- `ghost` (Bool; optional)
- `items` (optional): . items has the following type: Array of lists containing elements 'children', 'className', 'style', 'key', 'collapsible', 'title', 'extra', 'showArrow', 'forceRender'.
Those elements have the following types:
  - `children` (a list of or a singular dash component, string or number; optional)
  - `className` (String; optional)
  - `style` (Dict; optional)
  - `key` (String | Real; required)
  - `collapsible` (a value equal to: 'header', 'disabled'; optional)
  - `title` (a list of or a singular dash component, string or number; optional)
  - `extra` (a list of or a singular dash component, string or number; optional)
  - `showArrow` (Bool; optional)
  - `forceRender` (Bool; optional)s
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdaccordion(; kwargs...)
        available_props = Symbol[:children, :id, :accordion, :activeKey, :bordered, :className, :collapsible, :defaultActiveKey, :expandIconPosition, :ghost, :items, :key, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdaccordion", "AntdAccordion", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdaccordion(children::Any; kwargs...) = 'feffery'_antdaccordion(;kwargs..., children = children)
'feffery'_antdaccordion(children_maker::Function; kwargs...) = 'feffery'_antdaccordion(children_maker(); kwargs...)

