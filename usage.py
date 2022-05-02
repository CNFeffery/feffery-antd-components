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

        fac.AntdCheckCardGroup(
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
            multiple=True
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
