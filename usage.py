import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, State, Output
import json


app = dash.Dash(__name__)

schema = {
    "type": "object",
    "displayType": "row",
    "properties": {
        "input": {
            "title": "输入框",
            "type": "string",
            "widget": "input",
            "required": True
        },
        "number": {
            "title": "数字输入框",
            "type": "number",
            "widget": "inputNumber",
            "required": True
        },
        "select": {
            "title": "下拉单选",
            "type": "string",
            "widget": "select",
            "required": True,
            "props": {
                "options": [
                    {
                        "label": "早",
                        "value": "a"
                    },
                    {
                        "label": "中",
                        "value": "b"
                    },
                    {
                        "label": "晚",
                        "value": "c"
                    }
                ]
            }
        },
        "multiSelect": {
            "title": "多选",
            "type": "array",
            "widget": "multiSelect",
            "description": "下拉多选",
            "required": True,
            "props": {
                "options": [
                    {
                        "label": "杭州",
                        "value": "a"
                    },
                    {
                        "label": "武汉",
                        "value": "b"
                    },
                    {
                        "label": "湖州",
                        "value": "c"
                    },
                    {
                        "label": "贵阳",
                        "value": "d"
                    }
                ]
            }
        },
        "cascader": {
            "title": "级联选择",
            "type": "array",
            "widget": "cascader",
            "required": True,
            "props": {
                "options": [
                    {
                        'value': '节点1',
                        'label': '节点1',
                        'children': [
                            {
                                'value': '节点1-1',
                                'label': '节点1-1'
                            },
                            {
                                'value': '节点1-2',
                                'label': '节点1-2',
                                'children': [
                                    {
                                        'value': '节点1-2-1',
                                        'label': '节点1-2-1'
                                    },
                                    {
                                        'value': '节点1-2-2',
                                        'label': '节点1-2-2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'value': '节点2',
                        'label': '节点2',
                        'children': [
                            {
                                'value': '节点2-1',
                                'label': '节点2-1'
                            },
                            {
                                'value': '节点2-2',
                                'label': '节点2-2'
                            }
                        ]
                    }
                ]
            }
        },
        "treeSelect": {
            "title": "树选择",
            "type": "string",
            "widget": "treeSelect",
            "props": {
                "treeData": [
                    {
                        'key': '节点1',
                        'value': '1',
                        'title': '节点1',
                        'children': [
                            {
                                'key': f'节点1-{i}',
                                'value': f'1-{i}',
                                'title': f'节点1-{i}'
                            }
                            for i in range(1, 5)
                        ]
                    },
                    {
                        'key': '节点2',
                        'value': '2',
                        'title': '节点2'
                    }
                ]
            }
        },
        "radio": {
            "title": "点击单选",
            "type": "string",
            "widget": "radio",
            "props": {
                "options": [
                    {
                        "label": "早",
                        "value": "a"
                    },
                    {
                        "label": "中",
                        "value": "b"
                    },
                    {
                        "label": "晚",
                        "value": "c"
                    }
                ]
            }
        },
        "checkboxes": {
            "title": "点击多选",
            "type": "array",
            "widget": "checkboxes",
            "props": {
                "options": [
                    {
                        "label": "杭州",
                        "value": "a"
                    },
                    {
                        "label": "武汉",
                        "value": "b"
                    },
                    {
                        "label": "湖州",
                        "value": "c"
                    },
                    {
                        "label": "贵阳",
                        "value": "d"
                    }
                ]
            }
        },
        "textarea": {
            "title": "长文本",
            "type": "string",
            "widget": "textArea"
        },
        "date": {
            "title": "日期选择",
            "type": "string",
            "widget": "datePicker"
        },
        "dateRange": {
            "title": "日期范围",
            "type": "range",
            "widget": "dateRange"
        },
        "time": {
            "title": "时间选择",
            "type": "string",
            "widget": "timePicker"
        },
        "timeRange": {
            "title": "时间范围",
            "type": "range",
            "widget": "timeRange"
        },
        "rate": {
            "title": "评分",
            "type": "number",
            "widget": "rate",
            "props": {
                "count": 5
            }
        },
        "html": {
            "title": "HTML",
            "type": "string",
            "widget": "html"
        },
        "switch": {
            "title": "开关",
            "type": "boolean",
            "widget": "switch"
        },
        "checkbox": {
            "title": "是否选择",
            "type": "boolean",
            "widget": "checkbox"
        },
        "slider": {
            "title": "带滑动条",
            "type": "number",
            "widget": "slider"
        },
        "image": {
            "title": "图片展示",
            "type": "string",
            "widget": "imageInput"
        },
        "color": {
            "title": "颜色选择",
            "type": "string",
            "widget": "color"
        },
        "url": {
            "title": "链接",
            "type": "string",
            "widget": "urlInput"
        }
    }
}

app.layout = html.Div(
    [
        html.Div('表单值'),
        html.Pre(id='output'),
        fac.AntdButton(
            '加载表单',
            id='submit-button',
            type='primary',
        ),
        fac.AntdFormRender(
            id='form-render',
            schema=schema,
            footer=fac.AntdSpace(
                [
                    fac.AntdButton(
                        '提交',
                        id='test-submit',
                        type='primary'
                    ),
                    fac.AntdButton(
                        '重置',
                        id='test-reset'
                    )
                ]
            )
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('form-render', 'values'),
    Input('submit-button', 'nClicks')
)
def set_form_data(nClicks):
    if nClicks:
        return {
            'input': '输入框',
            'number': 1,
            'select': 'a',
            'multiSelect': ['a', 'b'],
            'radio': 'a',
            'checkboxes': ['a', 'b'],
            'textarea': '长文本'
        }
    return dash.no_update


@app.callback(
    Output('form-render', 'submitForm'),
    Input('test-submit', 'nClicks'),
    prevent_initial_call=True
)
def custom_submit_form(nClicks):
    if nClicks:
        return True
    return dash.no_update


@app.callback(
    Output('form-render', 'resetForm'),
    Input('test-reset', 'nClicks'),
    prevent_initial_call=True
)
def custom_reset_form(nClicks):
    if nClicks:
        return True
    return dash.no_update


@app.callback(
    Output('output', 'children'),
    Input('form-render', 'values'),
    State('form-render', 'validateStatuses'),
    prevent_initial_call=True
)
def manual_submit_form(values, validateStatuses):
    # if validateStatuses:
    return json.dumps(values, indent=4, ensure_ascii=False)
    # return '校验失败'


if __name__ == '__main__':
    app.run(debug=True)
