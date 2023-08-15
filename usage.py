import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTree(
            treeData=[
                {
                    'title': f'节点{i}',
                    'key': f'节点{i}'
                }
                for i in range(1, 6)
            ],
            showLine=False,
            draggable=True,
            defaultExpandAll=True,
            dragInSameLevel=True,
            checkable=True
        )
    ],
    style={
        'padding': 150
    }
)

if __name__ == '__main__':
    app.run(debug=True)
