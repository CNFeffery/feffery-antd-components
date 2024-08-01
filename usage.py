import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdImage(
            width=200,
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            toolbarExtra=[
                fac.AntdIcon(
                    icon='antd-download',
                    className='ant-image-preview-operations-operation',
                    style={'marginLeft': 12},
                ),
                fac.AntdIcon(
                    icon='antd-bug',
                    className='ant-image-preview-operations-operation',
                    style={'marginLeft': 12},
                ),
            ],
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
