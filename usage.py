import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdColorPicker(
                    mode='single',
                    showText=True,
                ),
                fac.AntdColorPicker(
                    mode='gradient',
                    showText=True,
                ),
                fac.AntdColorPicker(
                    mode=['single', 'gradient'],
                    showText=True,
                ),
            ],
            direction='vertical',
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
