import time

from dash import Dash, html
from feffery_dash_utils.style_utils import style
from selenium.webdriver.common.by import By

import feffery_antd_components as fac


def test_locale_french(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        fac.AntdSpace(
            [
                fac.AntdEmpty(locale='fr-fr'),
                fac.AntdConfigProvider(fac.AntdEmpty(), locale='fr-fr'),
            ],
            direction='vertical',
            style=style(width='100%'),
        ),
        style=style(padding=50),
    )

    dash_duo.start_server(app)

    time.sleep(1)

    descriptions = dash_duo.driver.find_elements(
        By.XPATH, '//div[contains(@class, "ant-empty-description")]'
    )
    assert len(descriptions) == 2
    for desc in descriptions:
        assert desc.text == 'Aucune donnée'
