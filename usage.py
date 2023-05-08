import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '按钮测试',
                    type='primary'
                )
            ] * 3,
            customSplit='😎',
            style={
                'display': 'block',
                'marginBottom': 20
            }
        ),

        fac.AntdCompact(
            [
                *[
                    fac.AntdButton(
                        '按钮测试'
                    )
                ] * 3,
                fac.AntdSelect(
                    placeholder='下拉选择测试',
                    options=[
                        {
                            'label': f'选项{i}',
                            'value': f'选项{i}'
                        }
                        for i in range(5)
                    ]
                )
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
