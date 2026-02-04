if True:
    import sys

    sys.path.append('../../../')
    import time

    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '触发示例',
            id='skeleton-basic-demo-trigger',
            style={'marginBottom': 10},
        ),
        fac.AntdSkeleton(fac.AntdParagraph(id='skeleton-basic-demo-output')),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('skeleton-basic-demo-output', 'children'),
    Input('skeleton-basic-demo-trigger', 'nClicks'),
    prevent_initial_call=True,
)
def skeleton_basic_demo(nClicks):
    time.sleep(2)

    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run(debug=True)
