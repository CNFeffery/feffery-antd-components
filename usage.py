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
        fac.AntdSpace(
            [
                fac.AntdTable(
                    columns=[
                        {
                            'title': 'dropdown-links',
                            'dataIndex': 'dropdown-links',
                            'renderOptions': {
                                'renderType': 'dropdown-links',
                                'dropdownProps': {
                                    'title': '更多'
                                }
                            }
                        },
                        {
                            'title': 'dropdown',
                            'dataIndex': 'dropdown',
                            'renderOptions': {
                                'renderType': 'dropdown',
                                'dropdownProps': {
                                    'title': '更多'
                                }
                            }
                        },
                        {
                            'title': 'button示例1',
                            'dataIndex': 'button示例1',
                            'renderOptions': {
                                'renderType': 'button'
                            }
                        },
                        {
                            'title': 'button示例2',
                            'dataIndex': 'button示例2',
                            'renderOptions': {
                                'renderType': 'button'
                            }
                        },
                        {
                            'title': 'button示例3',
                            'dataIndex': 'button示例3',
                            'renderOptions': {
                                'renderType': 'button',
                                'renderButtonPopConfirmProps': {
                                    'title': '确认执行？',
                                    'okText': '确认',
                                    'cancelText': '取消'
                                }
                            }
                        }
                    ],
                    data=[
                        {
                            'dropdown-links': [
                                {
                                    'title': '示例链接',
                                    'icon': 'fa-solid fa-cube',
                                    'iconRenderer': 'fontawesome'
                                }
                            ],
                            'dropdown': [
                                {
                                    'title': '示例链接',
                                    'icon': 'fa-solid fa-cube',
                                    'iconRenderer': 'fontawesome'
                                }
                            ],
                            'button示例1': {
                                'content': f'按钮1-{i}',
                                'type': 'link',
                                'custom': 'balabalabalabala',
                                'icon': 'fa-solid fa-cube',
                                'iconRenderer': 'fontawesome'
                            },
                            'button示例2': [
                                {
                                    'content': f'按钮2-{i}-{j}',
                                    'type': 'primary',
                                    'custom': 'balabalabalabala',
                                    'icon': 'fa-solid fa-cube',
                                    'iconRenderer': 'fontawesome'
                                }
                                for j in range(1, 3)
                            ],
                            'button示例3': [
                                {
                                    'content': f'按钮3-{i}-{j}',
                                    'type': 'dashed',
                                    'danger': True,
                                    'custom': 'balabalabalabala',
                                    'icon': 'fa-solid fa-cube',
                                    'iconRenderer': 'fontawesome'
                                }
                                for j in range(1, 3)
                            ]
                        }
                        for i in range(1, 4)
                    ],
                    bordered=True,
                    style={
                        'width': 400
                    }
                ),

                fac.AntdSegmented(
                    options=[
                        {
                            'label': f'选项{i}',
                            'value': i,
                            'icon': icon,
                            'iconRenderer': 'fontawesome'
                        }
                        for i, icon in enumerate(
                            [
                                'fa-solid fa-font-awesome',
                                'fa-solid fa-laptop-code',
                                'fa-solid fa-file-lines',
                            ]
                        )
                    ],
                    defaultValue=0
                ),

                # fac.AntdMessage(
                #     content='全局提示示例',
                #     icon='fa-solid fa-gears',
                #     iconRenderer='fontawesome',
                #     duration=999
                # ),

                fac.AntdDropdown(
                    title='触发点',
                    menuItems=[
                        {
                            'title': '选项1',
                            'icon': 'fa-solid fa-cube',
                            'iconRenderer': 'fontawesome'
                        },
                        {
                            'title': '选项2',
                            'icon': 'fa-solid fa-cube',
                            'iconRenderer': 'fontawesome'
                        },
                        {
                            'isDivider': True
                        },
                        {
                            'title': '选项3-1',
                            'icon': 'fa-solid fa-cube',
                            'iconRenderer': 'fontawesome'
                        },
                        {
                            'title': '选项3-2',
                            'icon': 'fa-solid fa-cube',
                            'iconRenderer': 'fontawesome'
                        }
                    ]
                ),

                fac.AntdBreadcrumb(
                    items=[
                        {
                            'title': 'feffery-components仓库主页',
                            'href': 'https://github.com/CNFeffery/feffery-dash-components',
                            'target': '_blank',
                            'icon': 'fa-solid fa-cubes',
                            'iconRenderer': 'fontawesome',
                            'menuItems': [
                                {
                                    'title': 'feffery-utils-components',
                                    'href': 'https://github.com/CNFeffery/feffery-utils-components',
                                    'target': '_blank',
                                    'icon': 'fa-solid fa-cube',
                                    'iconRenderer': 'fontawesome',
                                }
                            ]
                        }
                    ]
                ),

                fac.AntdAvatar(
                    icon='fa-solid fa-user-secret',
                    iconRenderer='fontawesome',
                    style={
                        'background': '#4551f5'
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
            direction='vertical'
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
