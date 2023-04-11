import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': '字段1-1',
                    'title': '字段1-1',
                    'group': '字段1',
                    'width': 'calc(100% / 3)'
                },
                {
                    'dataIndex': '字段1-2',
                    'title': '字段1-2',
                    'group': '字段1',
                    'width': 'calc(100% / 3)',
                },
                {
                    'dataIndex': '字段2',
                    'title': '字段2',
                    'width': 'calc(100% / 3)',
                }
            ],
            data=[
                {
                    '字段1-1': 1,
                    '字段1-2': 1,
                    '字段2': 999
                }
            ] * 10,
            bordered=True
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
