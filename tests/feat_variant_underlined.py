if True:
    import sys

    sys.path.append('../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    placeholder='AntdInput underlined测试',
                    variant='underlined',
                ),
                fac.AntdCascader(
                    placeholder='AntdCascader underlined测试',
                    variant='underlined',
                    options=[],
                    style=style(width='100%'),
                ),
                fac.AntdDatePicker(
                    placeholder='AntdDatePicker underlined测试',
                    variant='underlined',
                    style=style(width='100%'),
                ),
                fac.AntdDateRangePicker(
                    placeholder=[
                        'AntdDateRangePicker underlined测试',
                        '',
                    ],
                    variant='underlined',
                    style=style(width='100%'),
                ),
                fac.AntdInputNumber(
                    placeholder='AntdInputNumber underlined测试',
                    variant='underlined',
                    style=style(width='100%'),
                ),
                fac.AntdMentions(
                    placeholder='AntdMentions underlined测试',
                    variant='underlined',
                    options=[],
                ),
                fac.AntdOTP(
                    variant='underlined', value='123456'
                ),
                fac.AntdSegmentedColoring(
                    min=-10,
                    max=10,
                    breakpoints=[0, 1, 2, 3, 4, 5],
                    colors=[
                        '#deecf9',
                        '#71afe5',
                        '#2b88d8',
                        '#0078d4',
                        '#106ebe',
                    ],
                    variant='underlined',
                    size='small',
                ),
                fac.AntdSelect(
                    placeholder='AntdSelect underlined测试',
                    variant='underlined',
                    options=[],
                    style=style(width='100%'),
                ),
                fac.AntdTimePicker(
                    placeholder='AntdTimePicker underlined测试',
                    variant='underlined',
                    style=style(width='100%'),
                ),
                fac.AntdTimeRangePicker(
                    placeholder=[
                        'AntdTimeRangePicker underlined测试',
                        '',
                    ],
                    variant='underlined',
                    style=style(width='100%'),
                ),
                fac.AntdTreeSelect(
                    placeholder='AntdTreeSelect underlined测试',
                    variant='underlined',
                    treeData=[],
                    style=style(width='100%'),
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
