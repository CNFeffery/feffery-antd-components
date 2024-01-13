import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            treeDataMode='flat',
            treeData=[
                {
                    'key': '节点1',
                    'value': '1',
                    'title': '节点1'
                },
                *[
                    {
                        'key': f'节点1-{i}',
                        'value': f'1-{i}',
                        'title': f'节点1-{i}',
                        'parent': '节点1'
                    }
                    for i in range(1, 6)
                ]
            ],
            treeCheckable=True,
            placeholder='请选择',
            treeNodeKeyToTitle={
                '节点1': fac.AntdText('节点1', italic=True),
                '节点1-4': fac.AntdText('节点1-4', underline=True),
            },
            style={
                'width': 256
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
