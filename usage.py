import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '测试',
                    id='button-demo',
                    type='primary'
                ),
                fac.AntdText(id='output-demo')
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output-demo', 'children'),
    Input('button-demo', 'nClicks'),
    prevent_initial_call=True
)
def demo(nClicks):

    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run(debug=True)
