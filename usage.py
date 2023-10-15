import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                fac.AntdButton(
                    '按钮测试',
                    type='primary',
                    ghost=True
                ),
                fac.AntdSelect(
                    options=[
                        {
                            'label': f'item{i}',
                            'value': f'item{i}'
                        }
                        for i in range(1, 6)
                    ],
                    style={
                        'width': 150
                    },
                    autoFocus=True
                )
            ],
            style={
                'padding': 20,
                'background': 'lightgrey'
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
