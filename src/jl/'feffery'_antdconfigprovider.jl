# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdconfigprovider

"""
    'feffery'_antdconfigprovider(;kwargs...)
    'feffery'_antdconfigprovider(children::Any;kwargs...)
    'feffery'_antdconfigprovider(children_maker::Function;kwargs...)


An AntdConfigProvider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `componentDisabled` (Bool; optional)
- `componentSize` (a value equal to: 'small', 'middle', 'large'; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `primaryColor` (String; optional)
"""
function 'feffery'_antdconfigprovider(; kwargs...)
        available_props = Symbol[:children, :id, :componentDisabled, :componentSize, :key, :loading_state, :locale, :primaryColor]
        wild_props = Symbol[]
        return Component("'feffery'_antdconfigprovider", "AntdConfigProvider", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdconfigprovider(children::Any; kwargs...) = 'feffery'_antdconfigprovider(;kwargs..., children = children)
'feffery'_antdconfigprovider(children_maker::Function; kwargs...) = 'feffery'_antdconfigprovider(children_maker(); kwargs...)

