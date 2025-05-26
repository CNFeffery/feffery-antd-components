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
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(
                    tooltip='气泡卡片信息示例'
                ),
                fac.AntdFloatButton(
                    tooltip={
                        'title': '气泡卡片信息示例',
                        'color': 'blue',
                        'placement': 'left',
                    }
                ),
            ],
            style=style(right=100),
        )
    ],
    style=style(position='relative', height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
