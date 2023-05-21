import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        # 功能测试：带搜索框的主要组件不同的搜索模式
        # AntdSelect、AntdTransfer
        fac.AntdTransfer(
            dataSource=[
                {
                    'key': i,
                    'title': f'选项{i}'
                }
                for i in list('AbCdEf')
            ],
            showSearch=True,
            height=600
        ),

        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdSelect(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}',
                            }
                            for i in list('AbCdEf')
                        ],
                        optionFilterMode=mode,
                        style={
                            'width': 300
                        }
                    ),
                    label=mode
                )
                for mode in [
                    'case-insensitive',
                    'case-sensitive',
                    'regex'
                ]
            ],
            layout='vertical'
        ),

        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdTreeSelect(
                        treeData=[
                            {
                                'title': f'选项{i}',
                                'value': f'选项{i}',
                                'key': f'选项{i}',
                            }
                            for i in list('AbCdEf')
                        ],
                        treeNodeFilterMode=mode,
                        style={
                            'width': 300
                        }
                    ),
                    label=mode
                )
                for mode in [
                    'case-insensitive',
                    'case-sensitive',
                    'regex'
                ]
            ],
            layout='vertical'
        )
    ],
    style={
        'padding': 200
    }
)


if __name__ == '__main__':
    app.run(debug=True)
