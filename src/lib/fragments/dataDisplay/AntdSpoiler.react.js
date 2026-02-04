// react核心
import React, { useRef } from 'react';
// antd核心
import { Typography } from 'antd';
// 辅助库
import { useSize } from 'ahooks';
import { locale2text } from '../../components/locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdSpoiler.react';

const { Link } = Typography;

/**
 * 展开收起组件AntdSpoiler
 */
const AntdSpoiler = (props) => {
    const {
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
        setProps,
        ...others
    } = props;

    const ref = useRef(null);
    const size = useSize(ref);

    return (
        <div
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            key={key}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            data-dash-is-loading={useLoading()}
        >
            <div
                className={
                    isString(contentClassName)
                        ? contentClassName
                        : contentClassName
                          ? useCss(contentClassName)
                          : undefined
                }
                style={{
                    transitionTimingFunction: 'ease',
                    ...contentStyle,
                    maxHeight: open ? size && size.height : maxHeight,
                    transitionDuration: `${transitionDuration}s`,
                    transitionProperty: 'max-height',
                    overflow: 'hidden',
                }}
            >
                <div ref={ref}>{children}</div>
            </div>
            <div
                style={{
                    textAlign: labelPosition,
                }}
            >
                <Link
                    onClick={() => {
                        setProps({
                            open: !open,
                        });
                    }}
                >
                    {open
                        ? hideLabel || locale2text.AntdSpoiler[locale].hideLabel
                        : showLabel ||
                          locale2text.AntdSpoiler[locale].showLabel}
                </Link>
            </div>
        </div>
    );
};

export default AntdSpoiler;

AntdSpoiler.defaultProps = defaultProps;
AntdSpoiler.propTypes = propTypes;
