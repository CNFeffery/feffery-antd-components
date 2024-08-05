from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdImageGroup(
            [
                fac.AntdImage(
                    src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                    height=300,
                ),
                fac.AntdImage(
                    src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                    height=300,
                ),
            ],
            items=[
                'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
            ],
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
