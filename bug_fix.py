import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTable(
                    id='main-table-user-manager',
                    columns=[
                        {
                            'title': '密码',
                            'dataIndex': '密码',
                            'editable': True,
                            'width': 'calc(100%*2 / 10)'
                        },
                        {
                            'title': '应用权限',
                            'dataIndex': '应用权限',
                            'renderOptions': {
                                'renderType': 'select'
                            },
                            'width': 'calc(100%*4 / 10)'
                        },
                    ],
                    data=[
                        {
                            '密码': '11111',
                            '应用权限': {
                                'options': [
                                    {
                                        'label': f'选项{j}',
                                        'value': f'选项{j}'
                                    }
                                    for j in range(5)
                                ],
                                'mode': 'multiple',
                                'allowClear': True,
                                'placeholder': '请选择'
                            },
                        }
                        for i in range(1, 4)
                    ],
                    bordered=True,
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': 30
    }
)

if __name__ == '__main__':
    app.run(debug=True)
