if True:
    import sys

    sys.path.append('../../../')
    import json
    from dash import Dash, html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdBreadcrumb(
                    id='breadcrumnb-demo',
                    items=[
                        {'title': '首页', 'key': '首页'},
                        {
                            'title': '下属页面1',
                            'key': '下属页面1',
                            'menuItems': [
                                {
                                    'key': f'子节点{i}',
                                    'title': f'子节点{i}',
                                    'icon': 'antd-smile',
                                }
                                for i in range(1, 4)
                            ],
                        },
                        {
                            'title': '下属页面1-1',
                            'key': '下属页面1-1',
                        },
                    ],
                ),
                html.Pre(id='breadcrumnb-demo-output'),
            ],
            size=50,
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)


@app.callback(
    Output('breadcrumnb-demo-output', 'children'),
    Input('breadcrumnb-demo', 'clickedItem'),
    prevent_initial_call=True,
)
def breadcrumb_callback_demo(clickedItem):
    return json.dumps(
        dict(clickedItem=clickedItem),
        indent=4,
        ensure_ascii=False,
    )


if __name__ == '__main__':
    app.run(debug=True)
