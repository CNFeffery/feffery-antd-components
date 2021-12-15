import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State


app = dash.Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdTitle('1 0.0.1rc8新增组件一览', level=5),
        html.Div(
            [

                fac.AntdBackTop(
                    duration=1
                ),

                fac.AntdAffix(
                    fac.AntdButton('固钉', shape='round'),
                    offsetTop=200,
                    style={
                        'float': 'right'
                    }
                ),

                html.Div(
                    style={
                        'height': '10000px'
                    }
                )

            ]
        )
    ],
    style={
        'padding': '100px 200px',
        'height': '100vh'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
