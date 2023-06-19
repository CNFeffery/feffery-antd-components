import json
import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

demo_value = None

app.layout = html.Div(
    [
        fac.AntdAvatar(
            icon='fa-solid fa-user-secret',
            iconRenderer='fontawesome',
            style={
                'color': '#4551f5'
            }
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
                                            'title': f'菜单项{sub_menu}-{item_group}-{item}',
                                            'icon': 'fa-solid fa-address-card',
                                            'iconRenderer': 'fontawesome'
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
                mode='inline'
            ),
            style={
                'width': '250px'
            }
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
