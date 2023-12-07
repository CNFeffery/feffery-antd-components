import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '字段示例',
                    'dataIndex': '字段示例',
                    'editable': True
                }
            ],
            data=[
                {
                    '字段示例': 0
                }
            ] * 5,
            bordered=True,
            style={
                'width': 300
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
