# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdicon

"""
    'feffery'_antdicon(;kwargs...)

An AntdIcon component.

Keyword arguments:
- `id` (String; optional): Component id.
- `className` (String | Dict; optional): CSS class name.
- `debounceWait` (Real; optional): Configures the debounce wait time (in milliseconds) for value change updates, default is 0.
- `icon` (String; optional): Specifies the icon type.
- `key` (String; optional): A unique identifier key used for refreshing assistance.
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `nClicks` (Real; optional): Records the number of times the button has been clicked since rendering, default is 0.
- `style` (Dict; optional): Custom CSS styles.
"""
function 'feffery'_antdicon(; kwargs...)
        available_props = Symbol[:id, :className, :debounceWait, :icon, :key, :loading_state, :nClicks, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdicon", "AntdIcon", "feffery_antd_components", available_props, wild_props; kwargs...)
end

