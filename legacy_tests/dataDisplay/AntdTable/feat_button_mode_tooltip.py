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
                    'title': 'button示例',
                    'dataIndex': 'button示例',
                    'renderOptions': {'renderType': 'button'},
                },
            ],
            data=[
                {
                    'button示例': {
                        'icon': 'antd-setting',
                        'tooltip': {'title': '示例按钮'},
                    },
                },
                {
                    'button示例': {
                        'icon': 'antd-setting',
                        'tooltip': {
                            'title': '示例按钮',
                            'placement': 'bottom',
                        },
                    },
                },
            ],
            bordered=True,
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
