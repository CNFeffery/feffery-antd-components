import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDatePicker(needConfirm=True),
        fac.AntdDateRangePicker(needConfirm=True),
        fac.AntdTimePicker(needConfirm=True),
        fac.AntdTimeRangePicker(needConfirm=True)
    ],
    style={'padding': '50px 100px'},
)


if __name__ == '__main__':
    app.run(debug=True)
