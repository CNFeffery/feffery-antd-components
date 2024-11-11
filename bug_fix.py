import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)
app.layout = html.Div(
    [
        fac.AntdMenu(
            menuItems=[
                {
                    'component': 'SubMenu',
                    'props': {
                        'key': 'Menu_father_1',
                        'title': '子菜单项一',
                        'icon': 'antd-user',
                    },
                    'children': [
                        {
                            'component': 'Item',
                            'props': {
                                'key': 'Menu_son_1',
                                'title': 'Info_1',
                            },
                        },
                        {
                            'component': 'Divider',
                            # 'props': {
                            #     # 'key': 'Divider_1',  # 必须要给Divider也增加一个key值，否则会报错
                            # },
                        },
                        {
                            'component': 'Item',
                            'props': {
                                'key': 'Menu_son_2',
                                'title': 'Info_2',
                            },
                        },
                    ],
                }
            ]
        )
    ],
    style={'width': '200px'},
)

if __name__ == '__main__':
    app.run(debug=True)
