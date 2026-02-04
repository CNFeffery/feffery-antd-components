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
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-question')),
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-setting')),
            ],
            icon=fac.AntdIcon(icon='antd-up'),
            trigger='click',
            placement='top',
            style=style(bottom='calc(50% + 50px)', right='50%'),
        ),
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-question')),
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-setting')),
            ],
            icon=fac.AntdIcon(icon='antd-right'),
            trigger='click',
            placement='right',
            style=style(bottom='50%', right='calc(50% - 50px)'),
        ),
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-question')),
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-setting')),
            ],
            icon=fac.AntdIcon(icon='antd-down'),
            trigger='click',
            placement='bottom',
            style=style(bottom='calc(50% - 50px)', right='50%'),
        ),
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-question')),
                fac.AntdFloatButton(icon=fac.AntdIcon(icon='antd-setting')),
            ],
            icon=fac.AntdIcon(icon='antd-left'),
            trigger='click',
            placement='left',
            style=style(bottom='50%', right='calc(50% + 50px)'),
        ),
    ],
    style=style(position='relative', height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
