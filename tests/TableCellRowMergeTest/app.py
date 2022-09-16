if True:
    import sys
    sys.path.append('../..')
    import dash
    import pandas as pd
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

demo_df = pd.DataFrame({
    'field1': range(10),
    'field2': [1, 1, 1, 2, 2, 3, 4, 4, 4, 4],
    'field3': [2, 3, 1, 1, 1, 1, 4, 4, 2, 2]
})


# 将field2、field3自动处理为row-merge所需data
# 设置需要转row-merge格式的字段名
need_merge_columns = ['field2', 'field3']
after_transform_df = (
    demo_df
    .apply(
        lambda s: (
            s
            .groupby(
                (s.diff(1).fillna(0) != 0).cumsum(),
                group_keys=False
            )
            .apply(
                lambda piece: [
                    {
                        'content': value,
                        'rowSpan': len(piece) if i == 0 else 0
                    } for i, value in enumerate(piece)
                ]
            )
            .explode()
            .reset_index(drop=True)
            if s.name in need_merge_columns
            else s
        )
    )
)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='input',
            columns=[
                {
                    'title': 'field1',
                    'dataIndex': 'field1',
                    'width': '200px'
                },
                {
                    'title': 'field2',
                    'dataIndex': 'field2',
                    'width': '200px',
                    'renderOptions': {
                        'renderType': 'row-merge'
                    }
                },
                {
                    'title': 'field3',
                    'dataIndex': 'field3',
                    'width': '200px',
                    'renderOptions': {
                        'renderType': 'row-merge'
                    }
                }
            ],
            data=after_transform_df.to_dict('records'),
            bordered=True
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
