import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            options=[f'选项{i}' for i in range(1, 6)],
            optionFilterMode='remote-match',
            style={'width': 200},
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
