import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDatePicker(
                    placeholder='请选择日期时间',
                    showTime={'defaultValue': '18:33:33'},
                )
            ]
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
