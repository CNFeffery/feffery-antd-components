import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdUpload(
            apiUrl='/upload/',
            downloadUrl='/download',
            downloadUrlExtraParams={
                'token': 'test',
                'a': 1
            },
            fileMaxSize=1,
            defaultFileList=[
                {
                    'name': f'demo{i}.txt',
                    'status': 'done'
                }
                for i in range(1, 6)
            ],
            confirmBeforeDelete=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
