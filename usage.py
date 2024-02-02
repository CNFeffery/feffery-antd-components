import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdSegmentedColoring(
                min=-10,
                max=10,
                breakpoints=[0, 1, 2, 3, 4, 5],
                colors=[
                    "#deecf9",
                    "#71afe5",
                    "#2b88d8",
                    "#0078d4",
                    "#106ebe"
                ],
                bordered=True,
                variant='filled',
                size='small'
            ),
        ],
        direction='vertical'
    ),
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
