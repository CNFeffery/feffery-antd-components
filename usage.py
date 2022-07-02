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

        fac.AntdSpace(
            [
                fac.AntdButton(
                    '触发2秒骨骼屏动画', id='skeleton-custom-demo-input',
                    type='primary'
                ),

                fac.AntdCustomSkeleton(
                    fac.AntdText(
                        'nClicks: 0', id='skeleton-custom-demo-output', strong=True),
                    skeletonContent=fac.AntdSpace(
                        [
                            fac.AntdRow(
                                [
                                    fac.AntdCol(
                                        fac.AntdSkeletonAvatar(
                                            active=True,
                                            size='large'
                                        ),
                                        flex='none'
                                    ),

                                    *[
                                        fac.AntdCol(
                                            fac.AntdSkeletonButton(
                                                block=True,
                                                active=True,
                                                size='small'
                                            ),
                                            flex='auto'
                                        )
                                    ] * 10
                                ],
                                align='middle',
                                gutter=10
                            ),
                            fac.AntdSkeletonButton(
                                block=True,
                                active=True,
                                size='small'
                            ),
                            fac.AntdSkeletonButton(
                                block=True,
                                active=True,
                                size='small'
                            ),
                            fac.AntdSkeletonButton(
                                block=True,
                                active=True,
                                size='small'
                            )
                        ],
                        direction='vertical',
                        style={
                            'width': '100%'
                        }
                    )
                ),
            ],
            direction='vertical',
            style={
                'width': '100%',
                'paddingBottom': '50px'
            }
        ),

        fac.AntdPopconfirm(
            fac.AntdButton(
                '点击触发',
                type='primary'
            ),
            title=html.Span(
                [
                    fac.AntdText('气泡确认', strong=True),
                    fac.AntdText('测试')
                ]
            )
        ),

        fac.AntdEmpty(
            fac.AntdButton('children测试', type='primary'),
            description=fac.AntdButton('description测试', type='primary'),
        ),

        fac.AntdAlert(
            type="success",
            showIcon=True,
            message="This is a success alert",
            description="This is a description",
            closable=True,
            action=fac.AntdSpace(
                [
                    fac.AntdButton('接受', type="primary"),
                    fac.AntdButton('拒绝', type="primary", danger=True),
                ],
                direction="vertical",
            )
        ),

        fac.AntdTabs(
            [
                fac.AntdTabPane(
                    html.Div(
                        '标签页1测试',
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页1',
                    key='标签页1'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页2测试', type='primary'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页2',
                    key='标签页2'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页3测试', type='dashed'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页3',
                    key='标签页3'
                )
            ],
            tabBarGutter=50,
            tabPaneAnimated=True,
            tabBarLeftExtraContent=html.Div(
                fac.AntdButton('测试', type='primary'),
                style={
                    'padding': '0 20px',
                    'display': 'flex',
                    'justifyContent': 'center'
                }
            ),
            tabBarRightExtraContent=html.Div(
                fac.AntdButton('测试', type='primary'),
                style={
                    'padding': '0 20px',
                    'display': 'flex',
                    'justifyContent': 'center'
                }
            )
        ),

        fac.AntdDatePicker(allowClear=False),

        fac.AntdDateRangePicker(allowClear=False)
    ],
    style={
        'padding': '100px'
    }
)


@app.callback(
    Output('skeleton-custom-demo-output', 'children'),
    Input('skeleton-custom-demo-input', 'nClicks'),
    prevent_initial_call=True
)
def skeleton_custom_callback_demo(nClicks):
    import time
    time.sleep(20)

    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run_server(debug=True)
