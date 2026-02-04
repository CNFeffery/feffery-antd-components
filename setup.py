import json
from pathlib import Path

from setuptools import setup

here = Path(__file__).parent
with open('package.json') as f:
    package = json.load(f)
long_description = (here / 'README.md').read_text(encoding='utf-8')

package_name = package['name'].replace(' ', '_').replace('-', '_')

setup(
    name=package_name,
    version=package['version'],
    homepage=package['homepage'],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    package_data={'feffery_antd_components': ['*']},
    license=package['license'],
    description=package.get('description', package_name),
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        'dash>=3.3.0',
    ],
    classifiers=[
        'Framework :: Dash',
    ],
    url='https://github.com/CNFeffery/feffery-antd-components',
)
