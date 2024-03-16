import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    id='input-demo',
                    passwordUseMd5=True,
                    mode='password',
                    style={
                        'width': 200
                    }
                ),
                html.Pre(id='output')
            ]
        )
    ]
)


@app.callback(
    Output('output', 'children'),
    Input('input-demo', 'md5Value')
)
def demo(md5Value):

    return json.dumps(
        dict(md5Value=md5Value),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
