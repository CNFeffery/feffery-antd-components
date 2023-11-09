import dash
from dash import Dash, html, Input, Output, State
import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFlex(
            [
                html.Div(
                    style={
                        'height': 50,
                        'width': 100,
                        'background': f'rgba(0, 0, 0, {1-i*0.1})'
                    }
                )
                for i in range(4)
            ],
            justify='space-around'
        )
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
