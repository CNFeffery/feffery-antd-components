import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdUpload(
            id='upload-demo',
            directory=True,
            withOriginFileObj=True,
        ),
        html.Pre(id='output'),
    ],
    style={'padding': '50px 100px'},
)


@app.callback(
    Output('output', 'children'),
    Input('upload-demo', 'listUploadTaskRecord'),
)
def update(listUploadTaskRecord):
    return json.dumps(
        listUploadTaskRecord, indent=4, ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
