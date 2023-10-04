import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True, eager_loading=True)

app.layout = html.Div(
    fac.AntdMenu(
        mode='inline',
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
        defaultOpenKeys=['2'],
        inlineIndent=40
    ),
    style={
        'width': '250px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
