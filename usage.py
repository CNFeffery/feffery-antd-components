
import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdUpload(id='input1'),
        fac.AntdDraggerUpload(id='input2'),
        fac.AntdPictureUpload(id='input3'),
        html.Div(id='output')
    ],
    style={
        'padding': '50px'
    }
)

@app.callback(
    Output('output', 'children'),
    [Input('input1', 'uploadId'),
    Input('input2', 'uploadId'),
    Input('input3', 'uploadId')]
)
def demo(*args):

    print(args)

if __name__ == '__main__':
    app.run(debug=True)
