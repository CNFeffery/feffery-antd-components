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
    # 样式相关参数
    # 列宽分配策略，可选的有'auto'、'fit-title'、'equal'
    column_width_mode: Literal['auto', 'fit-title', 'equal'] = 'auto',
    bordered: bool = False,  # 表格是否添加框线
    style: dict = None,  # 表格css样式
    className: Union[str, dict] = None,  # 表格css类名
    # 字段筛选功能相关参数
    str_auto_filter: bool = True,  # 是否针对数据框中的字符型字段自动添加筛选功能
    str_max_unique_value_count: int = 20,  # 允许自动添加筛选功能的字符型字段唯一值数量上限
    checkbox_filter_radio_fields: List[str] = None,  # 需要将筛选功能设置为单选模式的字段名数组
    checkbox_filter_enable_search: bool = True,  # 是否为字段筛选菜单启用搜索框
) -> fac.AntdTable:
    """
    将 pandas DataFrame 转换为 AntdTable 组件。

    Args:
        raw_df (Any): 要转换的输入 pandas DataFrame。
        column_width_mode (Literal['auto', 'fit-title', 'equal'], optional): 
            列宽分配策略，可选值为 'auto'、'fit-title'、'equal'。默认为 'auto'。
        bordered (bool, optional): 是否为表格添加边框。默认为 False。
        style (dict, optional): 表格的 CSS 样式。默认为 None。
        className (Union[str, dict], optional): 表格的 CSS 类名。默认为 None。
        str_auto_filter (bool, optional): 是否自动为字符串列添加筛选功能。默认为 True。
        str_max_unique_value_count (int, optional): 自动为字符串列添加筛选功能的唯一值的最大数量。默认为 20。
        checkbox_filter_radio_fields (List[str], optional): 需要将筛选功能设置为单选模式的字段名数组。默认为 None。
        checkbox_filter_enable_search (bool, optional): 是否在筛选菜单中启用搜索框。默认为 True。

    Returns:
        fac.AntdTable: 从输入 DataFrame 生成的 AntdTable 组件。
    """

    # 默认参数定义
    checkbox_filter_radio_fields = checkbox_filter_radio_fields or []

    # 数据预处理
    output_df = pd.DataFrame(raw_df).copy(deep=True)

    # 构造必选参数
    # 构造columns参数
    columns = []
    for column in raw_df.columns:
        columns.append(
            {
                'dataIndex': column,
                'title': column
            }
        )
    # 根据column_width_mode构造列宽
    if column_width_mode == 'fit-title':
        # 计算所有字段名字符数之和
        columns_title_length_sum = sum(raw_df.columns.map(len))
        for i, column in enumerate(columns):
            columns[i]['width'] = 'calc(100% * {} )'.format(
                len(column['title']) / columns_title_length_sum
            )
    elif column_width_mode == 'equal':
        for i, column in enumerate(columns):
            columns[i]['width'] = 'calc(100% / {})'.format(len(columns))

    # 构造可选参数
    optional_params = {}
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
                if column in checkbox_filter_radio_fields:
                    filterOptions[column]['filterMultiple'] = False
            else:
                filterOptions[column] = {
                    'filterMode': 'keyword'
                }
        # 更新到optional_params中
        optional_params['filterOptions'] = filterOptions

    return fac.AntdTable(
        data=output_df.to_dict('records'),
        columns=columns,
        bordered=bordered,
        style=style,
        className=className,
        **optional_params
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
