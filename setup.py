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
    license=package['license'],
    description=package.get('description', package_name),
    install_requires=[
        'dash>=2.8.0'
    ],
    classifiers=[
        'Framework :: Dash',
    ],
    url='https://github.com/CNFeffery/feffery-antd-components'
)
