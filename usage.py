import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCountdown(
            title='倒计时示例',
            value='2099-01-01 00:00:00',
            format='还剩Y年M月D天H小时m分s秒',
            titleTooltip='这是信息提示示例',
        )
    ],
    style={'padding': 200},
)

if __name__ == '__main__':
    app.run(debug=True)
