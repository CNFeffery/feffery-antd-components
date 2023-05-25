import dash
import json
from datetime import datetime
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)


app.layout = html.Div(
    [
        html.Pre(
            id='table-click-event-demo-output'
        ),
        fac.AntdTable(
            id='table-rerender-button-demo',
            columns=[
                {
                    'title': 'button示例1',
                    'dataIndex': 'button示例1',
                    'renderOptions': {
                        'renderType': 'button'
                    }
                },
                {
                    'title': 'button示例2',
                    'dataIndex': 'button示例2',
                    'renderOptions': {
                        'renderType': 'button'
                    }
                },
                {
                    'title': 'button示例3',
                    'dataIndex': 'button示例3',
                    'renderOptions': {
                        'renderType': 'button',
                        'renderButtonPopConfirmProps': {
                            'title': '确认执行？',
                            'okText': '确认',
                            'cancelText': '取消'
                        }
                    }
                }
            ],
            data=[
                {
                    'button示例1': {
                        'content': f'按钮1-{i}',
                        'type': 'link',
                        'custom': 'balabalabalabala'
                    },
                    'button示例2': [
                        {
                            'content': f'按钮2-{i}-{j}',
                            'type': 'primary',
                            'custom': 'balabalabalabala'
                        }
                        for j in range(1, 3)
                    ],
                    'button示例3': [
                        {
                            'content': f'按钮3-{i}-{j}',
                            'type': 'dashed',
                            'danger': True,
                            'custom': 'balabalabalabala'
                        }
                        for j in range(1, 3)
                    ]
                }
                for i in range(1, 4)
            ],
            bordered=True,
            enableCellClickListenColumns=[
                'button示例1', 'button示例2', 'button示例3']
        ),

        html.Pre(
            id='table-rerender-button-demo-output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('table-rerender-button-demo-output', 'children'),
    Input('table-rerender-button-demo', 'nClicksButton'),
    [State('table-rerender-button-demo', 'clickedContent'),
     State('table-rerender-button-demo', 'recentlyButtonClickedDataIndex'),
     State('table-rerender-button-demo', 'recentlyButtonClickedRow')],
    prevent_initial_call=True
)
def table_rerender_button_demo(nClicksButton,
                               clickedContent,
                               recentlyButtonClickedDataIndex,
                               recentlyButtonClickedRow):

    return json.dumps(
        dict(
            nClicksButton=nClicksButton,
            clickedContent=clickedContent,
            recentlyButtonClickedDataIndex=recentlyButtonClickedDataIndex,
            recentlyButtonClickedRow=recentlyButtonClickedRow
        ),
        indent=4,
        ensure_ascii=False
    )


@app.callback(
    Output('table-click-event-demo-output', 'children'),
    [Input('table-rerender-button-demo', 'nClicksCell'),
     Input('table-rerender-button-demo', 'nDoubleClicksCell')],
    [State('table-rerender-button-demo', 'enableCellClickListenColumns'),
     State('table-rerender-button-demo', 'recentlyCellClickColumn'),
     State('table-rerender-button-demo', 'recentlyCellClickRecord'),
     State('table-rerender-button-demo', 'recentlyCellDoubleClickColumn'),
     State('table-rerender-button-demo', 'recentlyCellDoubleClickRecord')],
    prevent_initial_call=True
)
def table_click_event_demo(nClicksCell,
                           nDoubleClicksCell,
                           enableCellClickListenColumns,
                           recentlyCellClickColumn,
                           recentlyCellClickRecord,
                           recentlyCellDoubleClickColumn,
                           recentlyCellDoubleClickRecord):

    return json.dumps(
        dict(
            enableCellClickListenColumns=enableCellClickListenColumns,
            nClicksCell=nClicksCell,
            recentlyCellClickColumn=recentlyCellClickColumn,
            recentlyCellClickRecord=recentlyCellClickRecord,
            nDoubleClicksCell=nDoubleClicksCell,
            recentlyCellDoubleClickColumn=recentlyCellDoubleClickColumn,
            recentlyCellDoubleClickRecord=recentlyCellDoubleClickRecord
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
