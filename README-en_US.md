<p align="center">
	<img src="./fac-logo.svg" height=300></img>
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

[简体中文](./README.md) | English

Subproject of `feffery-components` projects, third-party components library of `Plotly Dash`, based on the [Antd](https://github.com/ant-design/ant-design), brings many common and powerful components into `Dash`🥳, latest stable version: `0.3.15` (2025-01-30)

## Dash Version Compatibility Notes

| fac version | Compatible Dash Version |
| :--------: | :---------------------: |
| >=0.4.0    |        >=3.0.0          |
| <0.4.0     |         <3.0.0          |

## 1 Install

```bash
pip install feffery-antd-components -U
```

## 2 Install the latest preview release version

> [!NOTE]  
> The latest preview release version (2025-07-09): `0.4.0rc9`

```bash
pip install feffery-antd-components --pre -U
```

## 3 Use CDN

```Python
# just set serve_locally=False in dash.Dash()
app = dash.Dash(serve_locally=False)
```

## 4 Documentation

<a href='http://fac.feffery.tech/' target='_blank'>fac.feffery.tech</a>

## 5 Internationalization

Some components in `fac` have built-in copy information, and internationalization settings can be made through the parameter `locale`. The default is `'zh-cn'`, which is Simplified Chinese. You can set it to `'en-us'` and `'de-de'` to use English and German copy, respectively. For example:

```Python
fac.AntdDatePicker(locale='en-us')
```

<img src="./images/国际化示例_en-us.png" height=350></img>

```Python
fac.AntdDatePicker(locale='de-de')
```

<img src="./images/国际化示例_de-de.png" height=350></img>

## 6 Contributors

<a href = "https://github.com/CNFeffery/feffery-antd-components/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=CNFeffery/feffery-antd-components"/>
</a>
