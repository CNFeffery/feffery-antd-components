import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCard(
            [
                fac.AntdCardGrid(
                    f'网格{i}',
                    id={
                        'type': 'card-grid-demo',
                        'index': i
                    },
                    style={
                        'width': '25%',
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center'
                    }
                )
                for i in range(10)
            ],
            id='card-demo',
            title='卡片网格示例',
            style={
                'width': '400px',
                'marginBottom': '10px'
            }
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    [
        Input('card-demo', 'nClicks'),
        Input(
            {
                'type': 'card-grid-demo',
                'index': ALL
            },
            'nClicks'
        )
    ]
)
def demo(*args):

    return json.dumps(
        dash.ctx.inputs,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
