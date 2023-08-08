import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDrawer(
            '测试内容'*10000,
            id='drawer-id-test',
            placement='right',
            visible=True,
            footer=html.Div(
                style={
                    'height': 36
                }
            ),
            width='50vw',
            footerStyle={
                'background': 'lightgrey'
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
