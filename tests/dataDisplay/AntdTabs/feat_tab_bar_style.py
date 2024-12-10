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
        fac.AntdTabs(
            items=[
                {
                    'key': f'标签页{i}',
                    'label': f'标签页{i}',
                    'icon': fac.AntdIcon(
                        icon='antd-function'
                    ),
                    'children': fac.AntdCenter(
                        f'这是标签页{i}的内容示例',
                        style={
                            'fontSize': 18,
                            'background': f'rgba(28, 126, 214, calc(1 - 0.2 * {i}))',
                            'height': 200,
                        },
                    ),
                }
                for i in range(1, 6)
            ],
            tabBarStyle=style(background='#d9d9d9'),
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
