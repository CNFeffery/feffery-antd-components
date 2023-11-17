import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            items=[
                {
                    'key': f'标签页{i}',
                    'label': f'标签页{i}',
                    'children': html.Div(
                        f'这是标签页{i}的内容示例',
                        style={
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center',
                            'fontSize': 18,
                            'background': f'rgba(28, 126, 214, calc(1 - 0.2 * {i}))',
                            'height': 200
                        }
                    )
                }
                for i in range(1, 6)
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
