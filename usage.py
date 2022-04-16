import dash
import numpy as np
from dash import html
from flask import request
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '默认的checkbox模式',
                    'dataIndex': '默认的checkbox模式',
                    'width': '25%'
                },
                {
                    'title': '自定义选项的checkbox模式',
                    'dataIndex': '自定义选项的checkbox模式',
                    'width': '25%'
                },
                {
                    'title': 'keyword模式',
                    'dataIndex': 'keyword模式',
                    'width': '25%'
                },
                {
                    'title': '数值测试',
                    'dataIndex': '数值测试',
                    'width': '25%',
                    'renderOptions': {
                        'renderType': 'custom-format'
                    }
                }
            ],
            data=[
                {
                    '默认的checkbox模式': i,
                    '自定义选项的checkbox模式': i,
                    'keyword模式': i,
                    '数值测试': np.random.rand()
                }
                for i in range(20)
            ],
            bordered=True,
            filterOptions={
                '默认的checkbox模式': {},
                '自定义选项的checkbox模式': {
                    'filterMode': 'checkbox',
                    'filterCustomItems': [1, 2, 3],
                    'filterMultiple': False,
                    'filterSearch': True
                },
                'keyword模式': {
                    'filterMode': 'keyword'
                }
            },
            pagination={
                'pageSize': 20
            },
            customFormatFuncs={
                '数值测试': '(x) => `${(x*100).toFixed(2)}%`'
            },
            conditionalStyleFuncs={
                **{
                    key: '''
                        (record, index) => {
                            if ( index % 2 === 1 ) {
                                return {
                                    style: {
                                        backgroundColor: "rgb(250, 250, 250)"
                                    }
                                }
                            }
                        }
                    '''
                    for key in ['默认的checkbox模式', '自定义选项的checkbox模式', 'keyword模式']
                },
                '数值测试': '''
                    (record, index) => {
                        console.log({ record })
                        if ( record['数值测试'] <= 0.5 ) {
                            return {
                                    style: {
                                        background: `linear-gradient(90deg, rgb(61, 153, 112) 0%, rgb(61, 153, 112) ${record['数值测试']*100}%, white ${record['数值测试']*100}%, white 100%)`
                                }
                            };
                        }
                        return {
                            style: {
                                background: `linear-gradient(90deg, rgb(255, 65, 54) 0%, rgb(255, 65, 54) ${record['数值测试']*100}%, white ${record['数值测试']*100}%, white 100%)`
                            }
                        };
                    }
                '''
            }
        )
    ],
    style={
        'height': '100vh',
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
