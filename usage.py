import dash
import json
import uuid
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL
import feffery_utils_components as fuc

app = dash.Dash(
    __name__
)


@app.callback(
    Output('accordion-output', 'children'),
    Input({
        'type': 'button',
        'index': ALL
    }, 'nClicks')
)
def accordion_callback(nClicks):

    return str(nClicks)


@app.callback(
    Output('spin-basic-demo-output', 'children'),
    Input('spin-basic-demo-input', 'nClicks')
)
def spin_basic_callback_demo(nClicks):
    import time
    time.sleep(300)

    return f'nClicks: {nClicks}'


app.layout = html.Div(
    [
        fac.AntdResult(
            status='loading',
            subTitle='loading状态示例',
            icon=[
                fuc.FefferyExtraSpinner(
                    type='metro',
                    style={
                        'transform': 'translateY(-25px)'
                    }
                )
            ]
        ),

        fac.AntdButton('触发2秒加载动画', id='spin-basic-demo-input', type='primary'),

        fac.AntdSpin(
            fac.AntdText(
                'nClicks: 0', id='spin-basic-demo-output', strong=True),
            indicator=[
                fuc.FefferyExtraSpinner(
                    type='metro',
                    style={
                        'transform': 'translateY(-25px)'
                    }
                )
            ],
            text='回调中'
        ),
        fac.AntdDivider(isDashed=True),
        fac.AntdResult(
            status='loading',
            subTitle='loading状态示例'
        ),
        fac.AntdTable(
            size='small',
            columns=[
                {
                    'title': '角标模式',
                    'dataIndex': '角标模式',
                    'renderOptions': {'renderType': 'corner-mark'}
                }
            ],
            data=[
                {
                    'key': i,
                    '角标模式': {
                        'content': '角标模式',
                        'color': ['red', 'green', 'blue'][i],
                        'offsetX': -7.5,
                        'offsetY': -8.5,
                        'placement': 'top-left',
                        'hide': [False, True, False][i]
                    }
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '200px'
            }
        ),
        fac.AntdDivider(isDashed=True),
        fac.AntdAccordion(
            [
                fac.AntdAccordionItem(
                    fac.AntdButton(
                        f'测试{i}',
                        type='primary',
                        id={
                            'type': 'button',
                            'index': i
                        }
                    ),
                    title=f'手风琴项{i}',
                    key=str(i)
                )
                for i in range(5)
            ],
            id='accordion-demo',
            defaultActiveKey='3'
        ),

        html.Div(id='accordion-output'),

        fac.AntdSpace(
            [
                fac.AntdSelect(
                    id='component-input',
                    placeholder="组件选择",
                    options=[
                        {
                            'label': i,
                            'value': i
                        }
                        for i in ['AntdDatePicker', 'AntdDateRangePicker']
                    ],
                    allowClear=False,
                    defaultValue='AntdDatePicker',
                    style={
                        'width': '200px'
                    }
                ),
                fac.AntdSelect(
                    id='mode-input',
                    placeholder="mode选择",
                    options=[
                        {
                            'label': i,
                            'value': i
                        }
                        for i in ['eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates']
                    ],
                    allowClear=False,
                    defaultValue='eq',
                    style={
                        'width': '200px'
                    }
                ),
                fac.AntdSelect(
                    id='target-input',
                    placeholder="target选择",
                    options=[
                        {
                            'label': i,
                            'value': i
                        }
                        for i in ['day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek']
                    ],
                    allowClear=False,
                    defaultValue='day',
                    style={
                        'width': '100px'
                    }
                ),
                fac.AntdSelect(
                    id='picker-input',
                    placeholder="picker选择",
                    options=[
                        {
                            'label': i,
                            'value': i
                        }
                        for i in ['date', 'week', 'month', 'quarter', 'year']
                    ],
                    allowClear=False,
                    defaultValue='date',
                    style={
                        'width': '100px'
                    }
                )
            ],
            size=0
        ),
        fac.AntdDivider(isDashed=True),
        html.Div(id='output')
    ],
    style={
        'padding': '100px'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('component-input', 'value'),
     Input('mode-input', 'value'),
     Input('target-input', 'value'),
     Input('picker-input', 'value')]
)
def render_date_picker_demo(component, mode, target, picker):

    if component == 'AntdDatePicker':

        if mode in ['eq', 'ne', 'le', 'lt', 'ge', 'gt']:
            return fac.AntdDatePicker(
                key=str(uuid.uuid4()),
                picker=picker,
                disabledDatesStrategy=[
                    {
                        'mode': mode,
                        'target': target,
                        'value': 2
                    }
                ],
                style={
                    'width': '200px'
                }
            )

        elif mode in ['in-enumerate-dates', 'not-in-enumerate-dates']:

            return fac.AntdDatePicker(
                key=str(uuid.uuid4()),
                picker=picker,
                format='YYYY-MM',
                disabledDatesStrategy=[
                    {
                        'mode': mode,
                        'target': target,
                        'value': ['2022-01', '2022-03']
                    }
                ],
                style={
                    'width': '200px'
                }
            )

        return fac.AntdDatePicker(
            key=str(uuid.uuid4()),
            picker=picker,
            disabledDatesStrategy=[
                {
                    'mode': mode,
                    'target': target,
                    'value': [2, 4, 6]
                }
            ],
            style={
                'width': '200px'
            }
        )

    else:

        if mode in ['eq', 'ne', 'le', 'lt', 'ge', 'gt']:
            return fac.AntdDateRangePicker(
                key=str(uuid.uuid4()),
                picker=picker,
                disabledDatesStrategy=[
                    {
                        'mode': mode,
                        'target': target,
                        'value': 8
                    }
                ],
                style={
                    'width': '200px'
                }
            )

        elif mode in ['in-enumerate-dates', 'not-in-enumerate-dates']:

            return fac.AntdDateRangePicker(
                key=str(uuid.uuid4()),
                picker=picker,
                format='YYYY-MM',
                disabledDatesStrategy=[
                    {
                        'mode': mode,
                        'target': target,
                        'value': ['2022-01', '2022-03']
                    }
                ],
                style={
                    'width': '200px'
                }
            )

        return fac.AntdDateRangePicker(
            key=str(uuid.uuid4()),
            picker=picker,
            disabledDatesStrategy=[
                {
                    'mode': mode,
                    'target': target,
                    'value': [2, 4, 6]
                }
            ],
            style={
                'width': '200px'
            }
        )


if __name__ == '__main__':
    app.run_server(debug=True)
