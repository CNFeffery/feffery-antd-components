if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSwitch(),
        fac.AntdTable(
            columns=[
                {
                    'title': 'link示例',
                    'dataIndex': 'link示例',
                    'renderOptions': {
                        'renderType': 'link',
                        'likeDccLink': True,
                    },
                },
            ],
            data=[
                {
                    'link示例': {
                        'content': f'{content}仓库',
                        'href': '/' + content,
                    },
                }
                for content in [
                    'fac',
                    'fuc',
                    'fact',
                    'fmc',
                    'flc',
                ]
            ],
            bordered=True,
            style={'width': 400},
        ),
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
