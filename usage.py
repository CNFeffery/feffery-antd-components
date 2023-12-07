import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTitle(
            'number模式测试',
            level=4
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': '字段示例',
                    'dataIndex': '字段示例'
                }
            ],
            data=[
                {
                    '字段示例': value
                }
                for value in [
                    '100', '9.9', '33333.0'
                ]
            ],
            sortOptions={
                'sortDataIndexes': ['字段示例'],
                'forceCompareModes': {
                    '字段示例': 'number'
                }
            },
            size='small',
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
