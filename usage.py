import dash
import json
import uuid
import numpy as np
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from datetime import datetime
from dash.dependencies import Input, Output, ALL, State
from faker import Faker

faker = Faker(locale='zh_CN')

app = dash.Dash(
    __name__
)


app.layout = html.Div(
    [


        fac.AntdInput(
            placeholder='default输入框示例',
            prefix=fac.AntdIcon(
                icon='antd-user',
                style={
                    'color': 'grey'
                }
            ),
            style={
                'width': '300px',
                'marginBottom': '5px'
            }
        ),


        fac.AntdSegmented(
            options=[
                {
                    'label': f'选项{i}',
                    'value': f'选项{i}',
                    'icon': 'antd-github'
                }
                for i in range(5)
            ],
            defaultValue='选项1'
        ),

        html.Br(),

        fac.AntdButton(
            '打开弹出式卡片',
            id='open-popup-card',
            type='primary'
        ),

        fac.AntdPopupCard(
            'AntdPopupCard内容测试'*20,
            id='popup-card',
            title='AntdPopupCard示例',
            draggable=True,
            style={
                'position': 'absolute',
                'top': 25,
                'right': 25
            },
            closeIconType='two-tone',
        )
    ],
    style={
        'padding': '100px'
    }
)


@app.callback(
    Output('popup-card', 'visible'),
    Input('open-popup-card', 'nClicks')
)
def open_popup_card(nClicks):

    if nClicks:
        return True

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
