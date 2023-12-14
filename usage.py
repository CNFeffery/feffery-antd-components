import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdConfigProvider(
            fac.AntdCarousel(
                [
                    fac.AntdCenter(
                        fac.AntdImage(
                            src=image,
                            preview=False,
                            height=300
                        )
                    )
                    for image in [
                        'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
                        'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg',
                        'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg',
                        'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg'
                    ]
                ],
                lazyLoad=True
            ),
            algorithm='dark'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
