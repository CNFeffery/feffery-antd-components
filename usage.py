import dash
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = dash.html.Div(
    [
        fac.AntdUpload(
            id='upload-demo',
            buttonContent='上传组件测试',
            buttonProps={
                'type': 'primary',
                'block': True
            }
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
