import dash
import numpy as np
import pandas as pd
from dash import html
import feffery_antd_components as fac
from feffery_antd_components.utils import df2table

app = dash.Dash(__name__)

demo_df = pd.DataFrame(
    np.random.rand(100, 5),
    columns=[f'字段{str(i)*i}' for i in range(1, 6)]
)

demo_df['字段6'] = np.random.choice(list('abcdefg'), 100, replace=True)
demo_df['字段7'] = np.random.choice(
    list('ABCEDFGHIJKLMNOPKISTUVWXYZ'),
    100,
    replace=True
)

app.layout = html.Div(
    [
        df2table(
            demo_df,
            columns_alias={
                '字段1': '字段1别名测试'
            },
            bordered=True,
            column_width_mode='equal',
            left_fixed_columns=['字段1'],
            right_fixed_columns=['字段6', '字段7'],
            numeric_auto_sort=True,
            editable_columns=['字段6'],
            columns_precision={
                '*': 2
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
