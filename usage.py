import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    id='keyword',
                    autoComplete='off'
                ),
                fac.AntdTree(
                    id='demo-tree',
                    treeData=[
                        {
                            'title': 'root',
                            'key': 'root',
                            'children': [
                                {
                                    'title': 'gdp',
                                    'key': 'gdp'
                                },
                                {
                                    'title': 'GDP',
                                    'key': 'GDP'
                                },
                                {
                                    'title': 'cpi',
                                    'key': 'cpi'
                                },
                                {
                                    'title': 'CPI',
                                    'key': 'CPI'
                                }
                            ]
                        }
                    ],
                    defaultExpandAll=True,
                    caseSensitive=False,
                    treeNodeKeyToTitle={
                        'gdp': fac.AntdTag(
                            content='gdp',
                            color='blue'
                        ),
                        'CPI': fac.AntdTag(
                            content='CPI',
                            color='red'
                        ),
                    }
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-tree', 'searchKeyword'),
    Input('keyword', 'value')
)
def set_search_keyword(value):
    return value


if __name__ == '__main__':
    app.run(debug=True)
