import React, { useRef } from 'react';
import { Typography } from 'antd';
import { useSize } from 'ahooks';
import { locale2text } from '../../components/locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdSpoiler.react';

const { Link } = Typography;

// 定义展开收起组件AntdSpoiler
const AntdSpoiler = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        contentClassName,
        contentStyle,
        hideLabel,
        showLabel,
        labelPosition,
        open,
        maxHeight,
        transitionDuration,
        loading_state,
        setProps
    } = props;

    const ref = useRef(null);
    const size = useSize(ref);

    return (
        <div
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            <div
                className={
                    isString(contentClassName) ?
                        contentClassName :
                        (contentClassName ? useCss(contentClassName) : undefined)
                }
                style={
                    {
                        transitionTimingFunction: 'ease',
                        ...contentStyle,
                        maxHeight: open ? (size && size.height) : maxHeight,
                        transitionDuration: `${transitionDuration}s`,
                        transitionProperty: 'max-height',
                        overflow: 'hidden'
                    }
                }>
                <div ref={ref}>
                    {children}
                </div>
            </div>
            <div style={{
                textAlign: labelPosition
            }}>
                <Link onClick={() => {
                    setProps({
                        open: !open
                    })
                }}>
                    {
                        open ? hideLabel || locale2text.AntdSpoiler[locale].hideLabel : showLabel || locale2text.AntdSpoiler[locale].showLabel
                    }
                </Link>
            </div>
        </div>
    );
}

export default AntdSpoiler;

AntdSpoiler.defaultProps = defaultProps;
AntdSpoiler.propTypes = propTypes;