import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTimeline(
            mode='alternate',
            items=[
                {
                    'content': '训练数据导入',
                    'icon': fac.AntdIcon(
                        icon='md-cloud-upload',
                        style={
                            'fontSize': '18px'
                        }
                    ),
                    'position': 'left'
                },
                {
                    'content': '模型训练',
                    'icon': fac.AntdIcon(
                        icon='antd-clock-circle',
                        style={
                            'fontSize': '18px'
                        }
                    ),
                    'position': 'left'
                },
                {
                    'content': '模型持久化',
                    'icon': fac.AntdIcon(
                        icon='fc-accept-database',
                        style={
                            'fontSize': '18px'
                        }
                    ),
                    'position': 'left'
                },
                {
                    'content': '模型发布',
                    'icon': fac.AntdIcon(
                        icon='md-cloud-done',
                        style={
                            'fontSize': '18px'
                        }
                    ),
                    'position': 'right'
                }
            ],
            pending='处理中'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
