if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from dash.dependencies import Input, Output

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            id='test-max-count-demo',
            treeData=[
                {
                    'key': '节点1',
                    'value': '1',
                    'title': '节点1',
                    'children': [
                        {
                            'key': f'节点1-{i}',
                            'value': f'1-{i}',
                            'title': f'节点1-{i}',
                        }
                        for i in range(1, 3)
                    ],
                },
                {
                    'key': '节点2',
                    'value': '2',
                    'title': '节点2',
                    'children': [
                        {
                            'key': f'节点2-{i}',
                            'value': f'2-{i}',
                            'title': f'节点2-{i}',
                        }
                        for i in range(1, 5)
                    ],
                },
            ],
            placeholder='请选择',
            multiple=True,
            treeCheckable=True,
            showCheckedStrategy='show-child',
            maxCount=3,
            style={'width': 256},
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('test-max-count-demo', 'suffixIcon'),
    Input('test-max-count-demo', 'value'),
)
def test_max_count_demo(value):
    length = 0
    if value:
        length = len(value)
    return [html.Span(f'{length} / 3'), fac.AntdIcon(icon='antd-down')]


if __name__ == '__main__':
    app.run(debug=True)
