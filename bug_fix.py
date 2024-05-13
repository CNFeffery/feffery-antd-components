import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, MATCH

app = dash.Dash(__name__)


def test_wrapper(children, title):
    return [
        fac.AntdTitle(title, level=3),
        *(
            children
            if isinstance(children, list)
            else [children]
        ),
    ]


app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                *test_wrapper(
                    [
                        fac.AntdForm(
                            [
                                fac.AntdFormItem(
                                    fac.AntdInput(
                                        placeholder=f'基础使用-表单项{i}',
                                        name=f'基础使用-表单项{i}',
                                        style={
                                            'width': 200
                                        },
                                    )
                                )
                                for i in range(3)
                            ],
                            enableBatchControl=True,
                            id={
                                'type': 'form',
                                'index': '基础使用',
                            },
                        ),
                        html.Pre(
                            id={
                                'type': 'output',
                                'index': '基础使用',
                            }
                        ),
                    ],
                    '基础使用',
                ),
                *test_wrapper(
                    [
                        fac.AntdButton(
                            '打开抽屉',
                            id='open-drawer1',
                        ),
                        fac.AntdDrawer(
                            fac.AntdForm(
                                [
                                    fac.AntdFormItem(
                                        fac.AntdInput(
                                            placeholder=f'内容关闭销毁场景-表单项{i}',
                                            name=f'内容关闭销毁场景-表单项{i}',
                                            style={
                                                'width': 200
                                            },
                                        )
                                    )
                                    for i in range(3)
                                ],
                                enableBatchControl=True,
                                id={
                                    'type': 'form',
                                    'index': '内容关闭销毁场景',
                                },
                            ),
                            id='drawer1',
                            destroyOnClose=True,
                        ),
                        html.Pre(
                            id={
                                'type': 'output',
                                'index': '内容关闭销毁场景',
                            }
                        ),
                    ],
                    '内容关闭销毁场景',
                ),
                *test_wrapper(
                    [
                        fac.AntdButton(
                            '打开抽屉',
                            id='open-drawer2',
                        ),
                        fac.AntdDrawer(
                            fac.AntdForm(
                                [
                                    fac.AntdFormItem(
                                        fac.AntdInput(
                                            placeholder=f'内容关闭销毁场景+额外字段-表单项{i}',
                                            name=f'内容关闭销毁场景+额外字段-表单项{i}',
                                            style={
                                                'width': 200
                                            },
                                        )
                                    )
                                    for i in range(3)
                                ],
                                enableBatchControl=True,
                                id={
                                    'type': 'form',
                                    'index': '内容关闭销毁场景+额外字段',
                                },
                                values={'额外字段': 'test'},
                            ),
                            id='drawer2',
                            destroyOnClose=True,
                        ),
                        html.Pre(
                            id={
                                'type': 'output',
                                'index': '内容关闭销毁场景+额外字段',
                            }
                        ),
                    ],
                    '内容关闭销毁场景+额外字段',
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style={'padding': 50},
)


@app.callback(
    Output({'type': 'output', 'index': MATCH}, 'children'),
    Input({'type': 'form', 'index': MATCH}, 'values'),
    prevent_initial_call=True,
)
def show_values(values):
    return json.dumps(values, indent=4, ensure_ascii=False)


for i in range(1, 3):
    app.clientside_callback(
        """(nClicks) => true""",
        Output(f'drawer{i}', 'visible'),
        Input(f'open-drawer{i}', 'nClicks'),
        prevent_initial_call=True,
    )

if __name__ == '__main__':
    app.run(debug=True)
