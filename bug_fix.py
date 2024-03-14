import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdAvatar(
            text='测试',
            mode='text',
            size=48,
            style={
                'background': '#2e6af8',
                'fontSize': 18
            }
        ),
        fac.AntdCheckCardGroup(
            [
                fac.AntdCheckCard(
                    f'选项{i}',
                    value=i
                )
                for i in range(1, 6)
            ],
            defaultValue=3
        ),
        fac.AntdPageHeader(
            title='页头标题示例',
            subTitle='页头副标题示例'
        ),
        fac.AntdWatermark(
            html.Div(
                style={
                    'height': '500px',
                    'boxShadow': '0 6px 16px rgb(107 147 224 / 14%)',
                    'marginBottom': '25px'
                }
            ),
            content='水印内容测试',
            fontSize=28
        )
    ]
)


if __name__ == '__main__':
    app.run(debug=True)
