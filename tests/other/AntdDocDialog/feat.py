if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output, State
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton('打开文档', id='open-doc'),
        fac.AntdDocDialog(
            id='doc-layout',
            fallbackUrl='https://fac.feffery.tech/',
            docUrls={
                '/AntdButton': 'https://fac.feffery.tech/AntdButton',
                '/AntdFloatButton': 'https://fac.feffery.tech/AntdFloatButton',
            },
        ),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('doc-layout', 'visible'),
    Input('open-doc', 'nClicks'),
    State('doc-layout', 'closeTimestamp'),
    prevent_initial_call=True,
)
def open_doc(nClicks, closeTimestamp):
    if nClicks:
        print(closeTimestamp)
        return True
    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
