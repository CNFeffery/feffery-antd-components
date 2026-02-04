if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': '按钮示例',
                    'title': '按钮示例',
                    'renderOptions': {'renderType': 'button'},
                }
            ],
            data=[{'按钮示例': [{'content': f'按钮{i}'} for i in range(50)]}],
            bordered=True,
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
