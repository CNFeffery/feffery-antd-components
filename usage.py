import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdRadioGroup(
                    options=list('abcdef'),
                    name='单选框测试',
                )
            ],
            id={'type': 'form-test'},
            enableBatchControl=True,
            values={'单选框测试': 'c'},
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
