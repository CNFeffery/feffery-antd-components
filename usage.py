import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': '字段1',
                    'title': '字段1',
                }
            ],
            filterOptions={
                '字段1': {'filterMode': 'keyword'}
            },
            locale='de-de',
        ),
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
