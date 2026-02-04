if True:
    import sys

    sys.path.append('../../../')
    from datetime import datetime, timedelta

    import dash
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

start_datetime = datetime.now() - timedelta(seconds=2 * 24 * 60 * 60 + 30)

app.layout = lambda: fac.AntdCenter(
    [
        fac.AntdRow(
            [
                fac.AntdCol(
                    fac.AntdCountup(
                        title='Countdown',
                        value=start_datetime.strftime('%Y-%m-%d %H:%M:%S:%f'),
                    ),
                    span=12,
                ),
                fac.AntdCol(
                    fac.AntdCountup(
                        title='Million Seconds',
                        value=start_datetime.strftime('%Y-%m-%d %H:%M:%S:%f'),
                        format='HH:mm:ss:SSS',
                    ),
                    span=12,
                ),
                fac.AntdCol(
                    fac.AntdCountup(
                        title='Day Level',
                        value=start_datetime.strftime('%Y-%m-%d %H:%M:%S:%f'),
                        format='D 天 H 时 m 分 s 秒',
                    ),
                    span=24,
                ),
            ],
            gutter=16,
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
