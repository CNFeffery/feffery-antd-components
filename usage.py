import dash
from dash import Dash, html, Input, Output, State
import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    children=[
        fac.AntdMenu(
            id="menu",
            menuItems=[
                {
                    "component": "SubMenu",
                    "props": {"key": "SubMenu", "title": "SubMenu"},
                    "children": [
                        {
                            "component": "Item",
                            "props": {
                                "title": "子菜单项",
                                "key": "子菜单项",
                            },
                        }
                    ],
                },
                {
                    "component": "Item",
                    "props": {"title": "菜单项", "key": "菜单项"},
                },
            ],
            mode="inline",
            style={"width": "200px"},
            openKeys=["SubMenu"],
        ),
        fac.AntdButton("回调", id="btn", type="primary"),
    ]
)

## 去除SubMenu后正常回调
# app.layout = html.Div(
#     children=[
#         fac.AntdMenu(
#             id="menu",
#             menuItems=[
#                 {
#                     "component": "Item",
#                     "props": {"title": "子菜单项", "key": "子菜单项"},
#                 },
#                 {
#                     "component": "Item",
#                     "props": {"title": "菜单项", "key": "菜单项"},
#                 },
#             ],
#             mode="inline",
#             style={"width": "200px"},
#             openKeys=["SubMenu"],
#         ),
#         fac.AntdButton("回调", id="btn", type="primary"),
#     ]
# )


@app.callback(
    Output("menu", "menuItemKeyToTitle"),
    Input("btn", "nClicks"),
    prevent_initial_call=True,
)
def _(click):
    menuItemKeyToTitle = {
        "子菜单项": fac.AntdSpace(["子菜单项", fac.AntdTag(content="标签", color="green")]),
        "菜单项": fac.AntdSpace(["菜单项", fac.AntdTag(content="标签", color="green")]),
    }
    return menuItemKeyToTitle


if __name__ == "__main__":
    app.run(debug=True)
