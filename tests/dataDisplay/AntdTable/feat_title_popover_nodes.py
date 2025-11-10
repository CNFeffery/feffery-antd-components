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
                {'title': 'Name', 'dataIndex': 'name'},
                {'title': 'Role', 'dataIndex': 'role'},
                {'title': 'Status', 'dataIndex': 'status'},
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
            titlePopoverInfo=[
                {
                    'dataIndex': 'name',
                    'title': 'Hover for Name Info',
                    'content': 'Full names of team members',
                },
                {
                    'dataIndex': 'status',
                    'title': fac.AntdText('Status Legend'),
                    'content': fac.AntdDescriptions(
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
                },
            ],
        )
    ],
    style={
        'padding': 24,
        'maxWidth': 640,
        'margin': '0 auto',
    },
)


if __name__ == '__main__':
    app.run(debug=True)
