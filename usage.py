import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                html.Span(
                    fac.AntdPopover(
                        [
                            fac.AntdButton(
                                '按钮',
                                type='primary'
                            )
                        ],
                        title='测试'
                    ),
                    style={
                        'position': 'absolute',
                        'bottom': 0,
                        'right': 0
                    }
                )
            ],
            style={
                'position': 'relative',
                'width': 400,
                'height': 300,
                'background': 'lightgrey'
            }
        )
    ],
    style={
        'padding': 100
    }
)

if __name__ == '__main__':
    app.run(debug=True)
