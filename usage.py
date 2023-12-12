import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdImageGroup(
            [
                fac.AntdRow(
                    [
                        fac.AntdCol(
                            '无关内容测试'
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                                width=200
                            )
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                                width=200
                            )
                        )
                    ]
                ),
                fac.AntdRow(
                    [
                        fac.AntdCol(
                            '无关内容测试'
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                                width=200
                            )
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                                width=200
                            )
                        )
                    ],
                    justify='end'
                ),
                fac.AntdRow(
                    [
                        fac.AntdCol(
                            '无关内容测试'
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                                width=200
                            )
                        ),
                        fac.AntdCol(
                            fac.AntdImage(
                                src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                                width=200
                            )
                        )
                    ],
                    justify='space-between'
                )
            ]
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
