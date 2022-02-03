import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    html.Div(
        [
            fac.AntdComment(
                authorName='费弗里',
                authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
                publishTime={
                    'value': '2022-01-01 19:29:01',
                    'format': 'YYYY-MM-DD hh:mm:ss'
                },
                commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的网站应用！😀'
            ),

            html.Div(
                style={
                    'height': '1000px'
                }
            )

        ],
        style={
            'padding': '100px 200px'
        }
    ),
    style={
        'margin': '100px',
        'border': '1px solid grey',
        'height': '800px',
        'overflowY': 'auto'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
