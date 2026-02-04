if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdAlert(
                message='test alert',
                type='info',
                showIcon=True,
                icon='😀',
            ),
            fac.AntdAlert(
                message='test alert',
                type='info',
                showIcon=True,
                icon=fac.AntdIcon(icon='fc-like'),
            ),
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
