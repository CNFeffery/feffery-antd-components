import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            options=[
                {'label': f'选项{i}', 'value': f'选项{i}'}
                for i in range(1, 10)
            ],
            defaultValue=['选项1', '选项2'],
            mode='multiple',
            style={'width': '100%'},
        ),
        fac.AntdSelect(
            options=[
                {'label': f'选项{i}', 'value': f'选项{i}'}
                for i in range(1, 10)
            ],
            mode='multiple',
            value=None,
            style={'width': '100%'},
        ),
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
