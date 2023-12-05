import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSteps(
            steps=[
                {
                    'title': f'步骤{i + 1}的title',
                    'subTitle': f'步骤{i + 1}的subTitle',
                    'description': f'步骤{i + 1}的description',
                    'icon': fac.AntdIcon(
                        icon='antd-home'
                    )
                }
                for i in range(3)
            ],
            current=2
        ),
        fac.AntdSteps(
            steps=[
                {
                    'title': f'步骤{i + 1}的title',
                    'subTitle': f'步骤{i + 1}的subTitle',
                    'description': f'步骤{i + 1}的description',
                }
                for i in range(3)
            ],
            status='wait',
            current=2
        ),
        fac.AntdSteps(
            steps=[
                {
                    'title': f'步骤{i + 1}的title',
                    'subTitle': f'步骤{i + 1}的subTitle',
                    'description': f'步骤{i + 1}的description',
                }
                for i in range(3)
            ],
            status='finish',
            current=2
        ),
        fac.AntdSteps(
            steps=[
                {
                    'title': f'步骤{i + 1}的title',
                    'subTitle': f'步骤{i + 1}的subTitle',
                    'description': f'步骤{i + 1}的description',
                }
                for i in range(3)
            ],
            status='error',
            current=2
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
