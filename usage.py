import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [
        fac.AntdMenu(
            menuItems=[
                {
                    'component': 'Item',
                    'props': {
                        'key': 'item1',
                        'href': '/11'
                    }
                },
                {
                    'component': 'Item',
                    'props': {
                        'key': 'item2',
                        'href': '/22'
                    }
                },
                {
                    'component': 'Item',
                    'props': {
                        'key': 'item3',
                        'href': '/33'
                    }
                }
            ],
            currentKey='item1',
            menuItemKeyToTitle={
                'item1': fac.AntdSpace(
                    [
                        'item1',
                        fac.AntdTag(
                            content='new',
                            color='green'
                        )
                    ]
                ),
                'item2': fac.AntdTooltip(
                    'item2',
                    title='我是item2的解释说明',
                    placement='right'
                ),
                'item3': fac.AntdSpace(
                    [
                        fac.AntdText('item3'),
                        fac.AntdSwitch(checked=False)
                    ]
                )
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
