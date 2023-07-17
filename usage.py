import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCheckCardGroup(
            [
                fac.AntdCheckCard(
                    f'选项{i}',
                    value=i
                )
                for i in range(1, 6)
            ],
            defaultValue=3,
            allowNoValue=False
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
