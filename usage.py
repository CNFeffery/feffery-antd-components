import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)


app.layout = html.Div(
    [

        fac.AntdCheckCard(
            fac.AntdText(
                '君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。'
            )
        ),

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
