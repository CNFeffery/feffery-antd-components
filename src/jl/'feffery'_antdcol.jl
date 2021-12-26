# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcol

"""
    'feffery'_antdcol(;kwargs...)
    'feffery'_antdcol(children::Any;kwargs...)
    'feffery'_antdcol(children_maker::Function;kwargs...)


An AntdCol component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `flex` (String | Real; optional)
- `lg` (optional): . lg has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `md` (optional): . md has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
- `offset` (Real; optional)
- `order` (Real; optional)
- `pull` (Real; optional)
- `push` (Real; optional)
- `sm` (optional): . sm has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
- `span` (Real; optional)
- `style` (Dict; optional)
- `xl` (optional): . xl has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
- `xs` (optional): . xs has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
- `xxl` (optional): . xxl has the following type: Real | lists containing elements 'span', 'offset', 'order', 'pull', 'push'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
  - `order` (Real; optional)
  - `pull` (Real; optional)
  - `push` (Real; optional)
"""
function 'feffery'_antdcol(; kwargs...)
        available_props = Symbol[:children, :id, :className, :flex, :lg, :loading_state, :md, :offset, :order, :pull, :push, :sm, :span, :style, :xl, :xs, :xxl]
        wild_props = Symbol[]
        return Component("'feffery'_antdcol", "AntdCol", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcol(children::Any; kwargs...) = 'feffery'_antdcol(;kwargs..., children = children)
'feffery'_antdcol(children_maker::Function; kwargs...) = 'feffery'_antdcol(children_maker(); kwargs...)

