if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDateRangePicker(
            suffixIcon=fac.AntdIcon(icon='antd-user')
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
