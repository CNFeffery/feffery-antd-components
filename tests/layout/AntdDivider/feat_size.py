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
                    'label': size,
                    'key': size,
                    'children': [
                        'test content',
                        fac.AntdDivider(size=size),
                        'test content',
                        fac.AntdDivider(size=size),
                        'test content',
                    ],
                }
                for size in ['small', 'middle', 'large']
            ],
            centered=True,
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
