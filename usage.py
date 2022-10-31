import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': '字段示例1',
                    'dataIndex': '字段示例1'
                },
                {
                    'title': '字段示例2',
                    'dataIndex': '字段示例2'
                },
                {
                    'title': '字段示例3',
                    'dataIndex': '字段示例3'
                }
            ],
            bordered=True,
            data=[
                {
                    '字段示例1': i,
                    '字段示例2': i,
                    '字段示例3': i
                }
                for i in range(5)
            ],
            titlePopoverInfo={
                '字段示例1': {
                    'title': '字段说明',
                    'content': '这是字段示例1的字段说明',
                    'placement': 'top'
                },
                '字段示例3': {
                    'title': '字段说明',
                    'content': '这是字段示例3的字段说明',
                    'placement': 'left'
                }
            }
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
