if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    **{f'字段{i}': '示例内容' for i in range(1, 6)},
                    'key': f'row-{row + 1}',
                }
                for row in range(3)
            ],
            titlePopoverInfo={
                f'字段{i}': {
                    'title': f'字段{i}说明',
                    'content': f'这是字段{i}的说明巴拉巴拉巴拉',
                    'placement': 'top',
                }
                for i in range(1, 6)
            },
        ),
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
