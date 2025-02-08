import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    html.Div(
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '按钮示例', type='primary', size=size
                )
                for size in ['large', 'middle', 'small']
            ],
            align='center',
            style=style(
                position='fixed',
                left='50%',
                top='50%',
                transform='translate(-50%, -50%)',
            ),
        ),
        style=style(padding=50),
    )
)

if __name__ == '__main__':
    app.run(debug=True)
