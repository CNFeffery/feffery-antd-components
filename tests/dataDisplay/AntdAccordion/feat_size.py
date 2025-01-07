if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSpace(
        [
            fac.AntdAccordion(
                items=[
                    {
                        'title': f'手风琴项示例{i}',
                        'key': i,
                        'children': fac.AntdText(
                            f'手风琴项示例{i}'
                        ),
                    }
                    for i in range(1, 6)
                ],
                size=size,
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
