if True:
    import sys

    sys.path.append('../../../')
    import time

    import dash
    import numpy as np
    import pandas as pd
    from dash import html
    from dash.dependencies import Input, Output, State

    import feffery_antd_components as fac

# 生成演示用数据框
demo_df = (
    pd.DataFrame(
        {
            'id': list(range(1, 100001)),
            '字段1': np.random.choice(
                [f'{s}{n}' for s in list('abcdefghij') for n in range(1, 10001)],
                100000,
                replace=False,
            ),
            '字段2': np.random.choice(
                [f'类型{t}' for t in range(1, 11) for n in range(10000)],
                100000,
                replace=False,
            ),
        }
    )
    # 打乱顺序
    .sample(frac=1, replace=False)
)

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpin(
            fac.AntdTable(
                id='table-server-side-mode-pagination+filter-demo-pandas',
                columns=[
                    {
                        'title': column,
                        'dataIndex': column,
                        'width': 'calc(100% / {})'.format(demo_df.shape[0]),
                    }
                    for column in demo_df.columns
                ],
                bordered=True,
                # 关键参数
                mode='server-side',
                pagination={
                    'total': demo_df.shape[0],
                    'current': 1,
                    'pageSize': 5,
                    'showSizeChanger': True,
                    'pageSizeOptions': [5, 10],
                    'position': 'topCenter',
                    'showQuickJumper': True,
                },
                filterOptions={
                    '字段1': {'filterMode': 'keyword'},
                    '字段2': {
                        'filterCustomItems': demo_df['字段2'].unique(),
                        'filterMultiple': True,
                        'filterSearch': True,
                    },
                },
            ),
            text='数据加载中',
            size='small',
        )
    ],
    style={'padding': 100},
)


@app.callback(
    [
        Output(
            'table-server-side-mode-pagination+filter-demo-pandas',
            'data',
        ),
        Output(
            'table-server-side-mode-pagination+filter-demo-pandas',
            'pagination',
        ),
    ],
    [
        Input(
            'table-server-side-mode-pagination+filter-demo-pandas',
            'pagination',
        ),
        Input(
            'table-server-side-mode-pagination+filter-demo-pandas',
            'filter',
        ),
    ],
    State(
        'table-server-side-mode-pagination+filter-demo-pandas',
        'filterOptions',
    ),
)
def table_server_side_mode_pagination_filter_demo_pandas(pagination, filter_, filterOptions):
    if pagination:
        time.sleep(0.5)  # 渲染加载动画更好看 ^_^

        # 若存在至少一项有效的筛选操作
        if filter_ and any([value for value in filter_.values()]):
            # 根据当前分页的current参数、pageSize参数，筛选后从demo_df中抽取对应数据帧
            valid_filters = [(key, value) for key, value in filter_.items() if value]

            filter_conditions = (
                f'`{valid_filters[0][0]}` == {valid_filters[0][1]}'
                if filterOptions[valid_filters[0][0]].get('filterMode') != 'keyword'
                else f'`{valid_filters[0][0]}`.str.contains("{valid_filters[0][1][0]}")'
            )

            for valid_filter in valid_filters[1:]:
                filter_conditions += ' and '
                filter_conditions += (
                    f'`{valid_filter[0]}` == {valid_filter[1]}'
                    if filterOptions[valid_filter[0]].get('filterMode') != 'keyword'
                    else f'`{valid_filter[0]}`.str.contains("{valid_filter[1][0]}")'
                )

            # 计算经过筛选后的符合条件记录值数量
            match_records_count = demo_df.query(filter_conditions).shape[0]

            data_frame = demo_df.query(filter_conditions).iloc[
                (pagination['current'] - 1) * pagination['pageSize'] : pagination['current']
                * pagination['pageSize'],
                :,
            ]

            return [
                data_frame.to_dict('records'),
                {
                    **pagination,
                    'total': match_records_count,
                },
            ]

        # 根据当前分页的current参数、pageSize参数，从demo_df中抽取对应数据帧
        data_frame = demo_df.iloc[
            (pagination['current'] - 1) * pagination['pageSize'] : pagination['current']
            * pagination['pageSize'],
            :,
        ]

        return [
            data_frame.to_dict('records'),
            {**pagination, 'total': demo_df.shape[0]},
        ]

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
