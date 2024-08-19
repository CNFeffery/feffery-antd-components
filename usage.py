import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTree(
            switcherIcon=fac.AntdIcon(icon='antd-down'),
            treeData=[
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市',
                        },
                        {
                            'title': '广安市',
                            'key': '广安市',
                        },
                    ],
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
                                    'key': '解放碑街道',
                                }
                            ],
                        },
                        {
                            'title': '渝北区',
                            'key': '渝北区',
                        },
                    ],
                },
            ],
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
