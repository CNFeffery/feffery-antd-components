import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-rerender-button-demo',
            columns=[
                {
                    'title': 'button示例1',
                    'dataIndex': 'button示例1',
                    'renderOptions': {
                        'renderType': 'button',
                        'renderButtonSplit': True
                    }
                },
                {
                    'title': 'button示例2',
                    'dataIndex': 'button示例2',
                    'renderOptions': {
                        'renderType': 'button',
                        'renderButtonSplit': True
                    }
                },
                {
                    'title': 'button示例3',
                    'dataIndex': 'button示例3',
                    'renderOptions': {
                        'renderType': 'button',
                        'renderButtonPopConfirmProps': {
                            'title': '确认执行？',
                            'okText': '确认',
                            'cancelText': '取消'
                        },
                        'renderButtonSplit': True
                    }
                }
            ],
            data=[
                {
                    'button示例1': {
                        'content': f'按钮1-{i}',
                        'type': 'link',
                        'custom': 'balabalabalabala'
                    },
                    'button示例2': [
                        {
                            'content': f'按钮2-{i}-{j}',
                            'type': 'primary',
                            'custom': 'balabalabalabala'
                        }
                        for j in range(1, 3)
                    ],
                    'button示例3': [
                        {
                            'content': f'按钮3-{i}-{j}',
                            'type': 'dashed',
                            'danger': True,
                            'custom': 'balabalabalabala'
                        }
                        for j in range(1, 3)
                    ]
                }
                for i in range(1, 4)
            ],
            bordered=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
