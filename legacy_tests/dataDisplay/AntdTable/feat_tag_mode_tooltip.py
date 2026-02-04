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
                    'title': 'Single Tag',
                    'dataIndex': 'single-tag',
                    'renderOptions': {'renderType': 'tags'},
                },
                {
                    'title': 'Multiple Tags',
                    'dataIndex': 'multiple-tags',
                    'renderOptions': {'renderType': 'tags'},
                },
            ],
            data=[
                {
                    'single-tag': {
                        'tag': 'Active',
                        'color': 'green',
                        'tooltip': {'title': 'Currently active status'},
                    },
                    'multiple-tags': [
                        {
                            'tag': 'Important',
                            'color': 'red',
                            'tooltip': {
                                'title': 'High priority item',
                                'placement': 'top',
                            },
                        },
                        {
                            'tag': 'Verified',
                            'color': 'blue',
                            'tooltip': {
                                'title': 'Verified by admin',
                                'placement': 'bottom',
                            },
                        },
                    ],
                },
                {
                    'single-tag': {
                        'tag': 'Pending',
                        'color': 'orange',
                        'tooltip': {
                            'title': 'Waiting for processing',
                            'placement': 'right',
                        },
                    },
                    'multiple-tags': [
                        {
                            'tag': 'New',
                            'color': 'cyan',
                        },
                        {
                            'tag': 'Urgent',
                            'color': 'red',
                            'tooltip': {
                                'title': 'Urgent task',
                                'placement': 'left',
                            },
                        },
                    ],
                },
            ],
            bordered=True,
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
