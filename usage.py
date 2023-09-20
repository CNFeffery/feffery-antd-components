import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [
        fac.AntdTable(
            id='demo-table',
            columns=[
                {
                    'title': '字段测试',
                    'dataIndex': '字段测试'
                },
                {
                    'title': '自定义元素示例',
                    'dataIndex': '自定义元素示例'
                }
            ],
            data=[
                {
                    '自定义元素示例': html.Div(
                        fac.AntdText(
                            '示例内容'*100,
                            style={
                                'textIndent': '2rem'
                            }
                        ),
                        style={
                            'maxHeight': 50,
                            'overflowY': 'auto',
                            'textAlign': 'left'
                        }
                    )
                }
            ] * 5,
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
    Input('demo-table', 'selectedRows')
)
def demo(selectedRows):

    return json.dumps(
        dict(
            selectedRows=selectedRows
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
