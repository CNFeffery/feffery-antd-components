import dash
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)


app.layout = html.Div(
    [

        fac.AntdAccordion(
            [
                fac.AntdAccordionItem(
                    f'内容测试{i}',
                    title=f'手风琴项{i}',
                    key=i
                )
                for i in range(1, 11)
            ],
            ghost=True,
            accordion=True,
            defaultActiveKey=[5, 7]
        ),

        fac.AntdDivider(
            isDashed=True
        ),

        fac.AntdCheckCardGroup(
            fac.AntdSpace(
                [
                    fac.AntdCheckCard(
                        fac.AntdStatistic(
                            title='统计数值示例',
                            value=1332971
                        ),
                        value='option1'
                    ),
                    fac.AntdCheckCard(
                        fac.AntdStatistic(
                            title='统计数值示例',
                            value=1332971
                        ),
                        value='option2'
                    ),
                    fac.AntdCheckCard(
                        fac.AntdStatistic(
                            title='统计数值示例',
                            value=1332971
                        ),
                        value='option3'
                    ),
                    fac.AntdCheckCard(
                        fac.AntdStatistic(
                            title='统计数值示例',
                            value=1332971
                        ),
                        value='option4'
                    )
                ],
                size=5
            ),
            id='check-card-group-demo',
            multiple=True
        ),
        html.Div(
            id='check-card-group-demo-output'
        )
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('check-card-group-demo-output', 'children'),
    Input('check-card-group-demo', 'value')
)
def check_card_group_demo_output(value):
    return '当前选中的值为：{}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
