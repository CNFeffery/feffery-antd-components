if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash
    import feffery_antd_components as fac

app = Dash(__name__)

app.layout = fac.AntdLayout(
    [
        fac.AntdMenu(
            menuItems=[
                {
                    'component': 'SubMenu',
                    'props': {
                        'key': f'{sub_menu}',
                        'title': f'子菜单{sub_menu}',
                    },
                    'children': [
                        {
                            'component': 'ItemGroup',
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
                                }
                                for item in range(1, 3)
                            ],
                        }
                        for item_group in range(1, 3)
                    ],
                }
                for sub_menu in range(1, 5)
            ],
            mode='inline',
            defaultOpenKeys=['1', '3'],
            menuItemKeyToIcon={
                '1-1-1': fac.AntdIcon(
                    icon='antd-smile',
                    style={'color': 'red'},
                ),
            },
            style={'width': 256},
        )
    ],
)

if __name__ == '__main__':
    app.run(debug=True)
