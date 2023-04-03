import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State


app = dash.Dash(
    __name__,
    title="Switch Demo"
)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdFormItem(
                    fac.AntdSelect(
                        id='demo-table-filter',
                        options=[
                            {
                                'label': 'yes',
                                'value': 'yes'
                            },
                            {
                                'label': 'no',
                                'value': 'no'
                            }
                        ],
                        placeholder='Please select',
                        mode='multiple',
                        defaultValue=['yes', 'no'],
                        style={
                            'width': 150
                        }
                    ),
                    label='filter approved'
                ),
                fac.AntdTable(
                    id='demo-table',
                    locale='en-us',
                    data=[
                        {
                            'key': f'row{i}',
                            'id': f'row{i}',
                            'approved': {
                                'checkedChildren': 'yes',
                                'unCheckedChildren': 'no',
                                'checked': False
                            }
                        }
                        for i in range(1, 11)
                    ],
                    columns=[
                        {
                            'title': 'id',
                            'dataIndex': 'id'
                        },
                        {
                            'title': 'Approved',
                            'dataIndex': 'approved',
                            'renderOptions': {
                                'renderType': 'switch'
                            }
                        }
                    ]
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('demo-table', 'hiddenRowKeys'),
    Input('demo-table-filter', 'value'),
    State('demo-table', 'data'),
)
def custom_filter(value, data):

    value = value or ['yes', 'no']
    value = [v == 'yes' for v in value]

    return [
        row['key']
        for row in data
        if row['approved']['checked'] not in value
    ]


if __name__ == '__main__':
    app.run(debug=True)
