import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '触发对话框',
            type='primary',
            id='modal-demo-trigger-1'
        ),

        fac.AntdModal(
            fac.AntdText('对话框内容测试'),
            id='modal-demo-1',
            visible=False,
            title=html.Span(
                [
                    fac.AntdIcon(icon='fc-search'),
                    '标题测试'
                ]
            ),
            renderFooter=True
        )
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('modal-demo-1', 'visible'),
    Input('modal-demo-trigger-1', 'nClicks'),
    prevent_initial_call=True
)
def modal_demo_callback1(nClicks):
    return True


if __name__ == '__main__':
    app.run(debug=True)
