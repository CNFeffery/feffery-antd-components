import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdSwitch(
                id='switch-locale',
                checkedChildren='zh-cn',
                unCheckedChildren='en-us',
                checked=True
            ),
            fac.AntdUpload(
                id='demo-upload',
                buttonIcon=fac.AntdIcon(
                    icon='antd-cloud-upload'
                )
            )
        ],
        direction='vertical',
        style={
            'width': '100%'
        }
    ),
    style={
        'padding': '50px 100px'
    }
)

app.clientside_callback(
    '(checked) => checked ? "zh-cn" : "en-us"',
    Output('demo-upload', 'locale'),
    Input('switch-locale', 'checked')
)

if __name__ == '__main__':
    app.run(debug=True)
