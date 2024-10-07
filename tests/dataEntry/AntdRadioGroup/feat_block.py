if True:
    import sys

    sys.path.append('../../../')
    import dash
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = fac.AntdCenter(
    fac.AntdSpace(
        [
            fac.AntdRadioGroup(
                options=['Apple', 'Pear', 'Orange'],
                block=True,
                value='Apple',
            ),
            fac.AntdRadioGroup(
                options=['Apple', 'Pear', 'Orange'],
                block=True,
                optionType='button',
                value='Apple',
            ),
            fac.AntdRadioGroup(
                options=['Apple', 'Pear', 'Orange'],
                block=True,
                optionType='button',
                buttonStyle='solid',
                value='Apple',
            ),
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
