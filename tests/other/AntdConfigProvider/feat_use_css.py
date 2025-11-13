if True:
    import sys

    sys.path.append("../../../")  # adjust if needed

    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    fac.Fragment(
        fac.AntdCenter(
            fac.AntdSpace(
                [
                    fac.AntdSegmented(
                        id="theme-mode",
                        options=[
                            {"label": "Light", "value": "light"},
                            {"label": "Dark", "value": "dark"},
                        ],
                        value="dark",
                    ),
                    html.Div(
                        "HTML styled via AntD CSS vars",
                        style={
                            "background": "var(--ant-color-bg-container)",
                            "color": "var(--ant-color-text)",
                            "border": "1px solid var(--ant-color-split)",
                            "padding": 12,
                            "borderRadius": 6,
                        },
                    ),
                    fac.AntdDivider(),
                    fac.AntdText(
                        "Resolved design tokens:",
                        strong=True,
                    ),
                    html.Pre(id="show-token", style={"whiteSpace": "pre-wrap"}),
                ],
                direction="vertical",
                size="large",
                style={"width": "100%", "maxWidth": 800},
            ),
            style=style(height="100vh", overflowY="auto"),
        ),
        id="listen-token",  # exposes `token` for the clientside callback
    ),
    id="cfg",
    algorithm="dark",  # initial theme
    token={"fontSize": 18},  # sample token override
    cssVar=True,
)


# Toggle between algorithms
@app.callback(Output("cfg", "algorithm"), Input("theme-mode", "value"))
def apply_theme(mode: str):
    return "dark" if mode == "dark" else "default"


if __name__ == "__main__":
    app.run(debug=True)
