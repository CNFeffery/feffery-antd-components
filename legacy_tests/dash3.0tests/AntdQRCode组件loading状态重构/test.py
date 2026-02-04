if True:
    import sys

    sys.path.append('../../../')
    import time

    import dash
    from dash import html
    from dash.dependencies import Input, Output, State

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdQRCode(
                id='auto-spin-qrcode-demo',
                value='https://fac.feffery.tech/',
                autoSpin=True,
            ),
            fac.AntdButton(
                '重新生成',
                id='auto-spin-qrcode-demo-button',
                type='primary',
            ),
        ],
        direction='vertical',
        align='center',
    )
)


@app.callback(
    Output('auto-spin-qrcode-demo', 'value'),
    Input('auto-spin-qrcode-demo-button', 'nClicks'),
    State('auto-spin-qrcode-demo', 'value'),
    prevent_initial_call=True,
)
def auto_spin_qrcode_demo_input_callback(nClicks, value):
    if nClicks:
        time.sleep(1)
        if value == 'https://fac.feffery.tech/':
            return 'https://ant.design/'
        elif value == 'https://ant.design/':
            return 'https://fac.feffery.tech/'

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
