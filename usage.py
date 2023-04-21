from datetime import datetime

import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'title': 'select模式测试',
                    'dataIndex': 'select模式测试',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'align': 'left'
                }
            ],
            data=[
                {
                    'select模式测试': {
                        'options': [
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(1, 6)
                        ],
                        'value': '选项3',
                        # 'mode': 'multiple',
                        'placeholder': '请选择',
                        # 'bordered': False,
                        'maxTagCount': 'responsive'
                    }
                }
            ],
            bordered=True,
            style={
                'width': 250
            }
        ),
        html.Pre(
            id='output'
        )
    ]
)


@app.callback(
    Output('output', 'children'),
    [Input('table-demo', 'data'),
     Input('table-demo', 'recentlySelectRow'),
     Input('table-demo', 'recentlySelectDataIndex'),
     Input('table-demo', 'recentlySelectValue')]
)
def demo(data,
         recentlySelectRow,
         recentlySelectDataIndex,
         recentlySelectValue):

    return json.dumps(
        dict(
            data=data,
            recentlySelectRow=recentlySelectRow,
            recentlySelectDataIndex=recentlySelectDataIndex,
            recentlySelectValue=recentlySelectValue
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
