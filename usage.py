import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDescriptions(
            [
                fac.AntdDescriptionItem(
                    fac.AntdText('content测试'),
                    label='label测试'
                )
            ],
            bordered=True
        ),
        fac.AntdDescriptions(
            items=[
                {
                    'label': fac.AntdText('label测试'),
                    'children': fac.AntdText('content测试')
                }
            ],
            bordered=True
        )
    ],
    style={
        'paddingTop': 100
    }
)


if __name__ == '__main__':
    app.run(debug=True)
