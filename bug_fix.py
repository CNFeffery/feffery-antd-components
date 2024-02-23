import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFormItem(
            fac.AntdInput(
                placeholder='请输入',
                style={
                    'width': 200
                }
            ),
            label='示例表单项'
        )
    ]
)

if __name__ == '__main__':
    app.run(debug=True)
