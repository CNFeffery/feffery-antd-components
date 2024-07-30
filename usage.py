import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdModal(
            '测试' * 100,
            title='AntdModal示例',
            visible=True,
            loading=True,
            mask=False,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
