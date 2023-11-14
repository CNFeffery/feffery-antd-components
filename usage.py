import dash
import uuid
import json
import time
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdDatePicker(),
        fac.AntdDatePicker(
            placeholder='请选择日期时间',
            showTime=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
