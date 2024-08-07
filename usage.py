from dash import Dash, html
import feffery_antd_components as fac
from dash.dependencies import Input, Output


app = Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdText(id='image-demo-current'),
                fac.AntdImage(
                    id='image-demo',
                    src=[
                        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                    ],
                    multiImageMode='unfold',
                    height=300,
                    toolbarExtra=[
                        fac.AntdIcon(
                            icon='antd-download',
                            className='ant-image-preview-operations-operation',
                            style={
                                'margin-inline-start': 12
                            },
                        )
                    ],
                    previewVisible=True,
                ),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
