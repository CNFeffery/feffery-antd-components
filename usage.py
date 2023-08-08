import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdIcon(
            icon='antd-menu-fold',
            style={
                'color': '#93a4b6',
                'position': 'absolute',
                'top': 16,
                'left': 20,
                'cursor': 'pointer',
                'padding': '6px 14px',
                'borderRadius': 6
            },
            className={
                '&:hover': {
                    'background': '#f2f3f5'
                }
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
