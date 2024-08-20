import io
import json
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author_email=package['email'],
    homepage='https://github.com/CNFeffery/feffery-antd-components',
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    package_data={
        'feffery_antd_components': ['*']
    },
    license=package['license'],
    description=package.get('description', package_name),
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    install_requires=[
        'dash>=2.17.1'
    ],
    classifiers=[
        'Framework :: Dash',
    ],
    url='https://github.com/CNFeffery/feffery-antd-components'
)
