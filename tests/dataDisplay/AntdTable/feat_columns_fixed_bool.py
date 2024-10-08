if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            fac.AntdTable(
                columns=[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}',
                        'fixed': i <= 2,
                    }
                    for i in range(1, 6)
                ],
                data=[
                    {
                        f'字段{i}': '示例内容'
                        for i in range(1, 6)
                    }
                ]
                * 3,
                maxWidth=900,
            ),
            style={'maxWidth': 700, 'margin': '0 auto'},
        )
    ],
    style=style(position='relative', height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
