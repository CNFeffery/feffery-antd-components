if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdMenu(
            id='menu-demo',
            currentKey='1-1-1',
            menuItems=[
                {
                    'component': 'SubMenu',
                    'props': {
                        'key': f'{sub_menu}',
                        'title': f'子菜单{sub_menu}',
                    },
                    'children': [
                        {
                            'component': 'ItemGroup' if item_group == 1 else 'SubMenu',
                            'props': {
                                'key': f'{sub_menu}-{item_group}',
                                'title': f'菜单项分组{sub_menu}-{item_group}',
                            },
                            'children': [
                                {
                                    'component': 'Item',
                                    'props': {
                                        'key': f'{sub_menu}-{item_group}-{item}',
                                        'title': f'菜单项{sub_menu}-{item_group}-{item}',
                                    },
                                    'extra': f'extra-{sub_menu}-{item_group}-{item}',
                                }
                                for item in range(1, 4)
                            ],
                        }
                        for item_group in range(1, 4)
                    ],
                }
                for sub_menu in range(1, 5)
            ],
            mode='inline',
            onlyExpandCurrentSubMenu=True,
            style=style(width=256),
        ),
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
