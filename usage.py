import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.Fragment(
            [
                fac.AntdInput(
                    autoFocus=True,
                    style={
                        'width': 200
                    }
                ),
                fac.AntdButton(
                    '按钮',
                    type='primary'
                )
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
