if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdSpace(
                [
                    f'percent={percent} {align} {type}',
                    fac.AntdProgress(
                        percent=percent,
                        percentPosition={
                            'align': align,
                            'type': type,
                        },
                        size=[500, 20],
                    ),
                ]
            )
            for percent in [0, 33, 100]
            for align in ['start', 'center', 'end']
            for type in ['inner', 'outer']
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
