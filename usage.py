import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdTag(
            id='input',
            content='标签测试',
            icon=fac.AntdIcon(
                icon='antd-robot'
            ),
            color='success',
            closeIcon=True
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('input', 'closeCounts'),
    prevent_initial_call=True
)
def demo(closeCounts):

    return html.Pre(
        json.dumps(
            dict(
                closeCounts=closeCounts
            ),
            indent=4,
            ensure_ascii=True
        )
    )


if __name__ == '__main__':
    app.run(debug=True)
