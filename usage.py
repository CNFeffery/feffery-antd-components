import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)


app.layout = html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': 'ellipsis内容省略示例',
                    'dataIndex': 'ellipsis内容省略示例',
                    'renderOptions': {
                        'renderType': 'ellipsis'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'ellipsis内容省略示例': '这是一段废话，用来演示超长内容再渲染巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '250px'
            }
        )
    ] * 100,
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
