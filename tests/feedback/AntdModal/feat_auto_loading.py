import sys
import time

sys.path.append("../../../")

import dash
from dash import Input, Output, State, callback, html
from feffery_dash_utils.style_utils import style

import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSpace(
                    [
                        "Enable selective destroy",
                        fac.AntdSwitch(id="sw-enable", checked=True),
                    ],
                    size=6,
                ),
                fac.AntdSpace(
                    ["Destroy content", fac.AntdSwitch(id="sw-content", checked=True)],
                    size=6,
                ),
                fac.AntdSpace(
                    ["Destroy title", fac.AntdSwitch(id="sw-title", checked=True)],
                    size=6,
                ),
                fac.AntdButton("Open modal", id="btn-open", type="primary"),
                fac.AntdButton("Set title now", id="btn-set-title"),
                fac.AntdButton("Set content now", id="btn-set-content"),
            ],
            wrap=True,
            size=12,
        ),
        fac.AntdDivider(),
        fac.AntdParagraph(
            [
                "Tip: close and reopen the modal to see how the selected ",
                fac.AntdText("destroy-on-close", strong=True),
                " behavior affects ",
                fac.AntdText("title", strong=True),
                " and ",
                fac.AntdText("content", strong=True),
                ".",
            ]
        ),
        # The modal under test
        fac.AntdModal(
            id="modal",
            title="Demo modal (title will reset if selected)",
            visible=False,
            autoLoading=True,  # <-- shows skeleton until children arrive
            destroyOnClose=True,  # unmount modal body for perf/DOM cleanup
        ),
    ],
    style=style(padding=50),
)


# Open the modal when the button is clicked
@callback(
    Output("modal", "visible"),
    Input("btn-open", "nClicks"),
    prevent_initial_call=True,
)
def open_modal(n):
    return True


# When the modal becomes visible, simulate a 2s load then inject content
@callback(
    Output("modal", "children"),
    Input("modal", "visible"),
    prevent_initial_call=True,
)
def load_modal_content(visible):
    if not visible:
        return dash.no_update
    time.sleep(2)  # simulate async work
    return fac.Fragment(
        [
            fac.AntdParagraph(
                "Content loaded ✅ (will reset if selected in switches above)"
            ),
            fac.AntdParagraph(
                "Try closing this modal and reopening it to observe the behavior."
            ),
        ]
    )


# Live-control `destroyOnCloseParts` from the switches
@callback(
    Output("modal", "destroyOnCloseParts"),
    Output("sw-content", "disabled"),
    Output("sw-title", "disabled"),
    Input("sw-enable", "checked"),
    Input("sw-content", "checked"),
    Input("sw-title", "checked"),
)
def set_destroy_parts(enable, destroy_content, destroy_title):
    content_disabled = not enable
    title_disabled = not enable

    if not enable:
        return False, content_disabled, title_disabled

    return (
        {"content": bool(destroy_content), "title": bool(destroy_title)},
        content_disabled,
        title_disabled,
    )


# Set a new title immediately
@callback(
    Output("modal", "title"),
    Input("btn-set-title", "nClicks"),
    State("modal", "title"),
    prevent_initial_call=True,
)
def set_title(n, current_title):
    n = n or 0
    return f"Demo modal (title set {n})"


# Set content immediately
@callback(
    Output("modal", "children", allow_duplicate=True),
    Input("btn-set-content", "nClicks"),
    prevent_initial_call=True,
)
def set_content(n):
    n = n or 0
    return fac.AntdParagraph(f"Manually set content #{n} (will reset if selected).")


if __name__ == "__main__":
    app.run(debug=True)
