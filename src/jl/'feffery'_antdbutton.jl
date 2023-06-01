# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdbutton

"""
    'feffery'_antdbutton(;kwargs...)
    'feffery'_antdbutton(children::Any;kwargs...)
    'feffery'_antdbutton(children_maker::Function;kwargs...)


An AntdButton component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Children of current component
- `id` (String; optional): Id of current component
- `autoSpin` (Bool; optional): Setting whether to automatically update loading to true after each button click, 
enabling callback operations with a non-clickable button effect; default is false
- `block` (Bool; optional): Setting whether the button should span the full width of its parent element, default is false
- `className` (String | Dict; optional): CSS class of current component
- `danger` (Bool; optional): Setting whether the button should be in a dangerous state, default is false
- `debounceWait` (Real; optional): Used to set the debounce waiting duration (in milliseconds) for nClicks listener update; default is 0
- `disabled` (Bool; optional): Setting whether the button should be rendered as a disabled state, default is false
- `href` (String; optional): Setting the URL for redirection, similar to the functionality of an <a> tag
- `icon` (a list of or a singular dash component, string or number; optional): Component-specific parameter for setting the prefix icon element of the button
- `key` (String; optional): Refreshing the key can force a redraw of the current component.
- `loading` (Bool; optional): Used to set whether the button renders a "loading, not clickable" effect; default is false
- `loadingChildren` (a list of or a singular dash component, string or number; optional): Children of current component while loading=true
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `nClicks` (Real; optional): Recording the number of times the button has been clicked since rendering, default is 0
- `shape` (a value equal to: 'circle', 'round'; optional): Setting the shape of the button (circle: circle, round: rounded rectangle; default is not set, i.e., normal rectangle)
- `size` (a value equal to: 'small', 'middle', 'large'; optional): Setting the size of the button, available options are 'small', 'middle', and 'large'; default is 'middle'
- `style` (Dict; optional): CSS style dict of current component
- `target` (String; optional): Used in conjunction with the href parameter to set the type of action for the redirection
- `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional): Setting the overall style of the button (optional options are primary, ghost, dashed, link, text, default; default is default)
"""
function 'feffery'_antdbutton(; kwargs...)
        available_props = Symbol[:children, :id, :autoSpin, :block, :className, :danger, :debounceWait, :disabled, :href, :icon, :key, :loading, :loadingChildren, :loading_state, :nClicks, :shape, :size, :style, :target, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdbutton", "AntdButton", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdbutton(children::Any; kwargs...) = 'feffery'_antdbutton(;kwargs..., children = children)
'feffery'_antdbutton(children_maker::Function; kwargs...) = 'feffery'_antdbutton(children_maker(); kwargs...)

