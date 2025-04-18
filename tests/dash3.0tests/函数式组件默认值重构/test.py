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
        fac.AntdButton(
            '测试',
            id='button-demo',
            type='primary',
            **{'data-test': 'test'},
        ),
        fac.AntdTag(
            content='测试',
            href='/test',
            **{'data-test': 'test'},
        ),
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
