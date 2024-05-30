import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    **{
                        f'字段{i}': fac.AntdText('测试')
                        for i in range(1, 6)
                    },
                    '额外数据': {'a': [_] * (_ + 1)},
                }
                for _ in range(10)
            ],
            rowSelectionType='radio',
            bordered=True,
            tableLayout='fixed',
        ),
        html.Pre(id='table-extra-data-test'),
    ],
    style={'padding': 50},
)


@app.callback(
    Output('table-extra-data-test', 'children'),
    Input('table', 'selectedRows'),
    prevent_initial_call=True,
)
def demo(selectedRows):
    return json.dumps(
        selectedRows, ensure_ascii=False, indent=4
    )


if __name__ == '__main__':
    app.run(debug=True)
