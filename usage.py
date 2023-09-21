import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [
        fac.AntdTabs(
            id='input',
            items=[
                {
                    'label': 'tab1',
                    'key': 'tab1',
                    'contextMenu': [
                        {
                            'key': f'tab1-menu{i}',
                            'label': f'选项{i}',
                            'icon': icon
                        }
                        for i, icon in enumerate(
                            [
                                'antd-compass',
                                'antd-carry-out',
                                'antd-bulb',
                                'antd-build',
                                'antd-setting'
                            ]
                        )
                    ]
                },
                {
                    'label': 'tab2',
                    'key': 'tab2'
                },
                {
                    'label': 'tab3',
                    'key': 'tab3'
                }
            ],
            type='card',
            size='large'
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('input', 'clickedContextMenu')
)
def demo(clickedContextMenu):

    return json.dumps(
        dict(
            clickedContextMenu=clickedContextMenu
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
