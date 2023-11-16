import dash
from collections import defaultdict
from typing import Union, Literal, Any

__all__ = ['TreeUtils', 'fill_output_dict']


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
