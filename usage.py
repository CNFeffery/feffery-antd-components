import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [
        fac.AntdTable(
            id='demo-input',
            columns=[
                {
                    'title': '字段测试',
                    'dataIndex': '字段测试',
                    'width': '50%',
                    'editable': True
                },
                {
                    'title': '自定义元素示例',
                    'dataIndex': '自定义元素示例',
                    'width': '50%'
                }
            ],
            data=[
                {
                    '字段测试': '巴拉巴拉',
                    '自定义元素示例': html.Div(
                        fac.AntdText(
                            '示例内容'*100,
                            style={
                                'textIndent': '2rem'
                            }
                        ),
                        style={
                            'maxHeight': 100,
                            'overflowY': 'auto',
                            'textAlign': 'left'
                        }
                    )
                }
            ] * 3,
            bordered=True,
            rowSelectionType='checkbox',
            style={
                'width': '100%'
            }
        ),
        html.Pre(id='demo-output')
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-output', 'children'),
    [Input('demo-input', 'selectedRows'),
     Input('demo-input', 'recentlyChangedRow')]
)
def demo_output(selectedRows,
                recentlyChangedRow):

    return json.dumps(
        dict(
            selectedRows=selectedRows,
            recentlyChangedRow=recentlyChangedRow
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
