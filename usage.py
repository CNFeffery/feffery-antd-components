import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdTree(
            treeData=[
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市'
                        },
                        {
                            'title': '广安市',
                            'key': '广安市'
                        }
                    ]
                },
                {
                    'title': '重庆市',
                    'key': '重庆市',
                    'children': [
                        {
                            'title': '渝中区',
                            'key': '渝中区',
                            'children': [
                                {
                                    'title': '解放碑街道',
                                    'key': '解放碑街道'
                                }
                            ]
                        },
                        {
                            'title': '渝北区',
                            'key': '渝北区'
                        }
                    ]
                }
            ],
            multiple=True,
            checkable=True,
            defaultExpandAll=True,
            nodeCheckedSuffix=fac.AntdIcon(
                icon='antd-eye',
                style={
                    'color': '#1890ff',
                    'marginLeft': 5,
                    'fontSize': 15
                }
            ),
            nodeUncheckedSuffix=fac.AntdIcon(
                icon='antd-eye-invisible',
                style={
                    'color': '#1890ff',
                    'marginLeft': 5,
                    'fontSize': 15
                }
            ),
            nodeCheckedStyle={
                'color': 'red'
            },
            nodeUncheckedStyle={
                'opacity': 0.6
            }
        )
    ],
    style={
        'padding': 150
    }
)

if __name__ == '__main__':
    app.run(debug=True)
