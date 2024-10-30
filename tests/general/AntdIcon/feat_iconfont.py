if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdSpace(
    [
        fac.AntdIcon(icon='antd-bug'),
        fac.AntdIcon(
            mode='iconfont',
            scriptUrl='//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
            icon='icon-facebook',
            style=style(color='#1877F2'),
        ),
        *[
            fac.AntdIcon(
                mode='iconfont',
                scriptUrl=[
                    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
                    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
                ],
                icon=icon,
            )
            for icon in [
                'icon-javascript',
                'icon-java',
                'icon-shoppingcart',
                'icon-python',
            ]
        ],
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
