import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

demo_value = None

app.layout = html.Div(
    [
        fac.AntdSelect(
            options=[
                {
                    'label': f'option{i}',
                    'value': f'option{i}',
                }
                for i in range(1, 6)
            ],
            defaultValue=demo_value,
            mode='multiple',
            style={
                'width': 150
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
