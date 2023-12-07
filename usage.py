import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTitle(
            'custom模式测试',
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
                    '省级', '市级', '国家级', '村级'
                ]
            ],
            sortOptions={
                'sortDataIndexes': ['字段示例'],
                'forceCompareModes': {
                    '字段示例': 'custom'
                },
                'customOrders': {
                    '字段示例': ['国家级', '省级', '市级', '村级']
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
