if True:
    import sys
    sys.path.append('../..')
    import os
    import dash
    from dash import html
    import feffery_antd_components as fac

paths = [path[0].replace('C:\\Conda\\', '')
         for path in os.walk(r'C:\Conda\envs')]

pathTreeData = [
    {
        'title': path.split('\\')[-1],
        'key': path,
        'value': path,
        'parent': '\\'.join(path.split('\\')[:-1])
    }
    for path in paths
    if '\\' in path
]

pathTreeData.append(
    {
        'title': 'envs',
        'key': 'envs',
        'value': 'envs',
    }
)

app = dash.Dash(__name__)

treeData = [
    {'label': "马云", 'value': "马云", 'key': "1"},
    {'label': "前端技术专家", 'value': "前端技术专家", 'key': "3", 'parent': "2"},
    {'label': "首席科学家", 'value': "首席科学家", 'key': "2", 'parent': "1"},
    {'label': "前端架构师", 'value': "前端架构师", 'key': "4", 'parent': "3"},
    {'label': "前端工程师", 'value': "前端工程师", 'key': "5", 'parent': "4"},
    {'label': "前端菜鸟", 'value': "前端菜鸟", 'key': "6", 'parent': "5"},
    {'label': "前端小白", 'value': "前端小白", 'key': "7", 'parent': "6"},
    {'label': "马岳父", 'value': "马岳父", 'key': "8"},
    {'label': "QQ", 'value': "QQ", 'key': "9", 'parent': "8"},
    {'label': "微信", 'value': "微信", 'key': "10", 'parent': "8"},
    {'label': "王者荣耀", 'value': "王者荣耀", 'key': "11", 'parent': "8"},
    {'label': "绝地求生", 'value': "绝地求生", 'key': "12", 'parent': "8"},
    {'label': "QQ会员", 'value': "QQ会员", 'key': "13", 'parent': "9"},
    {'label': "QQ空间", 'value': "QQ空间", 'key': "14", 'parent': "9"},
    {'label': "QQ钱包", 'value': "QQ钱包", 'key': "15", 'parent': "9"},
    {'label': "沙漠地图", 'value': "沙漠地图", 'key': "16", 'parent': "12"},
    {'label': "公众号", 'value': "公众号", 'key': "17", 'parent': "10"},
    {'label': "群聊", 'value': "群聊", 'key': "18", 'parent': "10"},
    {'label': "小程序", 'value': "小程序", 'key': "19", 'parent': "10"},
    {'label': "花木兰", 'value': "花木兰", 'key': "20", 'parent': "11"},
    {'label': "芈月", 'value': "芈月", 'key': "21", 'parent': "11"},
    {'label': "马可波罗", 'value': "马可波罗", 'key': "22", 'parent': "11"},
]

app.layout = html.Div(
    html.Div(
        [
            fac.AntdTreeSelect(
                # treeData=treeData,
                treeData=pathTreeData,
                treeDataMode='flat',
                treeDefaultExpandAll=True,
                listHeight=600
            ),

            fac.AntdDivider(),

            fac.AntdTree(
                treeData=pathTreeData,
                treeDataMode='flat',
                defaultExpandAll=True,
                height=700
            ),

            fac.AntdDivider(),

            fac.AntdCascader(
                options=treeData,
                optionsMode='flat'
            )
        ],
        style={
            'padding': '30px 0'
        }
    ),
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
