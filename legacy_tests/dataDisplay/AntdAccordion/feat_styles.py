if True:
    import sys

    sys.path.append('../../../')
    import dash
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdAccordion(
        items=[
            {
                'title': f'手风琴项示例{i}',
                'key': i,
                'children': fac.AntdText(f'手风琴项示例{i}'),
            }
            for i in range(1, 6)
        ],
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
