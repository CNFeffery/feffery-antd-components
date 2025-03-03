if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from datetime import datetime, timedelta
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = lambda: fac.AntdCenter(
    [
        fac.AntdCountdown(
            id='countdown-demo',
            value=(
                datetime.now() + timedelta(seconds=6)
            ).strftime('%Y-%m-%d %H:%M:%S:%f'),
            format='HH:mm:ss:SSS',
        ),
        fac.Fragment(id='message'),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('message', 'children'),
    Input('countdown-demo', 'finishEvent'),
    prevent_initial_call=True,
)
def show_finish_event(finishEvent):
    return fac.AntdNotification(
        message='倒计时结束：'
        + str(finishEvent['timestamp']),
    )


if __name__ == '__main__':
    app.run(debug=True)
