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

        html.Div(
            fac.AntdMenu(
                menuItems=[
                    {
                        'component': 'SubMenu',
                        'props': {
                            'key': f'{sub_menu}',
                            'title': f'子菜单{sub_menu}'
                        },
                        'children': [
                            {
                                'component': 'SubMenu',
                                'props': {
                                    'key': f'{sub_menu}-{item_group}',
                                    'title': f'菜单项分组{sub_menu}-{item_group}'
                                },
                                'children': [
                                    {
                                        'component': 'Item',
                                        'props': {
                                            'key': f'{sub_menu}-{item_group}-{item}',
                                            'title': f'菜单项{sub_menu}-{item_group}-{item}'
                                        }
                                    }
                                    for item in range(1, 3)
                                ]
                            }
                            for item_group in range(1, 3)
                        ]
                    }
                    for sub_menu in range(1, 5)
                ],
                mode='inline'
            ),
            style={
                'width': '250px'
            }
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
