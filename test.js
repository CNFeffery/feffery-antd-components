let columns = [
    {
        title: 'v1-1',
        dataIndex: 'v1-1',
        group: ['v1']
    },
    {
        title: 'v1-2-1',
        dataIndex: 'v1-2-1',
        group: ['v1', 'v1-2']
    },
    {
        title: 'v1-2-2',
        dataIndex: 'v1-2-2',
        group: ['v1', 'v1-2']
    }
]

let tempColumns = [];

let insertNewColumnNode = (column, group, currentLevel, currentNode) => {
    // 若当前递归到的层级小于group数组长度
    if (currentLevel < group.length) {
        // 尝试在currentNode中搜索dataIndex等于当前group层级的元素
        let matchColumnIdx = currentNode.findIndex(item => item.dataIndex === group[currentLevel])
        // 若未在currentNode中搜索到当前group层级对应元素
        if (matchColumnIdx === -1) {
            // 向currentNode中push当前group层级对应元素
            currentNode.push({
                dataIndex: group[currentLevel],
                title: group[currentLevel],
                children: []
            })
            // 继续向下一层级递归
            insertNewColumnNode(column, group, currentLevel + 1, currentNode[currentNode.length - 1].children)
        } else {
            // 若在currentNode中搜索到当前group层级对应元素
            // 继续向下一层级递归
            insertNewColumnNode(column, group, currentLevel + 1, currentNode[matchColumnIdx].children)
        }
    } else {
        // 否则则视作到达最深层
        currentNode.push({ ...column })
    }
}

for (let column of columns) {
    if (column.group) {
        insertNewColumnNode(column, column.group, 0, tempColumns)
    } else {
        tempColumns.push(column)
    }
}