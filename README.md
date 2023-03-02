<p align="center">
	<img src="./fac-logo.svg" height=300></img>
</p>
<h1 align="center">feffery-antd-components</h1>
<div align="center">
[![GitHub](https://shields.io/badge/license-MIT-informational)](https://github.com/CNFeffery/feffery-antd-components/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/v/feffery-antd-components.svg?color=dark-green)](https://pypi.org/project/feffery-antd-components/)
[![Downloads](https://pepy.tech/badge/feffery-antd-components)](https://pepy.tech/project/feffery-antd-components)
[![Downloads](https://pepy.tech/badge/feffery-antd-components/month)](https://pepy.tech/project/feffery-antd-components)
[![Downloads](https://pepy.tech/badge/feffery-antd-components/week)](https://pepy.tech/project/feffery-antd-components)

</div>

> `0.2.0`全新版本即将发布，敬请期待，[预览版本文档](http://fac-next.feffery.tech/)

简体中文 | [English](./README-en_US.md)

`feffery-components`计划子项目，`Plotly Dash`第三方组件库，基于`Antd`，将超多具有丰富功能的通用网页常用交互组件引入`Dash`的生态中 🥳，最新稳定版本：`0.1.16`，最新预发布版本：`0.2.0rc30`

## 1 最新版本安装方式

```bash
pip install feffery-antd-components -U
```

## 2 最新开发版本安装方式

```bash
pip install git+https://github.com/CNFeffery/feffery-antd-components.git
```

国内镜像加速安装方式：

```bash
pip install git+https://github.91chi.fun/https://github.com/CNFeffery/feffery-antd-components.git
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

`fac`中的部分组件具有自带的文案信息，通过参数`locale`可以进行国际化设置，默认为`'zh-cn'`即简体中文，你可以设置为`'en-us'`来使用英文文案，譬如：

```Python
fac.AntdDatePicker(locale='en-us')
```

<img src="./images/国际化示例.png" height=350></img>
