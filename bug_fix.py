import dash
import feffery_antd_components as fac

app = dash.Dash(__name__)
data, sum = (
    [
        {
            'key': 'admin',
            '用户': 'admin',
            '密码': {
                'content': '重置密码',
                'type': 'primary',
                'danger': True,
                'custom': 'reset-password admin',
            },
            '管理员': {
                'checked': True,
                'checkedChildren': '开',
                'unCheckedChildren': '关',
            },
            '失效时间': '2029-04-07 10:24:27',
            '设置有效天数': [
                {
                    'content': '过期',
                    'type': 'dashed',
                    'custom': 'set-expire-time 过期 admin',
                },
                {
                    'content': '30',
                    'type': 'dashed',
                    'custom': 'set-expire-time 30 admin',
                },
                {
                    'content': '90',
                    'type': 'dashed',
                    'custom': 'set-expire-time 90 admin',
                },
                {
                    'content': '365',
                    'type': 'dashed',
                    'custom': 'set-expire-time 365 admin',
                },
            ],
            '应用权限': {
                'options': [
                    {
                        'label': '数据总览',
                        'value': '数据总览',
                    },
                    {
                        'label': 'License.VMU',
                        'value': 'License.VMU',
                    },
                    {
                        'label': 'License.SharingDiag',
                        'value': 'License.SharingDiag',
                    },
                    {
                        'label': 'SignTool.PDCU',
                        'value': 'SignTool.PDCU',
                    },
                ],
                'mode': 'tags',
                'placeholder': '请选择',
                'value': [
                    'SignTool.PDCU',
                    'License.VMU',
                    '数据总览',
                ],
            },
        }
    ],
    [
        {'content': '总计：1', 'colSpan': 2},
        {'content': '管理员：\nadmin', 'colSpan': 3},
        {'content': '过期：\n', 'colSpan': 2},
    ],
)

app.layout = fac.AntdModal(
    [
        fac.AntdSpace(
            [
                fac.AntdTable(
                    id='main-table-user-manager',
                    columns=[
                        {
                            'title': '用户',
                            'dataIndex': '用户',
                            'width': 'calc(100% / 10)',
                        },
                        {
                            'title': '密码',
                            'dataIndex': '密码',
                            'renderOptions': {
                                'renderType': 'button',
                                'renderButtonPopConfirmProps': {
                                    'title': '确认重置？',
                                    'okText': '确认',
                                    'cancelText': '取消',
                                },
                            },
                        },
                        {
                            'title': '管理员',
                            'dataIndex': '管理员',
                            'renderOptions': {
                                'renderType': 'switch'
                            },
                        },
                        {
                            'title': '失效时间',
                            'dataIndex': '失效时间',
                            'editable': True,
                            'width': 'calc(100%*2 / 10)',
                        },
                        {
                            'title': '设置有效天数',
                            'dataIndex': '设置有效天数',
                            'renderOptions': {
                                'renderType': 'button',
                                'renderButtonPopConfirmProps': {
                                    'title': '确认执行？',
                                    'okText': '确认',
                                    'cancelText': '取消',
                                },
                            },
                        },
                        {
                            'title': '应用权限',
                            'dataIndex': '应用权限',
                            'renderOptions': {
                                'renderType': 'select'
                            },
                            'width': 'calc(100%*6 / 10)',
                        },
                    ],
                    data=data,
                    columnsFormatConstraint={
                        '失效时间': {
                            'rule': r'(((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9]))|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9]))|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9]))|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29))|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29))|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29))|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29))|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29))|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29))|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29))|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)))((\s+(0?[1-9]|1[012])(:[0-5]\d){0,2}(\s[AP]M))?$|(\s+([01]\d|2[0-3])(:[0-5]\d){0,2})?$))',
                            'content': '请输入正确时间格式',
                        },
                    },
                    pagination={
                        'pageSize': 5,
                        'showSizeChanger': True,
                        'pageSizeOptions': [5, 10, 20],
                    },
                    sortOptions={
                        'sortDataIndexes': [
                            '用户',
                            '失效时间',
                        ]
                    },
                    filterOptions={
                        '用户': {'filterSearch': True}
                    },
                    bordered=True,
                    rowSelectionType='radio',
                    summaryRowContents=sum,
                )
            ],
            style={'padding': 30},
        )
    ],
    title='用户管理',
    visible=True,
    width='1300px',
)

if __name__ == '__main__':
    app.run(debug=True)
