import dash
import warnings
import importlib
from collections import defaultdict
import feffery_antd_components as fac
from typing import Union, Literal, Any, List

try:
    import pandas as pd
except ImportError:
    warning_message = (
        "检测到您的环境中未安装\033[93mpandas\033[0m，"
        "部分工具函数如\033[93mdf2table\033[0m将无法正常使用，"
        "如有需要请使用pip或conda安装pandas。"
        "\n\nDetected that \033[93mpandas\033[0m is not installed in your environment. "
        "Some utility functions, such as \033[93mdf2table\033[0m, will not function properly. "
        "If necessary, please install pandas using pip or conda."
    )
    warnings.warn(warning_message, UserWarning)


__all__ = ['TreeUtils', 'fill_output_dict', 'df2table']


class TreeUtils:
    """
    针对AntdTree的treeData参数的一系列工具方法
    """

    @classmethod
    def update_tree_node(
        cls,
        input_object: Union[dict, list],
        node_key: str,
        new_node: dict,
        mode: Literal['replace', 'overlay'] = 'replace'
    ) -> Union[list, dict]:
        """对key值等于node_key的节点进行整体替换或增量更新

        Args:
            input_object (Union[dict, list]): 输入原始的treeData
            node_key (str): 要更新的节点key值
            new_node (dict): 要更新的新节点字典
            mode (Literal['replace', 'overlay'], default 'replace'): 设置更新模式，'replace'表示整体替换，'overlay'表示增量更新

        Returns:
            list: 完成更新后的treeData
        """

        if isinstance(input_object, list):
            return [cls.update_tree_node(node, node_key, new_node, mode) for node in input_object]

        elif isinstance(input_object, dict):
            if input_object.get('key') == node_key:
                if mode == 'replace':
                    return new_node
                else:
                    return {
                        **input_object,
                        **new_node
                    }
            else:
                if input_object.get('children'):
                    input_object['children'] = [
                        cls.update_tree_node(
                            child,
                            node_key,
                            new_node,
                            mode
                        )
                        for child in input_object['children']
                    ]
                return input_object

        return input_object

    @classmethod
    def add_node_before(
        cls,
        input_object: Union[dict, list],
        node_key: str,
        new_node: dict
    ) -> Union[list, dict]:
        """在key值等于node_key的节点之前插入平级新节点

        Args:
            input_object (Union[dict, list]): 输入原始的treeData
            node_key (str): 要插入的目标节点key值
            new_node (dict): 要插入的新节点字典

        Returns:
            dict: 完成插入后的treeData
        """

        if isinstance(input_object, list):
            current_layer_keys = [node.get('key') for node in input_object]
            if node_key in current_layer_keys:
                return [
                    *input_object[:current_layer_keys.index(node_key)],
                    new_node,
                    *input_object[current_layer_keys.index(node_key):]
                ]
            else:
                return [cls.add_node_before(node, node_key, new_node) for node in input_object]

        elif isinstance(input_object, dict):
            if input_object.get('children'):
                input_object['children'] = cls.add_node_before(
                    input_object['children'],
                    node_key,
                    new_node
                )

        return input_object

    @classmethod
    def add_node_after(
        cls,
        input_object: Union[dict, list],
        node_key: str,
        new_node: dict
    ) -> Union[list, dict]:
        """在key值等于node_key的节点之后插入平级新节点

        Args:
            input_object (Union[dict, list]): 输入原始的treeData
            node_key (str): 要插入的目标节点key值
            new_node (dict): 要插入的新节点字典

        Returns:
            dict: 完成插入后的treeData
        """

        if isinstance(input_object, list):
            current_layer_keys = [node.get('key') for node in input_object]
            if node_key in current_layer_keys:
                return [
                    *input_object[:current_layer_keys.index(node_key)+1],
                    new_node,
                    *input_object[current_layer_keys.index(node_key)+1:]
                ]
            else:
                return [cls.add_node_after(node, node_key, new_node) for node in input_object]

        elif isinstance(input_object, dict):
            if input_object.get('children'):
                input_object['children'] = cls.add_node_after(
                    input_object['children'],
                    node_key,
                    new_node
                )

        return input_object

    @classmethod
    def delete_node(
        cls,
        input_object: Union[dict, list],
        node_key: str
    ) -> Union[list, dict]:
        """删除key值等于node_key的节点

        Args:
            input_object (Union[dict, list]): 输入原始的treeData
            node_key (str): 要删除的节点key值

        Returns:
            dict: 完成删除后的treeData
        """

        if isinstance(input_object, list):
            input_object = [
                (
                    {
                        **node,
                        'children': cls.delete_node(node['children'], node_key)
                    }
                    if node.get('children')
                    else
                    node
                )
                for node in input_object
                if node.get('key') != node_key
            ]

        return input_object


def fill_output_dict(output_dict: dict, fill_value: Any = dash.no_update) -> dict:
    """用于配合回调函数中Output角色的字典化写法，在已有明确字典返回值的基础上，为其他返回项进行默认值填充

    Args:
        output_dict (dict): 已有明确返回值字典
        fill_value (Any): 设置其余无明确返回值的Output角色键值对统一填充值，默认为dash.no_update

    Returns:
        dict: 处理后可以直接通过回调返回的完整Output结果字典
    """

    # 构造辅助用defaultdict
    output = defaultdict(
        lambda: fill_value,
        output_dict
    )

    return {
        key: output[key]
        # 通过上下文遍历所有Output字典键名
        for key in dash.ctx.outputs_grouping.keys()
    }


def df2table(
    raw_df: Any,
    id: str = None,  # 设置对应AntdTable组件的id
    columns_alias: dict = None,  # 为指定字段定义充当title的别名
    # 样式相关参数
    # 列宽分配策略，可选的有'auto'、'fmit-title'、'equal'
    column_width_mode: Literal['auto', 'fit-title', 'equal'] = 'auto',
    column_width_sum: str = '100%',  # 用于定义各列宽之和，常用的有'100%'、'1000px'等符合css中宽度规则的值
    left_fixed_columns: List[str] = None,  # 定义需要在左侧固定的列名数组
    right_fixed_columns: List[str] = None,  # 定义需要在右侧固定的列名数组
    # 字段排序功能相关参数
    numeric_auto_sort: bool = True,  # 是否针对数据框中的数值型字段自动添加排序功能
    # 针对字段排序配置组合排序相关参数，同AntdTable的sortOptions.multiple
    sort_multiple: Union[bool, Literal['auto']] = False,
    # 字段筛选功能相关参数
    str_auto_filter: bool = True,  # 是否针对数据框中的字符型字段自动添加筛选功能
    str_max_unique_value_count: int = 20,  # 允许自动添加筛选功能的字符型字段唯一值数量上限
    checkbox_filter_radio_columns: List[str] = None,  # 需要将筛选功能设置为单选模式的字段名数组
    checkbox_filter_enable_search: bool = True,  # 是否为字段筛选菜单启用搜索框
    # 字段编辑功能相关参数
    editable_columns: List[str] = None,  # 设置需要开启可编辑功能的列名数组
    # 数据预处理相关参数
    # 为指定字段设置小数保留位数，特别地，当传入{'*': 小数位数}时，表示对所有数值型字段统一设置保留位数
    columns_precision: dict = None,
    **kwargs
) -> fac.AntdTable:
    """
    将 pandas DataFrame 转换为 AntdTable 组件。

    Args:
        raw_df (Any): 要转换的输入 pandas DataFrame。
        id (str, optional): 设置对应 AntdTable 组件的 id。默认为 None。
        columns_alias (dict, optional): 为指定字段定义充当 title 的别名。默认为 None。
        column_width_mode (Literal['auto', 'fit-title', 'equal'], optional):
            列宽分配策略，可选值为 'auto'、'fit-title'、'equal'。默认为 'auto'。
        column_width_sum (str, optional): 用于定义各列宽之和，常用的有 '100%'、'1000px' 等符合 CSS 中宽度规则的值。
            默认为 '100%'。
        left_fixed_columns (List[str], optional): 定义需要在左侧固定的列名数组。默认为 None。
        right_fixed_columns (List[str], optional): 定义需要在右侧固定的列名数组。默认为 None。
        str_auto_filter (bool, optional): 是否自动为字符串列添加筛选功能。默认为 True。
        str_max_unique_value_count (int, optional): 自动为字符串列添加筛选功能的唯一值的最大数量。默认为 20。
        checkbox_filter_radio_columns (List[str], optional): 需要将筛选功能设置为单选模式的字段名数组。默认为 None。
        checkbox_filter_enable_search (bool, optional): 是否在筛选菜单中启用搜索框。默认为 True。
        editable_columns (List[str], optional): 设置需要开启可编辑功能的列名数组。默认为 None.
        columns_precision (dict, optional): 为指定字段设置小数保留位数，特别地，
            当传入 {'*': 小数位数} 时，表示对所有数值型字段统一设置保留位数。默认为 None.
        numeric_auto_sort (bool, optional): 是否针对数据框中的数值型字段自动添加排序功能。默认为 True。
        sort_multiple (Union[bool, Literal['auto']], optional):
            针对字段排序配置组合排序相关参数，同 AntdTable 的 sortOptions.multiple。默认为 False。
        checkbox_filter_enable_search (bool, optional): 是否在筛选菜单中启用搜索框。默认为 True。
        **kwargs: 其他传递给 AntdTable 组件的参数。

    Returns:
        fac.AntdTable: 从输入 DataFrame 生成的 AntdTable 组件。
    """

    # 默认参数定义
    columns_alias = columns_alias or {}
    columns_alias = {
        column: columns_alias.get(column) or column
        for column in raw_df.columns
    }
    left_fixed_columns = left_fixed_columns or []
    right_fixed_columns = right_fixed_columns or []
    checkbox_filter_radio_columns = checkbox_filter_radio_columns or []
    editable_columns = editable_columns or []
    columns_precision = columns_precision or {}

    # 数据预处理
    # 拷贝源数据框，防止修改源数据
    output_df = pd.DataFrame(raw_df).copy(deep=True)
    # 根据columns_precision对指定字段进行小数保留处理
    if len(columns_precision) == 1 and columns_precision.get('*'):
        for column in output_df.select_dtypes('number').columns:
            output_df[column] = (
                output_df[column]
                .round(columns_precision.get('*'))
            )
    else:
        for key in columns_precision.keys():
            output_df[key] = output_df[key].round(columns_precision.get(key))

    # 构造必选参数
    # 构造columns参数
    columns = []
    for column in output_df.columns:
        columns.append(
            {
                'dataIndex': column,
                'title': columns_alias.get(column)
            }
        )
    # 根据column_width_mode构造列宽
    if column_width_mode == 'fit-title':
        # 计算所有字段名字符数之和
        columns_title_length_sum = sum(
            output_df.columns
            .map(lambda s: len(columns_alias.get(s)))
        )
        # 为各字段按比例分配列宽
        for i, column in enumerate(columns):
            columns[i]['width'] = 'calc({} * {} )'.format(
                column_width_sum,
                len(column['title']) / columns_title_length_sum
            )
    elif column_width_mode == 'equal':
        for i, column in enumerate(columns):
            columns[i]['width'] = 'calc({} / {})'.format(
                column_width_sum,
                len(columns)
            )
    # 根据left_fixed_columns、right_fixed_columns为相应字段设置是否固定
    for i, column in enumerate(columns):
        if column['dataIndex'] in left_fixed_columns:
            columns[i]['fixed'] = 'left'
        elif column['dataIndex'] in right_fixed_columns:
            columns[i]['fixed'] = 'right'
    # 根据editable_columns对相关列开启可编辑功能
    for i, column in enumerate(columns):
        if column['dataIndex'] in editable_columns:
            columns[i]['editable'] = True

    # 构造可选参数
    optional_params = {}
    # 构造sortOptions参数
    if numeric_auto_sort:
        optional_params['sortOptions'] = {
            'sortDataIndexes': output_df.select_dtypes('number').columns.tolist(),
            'multiple': sort_multiple
        }
    # 构造filterOptions参数
    if str_auto_filter:
        filterOptions = {}
        for column in output_df.select_dtypes(include='object'):
            # 检查当前字符型字段唯一值数量是否小于等于str_max_unique_value_count
            if output_df[column].nunique() <= str_max_unique_value_count:
                filterOptions[column] = {
                    'filterSearch': checkbox_filter_enable_search
                }
                # 检查当前字段是否需要设置为单选模式
                if column in checkbox_filter_radio_columns:
                    filterOptions[column]['filterMultiple'] = False
            else:
                filterOptions[column] = {
                    'filterMode': 'keyword'
                }
        # 更新到optional_params中
        optional_params['filterOptions'] = filterOptions

    # 处理kwargs中的AntdTable相关重复自定义参数
    # columns以kwargs中的columns为准
    if kwargs.get('columns'):
        columns = kwargs.get('columns')

    return fac.AntdTable(
        # data以kwargs中的data为准
        data=kwargs.get('data') or output_df.to_dict('records'),
        columns=columns,
        **optional_params,
        **kwargs
    )


if __name__ == '__main__':

    from pprint import pprint

    demo_tree = [
        {
            'key': 'root',
            'title': 'root',
            'children': [
                {
                    'key': 'node1',
                    'title': 'node1'
                },
                {
                    'key': 'node2',
                    'title': 'node2'
                },
                {
                    'key': 'node3',
                    'title': 'node3',
                    'children': [
                        {
                            'key': 'node3-1',
                            'title': 'node3-1'
                        }
                    ]
                }
            ]
        }
    ]

    # 树节点删除测试
    new_tree = TreeUtils.update_tree_node(
        input_object=demo_tree,
        node_key='root',
        new_node={
            'field1': 111
        },
        mode='overlay'
    )

    pprint(new_tree)
