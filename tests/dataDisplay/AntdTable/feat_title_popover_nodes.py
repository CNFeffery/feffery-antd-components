if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': fac.AntdSpace(
                        [
                            'Name',
                            fac.AntdPopover(
                                fac.AntdIcon(icon='antd-question-circle'),
                                title='Hover for Name Info',
                                content='Full names of team members',
                            ),
                        ],
                        size='small',
                    ),
                    'dataIndex': 'name',
                },
                {'title': 'Role', 'dataIndex': 'role'},
                {
                    'title': fac.AntdSpace(
                        [
                            'Status',
                            fac.AntdPopover(
                                fac.AntdIcon(icon='antd-question-circle'),
                                title=fac.AntdText('Status Legend'),
                                content=fac.AntdDescriptions(
                                    column=1,
                                    bordered=True,
                                    items=[
                                        {
                                            'label': 'Active',
                                            'children': 'Currently available',
                                        },
                                        {
                                            'label': 'On Leave',
                                            'children': 'Temporarily out',
                                        },
                                    ],
                                    size='small',
                                    style={'maxWidth': 600},
                                ),
                            ),
                        ],
                        size='small',
                    ),
                    'dataIndex': 'status',
                },
            ],
            data=[
                {
                    'name': 'Alice',
                    'role': 'Designer',
                    'status': 'Active',
                    'key': '1',
                },
                {
                    'name': 'Bob',
                    'role': 'Engineer',
                    'status': 'On Leave',
                    'key': '2',
                },
                {
                    'name': 'Carol',
                    'role': 'PM',
                    'status': 'Active',
                    'key': '3',
                },
            ],
            bordered=True,
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
