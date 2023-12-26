import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdImage(
                    src='https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
                    preview={
                        'mask': '点我预览'
                    },
                    width=300
                ),
                fac.AntdImageGroup(
                    fac.AntdSpace(
                        [
                            fac.AntdImage(
                                src='https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
                                preview={
                                    'mask': '点我预览'
                                },
                                width=150
                            )
                        ] * 3
                    )
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
