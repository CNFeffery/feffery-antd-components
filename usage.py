import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPageHeader(
            fac.AntdSpace(
                [
                    fac.AntdButton('按钮1'),
                    fac.AntdButton('按钮2', type='primary'),
                    fac.AntdSwitch(
                        checkedChildren='打开',
                        unCheckedChildren='关闭'
                    ),
                    fac.AntdBadge(status='processing')
                ]
            ),
            title='页头标题示例',
            subTitle='页头副标题示例'
        ),

        fac.AntdPageHeader(
            id='page-header-demo',
            title='页头标题示例',
            subTitle='页头副标题示例',
            historyBackDisabled=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('page-header-demo', 'children'),
    Input('page-header-demo', 'backClicks')
)
def page_header_demo_callback(backClicks):
    return [
        fac.AntdText('backClicks: ', strong=True),
        fac.AntdText(backClicks)
    ]


if __name__ == '__main__':
    app.run(debug=True)
