import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdCheckableTag(
                    content='标签1'
                ),
                fac.AntdCheckableTag(
                    content='标签2',
                    checked=True
                )
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
