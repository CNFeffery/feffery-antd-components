import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDropdown(
            title='触发点',
            buttonMode=True,
            menuItems=[
                {
                    'title': '子页面1'
                },
                {
                    'title': '子页面2'
                },
                {
                    'isDivider': True
                },
                {
                    'title': '子页面3-1'
                },
                {
                    'title': '子页面3-2'
                }
            ],
            buttonProps={
                'style': {
                    'width': 150
                }
            }
        ),
        fac.AntdUpload(
            buttonProps={
                'style': {
                    'width': 200
                }
            }
        ),
        fac.AntdDatePicker(
            showTime={
                'defaultValue': '12:00:00'
            }
        ),
        fac.AntdDateRangePicker(
            showTime={
                'defaultValue': ['08:00:00', '16:30:00']
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
