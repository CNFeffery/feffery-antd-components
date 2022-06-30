import dash
import json
import uuid
import numpy as np
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(
    __name__
)


@app.callback(
    Output('alert-message-text', 'children'),
    Input('alert-message-button', 'nClicks')
)
def alert_message_callback(nClicks):

    return nClicks


@app.callback(
    Output('alert-description-text', 'children'),
    Input('alert-description-button', 'nClicks')
)
def alert_description_callback(nClicks):

    return nClicks


@app.callback(
    Output('popover-content-text', 'children'),
    Input('popover-content-button', 'nClicks')
)
def popover_content_callback(nClicks):

    return nClicks


@app.callback(
    Output('result-title-text', 'children'),
    Input('result-title-button', 'nClicks')
)
def result_title_callback(nClicks):

    return nClicks


@app.callback(
    Output('result-subTitle-text', 'children'),
    Input('result-subTitle-button', 'nClicks')
)
def result_subTitle_callback(nClicks):

    return nClicks


app.layout = html.Div(
    [

        fac.AntdDatePicker(allowClear=False),

        fac.AntdDateRangePicker(allowClear=False),

        fac.AntdAlert(
            message=fac.AntdSpace(
                [
                    fac.AntdButton(
                        'message测试',
                        id='alert-message-button',
                        type='primary'
                    ),
                    fac.AntdText(id='alert-message-text')
                ]
            ),
            description=fac.AntdSpace(
                [
                    fac.AntdButton(
                        'description测试',
                        id='alert-description-button',
                        type='primary'
                    ),
                    fac.AntdText(id='alert-description-text')
                ]
            ),
            showIcon=True
        ),

        fac.AntdPageHeader(
            title=fac.AntdTitle(
                'title测试',
                level=3,
                copyable=True
            ),
            subTitle=fac.AntdText(
                'subTitle测试',
                copyable=True
            )
        ),

        fac.AntdPopover(
            fac.AntdButton(
                'popover测试',
                type='primary'
            ),
            title='popover测试',
            content=fac.AntdSpace(
                [
                    fac.AntdButton(
                        'content测试',
                        id='popover-content-button',
                        type='primary'
                    ),
                    fac.AntdText(id='popover-content-text')
                ]
            )
        ),

        fac.AntdResult(
            icon=fac.AntdIcon(
                icon='antd-bulb',
                style={
                    'fontSize': '80px',
                    'color': '#1890ff'
                }
            ),
            title=fac.AntdSpace(
                [
                    fac.AntdButton(
                        'title测试',
                        id='result-title-button',
                        type='primary'
                    ),
                    fac.AntdText(id='result-title-text')
                ]
            ),
            subTitle=fac.AntdSpace(
                [
                    fac.AntdButton(
                        'subTitle测试',
                        id='result-subTitle-button',
                        type='primary'
                    ),
                    fac.AntdText(id='result-subTitle-text')
                ]
            )
        ),

        html.Div(
            style={
                'height': '200px'
            }
        ),


        fac.AntdTree(
            treeData=[
                {
                    'title': '重庆市',
                    'key': '重庆市',
                    'children': [
                        {
                            'title': '渝北区',
                            'key': '渝北区'
                        },
                        {
                            'title': '江北区',
                            'key': '江北区'
                        }
                    ]
                },
                {
                    'title': '北京市',
                    'key': '北京市',
                    'children': [
                        {
                            'title': '西城区',
                            'key': '西城区'
                        },
                        {
                            'title': '东城区',
                            'key': '东城区'
                        }
                    ]
                },
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市',
                            'children': [
                                {
                                    'title': '天府新区',
                                    'key': '天府新区'
                                }
                            ]
                        }
                    ]
                }
            ],
            checkable=True,
            selectable=False,
            checkStrictly=True,
            defaultExpandAll=True
        )
    ],
    style={
        'padding': '100px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
