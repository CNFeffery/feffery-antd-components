if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTreeSelect(
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
                                for i in range(1, 5)
                            ],
                        },
                        {
                            'key': '节点2',
                            'value': '2',
                            'title': '节点2',
                        },
                    ],
                    placeholder='请选择',
                    defaultValue=['节点2', '节点1-2'],
                    readOnly=True,
                    multiple=True,
                    style={'width': 256},
                )
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
