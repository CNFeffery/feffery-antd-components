import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdCalendar(),
        fac.AntdCountdown(
            title='倒计时示例',
            value='2099-01-01 00:00:00',
            format='还剩Y年M月D天H小时m分s秒'
        ),
        fac.AntdComment(
            authorName='费弗里',
            authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
            publishTime={
                'value': '2022-01-01 19:29:01',
                'format': 'YYYY-MM-DD hh:mm:ss'
            },
            commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的应用！😀',
            avatarProps={
                'mode': 'image',
                'src': '/assets/imgs/avatar-demo.jpg'
            },
            fromNow=True
        ),
        fac.AntdSpace(
            [
                fac.AntdDatePicker(),
                fac.AntdDateRangePicker(),
                fac.AntdTimePicker(),
                fac.AntdTimeRangePicker()
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
