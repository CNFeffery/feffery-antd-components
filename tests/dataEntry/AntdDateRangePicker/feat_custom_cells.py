if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdText('日期：精确匹配'),
                fac.AntdDateRangePicker(
                    style={'width': 200},
                    customCells=[
                        {
                            'year': 2024,
                            'month': 9,
                            'date': 4,
                            'style': {
                                'border': '1px solid #389e0d',
                                'borderRadius': '50%',
                            },
                        }
                    ],
                ),
                fac.AntdText('日期：年份通配'),
                fac.AntdDateRangePicker(
                    style={'width': 200},
                    customCells=[
                        {
                            'month': 9,
                            'date': 4,
                            'style': {
                                'border': '1px solid #389e0d',
                                'borderRadius': '50%',
                            },
                        }
                    ],
                ),
                fac.AntdText('日期：月份通配'),
                fac.AntdDateRangePicker(
                    style={'width': 200},
                    customCells=[
                        {
                            'year': 2024,
                            'date': 4,
                            'style': {
                                'border': '1px solid #389e0d',
                                'borderRadius': '50%',
                            },
                        }
                    ],
                ),
                fac.AntdText('日期：年份+月份通配'),
                fac.AntdDateRangePicker(
                    style={'width': 200},
                    customCells=[
                        {
                            'date': 4,
                            'style': {
                                'border': '1px solid #389e0d',
                                'borderRadius': '50%',
                            },
                        }
                    ],
                ),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
