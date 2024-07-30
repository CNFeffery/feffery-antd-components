import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdFormItem(
                    fac.AntdInput(style={'width': 200}),
                    label='horizontal',
                    layout='horizontal',
                ),
                fac.AntdFormItem(
                    fac.AntdInput(style={'width': 200}),
                    label='vertical',
                    layout='vertical',
                ),
            ],
            direction='vertical',
        ),
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
