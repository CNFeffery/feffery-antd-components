import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                f'子项{i}'
                for i in range(1, 4)
            ],
            styles={
                'item': {
                    'background': 'red',
                    'padding': 5
                }
            }
        ),
        fac.AntdSpace(
            [
                f'子项{i}'
                for i in range(1, 4)
            ],
            direction='vertical',
            styles={
                'item': {
                    'background': 'red',
                    'padding': 5
                }
            }
        )
    ],
    style={
        'padding': '50px 100px',
        'height': 10000
    }
)

if __name__ == '__main__':
    app.run(debug=True)
