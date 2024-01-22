import dash
from dash import html
from datetime import datetime
import feffery_antd_components as fac
import feffery_utils_components as fuc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fuc.FefferyStyle(
            rawStyle='''
.demo-column {
    background: #bae7ff;
}
'''
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': 'int型示例',
                    'dataIndex': 'int型示例',
                    'className': 'demo-column'
                },
                {
                    'title': 'float型示例',
                    'dataIndex': 'float型示例'
                },
                {
                    'title': 'str型示例',
                    'dataIndex': 'str型示例'
                },
                {
                    'title': '日期时间示例',
                    'dataIndex': '日期时间示例'
                },
            ],
            data=[
                {
                    'int型示例': 123,
                    'float型示例': 1.23,
                    'str型示例': '示例字符',
                    '日期时间示例': datetime.now()
                }
            ] * 3,
            bordered=True,
            tableLayout='fixed'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
