# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmenu

"""
    'feffery'_antdmenu(;kwargs...)

An AntdMenu component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `currentKey` (String; optional)
- `defaultOpenKeys` (Array of Strings; optional)
- `defaultSelectedKey` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `menuItems` (Array; optional)
- `mode` (String; optional)
- `renderCollapsedButton` (Bool; optional)
- `style` (Dict; optional)
- `theme` (String; optional)
"""
function 'feffery'_antdmenu(; kwargs...)
        available_props = Symbol[:id, :className, :currentKey, :defaultOpenKeys, :defaultSelectedKey, :loading_state, :menuItems, :mode, :renderCollapsedButton, :style, :theme]
        wild_props = Symbol[]
        return Component("'feffery'_antdmenu", "AntdMenu", "feffery_antd_components", available_props, wild_props; kwargs...)
end

