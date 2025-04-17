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
                    items=[
                        {'title': '首页'},
                        {'title': '下属页面1'},
                        {'title': '下属页面1-1'},
                    ]
                ),
                fac.AntdBreadcrumb(
                    items=[
                        {
                            'title': 'awesome-feffery-dash仓库主页',
                            'href': 'https://github.com/CNFeffery/awesome-feffery-dash',
                            'target': '_blank',
                        },
                        {
                            'title': 'feffery-antd-components文档首页',
                            'href': '/',
                            'target': '_blank',
                        },
                        {
                            'title': 'AntdBreadcrumb文档页',
                            'href': '/AntdBreadcrumb',
                            'target': '_blank',
                        },
                    ]
                ),
                fac.AntdBreadcrumb(
                    items=[
                        {
                            'title': 'awesome-feffery-dash仓库主页',
                            'href': 'https://github.com/CNFeffery/awesome-feffery-dash',
                            'target': '_blank',
                            'icon': 'antd-github',
                        },
                        {
                            'title': 'feffery-antd-components文档首页',
                            'href': '/',
                            'target': '_blank',
                            'icon': 'antd-home',
                        },
                        {
                            'title': 'AntdBreadcrumb文档页',
                            'href': '/AntdBreadcrumb',
                            'target': '_blank',
                            'icon': 'fc-approval',
                        },
                    ]
                ),
                fac.AntdBreadcrumb(
                    items=[
                        {
                            'title': 'awesome-feffery-dash仓库主页',
                            'href': 'https://github.com/CNFeffery/awesome-feffery-dash',
                            'target': '_blank',
                            'menuItems': [
                                {
                                    'title': 'feffery-utils-components',
                                    'href': 'https://github.com/CNFeffery/feffery-utils-components',
                                    'target': '_blank',
                                },
                                {
                                    'title': 'feffery-antd-charts',
                                    'href': 'https://github.com/CNFeffery/feffery-antd-charts',
                                    'target': '_blank',
                                },
                                {
                                    'title': 'feffery-markdown-components',
                                    'href': 'https://github.com/CNFeffery/feffery-markdown-components',
                                    'target': '_blank',
                                },
                            ],
                        },
                        {
                            'title': 'feffery-antd-components文档首页',
                            'href': '/',
                            'target': '_blank',
                        },
                        {
                            'title': 'AntdBreadcrumb文档页',
                            'href': '/AntdBreadcrumb',
                            'target': '_blank',
                        },
                    ]
                ),
                fac.AntdBreadcrumb(
                    id='breadcrumnb-demo',
                    items=[
                        {'title': '首页', 'key': '首页'},
                        {
                            'title': '下属页面1',
                            'key': '下属页面1',
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
