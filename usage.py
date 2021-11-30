import dash
import time
import numpy as np
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output

import os
from flask import request


app = dash.Dash(__name__)

# 这里的app即为Dash实例


@app.server.route('/upload/', methods=['POST'])
def upload():
    '''
    构建文件上传服务
    :return:
    '''

    # 获取上传id参数，用于指向保存路径
    uploadId = request.values.get('uploadId')

    # 获取上传的文件名称
    filename = request.files['file'].filename

    # 基于上传id，若本地不存在则会自动创建目录
    try:
        os.mkdir(os.path.join('temp', uploadId))
    except FileExistsError:
        pass

    # 流式写出文件到指定目录
    with open(os.path.join('temp', uploadId, filename), 'wb') as f:
        # 流式写出大型文件，这里的10代表10MB
        for chunk in iter(lambda: request.files['file'].read(1024 * 1024 * 10), b''):
            f.write(chunk)

    return {'filename': filename}


app.layout = html.Div(
    [
        dcc.Location(id='url'),

        fac.AntdSpin(
            html.Div(id='tree-demo-output'),
            text='回调中'
        ),


        fac.AntdTable(
            id='antd-table-test-input',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    f'字段{i}': np.random.randint(1, 5)
                    for i in range(1, 6)
                }
                for _ in range(100)
            ],
            size='large',
            rowSelectionType='checkbox',
            sortOptions={
                'sortDataIndexes': ['字段1', '字段2', '字段4', '字段5']
            }
        ),

        fac.AntdSpace(id='antd-table-test-output', direction='vertical'),

        html.Div(
            fac.AntdDraggerUpload(
                apiUrl='/upload/',
                fileMaxSize=1024,
                text='点击此区域或拖动文件到此进行上传',
                hint='请注意上传文件大小需低于1GB！',
                style={
                    'height': '100%'
                }
            ),
            style={
                'height': '500px'
            }
        ),

        fac.AntdCarousel(
            [
                html.Div(
                    page,
                    style={
                        'height': '500px',
                        'backgroundColor': '#8c8c8c',
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                        'fontSize': '30px',
                        'color': 'white'
                    }
                )
                for page in range(1, 10)
            ],
            autoplay=True,
            dotPosition='right',
            effect='fade',
            style={
                'marginTop': '100px'
            }
        ),


        fac.AntdTimeRangePicker(
            placeholderStart='开始时间',
            placeholderEnd='结束时间'
        ),

        fac.AntdTimePicker(
            placeholder='请选择时间'
        ),

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


@app.callback(
    Output('antd-table-test-output', 'children'),
    [Input('antd-table-test-input', 'recentlyClickedColumn'),
     Input('antd-table-test-input', 'recentlyMouseEnterColumn'),
     Input('antd-table-test-input', 'recentlyMouseLeaveColumn'),
     Input('antd-table-test-input', 'recentlyClickedRow'),
     Input('antd-table-test-input', 'recentlyMouseEnterRow'),
     Input('antd-table-test-input', 'recentlyMouseLeaveRow')]
)
def antd_table_test(recentlyClickedColumn,
                    recentlyMouseEnterColumn,
                    recentlyMouseLeaveColumn,
                    recentlyClickedRow,
                    recentlyMouseEnterRow,
                    recentlyMouseLeaveRow):

    return [
        fac.AntdText(f'recentlyClickedColumn: {recentlyClickedColumn}'),
        fac.AntdText(f'recentlyMouseEnterColumn: {recentlyMouseEnterColumn}'),
        fac.AntdText(f'recentlyMouseLeaveColumn: {recentlyMouseLeaveColumn}'),
        fac.AntdText(f'recentlyClickedRow: {recentlyClickedRow}'),
        fac.AntdText(f'recentlyMouseEnterRow: {recentlyMouseEnterRow}'),
        fac.AntdText(f'recentlyMouseLeaveRow: {recentlyMouseLeaveRow}')
    ]


if __name__ == '__main__':
    app.run_server(debug=True)
