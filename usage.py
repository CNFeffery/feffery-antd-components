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

app.layout = html.Div(
    [

        fac.AntdPopconfirm(
            fac.AntdButton(
                '点击触发',
                type='primary'
            ),
            title=html.Span(
                [
                    fac.AntdText('气泡确认', strong=True),
                    fac.AntdText('测试')
                ]
            )
        ),

        fac.AntdEmpty(
            fac.AntdButton('children测试', type='primary'),
            description=fac.AntdButton('description测试', type='primary'),
        ),

        fac.AntdAlert(
            type="success",
            showIcon=True,
            message="This is a success alert",
            description="This is a description",
            closable=True,
            action=fac.AntdSpace(
                [
                    fac.AntdButton('接受', type="primary"),
                    fac.AntdButton('拒绝', type="primary", danger=True),
                ],
                direction="vertical",
            )
        ),

        fac.AntdTabs(
            [
                fac.AntdTabPane(
                    html.Div(
                        '标签页1测试',
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页1',
                    key='标签页1'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页2测试', type='primary'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页2',
                    key='标签页2'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页3测试', type='dashed'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页3',
                    key='标签页3'
                )
            ],
            tabBarGutter=50,
            tabPaneAnimated=True,
            tabBarLeftExtraContent=html.Div(
                fac.AntdButton('测试', type='primary'),
                style={
                    'padding': '0 20px',
                    'display': 'flex',
                    'justifyContent': 'center'
                }
            ),
            tabBarRightExtraContent=html.Div(
                fac.AntdButton('测试', type='primary'),
                style={
                    'padding': '0 20px',
                    'display': 'flex',
                    'justifyContent': 'center'
                }
            )
        ),

        fac.AntdDatePicker(allowClear=False),

        fac.AntdDateRangePicker(allowClear=False)
    ],
    style={
        'padding': '100px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
