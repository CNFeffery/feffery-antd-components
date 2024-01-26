import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSlider(
            min=0,
            max=100,
            defaultValue=33,
            autoFocus=True,
            style={
                'width': 300
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
