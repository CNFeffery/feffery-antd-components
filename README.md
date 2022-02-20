<p align="center">
	<img src="./fac-logo.svg" height=325></img>
</p>
<h1 align="center">feffery-antd-components</h1>
<div align="center">




[![GitHub](https://img.shields.io/github/license/plotly/dash.svg?color=dark-green)](https://github.com/plotly/dash/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/v/feffery-antd-components.svg?color=dark-green)](https://pypi.org/project/feffery-antd-components/)
[![Downloads](https://pepy.tech/badge/feffery-antd-components)](https://pepy.tech/project/feffery-antd-components)
[![Downloads](https://pepy.tech/badge/feffery-antd-components/month)](https://pepy.tech/project/feffery-antd-components)
[![Downloads](https://pepy.tech/badge/feffery-antd-components/week)](https://pepy.tech/project/feffery-antd-components)

</div>

`feffery-components`计划子项目，`Plotly Dash`第三方组件库，将基于`Antd`，将超多具有丰富功能的组件引入`Dash`的世界🥳，最新版本：`0.1.0rc1`（**测试版本迭代中，敬请期待第一个正式版本的发布**）

## 1 最新版本安装方式

```bash
pip install feffery-antd-components==0.1.0rc1
```

## 2 最新开发版本安装方式

```bash
pip install git+https://github.com/CNFeffery/feffery-antd-components.git
```

国内镜像加速安装方式：

```bash
pip install git+https://hub.fastgit.org/CNFeffery/feffery-antd-components.git
```

或：

```bash
pip install git+https://github.com.cnpmjs.org/CNFeffery/feffery-antd-components.git
```

## 3 静态资源CDN加速方法（0.0.1rc7及以上版本可用）

```Python
# 非debug模式下对Dash()传入参数serve_locally=False会强制浏览器端从unpkg加载各个依赖的
# xxx.min.js等静态资源，从而避免直接占用服务器带宽，适合中小型站点加速访问，提升用户体验
app = dash.Dash(serve_locally=False)
```

## 4 已包含组件

- [x] 日期选择框：`AntdDatePicker`
- [x] 日期范围选择框：`AntdDateRangePicker`
- [x] 分割线：`AntdDivider`
- [x] 按钮：`AntdButton`
- [x] 下拉选择：`AntdSelect`
- [x] 树形控件：`AntdTree`
- [x] 表格控件：`AntdTable`
- [x] 锚点：`AntdAnchor`
- [x] 穿梭框：`AntdTransfer`
- [x] 滑杆输入：`AntdSlider`
- [x] 步骤条：`AntdSteps`
- [x] 导航菜单：`AntdMenu`
- [x] 折叠面板：`AntdCollapse`
- [x] 栅格系统
  - `AntdRow`
  - `AntdCol`
- [x] 布局
  - `AntdLayout`
  - `AntdHeader`
  - `AntdContent`
  - `AntdFooter`
  - `AntdSider`
- [x] 对话框：`AntdModal`
- [x] 警告提示：`AntdAlert`
- [x] 通知提醒框：`AntdNotification`
- [x] 全局提示：`AntdMessage`
- [x] 标签：`AntdTag`
- [x] 结果：`AntdResult`
- [x] 输入框：`AntdInput`
- [x] 文字提示：`AntdTooltip`
- [x] 选择框：`AntdCheckbox`
- [x] 组合选择框：`AntdCheckboxGroup`
- [x] 加载动画：`AntdSpin`
- [x] 开关：`AntdSwitch`
- [x] 排版
  - `AntdParagraph`
  - `AntdTitle`
  - `AntdText`
- [x] 标签页
  - `AntdTabs`
  - `AntdTabPane`
- [x] 分页：`AntdPagination`
- [x] 树选择：`AntdTreeSelect`
- [x] 抽屉：`AntdDrawer`
- [x] 气泡卡片：`AntdPopover`
- [x] 空状态：`AntdEmpty`
- [x] 级联选择：`AntdCascader`
- [x] 单选框：`AntdRadio`
- [x] 上传：`AntdUpload`
- [x] 气泡确认框：`AntdPopconfirm`
- [x] 回到顶部：`AntdBackTop`
- [x] 骨架屏：`AntdSkeleton`
- [x] 固钉：`AntdAffix`
- [x] 面包屑：`AntdBreadcrumb`
- [x] 下拉菜单：`AntdDropdown`
- [x] 数字输入框：`AntdInputNumber`
- [x] 评分：`AntdRate`
- [x] 统计数值：`AntdStatistic`
- [x] 倒计时：`AntdCountdown`
- [x] 时间轴：`AntdTimeline`
- [x] 进度条：`AntdProgress`
- [x] 头像：`AntdAvatar`
- [x] 徽标数：`AntdBadge`
- [x] 缎带：`AntdRibbon`
- [x] 时间选择框：`AntdTimePicker`
- [x] 时间范围选择框：`AntdTimeRangePicker`
- [x] 走马灯：`AntdCarousel`
- [x] 拖拽上传组件：`AntdDraggerUpload`
- [x] 表单
  - `AntdForm`
  - `AntdFormItem`
- [x] 卡片
  - `AntdCard`
  - `AntdCardGrid`
- [x] 提及：`AntdMentions`
- [x] 图片：`AntdImage`
- [x] 页头：`AntdPageHeader`
- [x] 日历：`AntdCalendar`
- [x] 评论：`AntdComment`
- [x] 描述列表
  - `AntdDescriptions`
  - `AntdDescriptionItem`

## 5 在线交互式说明文档

<a href='http://fac.feffery.tech/' target='_blank'>文档地址</a>

## 6 近期TODO计划

- [x] 为以下表单输入类组件增加`persistence`相关特性
  - [x] `AntdTabs`
    - `activeKey`
  - [x] `AntdCalendar`
    - `value`
  - [x] `AntdCascader`
    - `value`
  - [x] `AntdCheckbox`
    - `checked`
  - [x] `AntdCheckboxGroup`
    - `value`
  - [x] `AntdCollapse`
    - `is_open`
  - [x] `AntdDatePicker`
    - `value`
  - [x] `AntdDateRangePicker`
    - `value`
  - [x] `AntdInput`
    - `value`
  - [x] `AntdInputNumber`
    - `value`
  - [x] `AntdMenu`
    - `currentKey`
    - `openKeys`
  - [x] `AntdPagination`
    - `current`
    - `pageSize`
  - [x] `AntdRadioGroup`
    - `value`
  - [x] `AntdSelect`
    - `value`
  - [x] `AntdSwitch`
    - `checked`
  - [x] `AntdTimePicker`
    - `value`
  - [x] `AntdTimeRangePicker`
    - `value`
  - [x] `AntdTransfer`
    - `targetKeys`
  - [x] `AntdTree`
    - `selectedKeys`
    - `checkedKeys`
    - `expandedKeys`
  - [x] `AntdTreeSelect`
    - `value`
- [x] 为以下组件添加多语种环境切换参数`locale`
  - `AntdParagraph`
  - `AntdText`
  - `AntdTitle`
  - `AntdCalendar`
  - `AntdCascader`
  - `AntdComment`
  - `AntdDatePicker`
  - `AntdDatePickerRange`
  - `AntdDraggerUpload`
  - `AntdEmpty`
  - `AntdImage`
  - `AntdModal`
  - `AntdPagination`
  - `AntdPopconfirm`
  - `AntdSelect`
  - `AntdTable`
  - `AntdTimePicker`
  - `AntdTimePickerRange`
  - `AntdTransfer`
  - `AntdTreeSelect`
  - `AntdUpload`
- [x] 为以下组件增加`响应式`功能
  - `AntdDescriptions`
  - `AntdRow`
  - `AntdCol`
  - `AntdSider`
  - `AntdAvatar`
