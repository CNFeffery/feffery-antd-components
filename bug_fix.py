import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDateRangePicker(),
                fac.AntdDateRangePicker(
                    placeholder=[
                        '开始日期时间',
                        '结束日期时间',
                    ],
                    showTime=True,
                    needConfirm=True,
                ),
            ],
            wrap=True,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
