// react核心
import React, {
    Component,
    useContext,
    useState,
    useEffect,
    useRef
} from 'react';
// antd核心
import {
    Table,
    Checkbox,
    Switch,
    Popover,
    Popconfirm,
    ConfigProvider,
    Typography,
    Menu,
    Dropdown,
    Input,
    Form,
    Tag,
    Button,
    Badge,
    Space,
    Image,
    Avatar,
    message,
    Select,
    Divider
} from 'antd';
import {
    TinyLine,
    TinyArea,
    TinyColumn,
    Progress,
    RingProgress
} from '@ant-design/plots';
import AntdIcon from '../components/general/AntdIcon.react';
import {
    SearchOutlined,
    QuestionCircleOutlined,
    DownOutlined
} from '@ant-design/icons';
// 辅助库
import Highlighter from 'react-highlight-words';
import { isNumber, isEqual, isString, isBoolean, isEmpty, omitBy } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale, locale2text } from '../components/locales.react';
// 参数类型
import { propTypes, defaultProps } from '../components/dataDisplay/AntdTable.react';

const { Text } = Typography;

const insertNewColumnNode = (column, group, currentLevel, currentNode) => {
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

const splitSummaryRowContents = (summaryRowContents, columnCount, blankColumns) => {
    let summaryGroups = (
        blankColumns > 0 ?
            [Array.from({ length: blankColumns }, () => ({ empty: true }))] :
            [[]]
    );
    let currentGroupSpans = 0;
    for (let item of summaryRowContents) {
        // 检查当前字段追加到末尾分组后，是否超出总列数
        if (currentGroupSpans + (item.colSpan || 1) > columnCount) {
            currentGroupSpans = (item.colSpan || 1);
            // 处理前置空白列填充
            if (blankColumns > 0) {
                summaryGroups.push([...Array.from({ length: blankColumns }, () => ({ empty: true })), item])
            } else {
                summaryGroups.push([item])
            }
        } else {
            currentGroupSpans += (item.colSpan || 1)
            summaryGroups[summaryGroups.length - 1].push(item)
        }
    }
    return summaryGroups;
}

const findItemByKey = (array, key) => {
    let foundItem = null;

    const search = (item) => {
        if (item.key === key) {
            foundItem = item;
            return true;
        }
        return Array.isArray(item.children) && item.children.some(search);
    };

    array.some(search);
    return foundItem;
};

const replaceItemByKey = (array, key, replacement) => {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item && item.key === key) {
            array.splice(i, 1, replacement);
            return true;
        }

        if (item && Array.isArray(item.children)) {
            if (replaceItemByKey(item.children, key, replacement)) {
                return true;
            }
        }
    }

    return false;
}

// 定义不触发重绘的参数数组
const preventUpdateProps = [
    'recentlyMouseEnterColumnDataIndex',
    'recentlyMouseEnterRowKey',
    'recentlyMouseEnterRow'
];

/**
 * 表格组件AntdTable
 */
class AntdTable extends Component {
    constructor(props) {
        super(props)

        // 处理pagination参数的默认值问题
        if (isBoolean(props.pagination) && !props.pagination) {
        } else {
            props.setProps({
                pagination: {
                    ...props.pagination,
                    current: props.pagination?.current ? props.pagination?.current : 1
                }
            })
        }

        this.state = {
            searchText: '',
            searchedColumn: ''
        }

        this.onPageChange = (pagination, filter, sorter, currentData) => {

            // 当本次事件由翻页操作引发时
            if (currentData.action === 'paginate') {
                props.setProps({
                    pagination: {
                        ...pagination,
                        pageSize: pagination.pageSize,
                        current: pagination.current,
                        position: pagination.position ?
                            (
                                Array.isArray(pagination.position) ?
                                    pagination.position[0] :
                                    pagination.position
                            ) :
                            pagination.position
                    },
                    currentData: currentData.currentDataSource
                })
            } else if (currentData.action === 'sort') {
                // 当本次事件由排序操作引发时
                // 当sorter为数组时，即为多字段组合排序方式时
                if (Array.isArray(sorter)) {
                    props.setProps(
                        {
                            sorter: {
                                columns: sorter.map(item => item.column.dataIndex),
                                orders: sorter.map(item => item.order)
                            }
                        }
                    )
                } else if (sorter.order) {
                    // 单字段排序方式
                    props.setProps(
                        {
                            sorter: {
                                columns: [sorter.column.dataIndex],
                                orders: [sorter.order]
                            }
                        }
                    )
                } else {
                    // 非排序状态
                    props.setProps(
                        {
                            sorter: {
                                columns: [],
                                orders: []
                            }
                        }
                    )
                }
            } else if (currentData.action === 'filter') {
                props.setProps({ filter: filter })
            }
        }

        // 自定义关键词搜索过滤模式
        this.getColumnSearchProps = (dataIndex, title) => ({
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={node => {
                            this.searchInput = node;
                        }}
                        placeholder={`${locale2text.AntdTable[props.locale].filterKeywordPlaceholder} ${title}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            {locale2text.AntdTable[props.locale].filterKeywordSearchButtonText}
                        </Button>
                        <Button onClick={() => this.handleSearchReset(clearFilters)} size="small" style={{ width: 90 }}>
                            {locale2text.AntdTable[props.locale].filterKeywordResetButtonText}
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            // 搜索筛选
            onFilter: (value, record) => {
                if (props.mode === 'client-side') {
                    // 仅支持非数组型合法输入值，对象型输入支持对content、text、label、tag属性进行搜索筛选
                    if (record[dataIndex] && !Array.isArray(record[dataIndex])) {
                        // 判断当前记录是否有content属性
                        if (record[dataIndex]?.content) {
                            return record[dataIndex].content.toString().toLowerCase().includes(value?.toLowerCase())
                        } else if (record[dataIndex]?.text) {
                            return record[dataIndex].text.toString().toLowerCase().includes(value?.toLowerCase())
                        } else if (record[dataIndex]?.label) {
                            return record[dataIndex].label.toString().toLowerCase().includes(value?.toLowerCase())
                        } else if (record[dataIndex]?.tag) {
                            return record[dataIndex].tag.toString().toLowerCase().includes(value?.toLowerCase())
                        } else if (record[dataIndex]?.toString) {
                            return record[dataIndex].toString().toLowerCase().includes(value?.toLowerCase())
                        }
                    } else if (Array.isArray(record[dataIndex])) {
                        // 若当前记录为数组，分别检查数组元素对象是否具有content、tag、title属性
                        if (record[dataIndex].some(item => item?.content)) {
                            // 检查当前记录数组中是否至少有一个对象的content属性命中关键词
                            return record[dataIndex].some(
                                item => item?.content.toString().toLowerCase().includes(value?.toLowerCase())
                            )
                        } else if (record[dataIndex].some(item => item?.tag)) {
                            // 检查当前记录数组中是否至少有一个对象的tag属性命中关键词
                            return record[dataIndex].some(
                                item => item?.tag.toString().toLowerCase().includes(value?.toLowerCase())
                            )
                        } else if (record[dataIndex].some(item => item?.title)) {
                            // 检查当前记录数组中是否至少有一个对象的title属性命中关键词
                            return record[dataIndex].some(
                                item => item?.title.toString().toLowerCase().includes(value?.toLowerCase())
                            )
                        }
                    }
                    return false;
                } else {
                    return true
                }
            },
            onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => this.searchInput.select(), 100);
                }
            },
            render: text =>
                this.state.searchedColumn === dataIndex ? (
                    <Highlighter
                        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                        searchWords={[this.state.searchText]}
                        autoEscape
                        textToHighlight={text ? text.toString() : ''}
                    />
                ) : (
                    text
                ),
        });

        this.handleSearch = (selectedKeys, confirm, dataIndex) => {
            confirm();
            this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
            });
        };

        this.handleSearchReset = clearFilters => {
            clearFilters();
            this.setState({ searchText: '' });
        };
    }

    shouldComponentUpdate(nextProps) {

        // 计算发生变化的参数名
        const changedProps = Object.keys(nextProps)
            .filter(key => !isEqual(this.props[key], nextProps[key]))

        // 特殊处理：
        // 当recentlySelectValue发生变动时，阻止本次重绘
        if (changedProps.includes('recentlySelectValue')) {
            return false;
        }

        // #80
        // selectedRowsSyncWithData=true时，当data发生更新，在selectedRowKeys有效时，对selectedRows进行同步更新
        if (
            nextProps['selectedRowsSyncWithData'] &&
            nextProps['selectedRowKeys'] &&
            changedProps.includes('data')
        ) {
            // 同步更新selectedRows的值
            nextProps.setProps({
                // 忽略组件型字段键值对
                selectedRows: nextProps['data'].filter(item => nextProps['selectedRowKeys'].includes(item.key))
                    .map(
                        record => omitBy(record, value => value?.$$typeof)
                    )
            })
        }

        // // 判断当前轮次变更的prop是否均在preventUpdateProps中
        // console.log({ changedProps })
        // console.log(
        //     '免重绘props：',
        //     changedProps.every(propName => preventUpdateProps.includes(propName))
        // )

        // changedProps中全部变化的prop都在preventUpdateProps中声明时
        // 阻止本次重绘
        return !changedProps.every(propName => preventUpdateProps.includes(propName));
    }

    render() {
        let {
            id,
            className,
            style,
            key,
            locale,
            containerId,
            columns,
            showHeader,
            rowHoverable,
            tableLayout,
            miniChartHeight,
            miniChartAnimation,
            rowSelectionType,
            selectedRowKeys,
            rowSelectionWidth,
            rowSelectionCheckStrictly,
            rowSelectionIgnoreRowKeys,
            sticky,
            titlePopoverInfo,
            columnsFormatConstraint,
            enableHoverListen,
            data,
            sortOptions,
            showSorterTooltip,
            showSorterTooltipTarget,
            filterOptions,
            defaultFilteredValues,
            pagination,
            bordered,
            maxHeight,
            maxWidth,
            scrollToFirstRowOnChange,
            size,
            mode,
            nClicksButton,
            nDoubleClicksCell,
            summaryRowContents,
            summaryRowBlankColumns,
            summaryRowFixed,
            customFormatFuncs,
            conditionalStyleFuncs,
            expandedRowKeyToContent,
            expandedRowWidth,
            expandRowByClick,
            defaultExpandedRowKeys,
            expandedRowKeys,
            enableCellClickListenColumns,
            nClicksCell,
            nContextMenuClicksCell,
            emptyContent,
            cellUpdateOptimize,
            nClicksDropdownItem,
            hiddenRowKeys,
            virtual,
            title,
            footer,
            loading,
            rowClassName,
            setProps,
            loading_state
        } = this.props;

        if (!data) {
            data = []
        }

        // 当未设置行key时，自动以自增1的字符型结果作为key
        for (let i in data) {
            if (!data[i].hasOwnProperty('key')) {
                data[i]['key'] = i.toString()
            }
        }

        // 为pagination补充默认参数值
        if (isBoolean(pagination) && !pagination) {

        } else {
            pagination = {
                ...pagination,
                showTotalPrefix: pagination?.showTotalPrefix || locale2text.AntdTable[locale].showTotalPrefix,
                showTotalSuffix: pagination?.showTotalSuffix || locale2text.AntdTable[locale].showTotalSuffix
            }
        }

        // 根据columns中的hidden属性控制是否忽略对应字段
        columns = columns.filter(item => !item.hidden)

        // 为columns配置默认align参数
        for (let i in columns) {
            columns[i] = {
                align: 'center',
                ...columns[i]
            }
        }

        // 自定义可编辑单元格
        const EditableContext = React.createContext(null);

        const EditableRow = ({ index, ...props }) => {
            const [form] = Form.useForm();
            return (
                <Form form={form} component={false}>
                    <EditableContext.Provider value={form}>
                        <tr {...props} />
                    </EditableContext.Provider>
                </Form>
            );
        };

        const EditableCell = ({
            title,
            editable,
            children,
            dataIndex,
            record,
            ...restProps
        }) => {
            const [editing, setEditing] = useState(false);
            const inputRef = useRef(null);
            const form = useContext(EditableContext);
            useEffect(() => {
                if (editing) {
                    inputRef.current?.focus();
                }
            }, [editing]);

            const toggleEdit = () => {
                setEditing(!editing);
                form.setFieldsValue({
                    [dataIndex]: record[dataIndex],
                });
            };

            const [dataSource, setDataSource] = useState(data)

            // 负责监听单元格内容修改动作从而进行相关值的更新
            const handleSave = (row, setProps, dataSource, setDataSource) => {

                const newData = [...dataSource];
                const item = findItemByKey(newData, row.key)

                const rowColumns = Object.getOwnPropertyNames(row)

                // 循环取出属性名，再判断属性值是否一致
                for (let i = 0; i < rowColumns.length; i++) {
                    // 找到发生值修改的字段
                    if (row[rowColumns[i]] !== item[rowColumns[i]] &&
                        columnsFormatConstraint &&
                        columnsFormatConstraint[rowColumns[i]] &&
                        columnsFormatConstraint[rowColumns[i]].rule) {
                        // 检查是否满足预设的正则表达式规则
                        if (!eval(`/${columnsFormatConstraint[rowColumns[i]].rule}/`).test(row[rowColumns[i]])) {
                            message.error(`编辑失败，${row[rowColumns[i]]} 输入${columnsFormatConstraint[rowColumns[i]]?.content || '不符合对应字段格式要求！'}`);
                            // 提前终止函数
                            return
                        }
                    }
                }

                // #93 找到发生编辑行为的字段dataIndex
                let _changedColumn = null;
                for (let i = 0; i < rowColumns.length; i++) {
                    if (row[rowColumns[i]] !== item[rowColumns[i]]) {
                        _changedColumn = rowColumns[i]
                    }
                }

                replaceItemByKey(newData, row.key, { ...item, ...row })

                setDataSource(newData);

                setProps({
                    currentData: newData,
                    // 忽略组件型字段键值对
                    recentlyChangedRow: omitBy(row, value => value?.$$typeof),
                    recentlyChangedColumn: _changedColumn,
                    data: newData
                })
            };

            const save = async () => {
                try {
                    const values = await form.validateFields();
                    toggleEdit();
                    handleSave({ ...record, ...values }, setProps, dataSource, setDataSource);
                } catch (errInfo) {
                    console.log(errInfo)
                }
            };

            let childNode = children;

            if (editable) {
                let recordDisabled = (columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.disabledKeys || []).includes(record.key)
                childNode = editing ? (
                    <Form.Item
                        style={{
                            margin: 0,
                        }}
                        name={dataIndex}
                        rules={[
                            {
                                required: false,
                                message: `${title} 为空！`,
                            },
                        ]}
                    >
                        {
                            columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.mode === 'text-area' ?
                                <Input.TextArea
                                    autoSize={columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.autoSize}
                                    maxLength={columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.maxLength}
                                    placeholder={columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.placeholder}
                                    ref={inputRef}
                                    onBlur={save}
                                    onFocus={() => {
                                        // 移动光标至内容末尾
                                        inputRef.current?.focus({
                                            cursor: 'end',
                                        })
                                    }}
                                    disabled={recordDisabled}
                                /> :
                                <Input
                                    maxLength={columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.maxLength}
                                    placeholder={columns.filter(e => e.dataIndex === dataIndex)[0].editOptions?.placeholder}
                                    ref={inputRef}
                                    onPressEnter={save}
                                    onBlur={save}
                                    disabled={recordDisabled}
                                />
                        }
                    </Form.Item>
                ) : (
                    <div
                        className="editable-cell-value-wrap"
                        style={{
                            whiteSpace: 'break-spaces',
                            ...(recordDisabled ? { cursor: 'no-drop' } : {})
                        }}
                        onClick={recordDisabled ? undefined : toggleEdit}
                    >
                        {(children[1] || children[1] === 0) ? children : ' '}
                    </div>
                );
            }

            return <td {...restProps}>{childNode}</td>;
        };

        // 数值比较函数
        const compareNumeric = (x, y) => {
            if (x.value < y.value) {
                return -1;
            } else if (x.value > y.value) {
                return 1;
            } else {
                return 0;
            }
        }

        // 多模式值筛选选项自动生成策略
        const generateFilterOptions = (inputData, columnDataIndex) => {
            let filterOptions = []
            for (let item of inputData) {
                // 若当前记录不为数组
                if (item[columnDataIndex] && !Array.isArray(item[columnDataIndex])) {
                    if (item[columnDataIndex]?.content) {
                        filterOptions.push(item[columnDataIndex].content)
                    } else if (item[columnDataIndex]?.text) {
                        filterOptions.push(item[columnDataIndex].text)
                    } else if (item[columnDataIndex]?.label) {
                        filterOptions.push(item[columnDataIndex].label)
                    } else if (item[columnDataIndex]?.tag) {
                        filterOptions.push(item[columnDataIndex].tag)
                    } else if (item[columnDataIndex]?.toString) {
                        filterOptions.push(item[columnDataIndex])
                    }
                } else if (Array.isArray(item[columnDataIndex])) {
                    // 若当前记录为数组，提取数组元素对象中存在的content或tag属性
                    if (item[columnDataIndex].some(_item => _item?.content)) {
                        filterOptions = filterOptions.concat(
                            item[columnDataIndex]
                                .filter(_item => _item?.content)
                                .map(_item => _item.content)
                        )
                    } else if (item[columnDataIndex].some(_item => _item?.tag)) {
                        filterOptions = filterOptions.concat(
                            item[columnDataIndex]
                                .filter(_item => _item?.tag)
                                .map(_item => _item.tag)
                        )
                    }
                }
            }

            // 将提取到的合法筛选值去重结构化并排序
            return Array.from(
                new Set(filterOptions)
            ).map(
                value => ({ text: value ? value.toString() : '', value: value })
            ).sort(compareNumeric)
        }

        // 处理可筛选特性
        // 若为前端渲染模式，在filterOptions中每个字段filterCustomItems缺失的情况下
        // 则会自动根据前端一次性加载的数据推算出所有添加过滤器字段的唯一值集合作为待选菜单
        if (mode !== 'server-side') {
            // 为filterOptions.filterDataIndexes中定义的每个字段添加过滤功能
            for (let i = 0; i < columns.length; i++) {
                // 若当前字段在filterOptions的keys()中
                if (Object.keys(filterOptions).indexOf(columns[i].dataIndex) !== -1) {
                    // 若当前字段对应filterOptions子元素有filterMode.filterMode为'keyword'
                    if (filterOptions[columns[i].dataIndex].filterMode === 'keyword') {
                        columns[i] = {
                            ...columns[i],
                            ...this.getColumnSearchProps(columns[i].dataIndex, columns[i].title)
                        }
                    } else if (filterOptions[columns[i].dataIndex].filterMode === 'tree') {
                        // 若当前字段筛选模式为'tree'模式
                        // 若当前字段对应filterOptions子元素下有filterCustomTreeItems属性
                        // 则为其添加自定义树形选项
                        if (filterOptions[columns[i].dataIndex].filterCustomTreeItems) {
                            columns[i] = {
                                ...columns[i],
                                defaultFilteredValue: defaultFilteredValues[columns[i].dataIndex],
                                filterMode: 'tree',
                                // 直接使用自定义树形筛选菜单结构
                                filters: filterOptions[columns[i].dataIndex].filterCustomTreeItems,
                                // 针对不同再渲染模式设计值筛选逻辑
                                onFilter: (value, record) => {
                                    // 仅支持非数组型合法输入值，对象型输入支持对content、text、label、tag属性进行值筛选
                                    if (record[columns[i].dataIndex] && !Array.isArray(record[columns[i].dataIndex])) {
                                        // 判断当前记录是否有content属性
                                        if (record[columns[i].dataIndex]?.content) {
                                            return record[columns[i].dataIndex].content === value;
                                        } else if (record[columns[i].dataIndex]?.text) {
                                            return record[columns[i].dataIndex].text === value;
                                        } else if (record[columns[i].dataIndex]?.label) {
                                            return record[columns[i].dataIndex].label === value;
                                        } else if (record[columns[i].dataIndex]?.tag) {
                                            return record[columns[i].dataIndex].tag === value;
                                        } else if (record[columns[i].dataIndex]?.toString) {
                                            return record[columns[i].dataIndex].toString() === value;
                                        }
                                    } else if (Array.isArray(record[columns[i].dataIndex])) {
                                        // 若当前记录为数组，分别检查数组元素对象是否具有content、tag、title属性
                                        if (record[columns[i].dataIndex].some(item => item?.content)) {
                                            // 检查当前记录数组中是否至少有一个对象的content属性等于筛选值value
                                            return record[columns[i].dataIndex].some(
                                                item => item?.content.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.tag)) {
                                            // 检查当前记录数组中是否至少有一个对象的tag属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.tag.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.title)) {
                                            // 检查当前记录数组中是否至少有一个对象的title属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.title.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        }
                                    }
                                    return false;
                                },
                                filterSearch: filterOptions[columns[i].dataIndex].filterSearch
                            }
                        }
                    } else {
                        // 否则则一律视为'checkbox'模式
                        // 若当前字段对应filterOptions子元素下有filterCustomItems属性
                        // 则为其添加自定义选项
                        if (filterOptions[columns[i].dataIndex].filterCustomItems) {
                            columns[i] = {
                                ...columns[i],
                                defaultFilteredValue: defaultFilteredValues[columns[i].dataIndex],
                                filters: filterOptions[columns[i].dataIndex].filterCustomItems
                                    .map(value => ({ text: value ? value.toString() : '', value: value })),
                                // 针对不同再渲染模式设计值筛选逻辑
                                onFilter: (value, record) => {
                                    // 仅支持非数组型合法输入值，对象型输入支持对content、text、label、tag属性进行值筛选
                                    if (record[columns[i].dataIndex] && !Array.isArray(record[columns[i].dataIndex])) {
                                        // 判断当前记录是否有content属性
                                        if (record[columns[i].dataIndex]?.content) {
                                            return record[columns[i].dataIndex].content === value;
                                        } else if (record[columns[i].dataIndex]?.text) {
                                            return record[columns[i].dataIndex].text === value;
                                        } else if (record[columns[i].dataIndex]?.label) {
                                            return record[columns[i].dataIndex].label === value;
                                        } else if (record[columns[i].dataIndex]?.tag) {
                                            return record[columns[i].dataIndex].tag === value;
                                        } else if (record[columns[i].dataIndex]?.toString) {
                                            return record[columns[i].dataIndex].toString() === value;
                                        }
                                    } else if (Array.isArray(record[columns[i].dataIndex])) {
                                        // 若当前记录为数组，分别检查数组元素对象是否具有content、tag、title属性
                                        if (record[columns[i].dataIndex].some(item => item?.content)) {
                                            // 检查当前记录数组中是否至少有一个对象的content属性等于筛选值value
                                            return record[columns[i].dataIndex].some(
                                                item => item?.content.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.tag)) {
                                            // 检查当前记录数组中是否至少有一个对象的tag属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.tag.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.title)) {
                                            // 检查当前记录数组中是否至少有一个对象的title属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.title.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        }
                                    }
                                    return false;
                                },
                                filterMultiple: filterOptions[columns[i].dataIndex].filterMultiple,
                                filterSearch: filterOptions[columns[i].dataIndex].filterSearch
                            }
                        } else {
                            // 否则自动基于数据中的唯一值生成选项列表
                            columns[i] = {
                                ...columns[i],
                                defaultFilteredValue: defaultFilteredValues[columns[i].dataIndex],
                                filters: generateFilterOptions(data, columns[i].dataIndex),
                                // 针对不同再渲染模式设计值筛选逻辑
                                onFilter: (value, record) => {
                                    // 仅支持非数组型合法输入值，对象型输入支持对content、text、label、tag属性进行值筛选
                                    if (record[columns[i].dataIndex] && !Array.isArray(record[columns[i].dataIndex])) {
                                        if (record[columns[i].dataIndex]?.content) {
                                            return record[columns[i].dataIndex].content === value;
                                        } else if (record[columns[i].dataIndex]?.text) {
                                            return record[columns[i].dataIndex].text === value;
                                        } else if (record[columns[i].dataIndex]?.label) {
                                            return record[columns[i].dataIndex].label === value;
                                        } else if (record[columns[i].dataIndex]?.tag) {
                                            return record[columns[i].dataIndex].tag === value;
                                        } else if (record[columns[i].dataIndex]?.toString) {
                                            // 确保字符型、数值型均可稳定进行筛选
                                            return record[columns[i].dataIndex].toString() === value.toString();
                                        }
                                    } else if (Array.isArray(record[columns[i].dataIndex])) {
                                        // 若当前记录为数组，分别检查数组元素对象是否具有content、tag、title属性
                                        if (record[columns[i].dataIndex].some(item => item?.content)) {
                                            // 检查当前记录数组中是否至少有一个对象的content属性等于筛选值value
                                            return record[columns[i].dataIndex].some(
                                                item => item?.content.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.tag)) {
                                            // 检查当前记录数组中是否至少有一个对象的tag属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.tag.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        } else if (record[columns[i].dataIndex].some(item => item?.title)) {
                                            // 检查当前记录数组中是否至少有一个对象的title属性命中关键词
                                            return record[columns[i].dataIndex].some(
                                                item => item?.title.toString().toLowerCase() === value?.toLowerCase()
                                            )
                                        }
                                    }
                                    return false;
                                },
                                filterMultiple: filterOptions[columns[i].dataIndex]?.filterMultiple,
                                filterSearch: filterOptions[columns[i].dataIndex]?.filterSearch
                            }
                        }
                    }
                }
            }
        } else {
            // 否则在server-side模式下
            // 为filterOptions.filterDataIndexes中定义的每个字段
            // 添加简单值选择过滤功能
            // 为filterOptions.filterDataIndexes中定义的每个字段添加过滤功能
            for (let i = 0; i < columns.length; i++) {
                // 若当前字段在filterOptions的keys()中
                if (Object.keys(filterOptions).indexOf(columns[i].dataIndex) !== -1) {
                    // 若当前字段对应filterOptions子元素有filterMode属性且filterMode属性为'keyword'
                    if (filterOptions[columns[i].dataIndex].filterMode === 'keyword') {
                        columns[i] = {
                            ...columns[i],
                            ...this.getColumnSearchProps(columns[i].dataIndex, columns[i].title)
                        }
                    } else if (filterOptions[columns[i].dataIndex].filterMode === 'tree') {
                        // 若当前字段筛选模式为'tree'模式
                        // 若当前字段对应filterOptions子元素下有filterCustomTreeItems属性
                        // 则为其添加自定义树形选项
                        if (filterOptions[columns[i].dataIndex].filterCustomTreeItems) {
                            columns[i] = {
                                ...columns[i],
                                defaultFilteredValue: defaultFilteredValues[columns[i].dataIndex],
                                filterMode: 'tree',
                                filters: filterOptions[columns[i].dataIndex].filterCustomTreeItems,
                                onFilter: (value, record) => true // 契合后端刷新模式
                            }
                        } else {
                            columns[i] = {
                                ...columns[i],
                                filters: [],
                                onFilter: (value, record) => true
                            }
                        }
                    } else {
                        // 否则则一律视为'checkbox'模式
                        // 若当前字段对应filterOptions子元素下有filterCustomItems属性
                        // 则为其添加自定义选项
                        if (filterOptions[columns[i].dataIndex].hasOwnProperty('filterCustomItems')) {
                            columns[i] = {
                                ...columns[i],
                                defaultFilteredValue: defaultFilteredValues[columns[i].dataIndex],
                                filters: filterOptions[columns[i].dataIndex].filterCustomItems
                                    .map(value => ({ text: value ? value.toString() : '', value: value })),
                                onFilter: (value, record) => true, // 契合后端刷新模式
                                filterMultiple: filterOptions[columns[i].dataIndex].filterMultiple,
                                filterSearch: filterOptions[columns[i].dataIndex].filterSearch
                            }
                        } else {
                            columns[i] = {
                                ...columns[i],
                                filters: [],
                                onFilter: (value, record) => true
                            }
                        }
                    }
                }
            }
        }

        // 处理sortOptions参数的默认值问题
        sortOptions = {
            sortDataIndexes: [],
            multiple: false,
            forceCompareModes: {},
            customOrders: {},
            ...sortOptions
        }

        // 配置字段排序参数
        for (let i = 0; i < sortOptions.sortDataIndexes.length; i++) {
            for (let j = 0; j < columns.length; j++) {
                // 若sortOptions与data中本轮迭代到的dataIndex一致
                if (sortOptions.sortDataIndexes[i] === columns[j].dataIndex) {
                    // 根据是否组合排序模式来决定当前字段的排序参数设置
                    columns[j]['sorter'] = {
                        compare: (a, b) => {
                            // 当渲染模式为server-side时，禁用前端排序操作
                            if (mode === 'server-side') {
                                return 0
                            } else {
                                // 初始化排序直接比较值
                                let valueA = null
                                let valueB = null
                                // 兼容各种具有单个值的再渲染模式，提取待比较的成对数据
                                if (a[columns[j].dataIndex]?.content || b[columns[j].dataIndex]?.content) {
                                    valueA = a[columns[j].dataIndex]?.content
                                    valueB = b[columns[j].dataIndex]?.content
                                } else if (a[columns[j].dataIndex]?.text || b[columns[j].dataIndex]?.text) {
                                    valueA = a[columns[j].dataIndex]?.text
                                    valueB = b[columns[j].dataIndex]?.text
                                } else if (a[columns[j].dataIndex]?.label || b[columns[j].dataIndex]?.label) {
                                    valueA = a[columns[j].dataIndex]?.label
                                    valueB = b[columns[j].dataIndex]?.label
                                } else if (a[columns[j].dataIndex]?.tag || b[columns[j].dataIndex]?.tag) {
                                    valueA = a[columns[j].dataIndex]?.tag
                                    valueB = b[columns[j].dataIndex]?.tag
                                } else if (a[columns[j].dataIndex]?.toString || b[columns[j].dataIndex]?.toString) {
                                    valueA = a[columns[j].dataIndex]
                                    valueB = b[columns[j].dataIndex]
                                }
                                // 根据valueA、valueB的数据类型返回不同逻辑的判断结果
                                // 若valueA、valueB至少有1个为数值型，则视作数值型比较
                                // 若当前字段使用了强制比较模式
                                if (sortOptions.forceCompareModes[columns[j].dataIndex]) {
                                    // 数值比较模式
                                    if (sortOptions.forceCompareModes[columns[j].dataIndex] === 'number') {
                                        // 强制转换比较值为数值型
                                        let numberA = Number(valueA)
                                        let numberB = Number(valueB)
                                        if (numberA < numberB) {
                                            return -1;
                                        } else if (numberA > numberB) {
                                            return 1;
                                        }
                                        return 0;
                                    } else if (sortOptions.forceCompareModes[columns[j].dataIndex] === 'custom' &&
                                        sortOptions.customOrders[columns[j].dataIndex]) {
                                        // 自定义顺序模式
                                        // 查询比较值在对应的自定义顺序中的索引
                                        let orderA = sortOptions.customOrders[columns[j].dataIndex].indexOf(valueA)
                                        let orderB = sortOptions.customOrders[columns[j].dataIndex].indexOf(valueB)
                                        if (orderA < orderB) {
                                            return 1;
                                        } else if (orderA > orderB) {
                                            return -1;
                                        }
                                        return 0;
                                    }
                                } else {
                                    // 默认自动判断
                                    if (isNumber(valueA) || isNumber(valueB)) {
                                        return valueA - valueB
                                    } else {
                                        // 否则均视作字符型比较
                                        let stringA = valueA?.toString().toUpperCase()
                                        let stringB = valueB?.toString().toUpperCase()
                                        if (stringA < stringB) {
                                            return -1;
                                        } else if (stringA > stringB) {
                                            return 1;
                                        }
                                        return 0;
                                    }
                                }
                            }
                        },
                        multiple: sortOptions['multiple'] ?
                            (sortOptions['multiple'] === 'auto' ? 1 : sortOptions.sortDataIndexes.length - i) :
                            undefined
                    }
                }
            }
        }

        // 配置各种再渲染模式
        for (let i = 0; i < columns.length; i++) {
            // 当前字段具有renderOptions参数时且renderOptions参数是字典时
            if (columns[i]['renderOptions'] && columns[i]['renderOptions']['renderType']) {
                // ellipsis模式
                if (columns[i]['renderOptions']['renderType'] === 'ellipsis') {
                    columns[i]['ellipsis'] = {
                        showTitle: false
                    }
                    columns[i]['render'] = content => (
                        <Text ellipsis={{ tooltip: content }}>
                            {content}
                        </Text>
                    )
                }
                // row-merge模式
                else if (columns[i]['renderOptions']['renderType'] === 'row-merge') {
                    columns[i]['render'] = (content, record, index) => {
                        return {
                            children: content.content,
                            props: {
                                rowSpan: content.rowSpan
                            }
                        };
                    }
                }
                // link模式
                else if (columns[i]['renderOptions']['renderType'] === 'link') {
                    // 检查renderLinkText参数是否定义
                    if (columns[i]['renderOptions']['renderLinkText']) {
                        columns[i]['render'] = content => {
                            if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                                return null;
                            }
                            return (
                                <a href={content.disabled ? undefined : content.href}
                                    target={content.target ? content.target : '_blank'}
                                    disabled={content.disabled}>
                                    {content.content ? content.content : columns[i]['renderOptions']['renderLinkText']}
                                </a>
                            )
                        }
                    } else {
                        columns[i]['render'] = content => {
                            if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                                return null;
                            }
                            return (
                                <a href={content.disabled ? undefined : content.href}
                                    target={content.target ? content.target : '_blank'}
                                    disabled={content.disabled}>
                                    {content.content ? content.content : ' '}
                                </a>
                            )
                        }
                    }
                }
                // copyable模式
                else if (columns[i]['renderOptions']['renderType'] === 'copyable') {
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <Text copyable={true}>
                                {content}
                            </Text>
                        )
                    }
                }
                // dropdown模式
                else if (columns[i]['renderOptions']['renderType'] === 'dropdown') {
                    columns[i]['render'] = (menuItems, record) => {
                        // 针对空值进行错误处理
                        menuItems = menuItems || []
                        return (
                            <Dropdown
                                overlay={
                                    <Menu onClick={(item, key, keyPath, domEvent) => {
                                        setTimeout(function () {
                                            setProps({
                                                nClicksDropdownItem: nClicksDropdownItem + 1,
                                                recentlyClickedDropdownItemTitle: item.key,
                                                recentlyDropdownItemClickedDataIndex: columns[i].dataIndex,
                                                // 忽略组件型字段键值对
                                                recentlyDropdownItemClickedRow: omitBy(record, value => value?.$$typeof)
                                            })
                                        }, 200);
                                    }}>
                                        {
                                            menuItems.map(
                                                menuItem => (
                                                    menuItem ?
                                                        // 判断isDivider参数是否不为false
                                                        (
                                                            menuItem.isDivider ?
                                                                <Menu.Divider /> :
                                                                <Menu.Item
                                                                    icon={
                                                                        menuItem.icon && (
                                                                            menuItem.iconRenderer === 'fontawesome' ?
                                                                                (
                                                                                    React.createElement(
                                                                                        'i',
                                                                                        {
                                                                                            className: menuItem.icon
                                                                                        }
                                                                                    )
                                                                                ) :
                                                                                (
                                                                                    <AntdIcon icon={menuItem.icon} />
                                                                                )
                                                                        )
                                                                    }
                                                                    disabled={menuItem.disabled}
                                                                    key={menuItem.title}>
                                                                    <a >{menuItem.title}</a>
                                                                </Menu.Item>
                                                        ) :
                                                        null
                                                )
                                            )
                                        }
                                    </Menu>
                                }
                                arrow={columns[i]['renderOptions']?.dropdownProps?.arrow}
                                disabled={columns[i]['renderOptions']?.dropdownProps?.disabled || menuItems.length === 0}
                                overlayClassName={columns[i]['renderOptions']?.dropdownProps?.overlayClassName}
                                overlayStyle={columns[i]['renderOptions']?.dropdownProps?.overlayStyle}
                                placement={columns[i]['renderOptions']?.dropdownProps?.placement}
                                trigger={
                                    columns[i]['renderOptions']?.dropdownProps?.trigger ?
                                        [columns[i]['renderOptions'].dropdownProps.trigger] : ['hover']
                                }
                                getPopupContainer={containerId ? () => (document.getElementById(containerId) ? document.getElementById(containerId) : document.body) : undefined}>
                                <a className="ant-dropdown-link"
                                    onClick={e => e.preventDefault()}>
                                    {columns[i]['renderOptions']?.dropdownProps?.title} <DownOutlined />
                                </a>
                            </Dropdown>
                        );
                    }
                }
                // dropdown-links模式
                else if (columns[i]['renderOptions']['renderType'] === 'dropdown-links') {
                    columns[i]['render'] = menuItems => {
                        // 针对空值进行错误处理
                        menuItems = menuItems || []
                        return (
                            <Dropdown
                                overlay={
                                    <Menu>
                                        {
                                            menuItems.map(
                                                menuItem => (
                                                    menuItem ?
                                                        // 判断isDivider参数是否不为false
                                                        (
                                                            menuItem.isDivider ?
                                                                <Menu.Divider /> :
                                                                <Menu.Item
                                                                    icon={
                                                                        menuItem.icon && (
                                                                            menuItem.iconRenderer === 'fontawesome' ?
                                                                                (
                                                                                    React.createElement(
                                                                                        'i',
                                                                                        {
                                                                                            className: menuItem.icon
                                                                                        }
                                                                                    )
                                                                                ) :
                                                                                (
                                                                                    <AntdIcon icon={menuItem.icon} />
                                                                                )
                                                                        )
                                                                    }
                                                                    disabled={menuItem.disabled}
                                                                    key={menuItem.title}>
                                                                    <a href={menuItem.href}
                                                                        target={'_blank'}>
                                                                        {menuItem.title}
                                                                    </a>
                                                                </Menu.Item>
                                                        ) :
                                                        null
                                                )
                                            )
                                        }
                                    </Menu>
                                }
                                arrow={columns[i]['renderOptions']?.dropdownProps?.arrow}
                                disabled={columns[i]['renderOptions']?.dropdownProps?.disabled || menuItems.length === 0}
                                overlayClassName={columns[i]['renderOptions']?.dropdownProps?.overlayClassName}
                                overlayStyle={columns[i]['renderOptions']?.dropdownProps?.overlayStyle}
                                placement={columns[i]['renderOptions']?.dropdownProps?.placement}
                                trigger={
                                    columns[i]['renderOptions']?.dropdownProps?.trigger ?
                                        [columns[i]['renderOptions'].dropdownProps.trigger] : ['hover']
                                }
                                getPopupContainer={containerId ? () => (document.getElementById(containerId) ? document.getElementById(containerId) : document.body) : undefined}>
                                <a className="ant-dropdown-link"
                                    onClick={e => e.preventDefault()}>
                                    {columns[i]['renderOptions']?.dropdownProps?.title} <DownOutlined />
                                </a>
                            </Dropdown>
                        );
                    }
                }
                // ellipsis-copyable模式
                else if (columns[i]['renderOptions']['renderType'] === 'ellipsis-copyable') {
                    columns[i]['ellipsis'] = {
                        showTitle: false
                    }
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <Text copyable={true} ellipsis={{ tooltip: content }}>
                                {content}
                            </Text>
                        )
                    }
                }
                // corner-mark模式
                else if (columns[i]['renderOptions']['renderType'] === 'corner-mark') {
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <div className={content.placement ? 'ant-corner-mark-' + content.placement : 'ant-corner-mark-top-right'}
                                style={{
                                    '--ant-corner-mark-color': content.hide ? 'transparent' : (content.color ? content.color : '#1890ff'),
                                    '--ant-corner-mark-transform': `translate(${content.offsetX ? content.offsetX : 0}px, ${content.offsetY ? content.offsetY : 0}px)`
                                }}>
                                {content.content}
                            </div>
                        )
                    }
                }
                // status-badge模式
                else if (columns[i]['renderOptions']['renderType'] === 'status-badge') {
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <Badge status={content.status} text={content.text} />
                        )
                    }
                }
                // image模式
                else if (columns[i]['renderOptions']['renderType'] === 'image') {
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <Image src={content.src} height={content.height} preview={content.preview} />
                        )
                    }
                }
                // image-avatar模式
                else if (columns[i]['renderOptions']['renderType'] === 'image-avatar') {
                    columns[i]['render'] = content => {
                        if ((!content || isEmpty(content)) && content !== 0 && content !== '') {
                            return null;
                        }
                        return (
                            <Avatar
                                src={content?.src}
                                size={content?.size}
                                shape={content?.shape}
                            />
                        )
                    }
                }
                // checkbox模式
                else if (columns[i]['renderOptions']['renderType'] === 'checkbox') {
                    columns[i]['render'] = (content, record) => {
                        const currentDataIndex = columns[i]['dataIndex']
                        return (
                            <Checkbox checked={content.checked}
                                disabled={content.disabled}
                                onChange={(e) => {
                                    // 修改对应行对应字段item.checked值
                                    try {
                                        data.forEach(function (item, i) {
                                            // 命中后，修改值并利用错误抛出来跳出循环
                                            if (item.key === record.key) {
                                                data[i][currentDataIndex] = {
                                                    ...record[currentDataIndex],
                                                    checked: e.target.checked
                                                }
                                                throw new Error("目标已修改");
                                            }
                                        });
                                    } catch (e) {
                                    };

                                    setTimeout(function () {
                                        setProps({
                                            data: data,
                                            // 忽略组件型字段键值对
                                            recentlyCheckedRow: omitBy(record, value => value?.$$typeof),
                                            recentlyCheckedLabel: content.label,
                                            recentlyCheckedDataIndex: columns[i]['dataIndex'],
                                            recentlyCheckedStatus: e.target.checked
                                        })
                                    }, 200);
                                }}>
                                {content.label}
                            </Checkbox>
                        );
                    }
                }
                // switch模式
                else if (columns[i]['renderOptions']['renderType'] === 'switch') {
                    columns[i]['render'] = (content, record) => {
                        const currentDataIndex = columns[i]['dataIndex']
                        return (
                            <Switch checked={content.checked}
                                disabled={content.disabled}
                                checkedChildren={content.checkedChildren}
                                unCheckedChildren={content.unCheckedChildren}
                                onChange={(checked) => {
                                    // 修改对应行对应字段item.checked值
                                    try {
                                        data.forEach(function (item, i) {
                                            // 命中后，修改值并利用错误抛出来跳出循环
                                            if (item.key === record.key) {
                                                data[i][currentDataIndex] = {
                                                    ...record[currentDataIndex],
                                                    checked: checked
                                                }
                                                throw new Error("目标已修改");
                                            }
                                        });
                                    } catch (e) {
                                    };

                                    setTimeout(function () {
                                        setProps({
                                            data: data,
                                            // 忽略组件型字段键值对
                                            recentlySwitchRow: omitBy(record, value => value?.$$typeof),
                                            recentlySwitchDataIndex: columns[i]['dataIndex'],
                                            recentlySwitchStatus: checked
                                        })
                                    }, 200);
                                }} />
                        );
                    }
                }
                // select模式
                else if (columns[i]['renderOptions']['renderType'] === 'select') {
                    columns[i]['render'] = (content, record) => {
                        const currentDataIndex = columns[i]['dataIndex']
                        // 针对空值进行错误处理
                        content = content || {}
                        return (
                            <Select
                                className={content.className}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    ...content.style
                                }}
                                showSearch={true}
                                options={content.options}
                                listHeight={content.listHeight}
                                mode={content.mode}
                                disabled={content.disabled}
                                size={content.size}
                                bordered={content.bordered}
                                placeholder={content.placeholder}
                                placement={content.placement}
                                defaultValue={content.value}
                                maxTagCount={content.maxTagCount}
                                optionFilterProp={content.optionFilterProp}
                                allowClear={content.allowClear}
                                onChange={(value) => {
                                    // 修改对应行对应字段item.value值
                                    try {
                                        data.forEach(function (item, i) {
                                            // 命中后，修改值并利用错误抛出来跳出循环
                                            if (item.key === record.key) {
                                                data[i][currentDataIndex] = {
                                                    ...record[currentDataIndex],
                                                    value: value
                                                }
                                                // 提前打断循环过程
                                                throw new Error("目标已修改");
                                            }
                                        });
                                    } catch (e) {
                                    };

                                    setTimeout(
                                        () => {
                                            setProps({
                                                data: data,
                                                // 忽略组件型字段键值对
                                                recentlySelectRow: omitBy(record, value => value?.$$typeof),
                                                recentlySelectDataIndex: columns[i]['dataIndex'],
                                                recentlySelectValue: value
                                            })
                                        },
                                        200
                                    );
                                }} />
                        );
                    }
                }
                // button模式
                else if (columns[i]['renderOptions']['renderType'] === 'button') {
                    // 当renderOptions参数的renderButtonPopConfirmProps参数存在
                    if (columns[i]['renderOptions']['renderButtonPopConfirmProps']) {
                        columns[i]['render'] = (content, record) => {
                            // 根据content是否为数组，来决定渲染单个按钮还是多个按钮
                            return Array.isArray(content) ? (
                                <Space split={columns[i]['renderOptions'].renderButtonSplit && <Divider type={"vertical"} />}>
                                    {
                                        content.map(
                                            (content_, idx) => (
                                                <Popconfirm
                                                    key={idx}
                                                    title={columns[i]['renderOptions']['renderButtonPopConfirmProps'].title}
                                                    okText={columns[i]['renderOptions']['renderButtonPopConfirmProps'].okText}
                                                    cancelText={columns[i]['renderOptions']['renderButtonPopConfirmProps'].cancelText}
                                                    disabled={content_.disabled}
                                                    getPopupContainer={containerId ? () => (document.getElementById(containerId) ? document.getElementById(containerId) : document.body) : undefined}
                                                    onConfirm={(e) => {
                                                        // 阻止事件冒泡
                                                        e.stopPropagation();
                                                        setProps({
                                                            // 忽略组件型字段键值对
                                                            recentlyButtonClickedRow: omitBy(record, value => value?.$$typeof),
                                                            nClicksButton: nClicksButton + 1,
                                                            clickedContent: content_.content,
                                                            clickedCustom: content_.custom,
                                                            recentlyButtonClickedDataIndex: columns[i].dataIndex
                                                        })
                                                    }}
                                                    onCancel={(e) => {
                                                        // 阻止事件冒泡
                                                        e.stopPropagation();
                                                    }}>
                                                    <Button
                                                        size={'small'}
                                                        type={content_.type}
                                                        danger={content_.danger}
                                                        disabled={content_.disabled}
                                                        style={content_.style}
                                                        icon={
                                                            content_.icon && (
                                                                content_.iconRenderer === 'fontawesome' ?
                                                                    (
                                                                        React.createElement(
                                                                            'i',
                                                                            {
                                                                                className: content_.icon
                                                                            }
                                                                        )
                                                                    ) :
                                                                    (
                                                                        <AntdIcon icon={content_.icon} />
                                                                    )
                                                            )
                                                        }
                                                        onClick={(e) => {
                                                            // 阻止事件冒泡
                                                            e.stopPropagation();
                                                        }}>
                                                        {content_.content}
                                                    </Button>
                                                </Popconfirm>
                                            )
                                        )
                                    }
                                </Space>
                            ) : <Popconfirm
                                title={columns[i]['renderOptions']['renderButtonPopConfirmProps'].title}
                                okText={columns[i]['renderOptions']['renderButtonPopConfirmProps'].okText}
                                cancelText={columns[i]['renderOptions']['renderButtonPopConfirmProps'].cancelText}
                                disabled={content.disabled}
                                getPopupContainer={containerId ? () => (document.getElementById(containerId) ? document.getElementById(containerId) : document.body) : undefined}
                                onConfirm={(e) => {
                                    // 阻止事件冒泡
                                    e.stopPropagation();
                                    setProps({
                                        // 忽略组件型字段键值对
                                        recentlyButtonClickedRow: omitBy(record, value => value?.$$typeof),
                                        nClicksButton: nClicksButton + 1,
                                        clickedContent: content.content,
                                        clickedCustom: content.custom,
                                        recentlyButtonClickedDataIndex: columns[i].dataIndex
                                    })
                                }}
                                onCancel={(e) => {
                                    // 阻止事件冒泡
                                    e.stopPropagation();
                                }}>
                                <Button
                                    size={'small'}
                                    type={content.type}
                                    danger={content.danger}
                                    disabled={content.disabled}
                                    style={content.style}
                                    icon={
                                        content.icon && (
                                            content.iconRenderer === 'fonbtawesome' ?
                                                (
                                                    React.createElement(
                                                        'i',
                                                        {
                                                            className: content.icon
                                                        }
                                                    )
                                                ) :
                                                (
                                                    <AntdIcon icon={content.icon} />
                                                )
                                        )
                                    }
                                    onClick={(e) => {
                                        // 阻止事件冒泡
                                        e.stopPropagation();
                                    }}>
                                    {content.content}
                                </Button>
                            </Popconfirm>
                        }
                    } else {
                        columns[i]['render'] = (content, record) => {
                            // 根据content是否为数组，来决定渲染单个按钮还是多个按钮
                            return Array.isArray(content) ? (
                                <Space split={columns[i]['renderOptions'].renderButtonSplit && <Divider type={"vertical"} />}>
                                    {
                                        content.map(
                                            (content_, idx) => (
                                                <Button
                                                    key={idx}
                                                    onClick={(e) => {
                                                        // 阻止事件冒泡
                                                        e.stopPropagation();
                                                        setProps({
                                                            // 忽略组件型字段键值对
                                                            recentlyButtonClickedRow: omitBy(record, value => value?.$$typeof),
                                                            nClicksButton: nClicksButton + 1,
                                                            clickedContent: content_.content,
                                                            clickedCustom: content_.custom,
                                                            recentlyButtonClickedDataIndex: columns[i].dataIndex
                                                        })
                                                    }}
                                                    size={'small'}
                                                    type={content_.type}
                                                    danger={content_.danger}
                                                    disabled={content_.disabled}
                                                    href={content_.href}
                                                    target={content_.target}
                                                    style={content_.style}
                                                    icon={
                                                        content_.icon && (
                                                            content_.iconRenderer === 'fontawesome' ?
                                                                (
                                                                    React.createElement(
                                                                        'i',
                                                                        {
                                                                            className: content_.icon
                                                                        }
                                                                    )
                                                                ) :
                                                                (
                                                                    <AntdIcon icon={content_.icon} />
                                                                )
                                                        )
                                                    }>
                                                    {content_.content}
                                                </Button>
                                            )
                                        )
                                    }</Space>
                            ) : <Button
                                onClick={(e) => {
                                    // 阻止事件冒泡
                                    e.stopPropagation();
                                    setProps({
                                        // 忽略组件型字段键值对
                                        recentlyButtonClickedRow: omitBy(record, value => value?.$$typeof),
                                        nClicksButton: nClicksButton + 1,
                                        clickedContent: content.content,
                                        clickedCustom: content.custom,
                                        recentlyButtonClickedDataIndex: columns[i].dataIndex
                                    })
                                }}
                                size={'small'}
                                type={content.type}
                                danger={content.danger}
                                disabled={content.disabled}
                                href={content.href}
                                target={content.target}
                                style={content.style}
                                icon={
                                    content.icon && (
                                        content.iconRenderer === 'fontawesome' ?
                                            (
                                                React.createElement(
                                                    'i',
                                                    {
                                                        className: content.icon
                                                    }
                                                )
                                            ) :
                                            (
                                                <AntdIcon icon={content.icon} />
                                            )
                                    )
                                }>
                                {content.content}
                            </Button>
                        }
                    }
                }
                // tags模式
                else if (columns[i]['renderOptions']['renderType'] === 'tags') {

                    columns[i]['render'] = tags => {
                        if ((!tags || isEmpty(tags)) && tags !== 0 && tags !== '') {
                            return null;
                        }
                        return (
                            // 兼容单标签/多标签输入
                            <>
                                {(Array.isArray(tags) ? tags : [tags]).map(tag => {
                                    return (
                                        <Tag color={tag.color}>
                                            {tag.tag}
                                        </Tag>
                                    );
                                })}
                            </>
                        )
                    }
                }
                // custom-format模式
                else if (columns[i]['renderOptions']['renderType'] === 'custom-format') {
                    // 若customFormatFuncs对应当前字段的属性值存在
                    if (customFormatFuncs[columns[i]['dataIndex']]) {
                        columns[i]['render'] = eval(customFormatFuncs[columns[i]['dataIndex']])
                    }
                }
                // mini-line模式
                else if (columns[i]['renderOptions']['renderType'] === 'mini-line') {
                    columns[i]['render'] = data => {
                        let config = {
                            autoFit: true,
                            padding: 0,
                            data: data,
                            animation: miniChartAnimation,
                            smooth: true
                        };
                        // 检查是否设置了tooltipCustomContent参数
                        if (columns[i]['renderOptions']?.tooltipCustomContent) {
                            config = {
                                ...config,
                                tooltip: {
                                    customContent: eval(columns[i]['renderOptions'].tooltipCustomContent)
                                }
                            }
                        }
                        // 检查是否设置了miniChartColor参数
                        if (columns[i]['renderOptions']?.miniChartColor) {
                            config = {
                                ...config,
                                color: columns[i]['renderOptions'].miniChartColor
                            }
                        }
                        return <div style={{ height: miniChartHeight }}><TinyLine {...config} /></div>;
                    }
                }
                // mini-bar模式
                else if (columns[i]['renderOptions']['renderType'] === 'mini-bar') {
                    columns[i]['render'] = data => {
                        let config = {
                            padding: 0,
                            autoFit: true,
                            data: data,
                            animation: miniChartAnimation,
                        };
                        // 检查是否设置了tooltipCustomContent参数
                        if (columns[i]['renderOptions']?.tooltipCustomContent) {
                            config = {
                                ...config,
                                tooltip: {
                                    customContent: eval(columns[i]['renderOptions'].tooltipCustomContent)
                                }
                            }
                        }
                        // 检查是否设置了miniChartColor参数
                        if (columns[i]['renderOptions']?.miniChartColor) {
                            config = {
                                ...config,
                                color: columns[i]['renderOptions'].miniChartColor
                            }
                        }
                        return <div style={{ height: miniChartHeight }}><TinyColumn {...config} /></div>;
                    }
                }
                // mini-progress模式
                else if (columns[i]['renderOptions']['renderType'] === 'mini-progress') {
                    columns[i]['render'] = data => {
                        let config = {
                            autoFit: true,
                            padding: 0,
                            percent: data,
                            animation: miniChartAnimation,
                            color: [
                                data === 1 ?
                                    (columns[i]['renderOptions']['progressOneHundredPercentColor'] || '#52c41a') :
                                    '#5B8FF9',
                                '#E8EDF3'
                            ]
                        };
                        return <div style={{ height: miniChartHeight }}><Progress {...config} /></div>;
                    }
                }
                // mini-ring-progress模式
                else if (columns[i]['renderOptions']['renderType'] === 'mini-ring-progress') {
                    columns[i]['render'] = data => {
                        let config = {
                            autoFit: true,
                            padding: 0,
                            percent: data,
                            animation: miniChartAnimation,
                            color: [
                                data === 1 ?
                                    (columns[i]['renderOptions']['progressOneHundredPercentColor'] || '#52c41a') :
                                    '#5B8FF9',
                                '#E8EDF3'
                            ],
                            statistic: {
                                content: {
                                    style: {
                                        fontSize: columns[i]['renderOptions']['ringProgressFontSize']
                                    }
                                }
                            }
                        };
                        return <div style={{ height: miniChartHeight }}><RingProgress {...config} /></div>;
                    }
                }
                // mini-area模式
                else if (columns[i]['renderOptions']['renderType'] === 'mini-area') {
                    columns[i]['render'] = data => {
                        let config = {
                            autoFit: true,
                            padding: 0,
                            data: data,
                            animation: miniChartAnimation,
                            smooth: true,
                        };
                        // 检查是否设置了tooltipCustomContent参数
                        if (columns[i]['renderOptions']?.tooltipCustomContent) {
                            config = {
                                ...config,
                                tooltip: {
                                    customContent: eval(columns[i]['renderOptions'].tooltipCustomContent)
                                }
                            }
                        }
                        // 检查是否设置了miniChartColor参数
                        if (columns[i]['renderOptions']?.miniChartColor) {
                            config = {
                                ...config,
                                areaStyle: {
                                    fill: columns[i]['renderOptions'].miniChartColor,
                                    fillOpacity: 0.4
                                },
                                line: {
                                    color: columns[i]['renderOptions'].miniChartColor
                                }
                            }
                        }
                        return <div style={{ height: miniChartHeight }}><TinyArea {...config} /></div>;
                    }
                }
            }
        }

        // 处理columns.title的增广功能设置
        if (titlePopoverInfo) {
            for (let i = 0; i < columns.length; i++) {
                if (Object.keys(titlePopoverInfo).includes(columns[i].dataIndex)) {

                    if (!columns[i].title_) {
                        columns[i]['title_'] = columns[i]['title']
                    }
                    columns[i]['title'] = () => {
                        return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {columns[i].title_}
                            <Popover
                                title={titlePopoverInfo[columns[i].dataIndex].title}
                                content={<div style={{
                                    maxWidth: '250px',
                                    wordWrap: 'break-word',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-all'
                                }}>{titlePopoverInfo[columns[i].dataIndex].content}</div>}
                                overlayStyle={titlePopoverInfo[columns[i].dataIndex].overlayStyle}
                                placement={titlePopoverInfo[columns[i].dataIndex].placement || 'bottom'}
                                getPopupContainer={containerId ? () => (document.getElementById(containerId) ? document.getElementById(containerId) : document.body) : undefined}>
                                <QuestionCircleOutlined
                                    style={{
                                        color: '#8c8c8c',
                                        paddingLeft: '4px',
                                        cursor: 'pointer'
                                    }} />
                            </Popover>
                        </div>
                    }
                }
            }
        }

        // 添加表头单元格监听事件
        columns = columns.map(
            (item, idx) => (
                {
                    ...item,
                    ...{
                        onHeaderCell: (e) => {
                            return {
                                islast: idx - (columns.length - 1),
                                ...(
                                    enableHoverListen ?
                                        {
                                            onMouseEnter: event => { setProps({ recentlyMouseEnterColumnDataIndex: e.dataIndex }) }
                                        } :
                                        {}
                                ),
                                // 独立控制表头对齐
                                ...(
                                    e.headerAlign ?
                                        {
                                            style: { textAlign: e.headerAlign }
                                        } :
                                        {}
                                )
                            };
                        }
                    }
                }
            )
        )

        let rowSelection
        // 处理行选择功能设置
        if (rowSelectionType) {

            rowSelection = {
                columnWidth: rowSelectionWidth,
                checkStrictly: rowSelectionCheckStrictly,
                fixed: true,
                type: rowSelectionType,
                selectedRowKeys: selectedRowKeys,
                selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE
                ],
                onChange: (selectedRowKeys, selectedRows) => {
                    setProps({
                        selectedRowKeys: (
                            // 排除被忽略选择的行
                            rowSelectionIgnoreRowKeys ?
                                selectedRowKeys.filter(item => !rowSelectionIgnoreRowKeys.includes(item)) :
                                selectedRowKeys
                        ),
                        selectedRows: (
                            // 排除被忽略选择的行
                            rowSelectionIgnoreRowKeys ?
                                selectedRows.map(
                                    // 忽略组件型字段键值对
                                    record => omitBy(record, value => value?.$$typeof)
                                ).filter(
                                    record => !rowSelectionIgnoreRowKeys.includes(record.key)
                                ) :
                                selectedRows.map(
                                    record => omitBy(record, value => value?.$$typeof)
                                )
                        )
                    })
                },
                renderCell: (checked, record, index, originNode) => {
                    // 排除不可选择的行
                    if (rowSelectionIgnoreRowKeys && rowSelectionIgnoreRowKeys.includes(record.key)) {
                        return null;
                    }
                    return originNode;
                }
            }
        }

        // 处理行可展开内容功能
        let rowExpandedRowRender
        if (expandedRowKeyToContent && Array.isArray(expandedRowKeyToContent)) {
            rowExpandedRowRender = new Map(
                expandedRowKeyToContent.map(
                    item => [item.key, item.content]
                )
            )
        }

        // 检查当前是否至少有一个字段是可编辑的
        let atLeastOneColumnEditable = columns.some(item => item.editable)

        // 减少不必要的单元格重绘
        if (cellUpdateOptimize) {
            columns = columns.map(
                item => {
                    return {
                        ...item,
                        // 减少不必要的单元格重绘
                        shouldCellUpdate: (record, prevRecord) => {
                            if (isEqual(record, prevRecord)) {
                                return false;
                            }
                            return true;
                        }
                    };
                }
            )
        }

        // 配置自定义组件
        const components = {}

        // 若至少有一个字段开启编辑功能
        if (atLeastOneColumnEditable) {
            components.body = {
                row: EditableRow,
                cell: EditableCell,
            }
        }

        // 统一合并处理onCell自定义函数逻辑
        columns = [...columns].map(
            item => {
                return {
                    ...item,
                    ...{
                        onCell: (record, index) => {
                            // 初始化onCell返回值
                            let returnValue = {}
                            // 处理自定义样式特性
                            if (conditionalStyleFuncs && conditionalStyleFuncs[item.dataIndex]) {
                                try {
                                    returnValue = {
                                        ...returnValue,
                                        ...eval(conditionalStyleFuncs[item.dataIndex])(record, index)
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                            }
                            // 处理单元格单击、双击、右键事件
                            if (enableCellClickListenColumns && enableCellClickListenColumns.includes(item.dataIndex)) {
                                try {
                                    returnValue = {
                                        ...returnValue,
                                        onClick: e => {
                                            setProps({
                                                recentlyCellClickColumn: item.dataIndex,
                                                recentlyCellClickRecord: omitBy(record, value => value?.$$typeof),
                                                nClicksCell: nClicksCell + 1,
                                                cellClickEvent: {
                                                    pageX: e.pageX,
                                                    pageY: e.pageY,
                                                    clientX: e.clientX,
                                                    clientY: e.clientY,
                                                    screenX: e.screenX,
                                                    screenY: e.screenY,
                                                    timestamp: Date.now()
                                                }
                                            })
                                        },
                                        onDoubleClick: e => {
                                            setProps({
                                                recentlyCellDoubleClickColumn: item.dataIndex,
                                                recentlyCellDoubleClickRecord: omitBy(record, value => value?.$$typeof),
                                                nDoubleClicksCell: nDoubleClicksCell + 1,
                                                cellDoubleClickEvent: {
                                                    pageX: e.pageX,
                                                    pageY: e.pageY,
                                                    clientX: e.clientX,
                                                    clientY: e.clientY,
                                                    screenX: e.screenX,
                                                    screenY: e.screenY,
                                                    timestamp: Date.now()
                                                }
                                            })
                                        },
                                        onContextMenu: e => {
                                            // 阻止浏览器默认右键菜单
                                            e.preventDefault()
                                            setProps({
                                                recentlyContextMenuClickColumn: item.dataIndex,
                                                recentlyContextMenuClickRecord: omitBy(record, value => value?.$$typeof),
                                                nContextMenuClicksCell: nContextMenuClicksCell + 1,
                                                cellContextMenuClickEvent: {
                                                    pageX: e.pageX,
                                                    pageY: e.pageY,
                                                    clientX: e.clientX,
                                                    clientY: e.clientY,
                                                    screenX: e.screenX,
                                                    screenY: e.screenY,
                                                    timestamp: Date.now()
                                                }
                                            })
                                        }
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                            }

                            // 处理可编辑特性
                            if (item.editable) {
                                try {
                                    returnValue = {
                                        ...returnValue,
                                        record,
                                        editable: item.editable,
                                        dataIndex: item.dataIndex,
                                        title: item.title
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                            }

                            return returnValue;
                        }
                    }
                };
            }
        )

        // 若存在至少一个字段有group参数，则对columns进行重构以支持多层表头
        let tempColumns = []
        if (columns.some(e => e.group)) {
            // 新逻辑
            for (let column of columns) {
                if (column.group) {
                    if (isString(column.group)) {
                        insertNewColumnNode(column, [column.group], 0, tempColumns)
                    } else {
                        insertNewColumnNode(column, column.group, 0, tempColumns)
                    }
                } else {
                    tempColumns.push(column)
                }
            }
        } else {
            tempColumns = [...columns]
        }

        return (
            <ConfigProvider
                locale={str2Locale.get(locale)}
                renderEmpty={emptyContent ? () => emptyContent : undefined}
            >
                <Table
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), this.props)}
                    id={id}
                    className={className}
                    style={style}
                    key={key}
                    components={components}
                    rowClassName={
                        rowClassName ?
                            (atLeastOneColumnEditable ? () => `editable-row ${rowClassName}` : rowClassName) :
                            (atLeastOneColumnEditable ? () => 'editable-row' : undefined)
                    }
                    dataSource={
                        // 根据hiddenRowKeys参数情况进行指定行记录的隐藏
                        data.filter(e => !hiddenRowKeys.includes(e.key))
                    }
                    columns={tempColumns}
                    showHeader={showHeader}
                    rowHoverable={rowHoverable}
                    tableLayout={tableLayout}
                    size={size}
                    rowSelection={rowSelection}
                    sticky={sticky}
                    pagination={
                        // 确保pagination=false生效
                        pagination &&
                        {
                            ...pagination,
                            ...{
                                showTotal: total => `${pagination.showTotalPrefix} ${total} ${pagination.showTotalSuffix}`
                            },
                            position: (pagination.position && !Array.isArray(pagination.position))
                                ? [pagination.position] : pagination.position
                        }
                    }
                    bordered={bordered}
                    scroll={{ x: maxWidth, y: maxHeight, scrollToFirstRowOnChange: scrollToFirstRowOnChange }}
                    onChange={this.onPageChange}
                    onRow={
                        enableHoverListen ?
                            (record, index) => {
                                return {
                                    onMouseEnter: event => {
                                        setProps({
                                            recentlyMouseEnterRowKey: record.key,
                                            // 忽略组件型字段键值对
                                            recentlyMouseEnterRow: omitBy(record, value => value?.$$typeof)
                                        })
                                    }, // 鼠标移入行
                                };
                            } : undefined
                    }
                    summary={summaryRowContents ? () => (
                        <Table.Summary fixed={summaryRowFixed}>
                            {
                                splitSummaryRowContents(summaryRowContents, tempColumns.length, summaryRowBlankColumns).map(
                                    (group, idx) => (
                                        <Table.Summary.Row key={idx}>
                                            {group.map((item, i) =>
                                            (
                                                item.empty ?
                                                    (
                                                        <Table.Summary.Cell index={i} />
                                                    ) :
                                                    (
                                                        <Table.Summary.Cell index={i} colSpan={item.colSpan} align={item.align}>
                                                            {item.content}
                                                        </Table.Summary.Cell>
                                                    )
                                            )
                                            )}
                                        </Table.Summary.Row>
                                    )
                                )
                            }
                        </Table.Summary>
                    ) : undefined}
                    expandable={
                        rowExpandedRowRender ? {
                            defaultExpandedRowKeys: defaultExpandedRowKeys,
                            expandedRowKeys: expandedRowKeys || defaultExpandedRowKeys,
                            expandedRowRender: (record) => rowExpandedRowRender.get(record.key),
                            rowExpandable: (record) => rowExpandedRowRender.has(record.key),
                            columnWidth: expandedRowWidth,
                            expandRowByClick: expandRowByClick,
                            onExpandedRowsChange: (e) => setProps({
                                expandedRowKeys: e
                            })
                        } : {
                            // 兼容行记录自带children的自动展开情况
                            defaultExpandedRowKeys: defaultExpandedRowKeys,
                            expandedRowKeys: expandedRowKeys || defaultExpandedRowKeys,
                            columnWidth: expandedRowWidth,
                            expandRowByClick: expandRowByClick,
                            onExpandedRowsChange: (e) => setProps({
                                expandedRowKeys: e
                            })
                        }
                    }
                    virtual={virtual}
                    title={title && (() => title)}
                    footer={footer && (() => footer)}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    loading={loading}
                    getPopupContainer={
                        containerId ?
                            () => (
                                document.getElementById(containerId) ?
                                    document.getElementById(containerId) :
                                    document.body
                            ) :
                            undefined}
                    showSorterTooltip={showSorterTooltip && showSorterTooltipTarget ? { target: showSorterTooltipTarget } : showSorterTooltip}
                />
            </ConfigProvider>
        );
    }
}

export default AntdTable;

AntdTable.defaultProps = defaultProps;
AntdTable.propTypes = propTypes;