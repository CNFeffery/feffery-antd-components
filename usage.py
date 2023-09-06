import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDropdown(
            id='dropdown-demo',
            title='触发点',
            arrow=True,
            placement='topCenter',
            menuItems=[
                {
                    'title': '子页面1',
                    'key': '子页面1',
                },
                {
                    'title': '子页面2',
                    'key': '子页面2',
                },
                {
                    'isDivider': True
                },
                {
                    'title': '子页面3-1',
                    'key': '子页面3-1'
                },
                {
                    'title': '子页面3-2',
                    'key': '子页面3-2'
                }
            ],
            batchPropsNames=['nClicks', 'clickedKey']
        ),

        html.Pre(
            id='dropdown-demo-output'
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('dropdown-demo-output', 'children'),
    Input('dropdown-demo', 'batchPropsValues'),
    prevent_initial_call=True
)
def dropdown_demo_callback(batchPropsValues):

    return json.dumps(
        batchPropsValues,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
