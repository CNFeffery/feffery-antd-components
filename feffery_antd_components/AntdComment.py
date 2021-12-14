# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdComment(Component):
    """An AntdComment component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- action (a value equal to: 'liked', 'disliked'; optional)

- authorName (string; optional)

- authorNameHref (string; optional)

- avatarProps (dict; optional)

- className (string; optional)

- commentContent (string; optional)

- commentId (string; optional)

- defaultAction (a value equal to: 'liked', 'disliked'; optional)

- dislikesCount (number; default 0)

- fromNow (boolean; default False)

- likesCount (number; default 0)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- publishTime (dict; required)

    `publishTime` is a dict with keys:

    - format (string; optional)

    - value (string; required)

- replyCounts (number; default 0)

- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, commentId=Component.UNDEFINED, authorName=Component.UNDEFINED, authorNameHref=Component.UNDEFINED, publishTime=Component.REQUIRED, fromNow=Component.UNDEFINED, replyCounts=Component.UNDEFINED, commentContent=Component.UNDEFINED, likesCount=Component.UNDEFINED, dislikesCount=Component.UNDEFINED, action=Component.UNDEFINED, defaultAction=Component.UNDEFINED, avatarProps=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'action', 'authorName', 'authorNameHref', 'avatarProps', 'className', 'commentContent', 'commentId', 'defaultAction', 'dislikesCount', 'fromNow', 'likesCount', 'loading_state', 'publishTime', 'replyCounts', 'style']
        self._type = 'AntdComment'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'action', 'authorName', 'authorNameHref', 'avatarProps', 'className', 'commentContent', 'commentId', 'defaultAction', 'dislikesCount', 'fromNow', 'likesCount', 'loading_state', 'publishTime', 'replyCounts', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['publishTime']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdComment, self).__init__(children=children, **args)
