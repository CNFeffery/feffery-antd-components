if True:
    import sys
    sys.path.append('../..')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdUpload(
            id='upload-demo'
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto',
    }
)


if __name__ == '__main__':
    app.run(debug=True)
