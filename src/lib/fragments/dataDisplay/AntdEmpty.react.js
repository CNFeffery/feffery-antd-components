import React, { useContext } from 'react';
import { Empty, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdEmpty.react';


const builtinImage = new Map([
    ['default', Empty.PRESENTED_IMAGE_DEFAULT],
    ['simple', Empty.PRESENTED_IMAGE_SIMPLE]
])

// 定义空状态组件AntdEmpty，api参数参考https://ant.design/components/empty-cn/
const AntdEmpty = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        description,
        image,
        imageStyle,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Empty id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                description={description}
                image={builtinImage.get(image) || image}
                imageStyle={imageStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } >
                {children}
            </Empty>
        </ConfigProvider>
    );
}

export default AntdEmpty;

AntdEmpty.defaultProps = defaultProps;
AntdEmpty.propTypes = propTypes;