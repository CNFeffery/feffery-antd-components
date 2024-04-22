# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdComment(Component):
    """An AntdComment component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- action (a value equal to: 'liked', 'disliked', 'default'; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- authorName (string; optional)

- authorNameHref (string; optional)

- avatarProps (dict; optional)

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- className (string | dict; optional)

- commentContent (a list of or a singular dash component, string or number; optional)

- commentId (string; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultAction (a value equal to: 'liked', 'disliked', 'default'; optional)

- deleteClicks (number; default 0)

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

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- publishTime (dict; required)

    `publishTime` is a dict with keys:

    - format (string; optional)

    - value (string; required)

- replyClicks (number; default 0)

- showDelete (boolean; default False)

- showLikeDislike (boolean; default True)

- showReply (boolean; default True)

- style (dict; optional)"""
    _children_props = ['commentContent']
    _base_nodes = ['commentContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdComment'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, locale=Component.UNDEFINED, commentId=Component.UNDEFINED, authorName=Component.UNDEFINED, authorNameHref=Component.UNDEFINED, publishTime=Component.REQUIRED, fromNow=Component.UNDEFINED, showLikeDislike=Component.UNDEFINED, showReply=Component.UNDEFINED, showDelete=Component.UNDEFINED, replyClicks=Component.UNDEFINED, deleteClicks=Component.UNDEFINED, commentContent=Component.UNDEFINED, likesCount=Component.UNDEFINED, dislikesCount=Component.UNDEFINED, action=Component.UNDEFINED, defaultAction=Component.UNDEFINED, avatarProps=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'action', 'aria-*', 'authorName', 'authorNameHref', 'avatarProps', 'batchPropsNames', 'batchPropsValues', 'className', 'commentContent', 'commentId', 'data-*', 'defaultAction', 'deleteClicks', 'dislikesCount', 'fromNow', 'likesCount', 'loading_state', 'locale', 'popupContainer', 'publishTime', 'replyClicks', 'showDelete', 'showLikeDislike', 'showReply', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'action', 'aria-*', 'authorName', 'authorNameHref', 'avatarProps', 'batchPropsNames', 'batchPropsValues', 'className', 'commentContent', 'commentId', 'data-*', 'defaultAction', 'deleteClicks', 'dislikesCount', 'fromNow', 'likesCount', 'loading_state', 'locale', 'popupContainer', 'publishTime', 'replyClicks', 'showDelete', 'showLikeDislike', 'showReply', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['publishTime']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdComment, self).__init__(children=children, **args)
