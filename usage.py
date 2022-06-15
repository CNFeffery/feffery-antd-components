import dash
import json
import uuid
import numpy as np
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'mini-line示例',
                    'dataIndex': 'mini-line示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-line'
                    }
                },
                {
                    'title': 'mini-bar示例',
                    'dataIndex': 'mini-bar示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-bar',
                        'tooltipCustomContent': '''(x, data) => {
                            console.log({x, data})
                            return `<font style="color:red;" >${data[0].data.y}</ font >`;
                        }'''
                    }
                },
                {
                    # 注意，mini-progress模式接受的输入应当在0到1之间
                    'title': 'mini-progress示例',
                    'dataIndex': 'mini-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-progress'
                    }
                },
                {
                    # 注意，mini-ring-progress模式接受的输入应当在0到1之间
                    'title': 'mini-ring-progress示例',
                    'dataIndex': 'mini-ring-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-ring-progress'
                    }
                },
                {
                    'title': 'mini-area示例',
                    'dataIndex': 'mini-area示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-area'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'mini-line示例': np.random.randint(1, 20, 10),
                    'mini-bar示例': np.random.randint(1, 20, 10),
                    'mini-progress示例': np.random.rand(),
                    'mini-ring-progress示例': np.random.rand(),
                    'mini-area示例': np.random.randint(1, 20, 10)
                }
                for i in range(3)
            ],
            miniChartHeight=60,
            bordered=True
        )
    ],
    style={
        'padding': '100px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
