import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '字段1',
                    'dataIndex': '字段1',
                }
            ],
            data=[{'字段1': 'xxx'}] * 10,
            bordered=True,
            rowHoverable=False
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
