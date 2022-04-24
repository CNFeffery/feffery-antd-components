import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)


@app.callback(
    Output('segmented-output-demo', 'children'),
    Input('segmented-demo', 'value')
)
def segmented_demo(value):

    return value


app.layout = html.Div(
    [
        fac.AntdSegmented(
            id='segmented-demo',
            block=True,
            options=[
                {
                    'label': f'选项{i}',
                    'value': i
                }
                for i in range(5)
            ]
        ),
        fac.AntdText(
            id='segmented-output-demo'
        ),
        fac.AntdMessage(
            content='AntdMessage top参数测试',
            top=400,
            duration=1000
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
