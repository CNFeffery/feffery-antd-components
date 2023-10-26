import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
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
                'marginBottom': 10
            }
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


if __name__ == '__main__':
    app.run(debug=True)
