if True:
    import sys

    sys.path.append('../../../')
    import io
    import dash
    import pandas as pd
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table',
            columns=[
                {
                    'dataIndex': f'字段{i}',
                    'title': f'字段{i}',
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    f'字段{i}': f'字段{i}第{row}行'
                    for i in range(1, 6)
                }
                for row in range(10)
            ],
            pagination=False,
            bordered=True,
            title=fac.AntdCopyText(
                id='copy-table',
                beforeIcon=fac.AntdButton(
                    '复制表格', type='primary'
                ),
                afterIcon=fac.AntdButton(
                    '复制成功', type='primary'
                ),
            ),
        )
    ],
    style=style(padding=50),
)


@app.callback(
    Output('copy-table', 'text'),
    Input('table', 'data'),
)
def generate_copy_text(data):
    # 将表格数据转换为可直接粘贴到excel中形成表格的字符串数据

    temp_io = io.StringIO()

    pd.DataFrame(data).to_csv(
        temp_io, sep='\t', index=False
    )

    return temp_io.getvalue()


if __name__ == '__main__':
    app.run(debug=True)
