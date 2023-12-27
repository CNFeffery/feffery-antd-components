import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSelect(
                    options=[
                        {
                            'label': f'选项{i}'*10,
                            'value': f'选项{i}'*10,
                        }
                        for i in range(1, 10)
                    ],
                    style={
                        'width': 200
                    }
                ),
                fac.AntdSelect(
                    options=[
                        {
                            'label': f'选项{i}'*10,
                            'value': f'选项{i}'*10,
                        }
                        for i in range(1, 10)
                    ],
                    popupMatchSelectWidth=False,
                    style={
                        'width': 200
                    }
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
