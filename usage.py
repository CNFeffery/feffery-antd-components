from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


app.layout = html.Div(
    fac.AntdTable(
        columns=[
            {'title': 'Name', 'dataIndex': 'name'},
            {
                'title': 'Count',
                'dataIndex': 'count',
                'group': 'Race',
            },
            {
                'title': 'Percent',
                'dataIndex': 'percent',
                'group': 'Race',
                'renderOptions': {
                    'renderType': 'custom-format'
                },
            },
        ],
        data=[
            {'name': 'Tom', 'count': 30, 'percent': 0.25},
            {'name': 'Jerry', 'count': 28, 'percent': 0.2},
            {'name': 'Bruce', 'count': 50, 'percent': 0.1},
            {'name': 'Sam', 'count': 100, 'percent': 0.3},
        ],
        sortOptions={
            'sortDataIndexes': ['name', 'count', 'percent']
        },
        pagination={'hideOnSinglePage': True},
        customFormatFuncs={
            'percent': '(x) => `${(x*100).toFixed(2)}%`'
        },
    ),
    style={
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': '20px',
    },
)


if __name__ == '__main__':
    app.run(debug=True)
