import dash
import feffery_antd_components as fac
from dash import Patch
from dash.dependencies import Input, Output


app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True,
    update_title=None,
)

app.layout = (
    fac.AntdButton(children='ADD', id='add'),
    fac.AntdTabs(
        id='tabs-container',
        items=[
            # {
            #     'label': '首页',
            #     'key': '首页',
            #     'closable': True,
            #     'children': 'I am robot',
            # }
        ],
        type='editable-card',
        className={
            'width': '100%',
            'paddingLeft': '15px',
            'paddingRight': '15px',
        },
    ),
)


@app.callback(
    Output('tabs-container', 'items'),
    Input('add', 'nClicks'),
    prevent_initial_call=True,
)
def callback_func(nClicks):
    print(nClicks)
    p = Patch()
    p.append(
        {
            'label': str(nClicks),
            'key': str(nClicks),
            'closable': True,
            'children': 'I am robot',
        }
    )
    return p


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80, debug=True)
