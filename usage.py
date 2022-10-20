
import dash
import time
from dash import html
from datetime import datetime
import feffery_antd_components as fac
import feffery_utils_components as fuc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    fac.AntdSpace(
        [
            fuc.FefferyHexColorPicker(
                id='color-picker'
            ),

            html.Div(
                fac.AntdMenu(
                    menuItems=[
                        {
                            'component': 'SubMenu',
                            'props': {
                                'key': f'{sub_menu}',
                                'title': f'子菜单{sub_menu}'
                            },
                            'children': [
                                {
                                    'component': 'ItemGroup',
                                    'props': {
                                        'key': f'{sub_menu}-{item_group}',
                                        'title': f'菜单项分组{sub_menu}-{item_group}'
                                    },
                                    'children': [
                                        {
                                            'component': 'Item',
                                            'props': {
                                                'key': f'{sub_menu}-{item_group}-{item}',
                                                'title': f'菜单项{sub_menu}-{item_group}-{item}'
                                            }
                                        }
                                        for item in range(1, 3)
                                    ]
                                }
                                for item_group in range(1, 3)
                            ]
                        }
                        for sub_menu in range(1, 5)
                    ],
                    mode='inline',
                    defaultOpenKeys=['1'],
                    defaultSelectedKey='1-2-2'
                ),
                style={
                    'width': '250px'
                }
            ),


            html.Div(
                [
                    fac.AntdButton('default'),
                    fac.AntdButton('primary', type='primary'),
                    fac.AntdButton('dashed', type='dashed'),
                    fac.AntdButton('link', type='link'),
                    fac.AntdButton('text', type='text')
                ]
            ),


            fac.AntdSteps(
                steps=[
                    {
                        'title': f'步骤{i + 1}的title',
                        'subTitle': f'步骤{i + 1}的subTitle',
                        'description': f'步骤{i + 1}的description',
                    }
                    for i in range(5)
                ],
                direction='vertical'
            )
        ],
        style={
            'padding': '50px',
            'width': '100%'
        }
    ),
    id='config-provider',
    componentDisabled=False,
    componentSize='small'
)


app.clientside_callback(
    '''(color) => color''',
    Output('config-provider', 'primaryColor'),
    Input('color-picker', 'color')
)

if __name__ == '__main__':
    app.run(debug=True)
