# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdprogress

"""
    'feffery'_antdprogress(;kwargs...)

An AntdProgress component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `format` (optional): . format has the following type: lists containing elements 'prefix', 'suffix', 'content'.
Those elements have the following types:
  - `prefix` (String; optional)
  - `suffix` (String; optional)
  - `content` (a list of or a singular dash component, string or number; optional)
- `gapDegree` (Real; optional)
- `gapPosition` (a value equal to: 'top', 'bottom', 'left', 'right'; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `percent` (Real; optional)
- `showInfo` (Bool; optional)
- `size` (a value equal to: 'default', 'small'; optional)
- `status` (a value equal to: 'success', 'exception', 'normal', 'active'; optional)
- `steps` (Real; optional)
- `strokeColor` (optional): . strokeColor has the following type: String | lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (String; optional)
  - `to` (String; optional)
- `strokeLinecap` (a value equal to: 'round', 'butt', 'square'; optional)
- `strokeWidth` (Real; optional)
- `style` (Dict; optional)
- `trailColor` (String; optional)
- `type` (a value equal to: 'line', 'circle', 'dashboard'; optional)
- `width` (Real; optional)
"""
function 'feffery'_antdprogress(; kwargs...)
        available_props = Symbol[:id, :className, :format, :gapDegree, :gapPosition, :key, :loading_state, :percent, :showInfo, :size, :status, :steps, :strokeColor, :strokeLinecap, :strokeWidth, :style, :trailColor, :type, :width]
        wild_props = Symbol[]
        return Component("'feffery'_antdprogress", "AntdProgress", "feffery_antd_components", available_props, wild_props; kwargs...)
end

