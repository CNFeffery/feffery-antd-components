import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            fac.AntdSpin(
                fac.AntdAlert(
                    type='info',
                    showIcon=True,
                    message='测试信息',
                ),
                manual=True,
                percent='auto',
                spinning=True,
                style={
                    'display': 'inline-block',
                },
            ),
            style={'width': 400},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
