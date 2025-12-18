from datetime import datetime, timedelta

from dash import callback, Dash, html, Input, Output

import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDatePicker(
            id="dp",
            format="YYYY-MM-DD",
            needConfirm=True,
            disabledDatesStrategy=[
                {
                    "mode": "not-in-enumerate-dates",
                    "target": "specific-date",
                    "value": ["2025-09-01", "2025-09-05"],
                }
            ],
            customCells=[
                {
                    "year": datetime.now().year,
                    "month": datetime.now().month,
                    "date": (datetime.now() + timedelta(days=1)).day,
                    "style": {
                        "border": "1px dashed #595959",
                    },
                }
            ],
            dateOverlays=[
                {
                    "date": "2025-09-01",
                    "extraFooter": html.Div(
                        [
                            html.B("Back-to-work tips"),
                            html.Br(),
                            "Preset bundle for Sep 1",
                        ]
                    ),
                    "presets": [
                        {"label": "Morning shift", "value": "2025-09-01"},
                        {"label": "Afternoon shift", "value": "2025-09-01"},
                    ],
                },
                {
                    "date": "2025-09-05",
                    "extraFooter": html.Div("Special Friday footer"),
                    "presets": [{"label": "All-day", "value": "2025-09-05"}],
                },
            ],
            locale="en-us",
        ),
        html.Pre(id="clicked"),
    ]
)


@callback(Output("clicked", "children"), Input("dp", "clickedDate"))
def show_clicked(d):
    return f"preSelect clickedDate: {d}"


if __name__ == "__main__":
    app.run(debug=True)
