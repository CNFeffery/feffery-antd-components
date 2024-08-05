import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

tree_node_context_menu = [
    {'key': operation, 'label': operation}
    for operation in [
        '下方新增节点',
        '上方新增节点',
        '新增子节点',
        '清空子节点',
        '删除此节点',
    ]
]

app.layout = html.Div(
    [
        fac.AntdTree(
            treeData=[
                {
                    'key': '根节点',
                    'title': '根节点',
                    'contextMenu': [
                        {
                            'key': operation,
                            'label': operation,
                        }
                        for operation in [
                            '新增子节点',
                            '清空子节点',
                        ]
                    ],
                    'children': [
                        {
                            'key': '节点1',
                            'title': '节点1',
                            'contextMenu': tree_node_context_menu,
                            'children': [
                                {
                                    'key': '节点1-1',
                                    'title': '节点1-1',
                                    'contextMenu': tree_node_context_menu,
                                    'children': [
                                        {
                                            'key': '节点1-1-1',
                                            'title': '节点1-1-1',
                                            'contextMenu': tree_node_context_menu,
                                        }
                                    ],
                                },
                                {
                                    'key': '节点1-2',
                                    'title': '节点1-2',
                                    'contextMenu': tree_node_context_menu,
                                },
                            ],
                        },
                        {
                            'key': '节点2',
                            'title': '节点2',
                            'contextMenu': tree_node_context_menu,
                        },
                    ],
                }
            ],
            defaultExpandAll=True,
            draggable=True,
            dragDisabledKeys=['节点1-1-1', '节点2'],
        ),
    ],
    style=style(padding=100),
)


if __name__ == '__main__':
    app.run(debug=True)
