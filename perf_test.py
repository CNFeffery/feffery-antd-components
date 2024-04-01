import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

components = [
    'AntdButton',
    'AntdFloatButton',
    'AntdFloatButtonGroup',
    'AntdIcon',
    'AntdParagraph',
    'AntdText',
    'AntdTitle',
    'AntdCenter',
    'AntdDivider',
    'AntdFlex',
    'AntdRow',
    'AntdCol',
    'AntdSpace',
    'AntdCompact',
    'AntdLayout',
    'AntdHeader',
    'AntdContent',
    'AntdFooter',
    'AntdSider'
]

app.layout = html.Div(
    [
        fac.AntdTabs(
            items=[
                {
                    'label': component,
                    'key': component,
                    'children': html.Pre(
                        getattr(fac, component).__doc__,
                        style={
                            'maxHeight': 'calc(100vh - 200px)',
                            'overflowY': 'auto'
                        }
                    )
                }
                for component in components[::-1]
            ],
            activeKey=components[-1]
        )
    ],
    style={
        'padding': 30
    }
)

if __name__ == '__main__':
    app.run(debug=True)
