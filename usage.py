from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdText(id='image-group-demo-current'),
                fac.AntdImageGroup(
                    fac.AntdImage(
                        src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                        height=300,
                    ),
                    id='image-group-demo',
                    items=[
                        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                    ],
                    current=1,
                    toolbarExtra=[
                        fac.AntdIcon(
                            icon='antd-download',
                            className='ant-image-preview-operations-operation',
                            style={
                                'margin-inline-start': 12
                            },
                        )
                    ],
                ),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
