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

        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': '20%',
                    'editable': True
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    f'字段{i}': np.random.randint(1, 5)
                    for i in range(1, 6)
                }
                for _ in range(20)
            ],
            sortOptions={
                'sortDataIndexes': ['字段2', '字段4', '字段5'],
                'multiple': True
            },
            filterOptions={
                '字段1': {
                    'filterMode': 'checkbox'
                },
                '字段3': {
                    'filterMode': 'keyword'
                }
            },
            bordered=True,
            pagination={
                'pageSize': 5
            }
        ),
        fac.AntdSpin(
            html.Div(id='table-demo-output'),
            text='回调中'
        ),

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

        html.Div(
            style={
                'height': '300px'
            }
        ),

        fac.AntdPopupCard(
            'AntdPopupCard内容测试'*20,
            id='popup-card',
            title='AntdPopupCard示例',
            draggable=True,
            style={
                # 'position': 'fixed',
                # 'top': 25,
                # 'right': 25
            },
            closeIconType='two-tone',
            visible=False
        )
    ]
)


@app.callback(
    Output('popup-card', 'visible'),
    Input('open-popup-card', 'nClicks')
)
def open_popup_card(nClicks):

    if nClicks:
        return True

    return dash.no_update


@app.callback(
    Output('table-demo-output', 'children'),
    [Input('table-demo', 'currentData'),
     Input('table-demo', 'recentlyChangedRow'),
     Input('table-demo', 'sorter'),
     Input('table-demo', 'filter'),
     Input('table-demo', 'pagination')],
    prevent_initial_call=True
)
def table_callback_demo(currentData,
                        recentlyChangedRow,
                        sorter,
                        filter,
                        pagination):

    ctx = dash.callback_context

    return [
        fac.AntdTitle('本次回调由{}所触发'.format(
            ctx.triggered[0]['prop_id'].split('.')[-1]), level=3),
        fac.AntdDivider(),

        fac.AntdTitle('currentData：', level=5),
        html.Pre(str(currentData)),

        fac.AntdTitle('recentlyChangedRow：', level=5),
        html.Pre(str(recentlyChangedRow)),

        fac.AntdTitle('sorter：', level=5),
        html.Pre(str(sorter)),

        fac.AntdTitle('filter：', level=5),
        html.Pre(str(filter)),

        fac.AntdTitle('pagination：', level=5),
        html.Pre(str(pagination))
    ]


if __name__ == '__main__':
    app.run_server(debug=True)
