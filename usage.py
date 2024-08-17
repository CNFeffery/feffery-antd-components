import dash
import json
from dash import html
from dash.dependencies import Input, Output
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCalendar(
            id='calendar-cell-click-event-demo',
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
                    'type': 'date',
                    'month': 8,
                    'date': 7,
                    'content': fac.AntdTag(
                        content='立秋', color='gold'
                    ),
                },
                {
                    'type': 'date',
                    'month': 8,
                    'date': 12,
                    'content': fac.AntdSpace(
                        ['0.3.0发布', '🎉🎉🎉'],
                        direction='vertical',
                        align='center',
                        size=0,
                        style={
                            'width': '100%',
                            'fontSize': 16,
                        },
                    ),
                },
                {
                    'type': 'date',
                    'month': 8,
                    'date': 22,
                    'content': fac.AntdTag(
                        content='处暑', color='volcano'
                    ),
                },
                {
                    'type': 'month',
                    'month': 7,
                    'content': fac.AntdTag(
                        content='暑假', color='volcano'
                    ),
                },
                {
                    'type': 'month',
                    'month': 8,
                    'content': fac.AntdTag(
                        content='暑假', color='volcano'
                    ),
                },
            ],
        ),
        html.Pre(
            id='calendar-cell-click-event-demo-output'
        ),
    ],
    style=style(padding=50),
)


@app.callback(
    Output(
        'calendar-cell-click-event-demo-output', 'children'
    ),
    Input(
        'calendar-cell-click-event-demo', 'cellClickEvent'
    ),
    prevent_initial_call=True,
)
def calendar_cell_click_event_demo(cellClickEvent):
    return json.dumps(
        cellClickEvent, indent=4, ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
