if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDivider(
                    'AntdCardGrid基础使用',
                    innerTextOrientation='left',
                ),
                fac.AntdCard(
                    [fac.AntdCardGrid(f'内容{i}') for i in range(1, 16)],
                    title='AntdCardGrid基础使用',
                ),
                fac.AntdDivider(
                    '调整浏览器窗口尺寸以观察换行效果',
                    innerTextOrientation='left',
                ),
                fac.AntdCard(
                    [fac.AntdCardGrid(f'内容{i}', style={'width': 95}) for i in range(1, 16)],
                    title='固定AntdCardGrid宽度以支持自动换行',
                ),
                fac.AntdDivider(
                    '紧凑的网格内容区',
                    innerTextOrientation='left',
                ),
                fac.AntdCard(
                    [fac.AntdCardGrid(f'内容{i}') for i in range(1, 16)],
                    title='调整各类样式以实现紧凑的网格内容区',
                    variant='borderless',
                    style={'borderRadius': '8px 8px 0 0'},
                    styles={
                        'header': {'border': '1px solid #f0f0f0'},
                        'body': {
                            'padding': '0px 1px 0px 0px',
                            'border': 0,
                        },
                    },
                ),
                fac.AntdDivider(
                    '关闭悬停阴影效果',
                    innerTextOrientation='left',
                ),
                fac.AntdCard(
                    [fac.AntdCardGrid(f'内容{i}', hoverable=False) for i in range(1, 16)],
                    title='关闭悬停阴影效果',
                ),
            ],
            direction='vertical',
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
