import dash
import json
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Pre(
            id='demo-output'
        ),
        fac.AntdDivider(
            isDashed=True
        ),
        fac.AntdSpace(
            [
                fac.AntdCheckCard(
                    '持久化测试',
                    id='check-card-test',
                    defaultChecked=True,
                    persistence=True
                ),
                fac.AntdCheckCardGroup(
                    [
                        fac.AntdCheckCard(
                            f'选项{i}',
                            value=i
                        )
                        for i in range(1, 6)
                    ],
                    id='check-card-group-test',
                    size='small',
                    multiple=True,
                    defaultValue=[1, 2],
                    persistence=True
                ),

                fac.AntdTabs(
                    id='tabs-test',
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
                    ],
                    defaultActiveKey='标签页1',
                    persistence=True
                )
            ][::-1],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': 100
    }
)


@app.callback(
    Output('demo-output', 'children'),
    [Input('check-card-test', 'checked'),
     Input('check-card-group-test', 'value'),
     Input('tabs-test', 'activeKey')]
)
def demo(*args):

    return json.dumps(
        dash.ctx.inputs_list,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
