import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdRadioGroup(
                    options=[
                        {
                            'label': fac.AntdText(
                                f'选项{i}',
                                strong=True
                            ),
                            'value': f'选项{i}'
                        }
                        for i in range(5)
                    ]
                ),
                fac.AntdRadioGroup(
                    options=list(range(10))
                ),
                fac.AntdRadioGroup(
                    options=[f'选项{i}' for i in range(10)]
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
