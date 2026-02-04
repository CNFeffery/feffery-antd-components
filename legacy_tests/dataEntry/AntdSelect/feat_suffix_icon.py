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
                    options=[
                        {
                            'label': f'选项{i}',
                            'value': f'选项{i}',
                        }
                        for i in range(1, 6)
                    ],
                    style={'width': 350},
                ),
                fac.AntdSelect(
                    options=[
                        {
                            'label': f'选项{i}',
                            'value': f'选项{i}',
                        }
                        for i in range(1, 6)
                    ],
                    suffixIcon=fac.AntdIcon(icon='antd-user'),
                    style={'width': 350},
                ),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
