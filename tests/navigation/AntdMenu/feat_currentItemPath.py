if True:
    import sys

    sys.path.append('../../../')
    import json

    from dash import Dash, html
    from dash.dependencies import Input, Output, State
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
                                    'extra': f'extra-{sub_menu}-{item_group}-{item}',
                                }
                                for item in range(1, 3)
                            ],
                        }
                        for item_group in range(1, 3)
                    ],
                }
                for sub_menu in range(1, 5)
            ],
            mode='horizontal',
        ),
        html.Div(
            id='menu-demo-output',
            style={
                'height': '800px',
                'background': '#a5d8ff',
                'color': 'white',
                'fontSize': '24px',
                'display': 'flex',
                'justifyContent': 'center',
                'alignItems': 'center',
            },
        ),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('menu-demo-output', 'children'),
    Input('menu-demo', 'currentKey'),
    State('menu-demo', 'currentItemPath'),
)
def menu_callback_demo(currentKey, currentItemPath):
    return json.dumps(
        {
            'currentKey': currentKey,
            'currentItemPath': currentItemPath,
        },
        ensure_ascii=False,
        indent=4,
    )


if __name__ == '__main__':
    app.run(debug=True)
