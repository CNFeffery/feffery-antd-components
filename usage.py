import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdOTP(),
                fac.AntdOTP(disabled=True),
                fac.AntdOTP(length=8),
                fac.AntdOTP(variant='filled'),
                '回调示例：',
                fac.AntdOTP(
                    id='otp-demo'
                ),
                html.Pre(id='otp-demo-output')
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('otp-demo-output', 'children'),
    Input('otp-demo', 'value')
)
def demo_output(value):

    return json.dumps(
        dict(value=value),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
