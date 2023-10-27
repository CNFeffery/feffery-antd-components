import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            id='tabs-add-delete-demo',
            type='editable-card',
            items=[
                {
                    'label': f'标签页{i}',
                    'key': str(i),
                    'children': html.Div(
                        f'标签页{i}',
                        style={
                            'height': 200,
                            'fontSize': 28,
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    'closable': not (i == 1)
                }
                for i in range(1, 6)
            ],
            tabBarRightExtraContent=fac.AntdIcon(
                id='tabs-add-delete-demo-add',
                icon='antd-plus-circle-two-tone',
                style={
                    'fontSize': 20,
                    'cursor': 'pointer'
                }
            )
        ),
        html.Div(
            id='tabs-add-delete-demo-tab-count'
        ),
        fac.AntdCard(
            '''
　　从来就没有什么救世主，
也不靠神仙皇帝。
要创造人类的幸福，
全靠我们自己。
我们要夺回劳动果实，
让思想冲破牢笼。
快把那炉火烧得通红，
趁热打铁才能成功！
这是最后的斗争，
团结起来，到明天，
英特纳雄耐尔就一定要实现。
''',
            title='卡片示例',
            actions=[
                fac.AntdIcon(icon='antd-setting'),
                fac.AntdIcon(icon='antd-edit'),
                fac.AntdIcon(icon='antd-ellipsis'),
            ],
            extraLink={
                'content': '链接示例',
                'href': 'https://zh.wikipedia.org/zh-hans/国际歌'
            },
            extra=fac.AntdButton(
                '测试',
                type='primary',
                size='small'
            ),
            style={
                'width': 300,
                'marginBottom': 30
            }
        ),
        fac.AntdCardMeta(
            id='test',
            style={
                'marginBottom': '30px'
            },
            className='test',
            key='111',
            avatar=fac.AntdAvatar(src="https://joeschmoe.io/api/v1/random"),
            description="This is the description",
            title="Card title"
        ),
        fac.AntdCard(
            fac.AntdCardMeta(
                id='test',
                style={
                    'marginBottom': '10px'
                },
                className='test',
                key='111',
                avatar=fac.AntdAvatar(
                    src="https://joeschmoe.io/api/v1/random"),
                description="This is the description",
                title="Card title"
            ),
            style={
                'width': 300    
            },
            headStyle={
                'display': 'none'
            },
            coverImg={
                'src': 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                'alt': 'example'
            },
            actions=[
                fac.AntdIcon(icon='antd-setting'),
                fac.AntdIcon(icon='antd-edit'),
                fac.AntdIcon(icon='antd-ellipsis'),
            ]
        ),
        fac.AntdSpace(
            [
                fac.AntdIcon(
                    icon=icon,
                    style={
                        'fontSize': 20
                    }
                )
                for icon in [
                    'pi-circle',
                    'pi-polygon',
                    'pi-map-pin',
                    'pi-line-segment',
                    'pi-line-segments',
                    'pi-trash-simple',
                    'pi-trash',
                    'pi-ruler',
                    'pi-selection',
                    'pi-selection-slash',
                    'pi-square-split-horizontal',
                    'pi-square-split-vertical',
                    'pi-stack-simple',
                    'pi-stack',
                    'pi-navigation-arrow',
                    'pi-map-trifold',
                    'pi-info',
                    'pi-lock-key-open',
                    'pi-lock-key',
                    'pi-gear',
                    'pi-airplane',
                    'pi-anchor-simple',
                    'pi-arrow-arc-left',
                    'pi-arrow-arc-right',
                    'pi-arrow-clockwise',
                    'pi-arrow-counter-clockwise',
                    'pi-barricade',
                    'pi-binoculars',
                    'pi-bounding-box',
                    'pi-broom',
                    'pi-buildings',
                    'pi-calculator',
                    'pi-camera',
                    'pi-circuitry',
                    'pi-clipboard',
                    'pi-compass',
                    'pi-copy',
                    'pi-cpu',
                    'pi-crosshair',
                    'pi-cube-focus',
                    'pi-cube',
                    'pi-cursor',
                    'pi-database',
                    'pi-eye-slash',
                    'pi-eye',
                    'pi-faders',
                    'pi-floppy-disk',
                    'pi-dots-three-vertical',
                    'pi-dots-three',
                    'pi-math-operations',
                    'pi-plus',
                    'pi-minus',
                    'pi-path',
                ]
            ],
            wrap=True
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    [Output('tabs-add-delete-demo', 'items'),
     Output('tabs-add-delete-demo', 'activeKey')],
    [Input('tabs-add-delete-demo-add', 'nClicks'),
     Input('tabs-add-delete-demo', 'latestDeletePane')],
    [State('tabs-add-delete-demo', 'items'),
     State('tabs-add-delete-demo', 'activeKey')]
)
def tabs_add_delete_demo(nClicks,
                         latestDeletePane,
                         origin_items,
                         activeKey):

    if dash.ctx.triggered_id == 'tabs-add-delete-demo-add':

        # 提取已有items中的最大key值
        origin_max_key = max([int(item['key']) for item in origin_items])

        return [
            [
                *origin_items,
                {
                    'label': f'标签页{origin_max_key+1}',
                    'key': str(origin_max_key+1),
                    'children': html.Div(
                        f'标签页{origin_max_key+1}',
                        style={
                            'height': 200,
                            'fontSize': 28,
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    )
                }
            ],
            str(origin_max_key+1)
        ]

    elif dash.ctx.triggered_id == 'tabs-add-delete-demo':

        return [
            [
                item
                for item in origin_items
                if item['key'] != latestDeletePane
            ],
            '1' if latestDeletePane == activeKey else dash.no_update
        ]

    return dash.no_update


@app.callback(
    Output('tabs-add-delete-demo-tab-count', 'children'),
    [Input('tabs-add-delete-demo', 'tabCount'),
     Input('tabs-add-delete-demo', 'itemKeys')],
    prevent_initial_call=True
)
def tabs_add_delete_demo_tab_count(tabCount, itemKeys):

    return fac.AntdMessage(
        content=f'标签页自由增删示例 tabCount: {tabCount}, itemKeys: {itemKeys}',
        type='info'
    )


if __name__ == '__main__':
    app.run(debug=True)
