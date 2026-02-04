if True:
    import sys

    sys.path.append('../../../')
    import random

    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table',
            columns=[
                {
                    'dataIndex': f'字段{i}',
                    'title': f'字段{i}',
                }
                for i in range(10)
            ],
            data=[{f'字段{i}': random.randint(1, 100) for i in range(10)} for _ in range(10)],
            bordered=True,
            rowClassName={'func': '(record, index) => `row-${index}`'},
        ),
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
