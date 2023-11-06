import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdRadioGroup(
            id='theme',
            options=[
                {
                    'label': theme,
                    'value': theme
                }
                for theme in ['default', 'dark', 'compact', 'default+compact', 'dark+compact']
            ],
            defaultValue='default'
        ),
        fac.AntdConfigProvider(
            [
                fac.AntdSpace(
                    [
                        fac.AntdButton(
                            '测试',
                            type='primary'
                        ),
                        fac.AntdInput(
                            placeholder='输入框测试'
                        )
                    ]
                )
            ],
            id='algorithm'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('algorithm', 'algorithm'),
    Input('theme', 'value'),
    prevent_initial_call=True
)
def change_theme(theme: str):

    if '+' in theme:
        return theme.split('+')

    return theme


if __name__ == '__main__':
    app.run(debug=True)
