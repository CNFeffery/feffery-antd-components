# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddropdown

"""
    'feffery'_antddropdown(;kwargs...)

An AntdDropdown component.

Keyword arguments:
- `id` (String; optional)
- `arrow` (Bool; optional)
- `autoAdjustOverflow` (Bool; optional)
- `buttonMode` (Bool; optional)
- `buttonProps` (optional): . buttonProps has the following type: lists containing elements 'size', 'type', 'danger'.
Those elements have the following types:
  - `size` (a value equal to: 'default', 'small', 'large'; optional)
  - `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
  - `danger` (Bool; optional)
- `className` (String | Dict; optional)
- `clickedKey` (String; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `menuItems` (optional): . menuItems has the following type: Array of lists containing elements 'title', 'href', 'target', 'disabled', 'icon', 'key', 'isDivider'.
Those elements have the following types:
  - `title` (String; optional)
  - `href` (String; optional)
  - `target` (String; optional)
  - `disabled` (Bool; optional)
  - `icon` (String; optional)
  - `key` (String; optional)
  - `isDivider` (Bool; optional)s
- `nClicks` (Real; optional)
- `overlayClassName` (String | Dict; optional)
- `overlayStyle` (Dict; optional)
- `placement` (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `style` (Dict; optional)
- `title` (String; optional)
- `trigger` (a value equal to: 'click', 'hover'; optional)
- `visible` (Bool; optional)
"""
function 'feffery'_antddropdown(; kwargs...)
        available_props = Symbol[:id, :arrow, :autoAdjustOverflow, :buttonMode, :buttonProps, :className, :clickedKey, :disabled, :key, :loading_state, :menuItems, :nClicks, :overlayClassName, :overlayStyle, :placement, :popupContainer, :style, :title, :trigger, :visible]
        wild_props = Symbol[]
        return Component("'feffery'_antddropdown", "AntdDropdown", "feffery_antd_components", available_props, wild_props; kwargs...)
end

