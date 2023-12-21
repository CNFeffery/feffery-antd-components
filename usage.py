import dash
from dash import html
import feffery_antd_components as fac

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
                    '可拖拽面板'
                )
            ],
            style={
                'background': '#f1f1f1',
                'border': '2px solid #ddd',
                'height': 300,
                'display': 'flex',
                'overflow': 'hidden',
                'maxWidth': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
