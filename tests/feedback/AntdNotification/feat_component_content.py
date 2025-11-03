if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            'Open notification with custom nodes',
            id='open-rich-notification',
            type='primary',
        ),
        fac.Fragment(id='rich-notification-holder'),
    ],
    style=style(padding=50, display='flex', gap=16),
)


@app.callback(
    Output('rich-notification-holder', 'children'),
    Input('open-rich-notification', 'nClicks'),
    prevent_initial_call=True,
)
def display_rich_notification(n_clicks):
    return fac.AntdNotification(
        message=fac.AntdSpace(
            [
                fac.AntdIcon(icon='antd-smile'),
                fac.AntdText('Dash components as notification message'),
            ],
            size='small',
        ),
        description=html.Div(
            [
                fac.AntdText(
                    'Description can now be composed using standard Dash nodes.',
                    strong=True,
                ),
                fac.AntdParagraph(
                    [
                        'This includes mixing ',
                        fac.AntdText('fac', code=True),
                        ' and ',
                        fac.AntdText('html', code=True),
                        ' components.',
                    ],
                    style={'marginBottom': 0},
                ),
            ],
            style={'display': 'grid', 'gap': 6},
        ),
        stack=True,
    )


if __name__ == '__main__':
    app.run(debug=True)
