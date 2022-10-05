# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtimeline

"""
    'feffery'_antdtimeline(;kwargs...)

An AntdTimeline component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `items` (required): . items has the following type: Array of lists containing elements 'content', 'color', 'icon', 'label', 'position'.
Those elements have the following types:
  - `content` (a list of or a singular dash component, string or number; optional)
  - `color` (String; optional)
  - `icon` (a list of or a singular dash component, string or number; optional)
  - `label` (a list of or a singular dash component, string or number; optional)
  - `position` (a value equal to: 'left', 'right'; optional)s
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mode` (a value equal to: 'left', 'alternate', 'right'; optional)
- `pending` (a list of or a singular dash component, string or number; optional)
- `pendingDot` (a list of or a singular dash component, string or number; optional)
- `reverse` (Bool; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdtimeline(; kwargs...)
        available_props = Symbol[:id, :className, :items, :key, :loading_state, :mode, :pending, :pendingDot, :reverse, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdtimeline", "AntdTimeline", "feffery_antd_components", available_props, wild_props; kwargs...)
end

