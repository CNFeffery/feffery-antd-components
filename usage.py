import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDropdown(
            fac.AntdAvatar(
                icon='antd-user',
                size='large',
                style={
                    'background': '#1890ff',
                    'cursor': 'pointer'
                }
            ),
            menuItems=[
                {
                    'title': fac.AntdSpace(
                        [
                            fac.AntdAvatar(
                                text='我',
                                mode='text',
                                style={
                                    'background': '#2f54eb'
                                }
                            ),
                            fac.AntdSpace(
                                [
                                    '用户示例',
                                    fac.AntdTag(
                                        content='vip',
                                        color='red'
                                    )
                                ],
                                direction='vertical',
                                size=0
                            )
                        ]
                    )
                }
            ],
            trigger='hover',
            placement='bottomRight'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
