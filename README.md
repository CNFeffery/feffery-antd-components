<p align="center">
	<img src="./imgs/fac-logo.svg" height=300></img>
</p>
<h1 align="center">feffery-antd-components</h1>
<div align="center">

[![GitHub](https://shields.io/badge/license-MIT-informational)](https://github.com/CNFeffery/feffery-antd-components/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/v/feffery-antd-components.svg?color=dark-green)](https://pypi.org/project/feffery-antd-components/)
[![Downloads](https://static.pepy.tech/badge/feffery-antd-components)](https://pepy.tech/project/feffery-antd-components)
[![Downloads](https://static.pepy.tech/badge/feffery-antd-components/month)](https://pepy.tech/project/feffery-antd-components)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/CNFeffery/feffery-antd-components.svg)](http://isitmaintained.com/project/CNFeffery/feffery-antd-components "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CNFeffery/feffery-antd-components.svg)](http://isitmaintained.com/project/CNFeffery/feffery-antd-components "Percentage of issues still open")

</div>

简体中文 | [English](./README-en_US.md)

`feffery-components`计划子项目，`Plotly Dash`第三方组件库，基于`Antd`，将超多具有丰富功能的通用网页常用交互组件引入`Dash`的生态中 🥳，最新稳定版本：`0.4.6`（2026-04-28）

## Dash版本兼容性说明

| fac版本 | 适用Dash版本 |
| :-----: | :----------: |
| >=0.4.0 |   >=3.0.0    |
| <0.4.0  |    <3.0.0    |

## 1 最新版本安装方式

```bash
pip install feffery-antd-components -U
```

## 2 最新预发布版本安装方式

> [!NOTE]  
> 最新预发布版本（2026-03-12）：`0.4.6rc1`

```bash
pip install feffery-antd-components --pre -U
```

## 3 静态资源 CDN 加速方法

```Python
# 非debug模式下对Dash()传入参数serve_locally=False会强制浏览器端从unpkg cdn加载各个依赖的
# xxx.min.js等静态资源，从而避免占用服务器带宽，适合中小型站点加速访问
app = dash.Dash(serve_locally=False)
```

## 4 在线文档

<a href='http://fac.feffery.tech/' target='_blank'>文档地址</a>

## 5 国际化

`fac`中的部分组件具有自带的文案信息，通过参数`locale`可以进行国际化设置，默认为`'zh-cn'`即简体中文，你可以设置为`'en-us'`、`'de-de'`、`'ru-ru'`来使用不同语言，譬如：

```Python
fac.AntdDatePicker(locale='en-us')
```

<img src="./imgs/国际化示例_en-us.png" height=350></img>

```Python
fac.AntdDatePicker(locale='de-de')
```

<img src="./imgs/国际化示例_de-de.png" height=350></img>

## 6 贡献者

<a href = "https://github.com/CNFeffery/feffery-antd-components/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=CNFeffery/feffery-antd-components"/>
</a>

## 7 更多应用开发教程

> 微信公众号「玩转 Dash」，欢迎扫码关注 👇

<p align="center" >
  <img src="./imgs/公众号.png" height=220 />
</p>

> 「玩转 Dash」知识星球，海量教程案例模板资源，专业的答疑咨询服务，欢迎扫码加入 👇

<p align="center" >
  <img src="./imgs/知识星球.jpg" height=220 />
</p>