from dash import Dash, html
from feffery_dash_utils.style_utils import style

import feffery_antd_components as fac


def test_basic_usage(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        fac.AntdButton(fac.__version__, id='button-demo', type='primary'),
        style=style(padding=50),
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(
        '#button-demo',
        fac.__version__,
    )
