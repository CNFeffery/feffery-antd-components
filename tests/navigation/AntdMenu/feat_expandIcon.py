if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                fac.AntdDivider(
                    f'mode="{mode}"',
                    innerTextOrientation='left',
                ),
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
                    mode=mode,
                    expandIcon={
                        'expand': fac.AntdIcon(icon='antd-down-circle'),
                        'collapse': fac.AntdIcon(icon='antd-up-circle'),
                    },
                    style={'width': 256},
                ),
            ]
        )
        for mode in ['vertical', 'horizontal', 'inline']
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
