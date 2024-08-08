import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTable(
                    id='table',
                    columns=[
                        {
                            'title': f'字段{i}',
                            'dataIndex': f'字段{i}',
                            'width': '20%',
                        }
                        for i in range(1, 6)
                    ],
                    data=[
                        {
                            f'字段{i}': '示例内容'
                            for i in range(1, 6)
                        }
                    ]
                    * 5,
                    bordered=True,
                    rowSelectionType='checkbox',
                    summaryRowContents=[
                        {
                            'content': fac.AntdText(
                                '第1列总结', strong=True
                            ),
                            'align': 'center',
                        },
                        {
                            'content': fac.AntdText(
                                '第2到4列总结', strong=True
                            ),
                            'colSpan': 3,
                            'align': 'center',
                        },
                        {
                            'content': fac.AntdText(
                                '第5列总结', strong=True
                            ),
                            'align': 'center',
                        },
                    ],
                    summaryRowBlankColumns=1,
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=100),
)


if __name__ == '__main__':
    app.run(debug=True, port=8050)
