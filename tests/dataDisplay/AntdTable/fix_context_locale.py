if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdConfigProvider(
            fac.AntdTable(
                columns=[
                    {
                        'title': '搜索型筛选',
                        'dataIndex': '搜索型筛选',
                    }
                ],
                data=[
                    {'搜索型筛选': s} for s in list('abced')
                ],
                filterOptions={
                    '搜索型筛选': {'filterMode': 'keyword'}
                },
                style={'width': 200},
            ),
            locale='en-us',
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
