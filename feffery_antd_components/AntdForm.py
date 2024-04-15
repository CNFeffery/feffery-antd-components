# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdForm(Component):
    """An AntdForm component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- className (string | dict; optional)

- colon (boolean; default True)

- formValidateStatus (boolean; optional):
    监听搜集内部表单输入类组件的校验结果.

- helps (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    统一设置内部各AntdFormItem的help值，键为对应AntdFormItem的label值
    优先级低于各AntdFormItem的help值.

- initialValues (dict; optional):
    设置表单默认值，只有初始化以及重置时生效.

- key (string; optional)

- labelAlign (a value equal to: 'left', 'right'; default 'right')

- labelCol (dict; optional)

    `labelCol` is a dict with keys:

    - flex (string | number; optional)

    - offset (number; optional)

    - span (number; optional)

- labelWrap (boolean; default False)

- layout (a value equal to: 'horizontal', 'vertical', 'inline'; default 'horizontal')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- resetForm (boolean; default False):
    控制参数，用于重置表单项校验状态（不能重置表单项包裹的组件的值，需要通过回调重置表单项包裹的组件的值），回调设置为True后会自动变为False.

- resetFormClicks (number; default 0):
    辅助监听表单重置参数.

- style (dict; optional)

- submitForm (boolean; default False):
    控制参数，用于提交表单时手动搜集表单的校验结果，回调设置为True后会自动变为False.

- submitFormClicks (number; default 0):
    辅助监听表单提交参数.

- validateMessages (dict; default {    default: 'Field validation error for ${label}',    required: 'Please enter ${label}',    enum: '${label} must be one of [${enum}]',    whitespace: '${label} cannot be a blank character',    date: {        format: '${label} date format is invalid',        parse: '${label} cannot be converted to a date',        invalid: '${label} is an invalid date',    },    types: {        string: typeTemplate,        method: typeTemplate,        array: typeTemplate,        object: typeTemplate,        number: typeTemplate,        date: typeTemplate,        boolean: typeTemplate,        integer: typeTemplate,        float: typeTemplate,        regexp: typeTemplate,        email: typeTemplate,        url: typeTemplate,        hex: typeTemplate,    },    string: {        len: '${label} must be ${len} characters',        min: '${label} must be at least ${min} characters',        max: '${label} must be up to ${max} characters',        range: '${label} must be between ${min}-${max} characters',    },    number: {        len: '${label} must be equal to ${len}',        min: '${label} must be minimum ${min}',        max: '${label} must be maximum ${max}',        range: '${label} must be between ${min}-${max}',    },    array: {        len: 'Must be ${len} ${label}',        min: 'At least ${min} ${label}',        max: 'At most ${max} ${label}',        range: 'The amount of ${label} must be between ${min}-${max}',    },    pattern: {        mismatch: '${label} does not match the pattern ${pattern}',    },}):
    设置默认的验证提示模板.

    `validateMessages` is a dict with keys:

    - array (dict; optional)

        `array` is a dict with keys:

        - len (string; optional)

        - max (string; optional)

        - min (string; optional)

        - range (string; optional)

    - date (dict; optional)

        `date` is a dict with keys:

        - format (string; optional)

        - invalid (string; optional)

        - parse (string; optional)

    - default (string; optional)

    - enum (string; optional)

    - number (dict; optional)

        `number` is a dict with keys:

        - len (string; optional)

        - max (string; optional)

        - min (string; optional)

        - range (string; optional)

    - pattern (dict; optional)

        `pattern` is a dict with keys:

        - mismatch (string; optional)

    - required (string; optional)

    - string (dict; optional)

        `string` is a dict with keys:

        - len (string; optional)

        - max (string; optional)

        - min (string; optional)

        - range (string; optional)

    - types (dict; optional)

        `types` is a dict with keys:

        - array (string; optional)

        - boolean (string; optional)

        - date (string; optional)

        - email (string; optional)

        - float (string; optional)

        - hex (string; optional)

        - integer (string; optional)

        - method (string; optional)

        - number (string; optional)

        - object (string; optional)

        - regexp (string; optional)

        - string (string; optional)

        - url (string; optional)

    - whitespace (string; optional)

- validateStatuses (dict with strings as keys and values of type a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    统一设置内部各AntdFormItem的validateStatus值，键为对应AntdFormItem的label值
    优先级低于各AntdFormItem的validateStatus值.

- validateTrigger (a value equal to: 'onChange', 'onBlur', 'onFocus' | list of a value equal to: 'onChange', 'onBlur', 'onFocus's; optional):
    统一设置字段触发验证的时机，可选值有onChange、onBlur、onFocus，默认为onChange.

- values (dict; optional):
    搜集内部表单输入类组件的输入值变化情况.

- wrapperCol (dict; optional)

    `wrapperCol` is a dict with keys:

    - flex (string | number; optional)

    - offset (number; optional)

    - span (number; optional)"""
    _children_props = ['helps{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdForm'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, layout=Component.UNDEFINED, labelCol=Component.UNDEFINED, wrapperCol=Component.UNDEFINED, colon=Component.UNDEFINED, labelAlign=Component.UNDEFINED, labelWrap=Component.UNDEFINED, validateMessages=Component.UNDEFINED, validateTrigger=Component.UNDEFINED, values=Component.UNDEFINED, initialValues=Component.UNDEFINED, formValidateStatus=Component.UNDEFINED, submitForm=Component.UNDEFINED, submitFormClicks=Component.UNDEFINED, resetForm=Component.UNDEFINED, resetFormClicks=Component.UNDEFINED, validateStatuses=Component.UNDEFINED, helps=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'colon', 'formValidateStatus', 'helps', 'initialValues', 'key', 'labelAlign', 'labelCol', 'labelWrap', 'layout', 'loading_state', 'resetForm', 'resetFormClicks', 'style', 'submitForm', 'submitFormClicks', 'validateMessages', 'validateStatuses', 'validateTrigger', 'values', 'wrapperCol']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'colon', 'formValidateStatus', 'helps', 'initialValues', 'key', 'labelAlign', 'labelCol', 'labelWrap', 'layout', 'loading_state', 'resetForm', 'resetFormClicks', 'style', 'submitForm', 'submitFormClicks', 'validateMessages', 'validateStatuses', 'validateTrigger', 'values', 'wrapperCol']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdForm, self).__init__(children=children, **args)
