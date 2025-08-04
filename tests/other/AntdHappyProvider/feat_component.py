if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = [
    fac.AntdHappyProvider(
        fac.AntdButton('Happy Work', type='primary')
    ),
    fac.AntdHappyProvider(
        fac.AntdButton('Happy Work', type='primary'),
        disabled=True,
    ),
]

if __name__ == '__main__':
    app.run(debug=True)
