import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSlider(
                    min=0,
                    max=100,
                    value=66,
                    style={
                        'width': '100%'
                    },
                    styles={
                        'rail': {
                            'background': 'red'
                        },
                        'track': {
                            'background': 'green'
                        }
                    }
                ),
                fac.AntdSlider(
                    min=0,
                    max=100,
                    value=[40, 80],
                    range=True,
                    style={
                        'width': '100%'
                    },
                    styles={
                        'rail': {
                            'background': 'red'
                        },
                        'track': {
                            'background': 'green'
                        }
                    }
                )
            ],
            direction='vertical',
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
