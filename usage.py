import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSwitch(
                    id='toggle-preview-visible',
                    checked=False,
                ),
                fac.AntdImage(
                    id='image-demo',
                    src=[
                        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                    ],
                    height=200,
                    multiImageMode='unfold'
                ),
            ]
        )
    ],
    style=style(padding=100),
)


@app.callback(
    [
        Output('toggle-preview-visible', 'checked'),
        Output('image-demo', 'previewVisible'),
    ],
    [
        Input('toggle-preview-visible', 'checked'),
        Input('image-demo', 'previewVisible'),
    ],
    prevent_initial_call=True,
)
def demo(checked, previewVisible):
    if dash.ctx.triggered_id == 'toggle-preview-visible':
        return dash.no_update, checked

    return previewVisible, dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
