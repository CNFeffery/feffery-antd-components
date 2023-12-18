import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '字段1-1-1',
                    'dataIndex': '字段1-1-1',
                    'group': ['字段1', '字段1-1']
                },
                {
                    'title': '字段1-1-2',
                    'dataIndex': '字段1-1-2',
                    'group': ['字段1', '字段1-1']
                },
                {
                    'title': '字段1-2',
                    'dataIndex': '字段1-2',
                    'group': '字段1'
                },
                {
                    'title': '字段2',
                    'dataIndex': '字段2'
                }
            ],
            data=[
                {
                    '字段1-1-1': 1,
                    '字段1-1-2': 1,
                    '字段1-2': 1,
                    '字段2': 1
                }
            ] * 3,
            filterOptions={
                '字段1-1-1': {}
            },
            sortOptions={
                'sortDataIndexes': ['字段1-1-1']
            },
            bordered=True,
            conditionalStyleFuncs={
                '字段1-1-1': '''
(record, index) => {
    console.log(record)
    if ( index % 2 === 1 ) {
        return {
            style: {
                backgroundColor: "#ebfbee"
            }
        }
    }
}
'''
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
