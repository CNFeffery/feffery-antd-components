import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDatePicker(
                    style={
                        'width': 220
                    },
                    extraFooter=fac.AntdSpace(
                        [
                            fac.AntdButton(
                                f'操作{i}',
                                size='small',
                                type='primary'
                            )
                            for i in range(1, 6)
                        ],
                        size='small'
                    )
                ),
                fac.AntdDateRangePicker(
                    style={
                        'width': 220
                    },
                    extraFooter=fac.AntdSpace(
                        [
                            fac.AntdButton(
                                f'操作{i}',
                                size='small',
                                type='primary'
                            )
                            for i in range(1, 6)
                        ],
                        size='small'
                    )
                ),
                fac.AntdTimePicker(
                    style={
                        'width': 220
                    },
                    extraFooter=fac.AntdSpace(
                        [
                            fac.AntdButton(
                                f'操作{i}',
                                size='small',
                                type='primary'
                            )
                            for i in range(1, 6)
                        ],
                        size='small'
                    )
                ),
                fac.AntdTimeRangePicker(
                    style={
                        'width': 220
                    },
                    extraFooter=fac.AntdSpace(
                        [
                            fac.AntdButton(
                                f'操作{i}',
                                size='small',
                                type='primary'
                            )
                            for i in range(1, 6)
                        ],
                        size='small'
                    )
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': 150
    }
)

if __name__ == '__main__':
    app.run(debug=True)
