import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            treeData=[
                {
                    "title": "Node1",
                    "value": "0-0",
                    "key": "0-0",
                    "children": [
                        {
                            "title": "Child Node1",
                            "value": "0-0-0",
                            "key": "0-0-0"
                        }
                    ]
                },
                {
                    "title": "Node2",
                    "value": "0-1",
                    "key": "0-1",
                    "children": [
                        {
                            "title": "Child Node3",
                            "value": "0-1-0",
                            "key": "0-1-0"
                        },
                        {
                            "title": "Child Node4",
                            "value": "0-1-1",
                            "key": "0-1-1"
                        },
                        {
                            "title": "Child Node5",
                            "value": "0-1-2",
                            "key": "0-1-2"
                        }
                    ]
                }
            ],
            style={
                'width': '250px'
            }
        )
    ]
)
