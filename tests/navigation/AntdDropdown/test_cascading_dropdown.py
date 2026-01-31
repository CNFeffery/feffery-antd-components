if True:
    import sys

    sys.path.append('./')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.H2('Cascading Dropdown Menu Demo'),
        html.Div(
            [
                fac.AntdDropdown(
                    id='cascading-dropdown-demo',
                    title='Click to see cascading menu',
                    trigger='click',
                    buttonMode=True,
                    buttonProps={'type': 'primary'},
                    menuItems=[
                        {
                            'title': 'Navigation',
                            'key': 'nav',
                            'icon': 'HomeOutlined',
                            'children': [
                                {
                                    'title': 'Dashboard',
                                    'key': 'nav-dashboard',
                                },
                                {
                                    'title': 'Settings',
                                    'key': 'nav-settings',
                                    'children': [
                                        {
                                            'title': 'Profile',
                                            'key': 'nav-settings-profile',
                                        },
                                        {
                                            'title': 'Account',
                                            'key': 'nav-settings-account',
                                        },
                                        {
                                            'title': 'Privacy',
                                            'key': 'nav-settings-privacy',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            'title': 'Actions',
                            'key': 'actions',
                            'icon': 'ThunderboltOutlined',
                            'children': [
                                {
                                    'title': 'Create',
                                    'key': 'actions-create',
                                    'children': [
                                        {
                                            'title': 'New Project',
                                            'key': 'actions-create-project',
                                        },
                                        {
                                            'title': 'New File',
                                            'key': 'actions-create-file',
                                        },
                                    ]
                                },
                                {
                                    'title': 'Delete',
                                    'key': 'actions-delete',
                                },
                            ]
                        },
                        {'isDivider': True},
                        {
                            'title': 'Help',
                            'key': 'help',
                            'icon': 'QuestionCircleOutlined',
                        },
                    ]
                ),
                html.Div(
                    id='dropdown-output',
                    style={'marginTop': '20px', 'fontSize': '16px'}
                ),
            ],
            style={'padding': '20px'}
        )
    ]
)


@app.callback(
    Output('dropdown-output', 'children'),
    Input('cascading-dropdown-demo', 'clickedKey'),
    prevent_initial_call=True,
)
def display_clicked_item(clickedKey):
    if clickedKey:
        return f'You clicked: {clickedKey}'
    return ''


if __name__ == '__main__':
    app.run(debug=True, port=8050)
