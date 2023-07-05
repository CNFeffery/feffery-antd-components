import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPopupCard(
            title='标题测试',
            draggable=True,
            width=550,
            closeIconType='two-tone',
            bodyStyle={
                'padding': 16
            }
        )
    ],
    style={
        'paddingTop': 100
    }
)


if __name__ == '__main__':
    app.run(debug=True)
