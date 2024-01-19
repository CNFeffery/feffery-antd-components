import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            data=[
                {
                    '年份': 2020 + i
                }
                for i in range(3)
            ],
            columns=[
                {
                    'dataIndex': '年份',
                    'title': '年份'
                }
            ],
            filterOptions={
                '年份': {}
            },
            style={
                'width': 300
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
