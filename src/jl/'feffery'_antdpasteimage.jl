# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpasteimage

"""
    'feffery'_antdpasteimage(;kwargs...)

An AntdPasteImage component.

Keyword arguments:
- `id` (String; required)
- `className` (String; optional)
- `currentPastedImages` (Array of Bool | Real | String | Dict | Arrays; optional)
- `deletedIdx` (Array of Reals; optional)
- `imageHeight` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdpasteimage(; kwargs...)
        available_props = Symbol[:id, :className, :currentPastedImages, :deletedIdx, :imageHeight, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdpasteimage", "AntdPasteImage", "feffery_antd_components", available_props, wild_props; kwargs...)
end

