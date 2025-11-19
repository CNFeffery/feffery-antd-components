if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table',
            locale='en-us',
            columns=[
                {
                    'dataIndex': f'field{i}',
                    'title': f'field{i}',
                    'editable': True,
                }
                for i in range(1, 4)
            ],
            data=[{f'field{i}': '' for i in range(1, 4)}],
            bordered=True,
            tableLayout='fixed',
            columnsFormatConstraint={
                'field1': {'rule': '^[0-9]+$'},
                'field2': {
                    'rule': '^[0-9]+$',
                    'content': 'Input "[VALUE]" does not match digits-only format.',
                },
                'field3': {
                    'rule': '^[0-9]+$',
                    'content': 'Input must be digits-only.',
                },
            },
            title=fac.AntdSegmented(
                id='table-locale',
                options=[
                    'en-us',
                    'zh-cn',
                    'de-de',
                    'ru-ru',
                ],
                value='en-us',
            ),
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('table', 'locale'),
    Input('table-locale', 'value'),
    prevent_initial_call=True,
)
def update_table_locale(locale):
    return locale


if __name__ == '__main__':
    app.run(debug=True)
