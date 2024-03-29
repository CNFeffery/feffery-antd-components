if True:
    import sys
    sys.path.append('../..')
    import json
    import dash
    import pandas as pd
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'dataIndex': 'checkbox1',
                    'title': 'checkbox1',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'checkbox2',
                    'title': 'checkbox2',
                    'renderOptions': {
                        'renderType': 'checkbox'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'switch1',
                    'title': 'switch1',
                    'renderOptions': {
                        'renderType': 'switch'
                    },
                    'width': '25%'
                },
                {
                    'dataIndex': 'switch2',
                    'title': 'switch2',
                    'renderOptions': {
                        'renderType': 'switch'
                    },
                    'width': '25%'
                }
            ],
            data=[
                {
                    'checkbox1': {
                        'checked': True
                    },
                    'checkbox2': {
                        'checked': False,
                        'label': f'勾选框{i}'
                    },
                    'switch1': {
                        'checked': True
                    },
                    'switch2': {
                        'checked': False,
                        'checkedChildren': '开',
                        'unCheckedChildren': '关'
                    }
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '400px'
            }
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('table-demo', 'recentlyCheckedRow'),
     Input('table-demo', 'recentlyCheckedLabel'),
     Input('table-demo', 'checkedDataIndex'),
     Input('table-demo', 'recentlyCheckedStatus'),
     Input('table-demo', 'recentlySwitchRow'),
     Input('table-demo', 'switchDataIndex'),
     Input('table-demo', 'recentlySwitchStatus')]
)
def demo(recentlyCheckedRow,
         recentlyCheckedLabel,
         checkedDataIndex,
         recentlyCheckedStatus,
         recentlySwitchRow,
         switchDataIndex,
         recentlySwitchStatus):

    return json.dumps(
        dict(
            recentlyCheckedRow=recentlyCheckedRow,
            recentlyCheckedLabel=recentlyCheckedLabel,
            checkedDataIndex=checkedDataIndex,
            recentlyCheckedStatus=recentlyCheckedStatus,
            recentlySwitchRow=recentlySwitchRow,
            switchDataIndex=switchDataIndex,
            recentlySwitchStatus=recentlySwitchStatus,
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
