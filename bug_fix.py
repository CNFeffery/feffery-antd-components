import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div(
    [
        fac.AntdCenter(
            fac.AntdSpace(
                [
                    fac.AntdButton(
                        '生成表单', id='form_create'
                    ),
                    fac.AntdDrawer(
                        html.Div(id='demo_drawer_show'),
                        id='demo_drawer',
                        title='DEMO',
                        maskClosable=False,
                        width='50vw',
                        destroyOnClose=True,
                    ),
                    html.Pre(id='show-form-values'),
                ],
                direction='vertical',
                align='center',
            )
        )
    ],
    style={'padding': 50},
)


def get_AntdForm_layout(
    material_selection_list, search_info
):
    """
    根据数据还原表单
    """
    out_div = html.Div(
        [
            fac.AntdDivider(
                '请填写属性', innerTextOrientation='left'
            ),
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        fac.AntdInput(
                            name=f'{item[0]}',
                            style={'width': 200},
                            readOnly=False,
                        ),
                        required=False,
                        label=f'{item[0]}',
                    )
                    for item in material_selection_list
                ],
                enableBatchControl=True,  # 开启表单批量控制相关功能
                values=search_info,
                labelCol={'span': 8},
                wrapperCol={'span': 16},
                style={
                    'width': 400,
                },
                id='material_selection_input_form',
            ),
        ]
    )
    return out_div


@app.callback(
    Output('demo_drawer', 'visible'),
    Output('demo_drawer_show', 'children'),
    Input('form_create', 'nClicks'),
    prevent_initial_call=True,
)
def clicks_demo(nClicks):
    if nClicks:
        material_selection_list = (
            (
                '最大承受功率',
                '自定义',
                '',
                '57e3d947-18d6-4f0a-9e87-a05f4d5a0d06',
                None,
            ),
            (
                '工作温度',
                '自定义',
                '',
                '14e7e95c-b46f-4310-8a69-7fe4f03bfc06',
                None,
            ),
            (
                'TX_带内损耗',
                '自定义',
                '',
                'b3a79189-7e0e-47b3-906b-e1a7bc8d7400',
                None,
            ),
            (
                'RX_带内损耗',
                '自定义',
                '',
                'c8ce6583-9f38-4a3b-91c2-412a9f5504ac',
                None,
            ),
            (
                'TRX隔离度',
                '自定义',
                '',
                '5620c8d5-4b6c-40f3-9d57-a4b43a5c0326',
                None,
            ),
        )

        search_info = {
            'TRX隔离度': -0.0188,
            '工作温度': '11',
            'RX_带内损耗': -0.0006,
            'TX_带内损耗': 4.1123,
            '最大承受功率': '122',
            'test': '123',
        }

        out = get_AntdForm_layout(
            material_selection_list, search_info
        )
        return True, out
    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
