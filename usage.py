import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTooltip(
            fac.AntdProgress(
                percent=60,
                success={
                    'percent': 30
                },
                style={
                    'width': 300
                }
            ),
            title='3 done / 3 in progress / 4 to do'
        ),

        fac.AntdTooltip(
            fac.AntdProgress(
                percent=60,
                success={
                    'percent': 30
                },
                type='circle'
            ),
            title='3 done / 3 in progress / 4 to do'
        ),

        fac.AntdTooltip(
            fac.AntdProgress(
                percent=60,
                success={
                    'percent': 30
                },
                type='dashboard'
            ),
            title='3 done / 3 in progress / 4 to do'
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
