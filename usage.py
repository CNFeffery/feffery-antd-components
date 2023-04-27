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
                    'dataIndex': '字段1'
                }
            ],
            data=[
                {
                    'key': f'row-{i}',
                    '字段1': '测试',
                    'children': [
                        {
                            'key': f'row-{i}-{j}',
                            '字段1': '测试1',
                            'children': [
                                {
                                    'key': f'row-{i}-{j}-{k}',
                                    '字段1': '测试2'
                                }
                                for k in range(3)
                            ]
                        }
                        for j in range(5)
                    ]
                }
                for i in range(3)
            ],
            bordered=True
        )
    ],
    style={
        'padding': 100
    }
)


if __name__ == '__main__':
    app.run(debug=True)