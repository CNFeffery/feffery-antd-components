import sys
import time

sys.path.append('../../../')

import dash
from dash import Input, Output, callback, html, no_update
from feffery_dash_utils.style_utils import style

import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    'Fetch latest report',
                    id='btn-open',
                    type='primary',
                ),
            ]
        ),
        fac.AntdDivider(),
        fac.AntdParagraph(
            [
                'Click the button above to open the modal. While fresh data is ',
                'loading you should see the temporary ',
                fac.AntdText('loadingTitle', strong=True),
                ' being displayed.',
            ]
        ),
        fac.AntdModal(
            id='modal',
            visible=False,
            title='Report ready',
            loadingTitle='Preparing report...',
            loading=False,
            destroyOnClose=True,
        ),
    ],
    style=style(padding=50),
)


@callback(
    Output('modal', 'visible'),
    Output('modal', 'loading', allow_duplicate=True),
    Output('modal', 'children', allow_duplicate=True),
    Input('btn-open', 'nClicks'),
    prevent_initial_call=True,
)
def open_modal(n_clicks):
    # show the modal immediately; mark it as loading and clear old body content
    return True, True, []


@callback(
    Output('modal', 'children'),
    Output('modal', 'loading'),
    Input('modal', 'visible'),
    prevent_initial_call=True,
)
def populate_modal(visible):
    if not visible:
        return no_update, no_update

    time.sleep(2)  # simulate an expensive calculation or network request
    return (
        fac.AntdSpace(
            [
                fac.AntdResult(
                    status='success',
                    title='Daily report assembled',
                    subTitle='This content replaces the loading skeleton once ready.',
                ),
                fac.AntdParagraph('Close the modal and click the button again to repeat the demo.'),
            ],
            direction='vertical',
        ),
        False,
    )


if __name__ == '__main__':
    app.run(debug=True)
