if True:
    import sys

    sys.path.append('../../../')
    import dash
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSpace(
        [
            fac.AntdCollapse(
                fac.AntdParagraph('内容示例' * 20),
                isOpen=False,
                title='折叠面板示例',
                size=size,
                style={'width': 300},
            )
            for size in ['small', 'middle', 'large']
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
