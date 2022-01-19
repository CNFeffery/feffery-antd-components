# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdavatar

"""
    'feffery'_antdavatar(;kwargs...)

An AntdAvatar component.

Keyword arguments:
- `id` (String; optional)
- `alt` (String; optional)
- `className` (String; optional)
- `gap` (Real; optional)
- `icon` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mode` (a value equal to: 'text', 'icon', 'image'; optional)
- `shape` (a value equal to: 'circle', 'square'; optional)
- `size` (optional): . size has the following type: Real | a value equal to: 'large', 'small', 'default' | lists containing elements 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'.
Those elements have the following types:
  - `xs` (Real; optional)
  - `sm` (Real; optional)
  - `md` (Real; optional)
  - `lg` (Real; optional)
  - `xl` (Real; optional)
  - `xxl` (Real; optional)
- `src` (String; optional)
- `srcSet` (String; optional)
- `style` (Dict; optional)
- `text` (String; optional)
"""
function 'feffery'_antdavatar(; kwargs...)
        available_props = Symbol[:id, :alt, :className, :gap, :icon, :loading_state, :mode, :shape, :size, :src, :srcSet, :style, :text]
        wild_props = Symbol[]
        return Component("'feffery'_antdavatar", "AntdAvatar", "feffery_antd_components", available_props, wild_props; kwargs...)
end

