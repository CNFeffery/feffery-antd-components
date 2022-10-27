if True:
    import sys
    sys.path.append('../..')
    import dash
    import numpy as np
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        fac.AntdTitle('单列排序测试', level=4),
        fac.AntdTable(
            columns=[
                *[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}'
                    }
                    for i in range(1, 6)
                ],
                # 以按钮排序为例
                {
                    'title': '按钮字段',
                    'dataIndex': '按钮字段',
                    'renderOptions': {
                        'renderType': 'button'
                    }
                },
                # 以标签排序为例
                {
                    'title': '标签字段',
                    'dataIndex': '标签字段',
                    'renderOptions': {
                        'renderType': 'tags'
                    }
                },
            ],
            data=[
                {
                    **{
                        f'字段{j}': str(np.random.randint(1, 5))
                        for j in range(1, 6)
                    },
                    '按钮字段': {
                        'content': f'按钮示例{i}',
                        'type': 'primary'
                    },
                    '标签字段': {
                        'tag': f'标签示例{i}',
                        'color': '#d83b01'
                    }
                }
                for i in range(10)
            ],
            bordered=True,
            sortOptions={
                'sortDataIndexes': ['字段1', '字段2', '字段4', '字段5', '按钮字段', '标签字段']
            },
            filterOptions={
                '字段5': {},
                '按钮字段': {
                    'filterMode': 'checkbox'
                },
                '标签字段': {
                    'filterMode': 'keyword'
                }
            }
        ),

        fac.AntdTitle('多列排序测试', level=4),
        fac.AntdTable(
            columns=[
                *[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}'
                    }
                    for i in range(1, 6)
                ],
                # 以按钮排序为例
                {
                    'title': '按钮字段',
                    'dataIndex': '按钮字段',
                    'renderOptions': {
                        'renderType': 'button'
                    }
                },
                # 以标签排序为例
                {
                    'title': '标签字段',
                    'dataIndex': '标签字段',
                    'renderOptions': {
                        'renderType': 'tags'
                    }
                }
            ],
            data=[
                {
                    **{
                        f'字段{j}': np.random.randint(1, 5)
                        for j in range(1, 6)
                    },
                    '按钮字段': {
                        'content': f'按钮示例{i}',
                        'type': 'primary'
                    },
                    '标签字段': {
                        'tag': f'标签示例{i}',
                        'color': '#d83b01'
                    }
                }
                for i in range(10)
            ],
            bordered=True,
            sortOptions={
                'sortDataIndexes': ['字段1', '字段2', '字段4', '字段5', '按钮字段', '标签字段'],
                'multiple': True
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
