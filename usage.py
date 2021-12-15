import dash
import time
import json
import numpy as np
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

import os
from flask import request

from faker import Faker

faker = Faker(locale="zh_CN")


app = dash.Dash(__name__)

# 这里的app即为Dash实例


@app.server.route("/upload/", methods=["POST"])
def upload():
    """
    构建文件上传服务
    :return:
    """

    # 获取上传id参数，用于指向保存路径
    uploadId = request.values.get("uploadId")

    # 获取上传的文件名称
    filename = request.files["file"].filename

    # 基于上传id，若本地不存在则会自动创建目录
    try:
        os.mkdir(os.path.join("temp", uploadId))
    except FileExistsError:
        pass

    # 流式写出文件到指定目录
    with open(os.path.join("temp", uploadId, filename), "wb") as f:
        # 流式写出大型文件，这里的10代表10MB
        for chunk in iter(lambda: request.files["file"].read(1024 * 1024 * 10), b""):
            f.write(chunk)

    return {"filename": filename}


@app.callback(
    [
        Output("table-button-click-demo-recentlyButtonClickedRow-output", "children"),
        Output("table-button-click-demo-nClicksButton-output", "children"),
        Output("table-button-click-demo-clickedContent-output", "children"),
    ],
    Input("table-button-click-demo", "nClicksButton"),
    [
        State("table-button-click-demo", "recentlyButtonClickedRow"),
        State("table-button-click-demo", "clickedContent"),
    ],
    prevent_initial_call=True,
)
def table_button_click_demo_callback(
    nClicksButton, recentlyButtonClickedRow, clickedContent
):
    return (
        str(nClicksButton),
        json.dumps(recentlyButtonClickedRow, ensure_ascii=False, indent=4),
        str(clickedContent),
    )


app.layout = html.Div(
    [
        dcc.Location(id="url"),
        fac.AntdSpin(html.Div(id="tree-demo-output"), text="回调中"),

        fac.AntdDescriptions(
            [
                fac.AntdDescriptionItem(fac.AntdBadge(
                    status='processing'), label=f'标签{i}')
                for i in range(10)
            ],
            bordered=True,
            title='描述列表测试',
            size='small',
            column=2,
            layout='vertical'
        ),

        fac.AntdComment(
            fac.AntdComment(
                fac.AntdComment(
                    fac.AntdComment(
                        fac.AntdComment(
                            fac.AntdComment(
                                fac.AntdComment(
                                    authorName='Feffery',
                                    fromNow=True,
                                    publishTime={
                                        'value': '2019-01-01 12:02:19'
                                    },
                                    commentContent='很期待fac第一个正式版本的发布😇！',
                                    likesCount=665,
                                    avatarProps={
                                        'mode': 'image',
                                        'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                                    },
                                    style={
                                        'borderTop': '1px solid #f5f5f5'
                                    }
                                ),
                                authorName='Feffery',
                                fromNow=True,
                                publishTime={
                                    'value': '2019-01-01 12:02:19'
                                },
                                commentContent='很期待fac第一个正式版本的发布😇！',
                                likesCount=665,
                                avatarProps={
                                    'mode': 'image',
                                    'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                                },
                                style={
                                    'borderTop': '1px solid #f5f5f5'
                                }
                            ),
                            authorName='Feffery',
                            fromNow=True,
                            publishTime={
                                'value': '2019-01-01 12:02:19'
                            },
                            commentContent='很期待fac第一个正式版本的发布😇！',
                            likesCount=665,
                            avatarProps={
                                'mode': 'image',
                                'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                            },
                            style={
                                'borderTop': '1px solid #f5f5f5'
                            }
                        ),
                        authorName='Feffery',
                        fromNow=True,
                        publishTime={
                            'value': '2019-01-01 12:02:19'
                        },
                        commentContent='很期待fac第一个正式版本的发布😇！',
                        likesCount=665,
                        avatarProps={
                            'mode': 'image',
                            'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                        },
                        style={
                            'borderTop': '1px solid #f5f5f5'
                        }
                    ),
                    authorName='Feffery',
                    fromNow=True,
                    publishTime={
                        'value': '2019-01-01 12:02:19'
                    },
                    commentContent='很期待fac第一个正式版本的发布😇！',
                    likesCount=665,
                    avatarProps={
                        'mode': 'image',
                        'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                    },
                    style={
                        'borderTop': '1px solid #f5f5f5'
                    }
                ),
                authorName='Feffery',
                fromNow=True,
                publishTime={
                    'value': '2019-01-01 12:02:19'
                },
                commentContent='很期待fac第一个正式版本的发布😇！',
                likesCount=665,
                avatarProps={
                    'mode': 'image',
                    'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
                },
                style={
                    'borderTop': '1px solid #f5f5f5'
                }
            ),
            authorName='Feffery',
            fromNow=True,
            publishTime={
                'value': '2019-01-01 12:02:19'
            },
            commentContent='很期待fac第一个正式版本的发布😇！',
            likesCount=665,
            avatarProps={
                'mode': 'image',
                'src': 'https://avatars.githubusercontent.com/u/49147660?v=4'
            }
        ),

        html.Div(
            fac.AntdCalendar(
                size='default',
                validRange=[
                    {
                        'value': '1900-01-01'
                    },
                    {
                        'value': '2100-01-01'
                    }
                ],
                disabledDates={
                    'dates': ['2021-12-08', '2021-12-18']
                },
                defaultValue={
                    'value': '1999-12-01'
                }
            ),
            style={
                'width': '300px'
            }
        ),
        fac.AntdPageHeader(
            [
                html.Div(
                    fac.AntdDraggerUpload(
                        apiUrl="/upload/",
                        fileMaxSize=1024,
                        text="点击此区域或拖动文件到此进行上传",
                        fileTypes=["zip"],
                        hint="请注意上传文件大小需低于1GB！",
                        style={"height": "100%"},
                    ),
                    style={"height": "500px"},
                ),
            ],
            title="标题测试",
            subTitle="副标题测试",
            showBackIcon=False,
            style={
                "border": "1px solid rgb(235, 237, 240)"
            },
        ),
        fac.AntdImage(
            src=[
                "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
                "unknown",
            ],
            width=300,
            multiImageMode="fold",
        ),
        fac.AntdTable(
            columns=[
                {"title": "国家名示例", "dataIndex": "国家名示例"},
                {"title": "省份名示例", "dataIndex": "省份名示例", "editable": True},
                {"title": "城市名示例", "dataIndex": "城市名示例"},
                {"title": "日期示例", "dataIndex": "日期示例"},
                {"title": "邮编示例", "dataIndex": "邮编示例", "editable": True},
            ],
            data=[
                {
                    "key": i,
                    "国家名示例": faker.country(),
                    "省份名示例": faker.province(),
                    "城市名示例": faker.city_name(),
                    "日期示例": faker.date(pattern="%Y-%m-%d", end_datetime=None),
                    "邮编示例": faker.postcode(),
                }
                for i in range(10)
            ],
            disableRowListen=True,
            columnsFormatConstraint={
                "省份名示例": {"rule": "^.*?市$", "content": "不符合以“市”结尾的格式要求！"}
            },
        ),
        fac.AntdMentions(
            options=[
                {"label": f"feffery{i}", "value": f"feffery{i}"} for i in range(10)
            ],
            style={"width": "400px"},
            autoSize=True,
            defaultValue="@feffery8",
            placement="top",
        ),
        fac.AntdSpin(
            [
                fac.AntdTable(
                    id="table-button-click-demo",
                    disableRowListen=True,
                    columns=[
                        {
                            "title": "单按钮示例",
                            "dataIndex": "单按钮示例",
                            "renderOptions": {"renderType": "button"},
                            "width": "25%",
                        },
                        {
                            "title": "多按钮示例",
                            "dataIndex": "多按钮示例",
                            "renderOptions": {"renderType": "button"},
                            "width": "50%",
                        },
                        {
                            "title": "气泡确认按钮示例",
                            "dataIndex": "气泡确认按钮示例",
                            "renderOptions": {
                                "renderType": "button",
                                "renderButtonPopConfirmProps": {
                                    "title": "确认操作",
                                    "okText": "继续",
                                    "cancelText": "再想想",
                                },
                            },
                            "width": "25%",
                        },
                    ],
                    data=[
                        {
                            "key": i,
                            "单按钮示例": {"content": "按钮示例", "type": "primary"},
                            "多按钮示例": [
                                {"content": "按钮示例1", "type": "primary"},
                                {"content": "按钮示例2", "danger": True},
                            ],
                            "气泡确认按钮示例": {"content": "气泡确认按钮示例", "type": "primary"},
                        }
                        for i in range(5)
                    ],
                    bordered=True,
                    popupContainerId="docs-content",
                ),
                fac.AntdSpace(
                    [
                        html.Div(
                            [
                                fac.AntdText(
                                    "recentlyButtonClickedRow：", strong=True),
                                fac.AntdText(
                                    id="table-button-click-demo-recentlyButtonClickedRow-output"
                                ),
                            ]
                        ),
                        html.Div(
                            [
                                fac.AntdText("nClicksButton：", strong=True),
                                html.Pre(
                                    id="table-button-click-demo-nClicksButton-output",
                                    style={
                                        "backgroundColor": "rgb(250, 250, 250)"},
                                ),
                            ]
                        ),
                        html.Div(
                            [
                                fac.AntdText("clickedContent：", strong=True),
                                fac.AntdText(
                                    id="table-button-click-demo-clickedContent-output"
                                ),
                            ]
                        ),
                    ],
                    direction="vertical",
                    style={"width": "100%"},
                ),
            ],
            text="回调中",
        ),
        fac.AntdCard(
            [
                fac.AntdTitle("说明文字内容", level=5),
                fac.AntdParagraph("这是一段说明文字内容" * 10, italic=True),
            ],
            title="标题测试",
            hoverable=True,
            size="small",
            extraLink={"content": "链接测试", "href": "#"},
            # coverImg={
            #     'src': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            # },
            style={"marginBottom": "100px", "width": "500px"},
        ),
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdInput(),
                    required=True,
                    validateStatus="validating",
                    extra="测试文字",
                    help="验证成功",
                    label="用户名",
                    tooltip="选项说明内容",
                    labelCol={"span": 8},
                    wrapperCol={"span": 16},
                ),
                fac.AntdFormItem(
                    fac.AntdInput(mode="password"),
                    label="密码",
                    labelCol={"span": 8},
                    wrapperCol={"span": 16},
                ),
                fac.AntdFormItem(
                    fac.AntdCheckbox(checked=True, label="记住密码"),
                    wrapperCol={"span": 16, "offset": 8},
                ),
                fac.AntdFormItem(
                    fac.AntdButton("提交", type="primary"),
                    wrapperCol={"span": 16, "offset": 8},
                ),
            ],
            style={"width": "600px"},
        ),
        fac.AntdCard(
            [
                fac.AntdCardGrid(
                    f"网格{i+1}",
                    style={"width": "25%", "textAlign": "center",
                           "height": "200px"},
                )
                for i in range(20)
            ],
            title="卡片网格测试",
        ),
        fac.AntdTable(
            id="antd-table-test-input",
            columns=[{"title": f"字段{i}", "dataIndex": f"字段{i}"}
                     for i in range(1, 6)],
            data=[
                {f"字段{i}": np.random.randint(1, 5) for i in range(1, 6)}
                for _ in range(100)
            ],
            size="large",
            rowSelectionType="checkbox",
            sortOptions={"sortDataIndexes": ["字段1", "字段2", "字段4", "字段5"]},
        ),
        fac.AntdSpace(id="antd-table-test-output", direction="vertical"),
        html.Div(
            fac.AntdDraggerUpload(
                apiUrl="/upload/",
                fileMaxSize=1024,
                text="点击此区域或拖动文件到此进行上传",
                fileTypes=["zip"],
                hint="请注意上传文件大小需低于1GB！",
                style={"height": "100%"},
            ),
            style={"height": "500px"},
        ),
        fac.AntdCarousel(
            [
                html.Div(
                    page,
                    style={
                        "height": "500px",
                        "backgroundColor": "#8c8c8c",
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "fontSize": "30px",
                        "color": "white",
                    },
                )
                for page in range(1, 10)
            ],
            autoplay=True,
            dotPosition="right",
            effect="fade",
            style={"marginTop": "100px"},
        ),
        fac.AntdTimeRangePicker(placeholderStart="开始时间",
                                placeholderEnd="结束时间"),
        fac.AntdTimePicker(placeholder="请选择时间"),
        fac.AntdSkeleton(
            html.Div(id="skeleton-dev-demo"),
            active=True,
            title={"width": "4rem"},
            listenPropsMode="exclude",
            # excludeProps=['skeleton-dev-demo.children'],
            paragraph={"rows": 3, "width": "40%"},
        ),
        fac.AntdBreadcrumb(
            items=[
                {"title": "节点1", "icon": "home"},
                {
                    "title": "节点2",
                    "href": "/test",
                    "target": "_blank",
                    "menuItems": [
                        {"title": "测试1"},
                        {"title": "测试2", "icon": "home"},
                        {"title": "测试3", "icon": "fc-home"},
                    ],
                },
                {"title": "节点3"},
            ],
            separator="\\",
        ),
        fac.AntdDropdown(
            title="下拉菜单测试",
            menuItems=[
                {"title": "测试1"},
                {"title": "测试2"},
                {"isDivider": True},
                {"title": "测试3"},
            ],
            buttonMode=False,
        ),
        fac.AntdDivider(),
        fac.AntdInputNumber(
            min=0,
            max=100,
            step=0.000000000000000000000000001,
            defaultValue="10.000000000000000000000000001",
            addonBefore="+",
            addonAfter="%",
            stringMode=True,
            style={"width": "350px"},
        ),
        fac.AntdDivider(),
        fac.AntdBadge(
            fac.AntdAvatar(
                text="费弗里",
                size=64,
                shape="square",
                mode="text",
                gap=2,
                style={"backgroundColor": "#1890ff", "color": "white"},
            ),
            count=43,
            title="待读新回复43条",
        ),
        fac.AntdRibbon(
            html.Div(
                style={
                    "backgroundColor": "rgb(231, 231, 231)", "height": "400px"}
            ),
            color="rgb(24, 144, 255)",
            text="缎带测试",
        ),
        fac.AntdDivider(),
        fac.AntdProgress(percent=100, steps=5, strokeColor="#52c41a"),
        fac.AntdDivider(),
        fac.AntdRate(
            allowHalf=True,
            count=10,
            defaultValue=5.5,
            tooltips=[f"得分{i}" for i in range(1, 11)],
        ),
        fac.AntdStatistic(
            title="统计数值示例",
            value=78.56,
            precision=2,
            prefix={"content": "fc-line-chart", "mode": "icon"},
            suffix={"content": "%"},
            style={"margin": "50px"},
        ),
        fac.AntdCountdown(
            title="倒计时示例",
            value="2021/12/23 10:23:31",
            valueFormat="YYYY/MM/DD HH:mm:ss",
            format="还剩DD天HH小时mm分钟ss秒",
            prefix={"content": "fc-line-chart", "mode": "icon"},
            style={"margin": "50px"},
        ),
        fac.AntdTimeline(
            items=[
                {"content": "时间点测试1", "label": "2021-01-01"},
                {
                    "content": "时间点测试2",
                    "icon": "clock-circle",
                    "label": "2021-01-01",
                    "iconStyle": {"color": "red"},
                },
                {"content": "时间点测试3\n时间点测试3\n时间点测试3", "label": "2021-01-01"},
            ],
            pending="运算中...",
        ),
        fac.AntdAffix(fac.AntdButton("固钉测试"), offsetTop=400),
        html.Div(style={"height": "1600px"}),
    ],
    style={"padding": "20px 100px"},
)


@app.callback(Output("skeleton-dev-demo", "children"), Input("url", "pathname"))
def skeleton_dev_demo_callback(url):

    time.sleep(1)

    return html.Div(
        [fac.AntdTitle("标题测试", level=5), fac.AntdParagraph("测试" * 100)],
        id="skeleton-dev-demo",
    )


@app.callback(
    Output("antd-table-test-output", "children"),
    [
        Input("antd-table-test-input", "recentlyClickedColumn"),
        Input("antd-table-test-input", "recentlyMouseEnterColumn"),
        Input("antd-table-test-input", "recentlyMouseLeaveColumn"),
        Input("antd-table-test-input", "recentlyClickedRow"),
        Input("antd-table-test-input", "recentlyMouseEnterRow"),
        Input("antd-table-test-input", "recentlyMouseLeaveRow"),
    ],
)
def antd_table_test(
    recentlyClickedColumn,
    recentlyMouseEnterColumn,
    recentlyMouseLeaveColumn,
    recentlyClickedRow,
    recentlyMouseEnterRow,
    recentlyMouseLeaveRow,
):

    return [
        fac.AntdText(f"recentlyClickedColumn: {recentlyClickedColumn}"),
        fac.AntdText(f"recentlyMouseEnterColumn: {recentlyMouseEnterColumn}"),
        fac.AntdText(f"recentlyMouseLeaveColumn: {recentlyMouseLeaveColumn}"),
        fac.AntdText(f"recentlyClickedRow: {recentlyClickedRow}"),
        fac.AntdText(f"recentlyMouseEnterRow: {recentlyMouseEnterRow}"),
        fac.AntdText(f"recentlyMouseLeaveRow: {recentlyMouseLeaveRow}"),
    ]


if __name__ == "__main__":
    app.run_server(debug=True)
