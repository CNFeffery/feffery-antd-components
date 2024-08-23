import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdConfigProvider(
            fac.AntdButton(
                '按钮示例',
                size='large',
                className={
                    'background': 'linear-gradient(135deg,#6b73ff,#000dff)',
                    'color': 'white',
                    'transition': 'transform 0.2s ease',
                    # 悬停状态
                    '&:hover': {
                        'background': 'linear-gradient(135deg,#6b73ff,#000dff)',
                        'color': 'white',
                        'borderColor': 'white',
                    },
                    # 聚焦状态
                    '&:focus': {
                        'background': 'linear-gradient(135deg,#6b73ff,#000dff)',
                        'color': 'white',
                        'borderColor': 'white',
                    },
                    # 点击状态
                    '&:active': {
                        'background': 'linear-gradient(135deg,#6b73ff,#000dff)',
                        'color': 'white',
                        'borderColor': 'white',
                        'transform': 'translateY(3px)',
                    },
                },
            ),
            enableLayer=True,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
