if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSelect(
                    readOnly=True,
                    options=[f'选项{i}' for i in range(1, 6)],
                    value='选项1',
                    style={'width': '100%'},
                ),
                fac.AntdSelect(
                    readOnly=True,
                    mode='multiple',
                    options=[f'选项{i}' for i in range(1, 6)],
                    value=[f'选项{i}' for i in range(1, 3)],
                    style={'width': '100%'},
                ),
                fac.AntdSelect(
                    readOnly=True,
                    mode='tags',
                    options=[f'选项{i}' for i in range(1, 6)],
                    value=['选项1', '自由新增选项'],
                    style={'width': '100%'},
                ),
            ],
            direction='vertical',
            style={'width': 350},
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
