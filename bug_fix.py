import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(
                    id='back-to-top-btn',
                    icon=fac.AntdIcon(icon='antd-arrow-up'),
                    tooltip='回到顶部',
                ),
                fac.AntdFloatButton(
                    id='global-theme-config-button',
                    icon=fac.AntdIcon(icon='antd-setting'),
                    tooltip='全局主题配置',
                ),
            ],
            icon=fac.AntdIcon(icon='antd-plus'),
            description='描述',
            tooltip='提示',
            type='primary',
            trigger='hover',
            style={'opacity': 0.5},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True, dev_tools_ui=False)
