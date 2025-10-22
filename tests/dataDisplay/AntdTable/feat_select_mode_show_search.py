if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'select示例1',
                    'dataIndex': 'select示例1',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'width': 'calc(100% / 3)',
                },
                {
                    'title': 'select示例2',
                    'dataIndex': 'select示例2',
                    'renderOptions': {
                        'renderType': 'select'
                    },
                    'width': 'calc(100% / 3)',
                },
            ],
            data=[
                {
                    'select示例1': {
                        'options': [
                            {
                                'label': f'选项{j}',
                                'value': f'选项{j}',
                            }
                            for j in range(5)
                        ],
                        'allowClear': True,
                        'placeholder': '请选择',
                    },
                    'select示例2': {
                        'options': [
                            {
                                'label': f'选项{j}',
                                'value': f'选项{j}',
                            }
                            for j in range(5)
                        ],
                        'mode': 'multiple',
                        'allowClear': True,
                        'placeholder': '请选择',
                        'showSearch': False,
                    },
                }
                for i in range(1, 4)
            ],
            bordered=True,
            tableLayout='fixed',
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
