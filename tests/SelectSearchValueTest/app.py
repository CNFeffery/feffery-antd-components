if True:
    import sys
    sys.path.append('../..')
    import dash
    import json
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        fac.AntdSelect(
            id='select-demo',
            allowClear=False,
            autoSpin=True,
            style={
                'width': '150px'
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('select-demo', 'options'),
    Input('select-demo', 'searchValue')
)
def demo(searchValue):

    if searchValue:

        import time
        time.sleep(1)

        return [
            {
                'label': f'{searchValue}{i}',
                'value': f'{searchValue}{i}',
            }
            for i in range(5)
        ]

    return []


if __name__ == '__main__':
    app.run(debug=True)
