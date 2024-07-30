import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSwitch(
                    id='spinning',
                    checked=True,
                    style={
                        'position': 'fixed',
                        'top': 50,
                        'left': 50,
                        'zIndex': 99999,
                    },
                ),
                fac.AntdCustomSkeleton(
                    id='custom-skeleton',
                    manual=True,
                    skeletonContent=html.Div(
                        [
                            fac.AntdRow(
                                [
                                    fac.AntdCol(
                                        fac.AntdSkeletonButton(
                                            block=True,
                                            active=True,
                                        ),
                                        span=6,
                                        style={
                                            'padding': '4px'
                                        },
                                    )
                                ]
                                * 16
                            ),
                            fac.AntdSpace(
                                [
                                    html.Div(
                                        fac.AntdSkeletonButton(
                                            active=True,
                                            size='small',
                                            block=True,
                                        ),
                                        style={
                                            'width': '80px'
                                        },
                                    ),
                                    html.Div(
                                        fac.AntdSkeletonButton(
                                            active=True,
                                            size='small',
                                            block=True,
                                        ),
                                        style={
                                            'width': '60px'
                                        },
                                    ),
                                ],
                                style={
                                    'float': 'right',
                                    'paddingRight': '4px',
                                    'paddingTop': '15px',
                                },
                            ),
                        ]
                    ),
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style={'padding': 200},
)

app.clientside_callback(
    """(checked) => checked""",
    Output('custom-skeleton', 'loading'),
    Input('spinning', 'checked'),
)

if __name__ == '__main__':
    app.run(debug=True)
