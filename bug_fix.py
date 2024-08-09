import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdImageGroup(
            fac.AntdSpace(
                [
                    fac.AntdSpace(
                        [
                            fac.AntdImage(
                                src=f'/assets/示例图片{i}.png',
                                height=100,
                            )
                            for i in range(2, 5)
                        ]
                    ),
                    fac.AntdSpace(
                        [
                            fac.AntdImage(
                                src=f'/assets/示例图片{i}.png',
                                height=100,
                            )
                            for i in range(5, 7)
                        ]
                    ),
                    fac.AntdSpace(
                        [
                            fac.AntdImage(
                                src=f'/assets/示例图片{i}.png',
                                height=100,
                            )
                            for i in range(7, 9)
                        ]
                    ),
                ],
                direction='vertical',
                style={'width': '100%'},
            )
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True, dev_tools_serve_dev_bundles=True)
