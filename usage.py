import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [


        fac.AntdSelect(
            placeholder='请选择国家：',
            options=[
                {'label': '中国', 'value': '中国'},
                {'label': '美国', 'value': '美国'},
                {'label': '俄罗斯', 'value': '俄罗斯'},
                {'label': '德国', 'value': '德国', 'disabled': True},
                {'label': '加拿大', 'value': '加拿大'}
            ],
            # readOnly=True,
            value='美国',
            style={
                # 使用css样式固定宽度
                'width': '200px'
            }
        ),

        fac.AntdSpoiler(
            fac.AntdParagraph(
                '巴拉巴拉'*200
            ),
            maxHeight=65
        ),

        fac.AntdButton(
            # '触发对话框',
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
