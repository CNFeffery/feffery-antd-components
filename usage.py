import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdMentions(
            options=[
                {
                    'label': f'用户{c}',
                    'value': f'用户{c}'
                }
                for c in list('abcdef')
            ],
            autoFocus=True,
            style={
                'width': 200
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
