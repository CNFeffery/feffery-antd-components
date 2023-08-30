import dash
import json
from dash import html
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            fac.AntdFormItem(
                fac.AntdInput(),
                label='超长标签'*4
            ),
            labelWrap=True,
            labelCol={
                'span': 8
            },
            style={
                'width': 300
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
