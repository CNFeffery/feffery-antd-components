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
            id='table-demo',
            columns=[
                {
                    'dataIndex': 'checkbox1',
                    'title': 'checkbox1',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    }
                },
                {
                    'dataIndex': 'checkbox2',
                    'title': 'checkbox2',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    }
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
                    }
                }
                for i in range(5)
            ],
            bordered=True,
            style={
                'width': '200px'
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
     Input('table-demo', 'recentlyCheckedStatus')]
)
def demo(recentlyCheckedRow, recentlyCheckedLabel, checkedDataIndex, recentlyCheckedStatus):

    return json.dumps(
        dict(
            recentlyCheckedRow=recentlyCheckedRow,
            recentlyCheckedLabel=recentlyCheckedLabel,
            checkedDataIndex=checkedDataIndex,
            recentlyCheckedStatus=recentlyCheckedStatus
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
