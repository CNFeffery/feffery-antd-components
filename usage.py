import dash
import pandas as pd
from dash import html
from pandas.io.formats import style
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

from feffery_antd_components.AntdDivider import AntdDivider

demo = pd.DataFrame(
    {
        'v1': range(100),
        'v2': list('abcd')*25
    }
)

app = dash.Dash(__name__)

colormaps = {'Blues': ['#F7FBFF', '#DEEBF7', '#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#08519C', '#08306B'], 'Blues_r': ['#08306B', '#08519C', '#2171B5', '#4292C6', '#6BAED6', '#9ECAE1', '#C6DBEF', '#DEEBF7', '#F7FBFF'], 'BuGn': ['#F7FCFD', '#E5F5F9', '#CCECE6', '#99D8C9', '#66C2A4', '#41AE76', '#238B45', '#006D2C', '#00441B'], 'BuGn_r': ['#00441B', '#006D2C', '#238B45', '#41AE76', '#66C2A4', '#99D8C9', '#CCECE6', '#E5F5F9', '#F7FCFD'], 'BuPu': ['#F7FCFD', '#E0ECF4', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1', '#88419D', '#810F7C', '#4D004B'], 'BuPu_r': ['#4D004B', '#810F7C', '#88419D', '#8C6BB1', '#8C96C6', '#9EBCDA', '#BFD3E6', '#E0ECF4', '#F7FCFD'], 'GnBu': ['#F7FCF0', '#E0F3DB', '#CCEBC5', '#A8DDB5', '#7BCCC4', '#4EB3D3', '#2B8CBE', '#0868AC', '#084081'], 'GnBu_r': ['#084081', '#0868AC', '#2B8CBE', '#4EB3D3', '#7BCCC4', '#A8DDB5', '#CCEBC5', '#E0F3DB', '#F7FCF0'], 'Greens': ['#F7FCF5', '#E5F5E0', '#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#006D2C', '#00441B'], 'Greens_r': ['#00441B', '#006D2C', '#238B45', '#41AB5D', '#74C476', '#A1D99B', '#C7E9C0', '#E5F5E0', '#F7FCF5'], 'Greys': ['#FFFFFF', '#F0F0F0', '#D9D9D9', '#BDBDBD', '#969696', '#737373', '#525252', '#252525', '#000000'], 'Greys_r': ['#000000', '#252525', '#525252', '#737373', '#969696', '#BDBDBD', '#D9D9D9', '#F0F0F0', '#FFFFFF'], 'OrRd': ['#FFF7EC', '#FEE8C8', '#FDD49E', '#FDBB84', '#FC8D59', '#EF6548', '#D7301F', '#B30000', '#7F0000'], 'OrRd_r': ['#7F0000', '#B30000', '#D7301F', '#EF6548', '#FC8D59', '#FDBB84', '#FDD49E', '#FEE8C8', '#FFF7EC'], 'Oranges': ['#FFF5EB', '#FEE6CE', '#FDD0A2', '#FDAE6B', '#FD8D3C', '#F16913', '#D94801', '#A63603', '#7F2704'], 'Oranges_r': ['#7F2704', '#A63603', '#D94801', '#F16913', '#FD8D3C', '#FDAE6B', '#FDD0A2', '#FEE6CE', '#FFF5EB'], 'PuBuGn': ['#FFF7FB', '#ECE2F0', '#D0D1E6', '#A6BDDB', '#67A9CF', '#3690C0', '#02818A', '#016C59', '#014636'], 'PuBuGn_r': ['#014636', '#016C59', '#02818A', '#3690C0', '#67A9CF', '#A6BDDB', '#D0D1E6', '#ECE2F0', '#FFF7FB'], 'PuBu': [
    '#FFF7FB', '#ECE7F2', '#D0D1E6', '#A6BDDB', '#74A9CF', '#3690C0', '#0570B0', '#045A8D', '#023858'], 'PuBu_r': ['#023858', '#045A8D', '#0570B0', '#3690C0', '#74A9CF', '#A6BDDB', '#D0D1E6', '#ECE7F2', '#FFF7FB'], 'PuRd': ['#F7F4F9', '#E7E1EF', '#D4B9DA', '#C994C7', '#DF65B0', '#E7298A', '#CE1256', '#980043', '#67001F'], 'PuRd_r': ['#67001F', '#980043', '#CE1256', '#E7298A', '#DF65B0', '#C994C7', '#D4B9DA', '#E7E1EF', '#F7F4F9'], 'Purples': ['#FCFBFD', '#EFEDF5', '#DADAEB', '#BCBDDC', '#9E9AC8', '#807DBA', '#6A51A3', '#54278F', '#3F007D'], 'Purples_r': ['#3F007D', '#54278F', '#6A51A3', '#807DBA', '#9E9AC8', '#BCBDDC', '#DADAEB', '#EFEDF5', '#FCFBFD'], 'RdPu': ['#FFF7F3', '#FDE0DD', '#FCC5C0', '#FA9FB5', '#F768A1', '#DD3497', '#AE017E', '#7A0177', '#49006A'], 'RdPu_r': ['#49006A', '#7A0177', '#AE017E', '#DD3497', '#F768A1', '#FA9FB5', '#FCC5C0', '#FDE0DD', '#FFF7F3'], 'Reds': ['#FFF5F0', '#FEE0D2', '#FCBBA1', '#FC9272', '#FB6A4A', '#EF3B2C', '#CB181D', '#A50F15', '#67000D'], 'Reds_r': ['#67000D', '#A50F15', '#CB181D', '#EF3B2C', '#FB6A4A', '#FC9272', '#FCBBA1', '#FEE0D2', '#FFF5F0'], 'YlGnBu': ['#FFFFD9', '#EDF8B1', '#C7E9B4', '#7FCDBB', '#41B6C4', '#1D91C0', '#225EA8', '#253494', '#081D58'], 'YlGnBu_r': ['#081D58', '#253494', '#225EA8', '#1D91C0', '#41B6C4', '#7FCDBB', '#C7E9B4', '#EDF8B1', '#FFFFD9'], 'YlGn': ['#FFFFE5', '#F7FCB9', '#D9F0A3', '#ADDD8E', '#78C679', '#41AB5D', '#238443', '#006837', '#004529'], 'YlGn_r': ['#004529', '#006837', '#238443', '#41AB5D', '#78C679', '#ADDD8E', '#D9F0A3', '#F7FCB9', '#FFFFE5'], 'YlOrBr': ['#FFFFE5', '#FFF7BC', '#FEE391', '#FEC44F', '#FE9929', '#EC7014', '#CC4C02', '#993404', '#662506'], 'YlOrBr_r': ['#662506', '#993404', '#CC4C02', '#EC7014', '#FE9929', '#FEC44F', '#FEE391', '#FFF7BC', '#FFFFE5'], 'YlOrRd': ['#FFFFCC', '#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'], 'YlOrRd_r': ['#800026', '#BD0026', '#E31A1C', '#FC4E2A', '#FD8D3C', '#FEB24C', '#FED976', '#FFEDA0', '#FFFFCC']}

app.layout = html.Div(
    html.Div(
        [

            fac.AntdTree(
                treeData=[
                    {
                        'title': '负责人A',
                        'key': '负责人A',
                        'icon': 'user',
                        'children': [
                                {
                                    'title': '数仓1',
                                    'key': '数仓1',
                                    'icon': 'database',
                                    'children': [
                                        {
                                            'title': f'业务表1-{i}',
                                            'key': f'业务表1-{i}',
                                            'icon': 'table'
                                        }
                                        for i in range(5)
                                    ]
                                },
                            {
                                    'title': '数仓2',
                                    'key': '数仓2',
                                    'icon': 'database',
                                    'children': [
                                        {
                                            'title': f'业务表2-{i}',
                                            'key': f'业务表2-{i}',
                                            'icon': 'table'
                                        }
                                        for i in range(5)
                                    ]
                                }
                        ]
                    }
                ],
                # 设置默认全部展开
                defaultExpandAll=True,
                checkable=True
            ),

            fac.AntdBackTop(
                duration=5
            ),
            fac.AntdPopconfirm(
                fac.AntdButton('测试', type='primary'),
                title='测试测试'
            ),
            html.Div(
                style={
                    'height': '1000px'
                }
            ),
            fac.AntdSelect(
                style={
                    'width': '150px'
                },
                options=[
                    {
                        'label': '红色',
                        'value': '红色',
                        'colors': ['red']
                    },
                    {
                        'label': '绿色',
                        'value': '绿色',
                        'colors': ['green']
                    },
                    {
                        'label': '蓝色',
                        'value': '蓝色',
                        'colors': ['blue']
                    }
                ],
                colorsNameWidth=20
            ),
            fac.AntdDivider(),
            fac.AntdSelect(
                style={
                    'width': '300px'
                },
                options=[
                    {
                        'group': '测试',
                        'options': [
                            {
                                'label': key,
                                'value': key,
                                'colors': value
                            }
                            for key, value in colormaps.items()
                        ]
                    }
                ] + [
                    {
                        'label': key,
                        'value': key,
                        'colors': value
                    }
                    for key, value in colormaps.items()
                ],
                colorsNameWidth=50,
                colorsMode='diverging'
            ),
            fac.AntdAlert(
                html.Div(
                    [
                        fac.AntdIcon(
                            icon='md-star',
                            style={
                                'fontSize': '20px',
                                'color': 'rgb(255, 231, 147)'
                            }
                        )
                    ] * 4 + [
                        fac.AntdIcon(
                            icon='md-star-half',
                            style={
                                'fontSize': '20px',
                                'color': 'rgb(255, 231, 147)'
                            }
                        ),
                        fac.AntdIcon(
                            icon='fc-timeline',
                            style={
                                'fontSize': '20px'
                            }
                        )
                    ]
                ),
                message='警告示例'
            ),
            fac.AntdDivider(
                [
                    fac.AntdIcon(icon='fc-like', style={'marginRight': '5px'}),
                    '图标测试'
                ]
            ),
            fac.AntdButton(
                [
                    fac.AntdIcon(icon='fc-like', style={'marginRight': '5px'}),
                    '图标测试'
                ],
                id='icon-message-trigger'
            ),
            html.Div(id='icon-message-container'),
            fac.AntdMenu(
                menuItems=[
                    {
                        'component': 'Item',
                        'props': {
                            'title': 'fc-mind-map',
                            'key': 'fc-mind-map',
                            'icon': 'fc-mind-map',
                            'href': '/fc-mind-map'
                        }
                    },
                    {
                        'component': 'Item',
                        'props': {
                            'title': 'fc-list',
                            'key': 'fc-list',
                            'icon': 'fc-list',
                            'href': '/fc-list'
                        }
                    },
                    {
                        'component': 'Item',
                        'props': {
                            'title': 'fc-like',
                            'key': 'fc-like',
                            'icon': 'fc-like'
                        }
                    },
                    {
                        'component': 'SubMenu',
                        'props': {
                            'icon': 'fc-info',
                            'title': 'fc-info',
                            'key': 'fc-info'
                        },
                        'children': [
                            {
                                'component': 'Item',
                                'props': {
                                    'title': 'fc-file',
                                    'key': 'fc-file',
                                    'icon': 'fc-file'
                                }
                            },
                            {
                                'component': 'Item',
                                'props': {
                                    'title': 'fc-export',
                                    'key': 'fc-export',
                                    'icon': 'fc-export'
                                }
                            },
                            {
                                'component': 'Item',
                                'props': {
                                    'title': 'fc-download',
                                    'icon': 'fc-download',
                                            'key': 'fc-download'
                                }
                            },
                            {
                                'component': 'Item',
                                'props': {
                                    'title': 'fc-document',
                                    'icon': 'fc-document',
                                            'key': 'fc-document'
                                }
                            },
                            {
                                'component': 'Item',
                                'props': {
                                    'title': 'fc-deployment',
                                    'icon': 'fc-deployment',
                                            'key': 'fc-deployment'
                                }
                            }
                        ]
                    }
                ],
                mode='horizontal',
                defaultSelectedKey='fc-mind-map',
                defaultOpenKeys=['fc-info'],
                style={
                    'width': '200px'
                }
            ),
            fac.AntdDivider(),

            fac.AntdTable(
                columns=[
                    {
                        'title': '按钮测试',
                        'dataIndex': '按钮测试',
                        'renderOptions': {
                            'renderType': 'button',
                            'renderButtonPopConfirmProps': {
                                'title': '确认操作'
                            }
                        }
                    }
                ],
                data=[
                    {
                        '按钮测试': [
                            {
                                'content': '按钮1'
                            },
                            {
                                'content': '按钮2'
                            }
                        ]
                    }
                ] * 10,
                # rowSelectionType='checkbox'
            ),

            fac.AntdRadioGroup(
                options=[
                    {
                        'label': f'选项{i}',
                        'value': str(i)
                    }
                    for i in range(5)
                ],
                direction='vertical'
            )
        ],
        style={
            'width': '800px',
            'padding': '100px 0 100px 0'
        }
    ),
    style={
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    }
)


@app.callback(
    Output('icon-message-container', 'children'),
    Input('icon-message-trigger', 'nClicks'),
    prevent_initial_call=True
)
def trigger_message(nClicks):

    return fac.AntdMessage(
        content='图标测试',
        type='error',
        # icon='fc-automatic',
        duration=1000000
    )


if __name__ == '__main__':
    app.run_server(debug=True)
