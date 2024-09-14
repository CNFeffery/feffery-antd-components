import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdRow(
            [
                fac.AntdCol(
                    fac.AntdCenter(
                        f'col{i}',
                        style={
                            'backgroundColor': '#1677ff'
                            if i % 2 == 0
                            else '#1677ffbf',
                            'color': 'white',
                            'height': 100,
                        },
                    ),
                    span=6,
                )
                for i in range(1, 5)
            ],
            gutter=10,
            align='center',
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
