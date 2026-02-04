if True:
    import sys

    sys.path.append('../../../')
    import random
    import time

    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '刷新数据',
                    id='update-data',
                    type='primary',
                    loadingChildren='刷新中',
                ),
                fac.AntdTable(
                    id='table',
                    columns=[
                        {
                            'dataIndex': f'字段{i}',
                            'title': f'字段{i}',
                        }
                        for i in range(10)
                    ],
                    data=[
                        {f'字段{i}': random.randint(1, 100) for i in range(10)} for _ in range(10)
                    ],
                    bordered=True,
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        ),
    ],
    style={'padding': 100},
)


@app.callback(
    Output('table', 'data'),
    Input('update-data', 'nClicks'),
    running=[
        [Output('update-data', 'loading'), True, False],
        [Output('table', 'loading'), True, False],
    ],
    prevent_initial_call=True,
)
def update_data(nClicks):
    time.sleep(1)

    return [{f'字段{i}': random.randint(1, 100) for i in range(10)} for _ in range(10)]


if __name__ == '__main__':
    app.run(debug=True)
