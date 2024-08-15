import dash
from dash import html
import feffery_antd_components as fac
from datetime import datetime, timedelta
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDateRangePicker(
            placeholder=['日期范围上限为近180天', ''],
            disabledDatesStrategy=[  # 禁用策略
                {
                    'mode': 'le',  # 小于某个日子
                    'target': 'specific-date',
                    'value': (
                        datetime.now() + timedelta(days=7)
                    ).strftime('%Y-%m-%d'),
                },
                # {
                #     'mode': 'ge',  # 大于等于某个日子
                #     'target': 'specific-date',
                #     'value': datetime.now().strftime(
                #         '%Y-%m-%d'
                #     ),
                # },
            ],
            id='test',
            style={'width': '20rem'},
        )
    ],
    style=style(padding=100),
)


if __name__ == '__main__':
    app.run(debug=True, port=8050)
