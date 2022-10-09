
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            [
                fac.AntdTabPane(
                    html.Div(
                        '标签页1测试',
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页1',
                    key='标签页1'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页2测试', type='primary'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页2',
                    key='标签页2'
                ),
                fac.AntdTabPane(
                    html.Div(
                        fac.AntdButton('标签页3测试', type='dashed'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    tab='标签页3',
                    key='标签页3'
                )
            ]
        ),

        fac.AntdDivider(),

        fac.AntdTabs(
            items=[
                {
                    'label': '标签页1',
                    'key': '标签页1',
                    'children': html.Div(
                        '标签页1测试',
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    )
                },
                {
                    'label': '标签页2',
                    'key': '标签页2',
                    'children': html.Div(
                        fac.AntdButton('标签页2测试', type='primary'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    )
                },
                {
                    'label': '标签页3',
                    'key': '标签页3',
                    'children': html.Div(
                        fac.AntdButton('标签页3测试', type='dashed'),
                        style={
                            'backgroundColor': 'rgba(241, 241, 241, 0.4)',
                            'height': '200px',
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    )
                }
            ]
        ),

        fac.AntdButton(
            '新建标签页',
            id='tabs-demo-add',
            type='primary',
            style={
                'marginBottom': '5px'
            }
        ),
        fac.AntdTabs(
            items=[
                {
                    'children': '基础标签页',
                    'label': '基础标签页',
                    'key': '基础标签页',
                    'closable': False
                },
                {
                    'label': '禁用标签页',
                    'key': '禁用标签页',
                    'disabled': True
                }
            ] + [
                {
                    'children': '标签页1',
                    'label': '标签页1',
                    'key': '标签页1'
                }
            ],
            id='tabs-demo',
            type='editable-card'
        )
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    [Output('tabs-demo', 'items'),
     Output('tabs-demo', 'activeKey')],
    [Input('tabs-demo-add', 'nClicks'),
     Input('tabs-demo', 'latestDeletePane')],
    State('tabs-demo', 'items'),
    prevent_initial_call=True
)
def tabs_callback_demo(nClicks, latestDeletePane, items):

    ctx = dash.callback_context

    if ctx.triggered[0]['prop_id'] == 'tabs-demo-add.nClicks':
        return items + [
            {
                'children': f'标签页{nClicks + 1}',
                'label': f'标签页{nClicks + 1}',
                'key': f'标签页{nClicks + 1}'
            }
        ], f'标签页{nClicks + 1}'

    elif ctx.triggered[0]['prop_id'] == 'tabs-demo.latestDeletePane':
        return [item for item in items if item['key'] != latestDeletePane], '基础标签页'

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
