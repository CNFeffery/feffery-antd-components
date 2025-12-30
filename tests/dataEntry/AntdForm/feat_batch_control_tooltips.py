if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdInput(name=f'表单项{i}'),
                    label=f'表单项{i}',
                )
                for i in range(1, 6)
            ],
            id='batch-tooltip-form-demo',
            enableBatchControl=True,
            layout='vertical',
            tooltips={
                f'表单项{i}': f'这是表单项{i}的提示信息'
                for i in range(1, 6)
            },
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
