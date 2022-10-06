
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdDraggerUpload(
            apiUrl='/upload/',
            fileMaxSize=1,
            text='拖拽上传示例',
            hint='点击或拖拽文件至此处进行上传',
            defaultFileList=[
                {
                    'name': 'xx.png'
                }
            ]
        ),


        fac.AntdTree(
            id='tree-demo',
            treeData=[
                {
                    'title': 'A',
                    'key': 'A',
                    'children': [
                        {
                            'title': 'AA',
                            'key': 'AA'
                        },
                        {
                            'title': 'AB',
                            'key': 'AB',
                            'children': [
                                {
                                    'title': 'ABA',
                                    'key': 'ABA'
                                },
                                {
                                    'title': 'ABB',
                                    'key': 'ABB'
                                }
                            ]
                        }
                    ]
                },
                {
                    'title': 'B',
                    'key': 'B'
                }
            ],
            checkable=True,
            defaultExpandAll=True,
            checkStrictly=False
        )
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('tree-demo', 'treeData'),
    Input('tree-demo', 'checkedKeys'),
    State('tree-demo', 'treeData')
)
def demo(checkedKeys, treeData):

    checkedKeys = checkedKeys or []

    if 'ABB' in checkedKeys:
        treeData[0]['children'][1]['children'][0]['disabled'] = True
        treeData[0]['children'][1]['children'][1]['disabled'] = False

    elif 'ABA' in checkedKeys:
        treeData[0]['children'][1]['children'][0]['disabled'] = False
        treeData[0]['children'][1]['children'][1]['disabled'] = True

    else:
        treeData[0]['children'][1]['children'][0]['disabled'] = False
        treeData[0]['children'][1]['children'][1]['disabled'] = False

    return treeData


if __name__ == '__main__':
    app.run(debug=True)
