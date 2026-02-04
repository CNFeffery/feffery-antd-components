if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.Fragment(
            [
                fac.AntdModal(
                    id='modal',
                    title='示例模态框',
                    preventClose=True,
                    visible=True,
                ),
                fac.AntdModal(
                    id='modal-close-confirm',
                    title='关闭二次确认模态框',
                    renderFooter=True,
                ),
            ]
        ),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('modal-close-confirm', 'visible'),
    Input('modal', 'cancelCounts'),
    prevent_initial_call=True,
)
def show_modal_close_confirm(cancelCounts):
    return True


@app.callback(
    Output('modal', 'visible'),
    Input('modal-close-confirm', 'okCounts'),
    prevent_initial_call=True,
)
def confirm_close_modal(okCounts):
    return False


if __name__ == '__main__':
    app.run(debug=True)
