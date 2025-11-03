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
            'Show New Notification',
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
        message='Stack 2',
        description='This is a stacked notification example. it stacks when more than 2 notifications are present.',
        stack={'threshold': 2},
    )


if __name__ == '__main__':
    app.run(debug=True)
