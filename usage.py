import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDrawer(
            visible=True,
            title='标题示例',
            footer=html.Div('页脚测试'),
            styles={
                'header': {
                    'background': 'grey'
                }
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
