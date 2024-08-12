import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpin(
            fac.AntdAlert(
                message='测试',
                description='测试',
                type='info',
                showIcon=True,
            ),
            manual=True,
            spinning=True,
            percent='auto',
        )
    ],
    style=style(padding=100),
)


if __name__ == '__main__':
    app.run(debug=True, port=8050)
