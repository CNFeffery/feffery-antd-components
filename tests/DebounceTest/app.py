if True:
    import sys
    sys.path.append('../..')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        fac.AntdParagraph('AntdButton nClicks测试'),
        fac.AntdButton(
            '测试测试',
            id='button-debounce-test',
            debounceWait=500,
            style={
                'width': '200px'
            }
        ),
        fac.AntdText(id='button-debounce-test-output'),

        html.Br(),

        fac.AntdParagraph('AntdIcon nClicks测试'),
        fac.AntdIcon(
            id='icon-debounce-test',
            icon='antd-question',
            debounceWait=500,
            style={
                'padding': '5px',
                'border': '1px solid grey',
                'cursor': 'pointer'
            }
        ),
        fac.AntdText(id='icon-debounce-test-output'),

        html.Br(),

        fac.AntdParagraph('AntdInput debounceValue测试'),
        fac.AntdInput(
            id='input-debounce-test',
            debounceWait=500,
            style={
                'width': '200px'
            }
        ),
        fac.AntdText(id='input-debounce-test-output'),

        fac.AntdParagraph('AntdInputNumber debounceValue测试'),
        fac.AntdInputNumber(
            id='input-number-debounce-test',
            debounceWait=500,
            style={
                'width': '200px'
            }
        ),
        fac.AntdText(id='input-number-debounce-test-output'),
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('button-debounce-test-output', 'children'),
    Input('button-debounce-test', 'nClicks')
)
def buton_debounce_test(nClicks):

    return nClicks or 0


@app.callback(
    Output('icon-debounce-test-output', 'children'),
    Input('icon-debounce-test', 'nClicks')
)
def icon_debounce_test(nClicks):

    return nClicks or 0


@app.callback(
    Output('input-debounce-test-output', 'children'),
    Input('input-debounce-test', 'debounceValue')
)
def input_debounce_test(debounceValue):

    return debounceValue


@app.callback(
    Output('input-number-debounce-test-output', 'children'),
    Input('input-number-debounce-test', 'debounceValue')
)
def input_number_debounce_test(debounceValue):

    return debounceValue


if __name__ == '__main__':
    app.run(debug=True)
