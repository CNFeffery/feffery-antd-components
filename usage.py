import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdInput(
                placeholder='输入框测试',
                bordered=True,
                variant='filled',
                style={
                    'width': 300
                }
            ),
            fac.AntdInput(
                placeholder='输入框测试',
                bordered=True,
                variant='filled',
                mode='search',
                style={
                    'width': 300
                }
            ),
            fac.AntdInput(
                placeholder='输入框测试',
                bordered=True,
                variant='filled',
                mode='text-area',
                style={
                    'width': 300
                }
            ),
            fac.AntdInput(
                placeholder='输入框测试',
                bordered=True,
                variant='filled',
                mode='password',
                style={
                    'width': 300
                }
            )
        ],
        direction='vertical'
    ),
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
