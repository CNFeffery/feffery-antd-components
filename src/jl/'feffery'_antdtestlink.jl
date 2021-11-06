# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtestlink

"""
    'feffery'_antdtestlink(;kwargs...)
    'feffery'_antdtestlink(children::Any;kwargs...)
    'feffery'_antdtestlink(children_maker::Function;kwargs...)


An AntdTestLink component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `disabled` (Bool; optional): If true, clicking on the link does nothing.
- `download` (String; optional)
- `external_link` (Bool; optional): If true, the browser will treat this as an external link,
forcing a page refresh at the new location. If false,
this just changes the location without triggering a page
refresh. Use this if you are observing dcc.Location, for
instance. Defaults to true for absolute URLs and false
otherwise.
- `href` (String; optional): URL of the resource to link to
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `target` (String; optional)
"""
function 'feffery'_antdtestlink(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disabled, :download, :external_link, :href, :style, :target]
        wild_props = Symbol[]
        return Component("'feffery'_antdtestlink", "AntdTestLink", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtestlink(children::Any; kwargs...) = 'feffery'_antdtestlink(;kwargs..., children = children)
'feffery'_antdtestlink(children_maker::Function; kwargs...) = 'feffery'_antdtestlink(children_maker(); kwargs...)

