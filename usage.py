import json
import dash
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': 100
                }
                for i in range(5)
            ],
            data=[
                {
                    f'字段{j}': i
                    for j in range(5)
                }
                for i in range(10)
            ],
            bordered=True,
            rowSelectionType='radio'
        ),

        fac.AntdSelect(
            placeholder='请选择国家：',
            options=[
                {'label': '中国', 'value': 'China'},
                {'label': '美国', 'value': 'Usa'},
                {'label': '俄罗斯', 'value': 'Russia'},
                {'label': '德国', 'value': 'Germany', 'disabled': True},
                {'label': '加拿大', 'value': 'Canada'}
            ],
            optionFilterProp='label',
            style={
                # 使用css样式固定宽度
                'width': '200px'
            }
        ),
        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'dataIndex': 'checkbox1',
                    'title': 'checkbox1',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'checkbox2',
                    'title': 'checkbox2',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'switch1',
                    'title': 'switch1',
                    'renderOptions': {
                        'renderType': 'switch'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'switch2',
                    'title': 'switch2',
                    'renderOptions': {
                        'renderType': 'switch'
                    },
                    'width': '25%'
                }
            ],
            data=[
                {
                    'checkbox1': {
                        'checked': True
                    },
                    'checkbox2': {
                        'checked': False,
                        'label': f'勾选框{i}'
                    },
                    'switch1': {
                        'checked': True
                    },
                    'switch2': {
                        'checked': False,
                        'checkedChildren': '开',
                        'unCheckedChildren': '关'
                    }
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '400px'
            }
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('table-demo', 'recentlyCheckedRow'),
     Input('table-demo', 'recentlyCheckedLabel'),
     Input('table-demo', 'checkedDataIndex'),
     Input('table-demo', 'recentlyCheckedStatus'),
     Input('table-demo', 'recentlySwtichRow'),
     Input('table-demo', 'swtichDataIndex'),
     Input('table-demo', 'recentlySwtichStatus')]
)
def demo(recentlyCheckedRow,
         recentlyCheckedLabel,
         checkedDataIndex,
         recentlyCheckedStatus,
         recentlySwtichRow,
         swtichDataIndex,
         recentlySwtichStatus):

    return json.dumps(
        dict(
            recentlyCheckedRow=recentlyCheckedRow,
            recentlyCheckedLabel=recentlyCheckedLabel,
            checkedDataIndex=checkedDataIndex,
            recentlyCheckedStatus=recentlyCheckedStatus,
            recentlySwtichRow=recentlySwtichRow,
            swtichDataIndex=swtichDataIndex,
            recentlySwtichStatus=recentlySwtichStatus,
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
