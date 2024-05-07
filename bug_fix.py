import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': 'link示例1',
                    'title': 'link示例1',
                    'renderOptions': {'renderType': 'link'},
                },
                {
                    'dataIndex': 'link示例2',
                    'title': 'link示例2',
                    'renderOptions': {
                        'renderType': 'link',
                        'renderLinkText': '示例链接',
                    },
                },
            ],
            data=[
                {
                    'link示例1': {
                        'content': 'fac仓库',
                        'href': 'https://github.com/CNFeffery/feffery-antd-components',
                    },
                    'link示例2': {
                        'href': 'https://github.com/CNFeffery/feffery-antd-components'
                    },
                },
                {'link示例1': None, 'link示例2': None},
                {'link示例1': {}, 'link示例2': {}},
            ],
            bordered=True,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
