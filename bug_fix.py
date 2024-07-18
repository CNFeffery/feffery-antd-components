import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSelect(
                    id='popup-card-transition-type-demo-select',
                    defaultValue='move-right',
                    allowClear=False,
                    options=[
                        {
                            'label': transitionType,
                            'value': transitionType,
                        }
                        for transitionType in [
                            'none',
                            'fade',
                            'zoom',
                            'zoom-big',
                            'zoom-big-fast',
                            'slide-up',
                            'slide-down',
                            'slide-left',
                            'slide-right',
                            'move-up',
                            'move-down',
                            'move-left',
                            'move-right',
                        ]
                    ],
                    style={'width': 200},
                ),
                fac.AntdButton(
                    '点击触发',
                    id='popup-card-transition-type-demo-trigger',
                ),
            ]
        ),
        fac.AntdPopupCard(
            fac.AntdParagraph('内容示例' * 20),
            id='popup-card-transition-type-demo',
            title='弹出式卡片示例',
            visible=False,
        ),
    ],
    style={'padding': 50},
)


@app.callback(
    Output(
        'popup-card-transition-type-demo', 'transitionType'
    ),
    Input(
        'popup-card-transition-type-demo-select', 'value'
    ),
)
def popup_card_transition_type_demo(value):
    return value


@app.callback(
    Output('popup-card-transition-type-demo', 'visible'),
    Input(
        'popup-card-transition-type-demo-trigger', 'nClicks'
    ),
    prevent_initial_call=True,
)
def popup_card_transition_type_demo_visible(nClicks):
    return True


if __name__ == '__main__':
    app.run(debug=True)
