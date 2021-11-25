import dash
import time
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        dcc.Location(id='url'),

        fac.AntdSkeleton(
            html.Div(
                id='skeleton-dev-demo'
            ),
            active=True,
            title={
                'width': '4rem'
            },
            listenPropsMode='exclude',
            # excludeProps=['skeleton-dev-demo.children'],
            paragraph={
                'rows': 3,
                'width': '40%'
            }
        ),

        fac.AntdBreadcrumb(
            items=[
                {
                    'title': '节点1',
                    'icon': 'home'
                },
                {
                    'title': '节点2',
                    'href': '/test',
                    'target': '_blank',
                    'menuItems': [
                        {
                            'title': '测试1'
                        },
                        {
                            'title': '测试2',
                            'icon': 'home'
                        },
                        {
                            'title': '测试3',
                            'icon': 'fc-home'
                        }
                    ]
                },
                {
                    'title': '节点3'
                }
            ],
            separator='\\'
        ),

        fac.AntdDropdown(
            title='下拉菜单测试',
            menuItems=[
                {
                    'title': '测试1'
                },
                {
                    'title': '测试2'
                },
                {
                    'isDivider': True
                },
                {
                    'title': '测试3'
                }
            ],
            buttonMode=True
        ),

        fac.AntdDivider(),

        fac.AntdInputNumber(
            min=0,
            max=100,
            step=0.000000000000000000000000001,
            defaultValue='10.000000000000000000000000001',
            addonBefore='+',
            addonAfter='%',
            stringMode=True,
            style={
                'width': '350px'
            }
        ),

        fac.AntdDivider(),

        fac.AntdBadge(
            fac.AntdAvatar(
                text='费弗里',
                size=64,
                shape='square',
                mode='text',
                gap=2,
                style={
                    'backgroundColor': '#1890ff',
                    'color': 'white'
                }
            ),
            count=43,
            title='待读新回复43条'
        ),

        fac.AntdRibbon(
            html.Div(
                style={
                    'backgroundColor': 'rgb(231, 231, 231)',
                    'height': '400px'
                }
            ),
            color='rgb(24, 144, 255)',
            text='缎带测试'
        ),

        fac.AntdDivider(),

        fac.AntdProgress(
            percent=100,
            steps=5,
            strokeColor='#52c41a'
        ),

        fac.AntdDivider(),

        fac.AntdRate(
            allowHalf=True,
            count=10,
            defaultValue=5.5,
            tooltips=[f'得分{i}' for i in range(1, 11)]
        ),

        fac.AntdStatistic(
            title='统计数值示例',
            value=78.56,
            precision=2,
            prefix={
                'content': 'fc-line-chart',
                'mode': 'icon'
            },
            suffix={
                'content': '%'
            },
            style={
                'margin': '50px'
            }
        ),

        fac.AntdCountdown(
            title='倒计时示例',
            value='2021/12/23 10:23:31',
            valueFormat='YYYY/MM/DD HH:mm:ss',
            format='还剩DD天HH小时mm分钟ss秒',
            prefix={
                'content': 'fc-line-chart',
                'mode': 'icon'
            },
            style={
                'margin': '50px'
            }
        ),

        fac.AntdTimeline(
            items=[
                {
                    'content': '时间点测试1',
                    'label': '2021-01-01'
                },
                {
                    'content': '时间点测试2',
                    'icon': 'clock-circle',
                    'label': '2021-01-01',
                    'iconStyle': {
                        'color': 'red'
                    }
                },
                {
                    'content': '时间点测试3\n时间点测试3\n时间点测试3',
                    'label': '2021-01-01'
                }
            ],
            pending='运算中...'
        ),

        fac.AntdAffix(
            fac.AntdButton('固钉测试'),
            offsetTop=400
        ),

        html.Div(
            style={
                'height': '1600px'
            }
        )

    ],
    style={
        'height': '100vh',
        'padding': '20px 100px'
    }
)


@app.callback(
    Output('skeleton-dev-demo', 'children'),
    Input('url', 'pathname')
)
def skeleton_dev_demo_callback(url):

    time.sleep(1)

    return html.Div(
        [
            fac.AntdTitle('标题测试', level=5),
            fac.AntdParagraph(
                '测试'*100
            )
        ],
        id='skeleton-dev-demo'
    )


if __name__ == '__main__':
    app.run_server(debug=True)
