import dash
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = dash.html.Div(
    [
        fac.AntdTable(
            id='table',
            data=[{
                'effective': {
                    'checked': True, 'checkedChildren': '有效', 'unCheckedChildren': '无效', 'custom': '有效对话'
                }, 'intention': {
                    'checked': True, 'checkedChildren': '有效', 'unCheckedChildren': '无效', 'custom': '有意向'
                }, 'deal': {
                    'checked': True, 'checkedChildren': '成交', 'unCheckedChildren': '未成交', 'custom': '是否成交'
                }
            }],
            columns=[
                {
                    'title': '对话', 'dataIndex': 'effective', 'width': '70px', 'renderOptions': {
                        'renderType': 'switch'
                    }
                },
                {
                    'title': '意向', 'dataIndex': 'intention', 'width': '70px', 'renderOptions': {
                        'renderType': 'switch'
                    }
                },
                {
                    'title': '成交', 'dataIndex': 'deal', 'width': '70px', 'renderOptions': {
                        'renderType': 'switch'
                    }
                }
            ]
        ),
    ]
)


@app.callback(
    Output('table', 'data'),
    Input('table', 'recentlySwitchDataIndex'),
    Input('table', 'recentlySwitchStatus'),
    Input('table', 'recentlySwitchRow'),
    prevent_initial_call=True
)
def table_rerender_switch_demo(recentlySwitchDataIndex, recentlySwitchStatus, recentlySwitchRow):
    data = {}

    if recentlySwitchDataIndex == 'deal':
        if recentlySwitchStatus is True:
            data = {
                'effective': {
                    'checked': True,
                    'checkedChildren': '有效', 'unCheckedChildren': '无效',
                    'custom': '有效对话'
                }, 'intention': {
                    'checked': True,
                    'checkedChildren': '有效', 'unCheckedChildren': '无效',
                    'custom': '有意向'
                }, 'deal': {
                    'checked': True,
                    'checkedChildren': '成交', 'unCheckedChildren': '未成交',
                    'custom': '是否成交'
                }
            }
        else:
            data = {
                'effective': {
                    'checked': False,
                    'checkedChildren': '有效', 'unCheckedChildren': '无效',
                    'custom': '有效对话'
                }, 'intention': {
                    'checked': False,
                    'checkedChildren': '有效', 'unCheckedChildren': '无效',
                    'custom': '有意向'
                }, 'deal': {
                    'checked': False,
                    'checkedChildren': '成交', 'unCheckedChildren': '未成交',
                    'custom': '是否成交'
                }
            }
    recentlySwitchRow.update(data)

    return [recentlySwitchRow]


if __name__ == '__main__':
    app.run(debug=True)
