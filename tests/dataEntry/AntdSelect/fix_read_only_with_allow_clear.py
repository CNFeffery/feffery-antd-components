if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            style={'width': '100%'},
            options=[
                {'label': f'选项{i}', 'value': i}
                for i in range(5)
            ],
            value=1,
            allowClear=False,
            readOnly=False,
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
