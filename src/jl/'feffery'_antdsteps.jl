# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdsteps

"""
    'feffery'_antdsteps(;kwargs...)

An AntdSteps component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `current` (Real; optional)
- `direction` (String; optional)
- `labelPlacement` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `progressDot` (Bool; optional)
- `size` (String; optional)
- `status` (String; optional)
- `steps` (optional): . steps has the following type: Array of lists containing elements 'title', 'subTitle', 'description'.
Those elements have the following types:
  - `title` (String; required)
  - `subTitle` (String; optional)
  - `description` (String; optional)s
- `style` (Dict; optional)
- `type` (String; optional)
"""
function 'feffery'_antdsteps(; kwargs...)
        available_props = Symbol[:id, :className, :current, :direction, :labelPlacement, :loading_state, :progressDot, :size, :status, :steps, :style, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdsteps", "AntdSteps", "feffery_antd_components", available_props, wild_props; kwargs...)
end

