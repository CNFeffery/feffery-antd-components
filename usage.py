import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdAccordion(
            items=[
                {
                    'children': fac.AntdTag(
                        content=f'手风琴项{i}测试'
                    ),
                    'title': fac.AntdText(
                        f'手风琴项{i}',
                        strong=True,
                        copyable=True
                    ),
                    'key': str(i),
                    'extra': fac.AntdButton(
                        f'手风琴项{i}测试',
                        type='primary',
                        size='small'
                    )
                }
                for i in range(5)
            ],
            collapsible='header',
            bordered=True
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
