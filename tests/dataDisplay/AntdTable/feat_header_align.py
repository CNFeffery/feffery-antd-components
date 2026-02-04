if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': align,
                    'dataIndex': align,
                    'align': align,
                    'headerAlign': 'right',
                }
                for align in ['left', 'center', 'right']
            ],
            data=[{align: 999 for align in ['left', 'center', 'right']}] * 3,
            bordered=True,
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
