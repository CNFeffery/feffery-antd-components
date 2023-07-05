import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPopupCard(
            title=fac.AntdText(
                '标题测试',
                style={
                    'paddingLeft': 8,
                    'borderLeft': '3px solid #40a9ff',
                    'fontSize': 18
                }
            ),
            draggable=True,
            dragClassName={
                'cursor': 'grab',
                '&:active': {
                    'cursor': 'grabbing'
                }
            },
            width=600,
            closeIconType='two-tone',
            bodyStyle={
                'padding': 16
            },
            style={
                'width': 800
            }
        )
    ],
    style={
        'padding': 100
    }
)


if __name__ == '__main__':
    app.run(debug=True)
