if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSegmented(
        options=[
            {'value': i, 'icon': icon}
            for i, icon in enumerate(
                [
                    'antd-carry-out',
                    'antd-branches',
                    'antd-team',
                    'antd-send',
                    'antd-setting',
                ]
            )
        ],
        defaultValue=0,
        vertical=True,
    ),
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
