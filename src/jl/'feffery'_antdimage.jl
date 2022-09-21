# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdimage

"""
    'feffery'_antdimage(;kwargs...)

An AntdImage component.

Keyword arguments:
- `id` (String; optional)
- `alt` (String; optional)
- `className` (String | Dict; optional)
- `fallback` (String; optional)
- `height` (Real | String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `multiImageMode` (a value equal to: 'fold', 'unfold'; optional)
- `preview` (Bool; optional)
- `src` (String | Array of Strings; optional)
- `style` (Dict; optional)
- `width` (Real | String; optional)
"""
function 'feffery'_antdimage(; kwargs...)
        available_props = Symbol[:id, :alt, :className, :fallback, :height, :key, :loading_state, :locale, :multiImageMode, :preview, :src, :style, :width]
        wild_props = Symbol[]
        return Component("'feffery'_antdimage", "AntdImage", "feffery_antd_components", available_props, wild_props; kwargs...)
end

