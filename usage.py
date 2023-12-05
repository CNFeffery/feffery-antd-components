import dash
from dash import html
import feffery_antd_components as fac
import feffery_utils_components as fuc
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdPopover(
                    html.Div(
                        fac.AntdButton(
                            '插入emoji',
                            type='link'
                        ),
                        style={
                            'textAlign': 'end'
                        }
                    ),
                    content=fuc.FefferyEmojiPicker(
                        id='emoji-picker',
                        locale='zh'
                    ),
                    trigger='click',
                    placement='rightTop',
                    arrow='hide'
                ),
                fac.AntdInput(
                    id='input',
                    mode='text-area',
                    autoSize={
                        'minRows': 8
                    },
                    value='',
                    style={
                        'width': '100%'
                    }
                )
            ],
            direction='vertical',
            style={
                'width': 500,
                'margin': '0 auto'
            }
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('input', 'value'),
    Input('emoji-picker', 'value'),
    State('input', 'value'),
    prevent_initial_call=True
)
def insert_new_emoji(emoji_value, origin_value):

    return (origin_value or '') + emoji_value['native']


if __name__ == '__main__':
    app.run(debug=True)
