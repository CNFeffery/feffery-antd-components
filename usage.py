import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Pre(id='output'),
        fac.AntdTransfer(
            dataSource=[
                {
                    'key': i,
                    'title': f'选项{i}'
                }
                for i in range(1, 10)
            ],
            targetKeys=[2, 3, 4],
            oneWay=False,
            selectionsIcon=fac.AntdIcon(icon='antd-setting')
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
