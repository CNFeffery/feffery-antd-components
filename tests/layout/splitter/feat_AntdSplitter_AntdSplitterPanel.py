if True:
    import sys

    sys.path.append('../../../')
    import feffery_antd_components as fac
    from dash import Dash, html
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)


def desc(text):
    return fac.AntdFlex(
        fac.AntdTitle(
            text,
            type='secondary',
            level=5,
            style=style(whiteSpace='nowrap'),
        ),
        justify='center',
        align='center',
        style=style(height='100%'),
    )


app.layout = html.Div(
    [
        fac.AntdSplitter(
            items=[
                {
                    'children': desc('First'),
                    'size': '40%',
                    'min': '20%',
                    'max': '70%',
                },
                {'children': desc('Second')},
            ],
            style=style(
                height=200,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
        fac.AntdSplitter(
            [
                fac.AntdSplitterPanel(
                    desc('First'),
                    size='40%',
                    min='20%',
                    max='70%',
                ),
                fac.AntdSplitterPanel(desc('Second')),
            ],
            style=style(
                height=200,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
    ]
)


if __name__ == '__main__':
    app.run(debug=True)
