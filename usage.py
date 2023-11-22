import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Pre(id='output'),
        fac.AntdDivider(
            'type="line"（默认）',
            innerTextOrientation='left'
        ),
        fac.AntdProgress(
            percent=80,
            size=[300, 20],
        ),
        fac.AntdDivider(
            'type="circle"',
            innerTextOrientation='left'
        ),
        fac.AntdProgress(
            percent=80,
            type='circle',
            size=200
        ),
        fac.AntdDivider(
            'type="dashboard"',
            innerTextOrientation='left'
        ),
        fac.AntdProgress(
            percent=80,
            type='dashboard',
            size='small'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
