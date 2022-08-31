if True:
    import sys
    sys.path.append('../..')
    import dash
    import json
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    html.Div(
        [
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-bordered',
                            checked=True
                        ),
                        label='bordered'
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-controls',
                            checked=True
                        ),
                        label='controls'
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-disabled',
                            checked=False
                        ),
                        label='disabled'
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-readOnly',
                            checked=False
                        ),
                        label='readOnly'
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-pureLegend',
                            checked=False
                        ),
                        label='pureLegend'
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='segmented-coloring-demo1-colorBlockPosition',
                            checked=True,
                            checkedChildren='right',
                            unCheckedChildren='left'
                        ),
                        label='colorBlockPosition'
                    )
                ]
            ),

            fac.AntdSegmentedColoring(
                id='segmented-coloring-demo1',
                size='small',
                min=-10,
                max=10,
                breakpoints=[0, 1, 2, 3, 4, 5],
                colors=["#deecf9", "#71afe5", "#2b88d8", "#0078d4", "#106ebe"]
            )
        ],
        style={
            'padding': '30px 0'
        }
    ),
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    [Output('segmented-coloring-demo1', 'bordered'),
     Output('segmented-coloring-demo1', 'controls'),
     Output('segmented-coloring-demo1', 'disabled'),
     Output('segmented-coloring-demo1', 'readOnly'),
     Output('segmented-coloring-demo1', 'pureLegend'),
     Output('segmented-coloring-demo1', 'colorBlockPosition')],
    [Input('segmented-coloring-demo1-bordered', 'checked'),
     Input('segmented-coloring-demo1-controls', 'checked'),
     Input('segmented-coloring-demo1-disabled', 'checked'),
     Input('segmented-coloring-demo1-readOnly', 'checked'),
     Input('segmented-coloring-demo1-pureLegend', 'checked'),
     Input('segmented-coloring-demo1-colorBlockPosition', 'checked')]
)
def segmented_coloring_demo1_callback(*checked_list):
    return [
        *checked_list[:5],
        'right' if checked_list[5] else 'left'
    ]


if __name__ == '__main__':
    app.run(debug=True)
