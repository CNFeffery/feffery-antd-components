import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    'antd-reload',
                    type='dashed',
                    icon=fac.AntdIcon(
                        icon='antd-reload'
                    )
                ),
                fac.AntdButton(
                    'md-power-settings-new',
                    icon=fac.AntdIcon(
                        icon='md-power-settings-new'
                    )
                ),
                fac.AntdButton(
                    'md-layers',
                    type='primary',
                    icon=fac.AntdIcon(
                        icon='md-layers'
                    )
                ),
                fac.AntdButton(
                    'fc-repair',
                    type='dashed',
                    icon=fac.AntdIcon(
                        icon='fc-repair'
                    )
                )
            ],
            size='small'
        ),

        fac.AntdDatePicker(
            id='input',
            picker='quarter',
            format='YYYY-第Q季度'
        ),

        fac.AntdRate(count=10),
        fac.AntdSwitch(),

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
                    'content': '这是字段示例1的字段说明'
                },
                '字段示例3': {
                    'title': '字段说明',
                    'content': '这是字段示例3的字段说明'
                }
            }
        ),

        fac.AntdSpin(
            [
                fac.AntdTable(
                    id='table-mouse-event-demo',
                    enableHoverListen=True,
                    bordered=True,
                    columns=[
                        {
                            'title': '字段1',
                            'dataIndex': '字段1'
                        },
                        {
                            'title': '字段2',
                            'dataIndex': '字段2'
                        },
                        {
                            'title': '字段3',
                            'dataIndex': '字段3'
                        }
                    ],
                    data=[
                        {
                            'key': str(i),
                            '字段1': i,
                            '字段2': i,
                            '字段3': i
                        }
                        for i in range(5)
                    ]
                ),

                fac.AntdSpace(
                    id='table-mouse-event-demo-output',
                    direction='vertical',
                    style={
                        'width': '100%'
                    }
                )
            ],
            text='回调中'
        ),

        fac.AntdSpin(
            [
                fac.AntdTable(
                    id='table-button-click-demo',
                    columns=[
                        {
                            'title': '单按钮示例',
                            'dataIndex': '单按钮示例',
                            'renderOptions': {'renderType': 'button'},
                            'width': '25%'
                        },
                        {
                            'title': '多按钮示例',
                            'dataIndex': '多按钮示例',
                            'renderOptions': {'renderType': 'button'},
                            'width': '50%'
                        },
                        {
                            'title': '气泡确认按钮示例',
                            'dataIndex': '气泡确认按钮示例',
                            'renderOptions': {
                                'renderType': 'button',
                                'renderButtonPopConfirmProps': {
                                    'title': '确认操作',
                                    'okText': '继续',
                                    'cancelText': '再想想'
                                }
                            },
                            'width': '25%'
                        }
                    ],
                    data=[
                        {
                            'key': i,
                            '单按钮示例': {
                                'content': '按钮示例',
                                'type': 'primary'
                            },
                            '多按钮示例': [
                                {
                                    'content': '按钮示例1',
                                    'type': 'primary'
                                },
                                {
                                    'content': '按钮示例2',
                                    'danger': True
                                }
                            ],
                            '气泡确认按钮示例': {
                                'content': '气泡确认按钮示例',
                                'type': 'primary'
                            }
                        }
                        for i in range(5)
                    ],
                    bordered=True
                ),

                fac.AntdSpace(
                    [
                        html.Div(
                            [
                                fac.AntdText('nClicksButton：', strong=True),
                                fac.AntdText(
                                    id='table-button-click-demo-recentlyButtonClickedRow-output')
                            ]
                        ),
                        html.Div(
                            [
                                fac.AntdText(
                                    'recentlyButtonClickedRow：', strong=True),
                                html.Pre(
                                    id='table-button-click-demo-nClicksButton-output',
                                    style={
                                        'backgroundColor': 'rgb(250, 250, 250)'
                                    }
                                )
                            ]
                        ),
                        html.Div(
                            [
                                fac.AntdText('clickedContent：', strong=True),
                                fac.AntdText(
                                    id='table-button-click-demo-clickedContent-output')
                            ]
                        )
                    ],
                    direction='vertical',
                    style={
                        'width': '100%'
                    }
                )
            ],
            text='回调中'
        )
    ],
    style={
        'padding': '100px'
    }
)


@app.callback(
    [Output('table-button-click-demo-recentlyButtonClickedRow-output', 'children'),
     Output('table-button-click-demo-nClicksButton-output', 'children'),
     Output('table-button-click-demo-clickedContent-output', 'children')],
    Input('table-button-click-demo', 'nClicksButton'),
    [State('table-button-click-demo', 'recentlyButtonClickedRow'),
     State('table-button-click-demo', 'clickedContent')],
    prevent_initial_call=True
)
def table_button_click_demo_callback(nClicksButton, recentlyButtonClickedRow, clickedContent):
    return str(nClicksButton), json.dumps(recentlyButtonClickedRow, ensure_ascii=False, indent=4), str(clickedContent)


@app.callback(
    Output('table-mouse-event-demo-output', 'children'),
    [Input('table-mouse-event-demo', 'recentlyMouseEnterColumn'),
     Input('table-mouse-event-demo', 'recentlyMouseEnterRow')],
    prevent_initial_call=True
)
def table_mouse_event_demo_callback(recentlyMouseEnterColumn,
                                    recentlyMouseEnterRow):
    return [
        html.Div(
            [
                fac.AntdText('recentlyMouseEnterColumn：', strong=True),
                fac.AntdText(recentlyMouseEnterColumn)
            ]
        ),
        html.Div(
            [
                fac.AntdText('recentlyMouseEnterRow：', strong=True),
                fac.AntdText(recentlyMouseEnterRow)
            ]
        )
    ]


if __name__ == '__main__':
    app.run(debug=True)
