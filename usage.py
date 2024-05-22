import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    'fac文档首页',
                    icon=fac.AntdIcon(icon='antd-search'),
                ),
                fac.AntdButton(
                    'fac文档首页',
                    icon=fac.AntdIcon(icon='antd-search'),
                    iconPosition='end',
                ),
            ]
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
