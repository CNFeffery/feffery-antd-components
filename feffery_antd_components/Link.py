# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Link(Component):
    """A Link component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- disabled (boolean; default False):
    If True, clicking on the link does nothing.

- download (string; optional)

- external_link (boolean; optional):
    If True, the browser will treat this as an external link,  forcing
    a page refresh at the new location. If False,  this just changes
    the location without triggering a page  refresh. Use this if you
    are observing dcc.Location, for  instance. Defaults to True for
    absolute URLs and False  otherwise.

- href (string; optional):
    URL of the resource to link to.

- style (dict; optional):
    Defines CSS styles which will override styles previously set.

- target (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, href=Component.UNDEFINED, disabled=Component.UNDEFINED, external_link=Component.UNDEFINED, preOnClick=Component.UNDEFINED, target=Component.UNDEFINED, download=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'disabled', 'download', 'external_link', 'href', 'style', 'target']
        self._type = 'Link'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'disabled', 'download', 'external_link', 'href', 'style', 'target']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Link, self).__init__(children=children, **args)
