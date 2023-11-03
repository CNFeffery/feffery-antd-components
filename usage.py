import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSteps(
            type='inline',
            steps=[
                {
                    'title': f'步骤{i}'
                }
                for i in range(1, 4)
            ],
            current=0,
            allowClick=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
