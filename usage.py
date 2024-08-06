from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdCalendar(
            size='large',
            customCells=[
                {
                    'type': 'date',
                    'month': 8,
                    'date': 1,
                    'content': fac.AntdTag(
                        content='建军节', color='red'
                    ),
                },
                {
                    'type': 'month',
                    'month': 7,
                    'content': fac.AntdTag(
                        content='暑假', color='red'
                    ),
                },
                {
                    'type': 'month',
                    'month': 8,
                    'content': fac.AntdTag(
                        content='暑假', color='red'
                    ),
                },
            ],
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
