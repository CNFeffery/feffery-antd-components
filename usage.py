import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdButton(
            '按钮测试',
            type='primary',
            icon=fac.AntdIcon(icon='pi-polygon'),
            styles={
                'icon': {
                    'transform': 'translateY(3px)',
                    'margin-inline-end': 4
                }
            }
        )
    ],
    style={
        'padding': '50px 100px',
        'height': 10000
    }
)

if __name__ == '__main__':
    app.run(debug=True)
