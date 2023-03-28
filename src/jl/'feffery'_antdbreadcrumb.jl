# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdbreadcrumb

"""
    'feffery'_antdbreadcrumb(;kwargs...)

An AntdBreadcrumb component.

Keyword arguments:
- `id` (String; optional)
- `className` (String | Dict; optional)
- `items` (optional): . items has the following type: Array of lists containing elements 'title', 'href', 'target', 'icon', 'menuItems'.
Those elements have the following types:
  - `title` (String; optional)
  - `href` (String; optional)
  - `target` (String; optional)
  - `icon` (String; optional)
  - `menuItems` (optional): . menuItems has the following type: Array of lists containing elements 'title', 'href', 'target', 'disabled', 'icon'.
Those elements have the following types:
  - `title` (String; optional)
  - `href` (String; optional)
  - `target` (String; optional)
  - `disabled` (Bool; optional)
  - `icon` (String; optional)ss
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `separator` (a list of or a singular dash component, string or number; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdbreadcrumb(; kwargs...)
        available_props = Symbol[:id, :className, :items, :key, :loading_state, :separator, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdbreadcrumb", "AntdBreadcrumb", "feffery_antd_components", available_props, wild_props; kwargs...)
end

