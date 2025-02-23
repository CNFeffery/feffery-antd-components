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
    [
        fac.AntdButton(
            '新的通知',
            id='new-notification',
            type='primary',
        ),
        fac.Fragment(id='notification-target'),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('notification-target', 'children'),
    Input('new-notification', 'nClicks'),
    prevent_initial_call=True,
)
def new_notification(nClicks):
    return fac.AntdNotification(
        message='通知标题',
        description='通知描述',
        stack=True,
    )


if __name__ == '__main__':
    app.run(debug=True)
