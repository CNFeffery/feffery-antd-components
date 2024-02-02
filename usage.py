import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdSelect(
                options=[
                    {
                        'label': f'选项{i}',
                        'value': f'选项{i}'
                    }
                    for i in range(1, 6)
                ],
                bordered=True,
                variant='filled',
                style={
                    'width': 200
                }
            )
        ],
        direction='vertical'
    ),
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
