# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdresult

"""
    'feffery'_antdresult(;kwargs...)

An AntdResult component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `icon` (a list of or a singular dash component, string or number; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `status` (a value equal to: 'success', 'error', 'info', 'warning', '404', '403', '500', 'loading'; optional)
- `style` (Dict; optional)
- `subTitle` (a list of or a singular dash component, string or number; optional)
- `title` (a list of or a singular dash component, string or number; optional)
"""
function 'feffery'_antdresult(; kwargs...)
        available_props = Symbol[:id, :className, :icon, :key, :loading_state, :status, :style, :subTitle, :title]
        wild_props = Symbol[]
        return Component("'feffery'_antdresult", "AntdResult", "feffery_antd_components", available_props, wild_props; kwargs...)
end

