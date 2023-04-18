#!/usr/bin/python
# -*- coding: UTF-8 -*-
"""
-------------------------------------------------
日期： 2023/4/17
作者： Yxian
简介 :
-------------------------------------------------
"""
from datetime import datetime

import dash
import feffery_antd_components as fac
from dash import Input, Output, html

app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div(
    [
        fac.AntdDatePicker(
            firstDayOfWeek=3,
            style={
                'width': 256
            }
        ),
        fac.AntdDateRangePicker(
            firstDayOfWeek=3,
            style={
                'width': 256
            }
        )
    ]
)


if __name__ == '__main__':
    app.run(debug=True)
