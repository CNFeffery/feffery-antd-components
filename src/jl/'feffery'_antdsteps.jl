# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdsteps

"""
    'feffery'_antdsteps(;kwargs...)

An AntdSteps component.

Keyword arguments:
- `id` (String; optional)
- `allowClick` (Bool; optional)
- `className` (String | Dict; optional)
- `current` (Real; optional)
- `direction` (a value equal to: 'horizontal', 'vertical'; optional)
- `key` (String; optional)
- `labelPlacement` (a value equal to: 'horizontal', 'vertical'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `progressDot` (Bool; optional)
- `responsive` (Bool; optional)
- `size` (a value equal to: 'default', 'small'; optional)
- `status` (a value equal to: 'wait', 'process', 'finish', 'error'; optional)
- `steps` (required): . steps has the following type: Array of lists containing elements 'title', 'subTitle', 'description'.
Those elements have the following types:
  - `title` (a list of or a singular dash component, string or number; required)
  - `subTitle` (a list of or a singular dash component, string or number; optional)
  - `description` (a list of or a singular dash component, string or number; optional)s
- `style` (Dict; optional)
- `type` (a value equal to: 'default', 'navigation'; optional)
"""
function 'feffery'_antdsteps(; kwargs...)
        available_props = Symbol[:id, :allowClick, :className, :current, :direction, :key, :labelPlacement, :loading_state, :progressDot, :responsive, :size, :status, :steps, :style, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdsteps", "AntdSteps", "feffery_antd_components", available_props, wild_props; kwargs...)
end

