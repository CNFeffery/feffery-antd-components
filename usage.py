import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton()
            ] * 4,
            trigger='click',
            icon=fac.AntdIcon(
                icon='antd-bug'
            ),
            # tooltip='tooltip测试',
            # type='primary',
            # shape='square',
            # open=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True, dev_tools_ui=False)
