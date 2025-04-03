// react核心
import React from 'react';
// antd核心
import { Card } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataDisplay/card/AntdCard.react';

/**
 * 卡片组件AntdCard
 */
const AntdCard = (props) => {
    let {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        actions,
        extraLink,
        extra,
        coverImg,
        bodyStyle,
        headStyle,
        bordered,
        variant,
        hoverable,
        size,
        title,
        nClicks,
        setProps,
        ...others
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Card
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
            bodyStyle={{
                // 确保网格卡片排布正常
                display: 'flex',
                flexWrap: 'wrap',
                ...bodyStyle
            }}
            headStyle={headStyle}
            actions={actions}
            extra={
                extra || (
                    <a className={extraLink && extraLink.className}
                        style={extraLink && extraLink.style}
                        href={extraLink && extraLink.href}
                        target={extraLink && extraLink.target || '_blank'}>
                        {extraLink && extraLink.content}
                    </a>
                )
            }
            cover={
                <img alt={coverImg && coverImg.alt}
                    src={coverImg && coverImg.src}
                    style={coverImg && coverImg.style}
                    className={coverImg && coverImg.className} />
            }
            bordered={bordered}
            variant={variant}
            hoverable={hoverable}
            size={size}
            title={title}
            onClick={(e) => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={useLoading()}>
            {children}
        </Card>
    );
}

export default AntdCard;

AntdCard.defaultProps = defaultProps;
AntdCard.propTypes = propTypes;