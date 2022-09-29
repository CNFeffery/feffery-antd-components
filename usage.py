import json
import dash
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdWatermark(
            html.Div(
                fac.AntdForm(
                    [
                        fac.AntdFormItem(
                            fac.AntdInput(
                                autoComplete='off'
                            ),
                            label='用户名'
                        ),
                        fac.AntdFormItem(
                            fac.AntdInput(
                                mode='password'
                            ),
                            label='密码'
                        ),
                        fac.AntdFormItem(
                            fac.AntdCheckbox(
                                label='记住密码'
                            ),
                            wrapperCol={
                                'offset': 4
                            }
                        ),
                        fac.AntdFormItem(
                            fac.AntdButton(
                                '登录',
                                type='primary'
                            ),
                            wrapperCol={
                                'offset': 4
                            }
                        )
                    ],
                    labelCol={
                        'span': 4
                    },
                    wrapperCol={
                        'span': 8
                    }
                ),
                style={
                    'boxShadow': '0 6px 16px rgb(107 147 224 / 14%)',
                    'padding': '25px',
                    'position': 'relative',
                    'zIndex': 10
                }
            ),
            content='水印内容测试',
            fontSize=14,
            rotate=22,
            gapX=10,
            gapY=10
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
