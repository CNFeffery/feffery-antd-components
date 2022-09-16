if True:
    import sys
    sys.path.append('../..')
    import dash
    import numpy as np
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'mini-line示例',
                    'dataIndex': 'mini-line示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-line'
                    }
                },
                {
                    'title': 'mini-bar示例',
                    'dataIndex': 'mini-bar示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-bar'
                    }
                },
                {
                    # 注意，mini-progress模式接受的输入应当在0到1之间
                    'title': 'mini-progress示例',
                    'dataIndex': 'mini-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-progress'
                    }
                },
                {
                    # 注意，mini-ring-progress模式接受的输入应当在0到1之间
                    'title': 'mini-ring-progress示例',
                    'dataIndex': 'mini-ring-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-ring-progress',
                        'ringProgressFontSize': 12
                    }
                },
                {
                    'title': 'mini-area示例',
                    'dataIndex': 'mini-area示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-area'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'mini-line示例': np.random.randint(1, 20, 10),
                    'mini-bar示例': np.random.randint(1, 20, 10),
                    'mini-progress示例': 1,
                    'mini-ring-progress示例': 1,
                    'mini-area示例': np.random.randint(1, 20, 10)
                }
                for i in range(3)
            ],
            miniChartHeight=50,
            bordered=True
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
