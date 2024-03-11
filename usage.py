import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = fac.AntdEditorLayout(
    themeType='ghost',
    header={
        'title': fac.AntdText(
            '标题测试',
            strong=True,
            style={
                'fontSize': 15
            }
        ),
        'style': {
            'height': 300,
            'paddingLeft': 50
        }
    },
    footer=False,
    leftPannel={
        'children': fac.AntdButton(
            '测试',
            type='primary',
            size='large'
        ),
        'minWidth': 200,
        'maxWidth': 200
    },
    bottomPannel=False,
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
