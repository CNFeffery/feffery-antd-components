if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCascader(
            placeholder='请选择',
            prefix=fac.AntdIcon(icon='antd-user'),
            options=[
                {
                    'value': '节点1',
                    'label': '节点1',
                    'children': [
                        {
                            'value': '节点1-1',
                            'label': '节点1-1',
                        },
                        {
                            'value': '节点1-2',
                            'label': '节点1-2',
                            'children': [
                                {
                                    'value': '节点1-2-1',
                                    'label': '节点1-2-1',
                                },
                                {
                                    'value': '节点1-2-2',
                                    'label': '节点1-2-2',
                                },
                            ],
                        },
                    ],
                },
                {
                    'value': '节点2',
                    'label': '节点2',
                    'children': [
                        {
                            'value': '节点2-1',
                            'label': '节点2-1',
                        },
                        {
                            'value': '节点2-2',
                            'label': '节点2-2',
                        },
                    ],
                },
            ],
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
