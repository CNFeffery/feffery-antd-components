import dash
from dash import html
from dash.dependencies import Input, Output
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            items=[
                {
                    'key': f'标签页{i}',
                    'label': f'标签页{i}',
                    'children': html.Div(
                        f'这是标签页{i}的内容示例',
                        style={
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center',
                            'fontSize': 18,
                            'background': f'rgba(28, 126, 214, calc(1 - 0.2 * {i}))',
                            'height': 200
                        }
                    )
                }
                for i in range(1, 6)
            ]
        ),

        html.Div(
            fac.AntdMenu(
                id='menu-demo',
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
                onlyExpandCurrentSubMenu=True
            ),
            style={
                'width': '250px'
            }
        ),
        html.Div(
            id='menu-demo-output',
            style={
                'height': '200px',
                'background': '#a5d8ff',
                'color': 'white',
                'fontSize': '24px',
                'display': 'flex',
                'justifyContent': 'center',
                'alignItems': 'center'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('menu-demo-output', 'children'),
    Input('menu-demo', 'openKeys')
)
def menu_callback_demo(openKeys):

    return f'openKeys: {openKeys}'

if __name__ == '__main__':
    app.run(debug=True)
