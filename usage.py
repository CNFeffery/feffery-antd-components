import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFormItem(
            fac.AntdDateRangePicker(
                id='projects-center:projects-manage:projects-list:date-range',
                style={
                    'width': 225
                }
            ),
            label='时间范围选择',
            tooltip='以接件时间为目标进行筛选',
            colon=False
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
