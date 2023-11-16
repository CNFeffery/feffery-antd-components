import dash
from feffery_antd_components.utils import fill_output_dict
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = fac.AntdSpace(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '按钮1',
                    type='primary',
                    id='demo-button1'
                ),
                fac.AntdButton(
                    '按钮2',
                    type='primary',
                    id='demo-button2'
                ),
                fac.AntdInput(
                    id='demo-input1',
                    placeholder='输入框1',
                    style={
                        'width': 150
                    }
                ),
                fac.AntdInput(
                    id='demo-input2',
                    placeholder='输入框2',
                    style={
                        'width': 150
                    }
                )
            ]
        ),
        fac.AntdSpace(
            [
                fac.AntdText(id='demo-output1'),
                fac.AntdText(id='demo-output2')
            ]
        )
    ],
    direction='vertical',
    style={
        'padding': 50
    }
)


@app.callback(
    output=dict(
        content1=Output('demo-output1', 'children'),
        content2=Output('demo-output2', 'children')
    ),
    inputs=dict(
        nClicks1=Input('demo-button1', 'nClicks'),
        nClicks2=Input('demo-button2', 'nClicks')
    ),
    state=dict(
        value1=State('demo-input1', 'value'),
        value2=State('demo-input2', 'value')
    ),
    prevent_initial_call=True
)
def demo_callback(nClicks1, nClicks2, value1, value2):
    '''字典化Output配合defaultdict'''

    return fill_output_dict(
        dict(
            content1=f'nClicks1: {nClicks1}, nClicks2: {nClicks2}'
        ),
        '缺省值示例'
    )


if __name__ == '__main__':
    app.run(debug=True)
