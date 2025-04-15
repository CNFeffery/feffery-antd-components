if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdConfigProvider(
        [
            fac.AntdButton(
                'new message',
                id='new-message',
                type='primary',
            ),
            fac.Fragment(id='message-target'),
        ],
        algorithm='dark',
    ),
    style=style(padding=50),
)


@app.callback(
    Output('message-target', 'children'),
    Input('new-message', 'nClicks'),
    prevent_initial_call=True,
)
def new_message(nClicks):
    return fac.AntdMessage(
        content=f'nClicks: {nClicks}',
        type='info',
        top=256,
        maxCount=3,
    )


if __name__ == '__main__':
    app.run(debug=True)
