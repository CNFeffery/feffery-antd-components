if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSpace(
        [
            fac.AntdSpace(
                [
                    fac.AntdButton(
                        variant,
                        color=color,
                        variant=variant,
                        size='small',
                    )
                    for variant in [
                        'outlined',
                        'dashed',
                        'solid',
                        'filled',
                        'text',
                        'link',
                    ]
                ]
            )
            for color in ['default', 'primary', 'danger']
        ],
        direction='vertical',
    ),
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
