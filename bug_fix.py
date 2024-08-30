import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdAnchor(
            linkDict=[
                {
                    'title': '报告信息',
                    'href': '#edit_permeate_report_info',
                },
                {
                    'title': '测试范围',
                    'href': '#edit_permeate_report_test_range',
                },
                {
                    'title': '客户信息',
                    'href': '#edit_permeate_report_customer_info',
                },
                {
                    'title': '测试方信息',
                    'href': '#edit_permeate_report_tester_info',
                },
            ],
            align='left',
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
