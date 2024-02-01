import dash
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '触发示例',
            id='skeleton-active-demo-trigger',
            style={
                'marginBottom': 10
            }
        ),

        fac.AntdSkeleton(
            fac.AntdParagraph(
                id='skeleton-active-demo-output'
            ),
            active=True,
            delay=300
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('skeleton-active-demo-output', 'children'),
    Input('skeleton-active-demo-trigger', 'nClicks'),
    prevent_initial_call=True
)
def skeleton_active_demo(nClicks):

    time.sleep(3)

    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run(debug=True)
