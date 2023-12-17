import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                html.Div(
                    '内容',
                    style={
                        'flex': 1,
                        'padding': 12
                    }
                ),
                fac.AntdDraggablePanel(
                    '悬浮可拖拽面板',
                    mode='float',
                    defaultPosition={
                        'x': 400,
                        'y': 5
                    },
                    style={
                        'background': '#fff',
                        'padding': 12
                    }
                )
            ],
            style={
                'background': '#f1f1f1',
                'border': '2px solid #ddd',
                'height': 800,
                'display': 'flex',
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
