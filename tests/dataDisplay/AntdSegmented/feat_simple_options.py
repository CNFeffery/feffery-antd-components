if True:
    import sys

    sys.path.append('../../../')
    import dash
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSpace(
        [
            fac.AntdSegmented(
                options=[
                    'antd-carry-out',
                    'antd-branches',
                    'antd-team',
                    'antd-send',
                    'antd-setting',
                ],
                defaultValue='antd-carry-out',
            ),
            fac.AntdSegmented(
                options=[
                    {'label': i, 'value': i}
                    for i in [
                        'Daily',
                        'Weekly',
                        'Monthly',
                        'Quarterly',
                        'Yearly',
                    ]
                ],
                defaultValue='Daily',
            ),
        ]
    ),
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
