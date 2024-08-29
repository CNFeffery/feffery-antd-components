import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            treeData=[
                {
                    'key': '节点1',
                    'value': '1',
                    'title': '节点1',
                    'children': [
                        {
                            'key': f'节点1-{i}',
                            'value': f'1-{i}',
                            'title': f'节点1-{i}',
                        }
                        for i in range(1, 5)
                    ],
                },
                {
                    'key': '节点2',
                    'value': '2',
                    'title': '节点2',
                },
            ],
            placeholder='请选择',
            suffixIcon=fac.AntdIcon(icon='antd-lock'),
            style={'width': 256},
        ),
        fac.AntdTreeSelect(
            treeData=[
                {
                    'key': '节点1',
                    'value': '1',
                    'title': '节点1',
                    'children': [
                        {
                            'key': f'节点1-{i}',
                            'value': f'1-{i}',
                            'title': f'节点1-{i}',
                        }
                        for i in range(1, 5)
                    ],
                },
                {
                    'key': '节点2',
                    'value': '2',
                    'title': '节点2',
                },
            ],
            placeholder='请选择',
            switcherIcon=fac.AntdIcon(icon='antd-down'),
            style={'width': 256},
        ),
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=False)
