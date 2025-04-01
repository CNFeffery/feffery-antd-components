// react核心
import React, { useContext } from 'react';
// antd核心
import { Empty, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdEmpty.react';


const builtinImage = new Map([
    ['default', Empty.PRESENTED_IMAGE_DEFAULT],
    ['simple', Empty.PRESENTED_IMAGE_SIMPLE]
])

/**
 * 空状态组件AntdEmpty
 */
const AntdEmpty = (props) => {
    let {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        locale,
        description,
        image,
        setProps,
        ...others
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Empty
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                styles={styles}
                classNames={classNames}
                key={key}
                description={description}
                image={builtinImage.get(image) || image}
                data-dash-is-loading={useLoading()} >
                {children}
            </Empty>
        </ConfigProvider>
    );
}

export default AntdEmpty;

AntdEmpty.defaultProps = defaultProps;
AntdEmpty.propTypes = propTypes;