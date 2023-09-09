import dash
import json
from dash import html, dcc
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-editable-demo',
            columns=[
                {
                    'title': 'int型示例',
                    'dataIndex': 'int型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': 'float型示例',
                    'dataIndex': 'float型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': 'str型示例',
                    'dataIndex': 'str型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': '日期时间示例',
                    'dataIndex': '日期时间示例',
                    'editable': True,
                    'width': '25%'
                },
            ],
            data=[
                {
                    'key': f'row-{i}',
                    'int型示例': 123,
                    'float型示例': 1.23,
                    'str型示例': '示例字符',
                    '日期时间示例': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                }
                for i in range(1, 4)
            ],
            bordered=True
        ),

        html.Pre(
            id='table-editable-demo-output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('table-editable-demo-output', 'children'),
    Input('table-editable-demo', 'recentlyChangedRow'),
    prevent_initial_call=True
)
def table_editable_demo(recentlyChangedRow):

    return json.dumps(
        recentlyChangedRow,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
