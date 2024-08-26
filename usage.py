import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFormItem(
            fac.AntdRadioGroup(
                id='config-provider-locale',
                options=[
                    {'label': locale, 'value': locale}
                    for locale in [
                        'zh-cn',
                        'en-us',
                        'de-de',
                    ]
                ],
                optionType='button',
                defaultValue='zh-cn',
            ),
            label='locale',
        ),
        fac.AntdDivider(isDashed=True),
        fac.AntdConfigProvider(
            fac.AntdSpace(
                [
                    fac.AntdCalendar(
                        defaultValue='2023-01-01',
                        style={'width': '300px'},
                    ),
                    fac.AntdCascader(options=[]),
                    fac.AntdComment(
                        authorName='费弗里',
                        authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
                        publishTime={
                            'value': '2022-01-01 19:29:01',
                            'format': 'YYYY-MM-DD hh:mm:ss',
                        },
                        commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的应用！😀',
                        avatarProps={
                            'mode': 'image',
                            'src': '/assets/imgs/avatar-demo.jpg',
                        },
                        fromNow=True,
                    ),
                    fac.AntdCopyText(
                        text='AntdCopyText复制示例',
                        beforeIcon='点我复制',
                        afterIcon='复制成功',
                    ),
                    fac.AntdDatePicker(),
                    fac.AntdDateRangePicker(),
                    fac.AntdEmpty(),
                    fac.AntdImage(
                        src='http://fac-next.feffery.tech/assets/imgs/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%832%E6%B5%B7%E6%8A%A5.jpg',
                        height=400,
                    ),
                    fac.AntdPagination(
                        defaultPageSize=10, total=100
                    ),
                    fac.AntdPopconfirm(
                        fac.AntdButton('气泡确认测试'),
                        title='气泡确认测试',
                    ),
                    fac.AntdSelect(
                        placeholder='下拉选择测试',
                        options=[],
                    ),
                    fac.AntdTimePicker(),
                    fac.AntdTimeRangePicker(),
                    fac.AntdTransfer(
                        dataSource=[], style={'width': 500}
                    ),
                    fac.AntdTreeSelect(
                        treeData=[], style={'width': 256}
                    ),
                    fac.AntdParagraph(
                        'AntdParagraph测试', copyable=True
                    ),
                    fac.AntdText(
                        'AntdText测试', copyable=True
                    ),
                    fac.AntdTitle(
                        'AntdTitle测试', copyable=True
                    ),
                ],
                direction='vertical',
                style={'width': '100%'},
            ),
            id='config-provider-locale-demo',
            locale='zh-cn',
        ),
    ],
    style=style(padding=50),
)

app.clientside_callback(
    '(value) => value',
    Output('config-provider-locale-demo', 'locale'),
    Input('config-provider-locale', 'value'),
    prevent_initial_call=True,
)

if __name__ == '__main__':
    app.run(debug=True)
