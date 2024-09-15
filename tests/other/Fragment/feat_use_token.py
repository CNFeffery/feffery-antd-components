if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    fac.Fragment(
        fac.AntdCenter(
            html.Pre(id='show-token'),
            style=style(height='100vh', overflowY='auto'),
        ),
        id='listen-token',
    ),
    algorithm='dark',
    token={'fontSize': 18},
)

app.clientside_callback(
    '(token) => console.log(token)',
    Output('show-token', 'children'),
    Input('listen-token', 'token'),
)

if __name__ == '__main__':
    app.run(debug=True)
