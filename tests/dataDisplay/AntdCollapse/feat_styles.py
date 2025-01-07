if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdCollapse(
        fac.AntdParagraph('内容示例' * 20),
        isOpen=False,
        title='折叠面板示例',
        style={'width': 300},
        styles={
            'header': {
                'background': '#40a9ff',
                'color': '#fff',
            },
            'body': {'background': '#597ef7'},
        },
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
