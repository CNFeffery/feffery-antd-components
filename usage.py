import uuid
import dash
from dash import html, Patch
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '新增',
                    id='add-new-item',
                    type='primary'
                ),
                fac.AntdTabs(
                    id='demo-tabs',
                    items=[]
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-tabs', 'items'),
    Input('add-new-item', 'nClicks'),
    prevent_initial_call=True
)
def demo(nClicks):

    p = Patch()
    p.append(
        {
            'label': '标签页',
            'key': str(uuid.uuid4()),
            'children': '新标签页'
        }
    )

    return p


if __name__ == '__main__':
    app.run(debug=True)
