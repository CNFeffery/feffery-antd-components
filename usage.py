import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCascader(
            panelMode=True,
            options=[
                {
                    'label': '四川省',
                    'key': '四川省',
                    'value': '四川省',
                    'children': [
                        {
                            'label': '成都市',
                            'key': '成都市',
                            'value': '成都市',
                        },
                        {
                            'label': '广安市',
                            'key': '广安市',
                            'value': '广安市',
                        }
                    ]
                },
                {
                    'label': '重庆市',
                    'key': '重庆市',
                    'value': '重庆市',
                    'children': [
                        {
                            'label': '渝中区',
                            'key': '渝中区',
                            'value': '渝中区',
                            'children': [
                                {
                                    'label': '解放碑街道',
                                    'key': '解放碑街道',
                                    'value': '解放碑街道',
                                }
                            ]
                        },
                        {
                            'label': '渝北区',
                            'key': '渝北区',
                            'value': '渝北区',
                        }
                    ]
                }
            ],
            optionsNodeKeyToLabel={
                '四川省': fac.AntdSpace(
                    [
                        '四川省',
                        fac.AntdTag(
                            content='省级',
                            color='magenta'
                        )
                    ]
                ),
                '重庆市': fac.AntdSpace(
                    [
                        '重庆市',
                        fac.AntdTag(
                            content='省级',
                            color='magenta'
                        )
                    ]
                ),
                '成都市': fac.AntdSpace(
                    [
                        '成都市',
                        fac.AntdTag(
                            content='地级市',
                            color='green'
                        )
                    ]
                ),
                '广安市': fac.AntdSpace(
                    [
                        '广安市',
                        fac.AntdTag(
                            content='地级市',
                            color='green'
                        )
                    ]
                ),
                '渝中区': fac.AntdSpace(
                    [
                        '渝中区',
                        fac.AntdTag(
                            content='市辖区',
                            color='cyan'
                        )
                    ]
                ),
                '渝北区': fac.AntdSpace(
                    [
                        '渝北区',
                        fac.AntdTag(
                            content='市辖区',
                            color='cyan'
                        )
                    ]
                ),
                '解放碑街道': fac.AntdSpace(
                    [
                        '解放碑街道',
                        fac.AntdTag(
                            content='街镇乡',
                            color='blue'
                        )
                    ]
                )
            },
            placeholder='请选择',
            multiple=True,
            optionFilterProp='value'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
