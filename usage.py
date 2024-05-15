import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            items=[
                {
                    'label': f'标签页{i}',
                    'key': f'标签页{i}',
                }
                for i in range(1, 6)
            ],
            indicator={'align': 'start', 'size': -10},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
