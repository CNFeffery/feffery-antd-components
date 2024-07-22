import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPopconfirm(
            fac.AntdButton('测试'),
            title='测试',
            icon='😁',
            description='测试描述内容' * 2,
            open=True,
            permanent=True,
        )
    ],
    style={'padding': 200},
)

if __name__ == '__main__':
    app.run(debug=True)
