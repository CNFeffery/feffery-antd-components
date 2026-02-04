if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDescriptions(
            items=[
                {
                    'label': 'item1',
                    'children': 'default span',
                },
                {
                    'label': 'item2',
                    'children': 'span="filled"',
                    'span': 'filled',
                },
                {
                    'label': 'item3',
                    'children': 'span="filled"',
                    'span': 'filled',
                },
                {
                    'label': 'item4',
                    'children': 'default span',
                },
            ],
            bordered=True,
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
