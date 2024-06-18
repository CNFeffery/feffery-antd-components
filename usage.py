import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdAvatarGroup(
        [
            fac.AntdAvatar(
                mode='text',
                text='F',
                style={'background': background},
            )
            for background in [
                '#d29200',
                '#ffb900',
                '#fff100',
                '#d83b01',
                '#ea4300',
                '#00188f',
                '#004b50',
            ]
        ],
        size='large',
    ),
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
