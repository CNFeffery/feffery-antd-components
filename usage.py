import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [


        fac.AntdCheckCardGroup(
            [
                fac.AntdCheckCard(
                    fac.AntdStatistic(
                        title='统计数值示例',
                        value=1332971
                    ),
                    value=f'option{i}'
                )
                for i in range(3)
            ],
            multiple=True
        ),

        fac.AntdCheckCard(
            fac.AntdStatistic(
                title='统计数值示例',
                value=1332971
            )
        ),

        fac.AntdCard(
            [
                fac.AntdCardGrid(
                    f'网格{i}',
                    style={
                        'width': '25%',
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center'
                    }
                )
                for i in range(10)
            ],
            title=fac.AntdText(
                '卡片网格示例',
                strong=True
            ),
            style={
                'width': '400px',
                'marginBottom': '10px'
            }
        ),
        fac.AntdAccordion(
            items=[
                {
                    'children': fac.AntdTag(
                        content=f'手风琴项{i}测试'
                    ),
                    'title': fac.AntdText(
                        f'手风琴项{i}',
                        strong=True,
                        copyable=True
                    ),
                    'key': str(i),
                    'extra': fac.AntdButton(
                        f'手风琴项{i}测试',
                        type='primary',
                        size='small'
                    )
                }
                for i in range(5)
            ],
            collapsible='header',
            bordered=True
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
