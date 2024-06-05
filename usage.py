import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdMentions(
                    options=[
                        {
                            'label': f'用户{c}',
                            'value': f'用户{c}',
                        }
                        for c in list('abcdef')
                    ],
                    disabled=True,
                    style={'width': 200},
                ),
                fac.AntdMentions(
                    options=[
                        {
                            'label': f'用户{c}',
                            'value': f'用户{c}',
                        }
                        for c in list('abcdef')
                    ],
                    style={'width': 200},
                ),
            ]
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
