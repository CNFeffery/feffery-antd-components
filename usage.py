import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-rerender-select-demo',
            columns=[
                {
                    'title': 'select示例1',
                    'dataIndex': 'select示例1',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'width': 'calc(100% / 3)'
                },
                {
                    'title': 'select示例2',
                    'dataIndex': 'select示例2',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'width': 'calc(100% / 3)'
                },
                {
                    'title': 'select示例3',
                    'dataIndex': 'select示例3',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'width': 'calc(100% / 3)'
                }
            ],
            data=[
                {
                    'select示例1': {
                        'options': [
                            {
                                'label': f'选项{j}',
                                'value': f'选项{j}'
                            }
                            for j in range(5)
                        ],
                        'allowClear': True,
                        'placeholder': '请选择'
                    },
                    'select示例2': {
                        'options': [
                            {
                                'label': f'选项{j}',
                                'value': f'选项{j}'
                            }
                            for j in range(5)
                        ],
                        'mode': 'multiple',
                        'allowClear': True,
                        'placeholder': '请选择'
                    },
                    'select示例3': {
                        'options': [
                            {
                                'label': f'选项{j}',
                                'value': f'选项{j}'
                            }
                            for j in range(5)
                        ],
                        'mode': 'tags',
                        'allowClear': True,
                        'placeholder': '请选择'
                    }
                }
                for i in range(1, 4)
            ],
            bordered=True,
            style={
                'width': 600
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
