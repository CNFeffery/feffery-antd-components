import dash
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdLayout(
    [
        fac.AntdSider(
            collapsible=True,
            # collapsed=False,
            style={'backgroundColor': 'rgb(240, 242, 245)'},
        ),
        fac.AntdContent(
            fac.AntdCenter(
                fac.AntdTitle(
                    '内容区示例',
                    level=2,
                    style={'margin': '0'},
                ),
                style={
                    'height': '100%',
                },
            ),
            style={'backgroundColor': 'white'},
        ),
    ],
    style={'height': '100vh'},
)


if __name__ == '__main__':
    app.run(debug=True)
