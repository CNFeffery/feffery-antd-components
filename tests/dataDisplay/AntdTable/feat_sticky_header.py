if True:
    import sys

    sys.path.append("../../../")
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        # ---- sticky top section whose height can change (collapse) ----
        html.Div(
            fac.AntdAccordion(
                items=[
                    {
                        "title": f"手风琴项示例{i}",
                        "key": i,
                        "children": fac.AntdText(f"手风琴项示例{i}"),
                    }
                    for i in range(1, 6)
                ]
            ),
            # this outer wrapper is what the hook observes
            className="filters-shell",
            style={
                "position": "sticky",
                "top": 0,
                "zIndex": 20,
                "background": "white",
                "borderBottom": "1px solid #f0f0f0",
            },
        ),
        html.Br(),
        fac.AntdTable(
            columns=[
                {"title": f"Field {i}", "dataIndex": f"Field {i}"} for i in range(5)
            ],
            data=[
                {**{f"Field {j}": i for j in range(5)}, "key": f"row-{i}"}
                for i in range(60)
            ],
            bordered=True,
            size="middle",
            className="sticky-table",
            sticky={"belowSelector": ".filters-shell"},
            pagination={"pageSize": 100, "position": "bottomCenter"},
            expandedRowKeyToContent=[
                {
                    "key": f"row-{i}",
                    "content": fac.AntdTable(
                        columns=[
                            {"title": f"Nested {i}", "dataIndex": f"Field {i}"}
                            for i in range(5)
                        ],
                        data=[
                            {**{f"Field {j}": i for j in range(5)}, "key": f"row-{i}"}
                            for i in range(60)
                        ],
                        bordered=True,
                        size="middle",
                        sticky={
                            "belowSelector": [
                                ".filters-shell",
                                ".sticky-table .ant-table-header.ant-table-sticky-holder",
                            ],
                        },
                        pagination={"pageSize": 100, "position": "bottomCenter"},
                    ),
                }
                for i in range(60)
            ],
        ),
    ],
    style={"padding": 24, "maxWidth": 1000, "margin": "0 auto"},
)

if __name__ == "__main__":
    app.run(debug=True)
