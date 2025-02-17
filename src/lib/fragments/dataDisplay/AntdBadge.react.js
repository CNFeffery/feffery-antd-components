// react核心
import React from 'react';
// antd核心
import { Badge } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdBadge.react';

/**
 * 徽标组件AntdBadge
 */
const AntdBadge = (props) => {
    let {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        color,
        count,
        dot,
        offset,
        overflowCount,
        showZero,
        status,
        text,
        title,
        size,
        nClicks,
        setProps,
        ...others
    } = props;

    return (
        <Badge
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
            color={color}
            count={count}
            dot={dot}
            offset={(offset && offset.length === 2) ? offset : undefined}
            overflowCount={overflowCount}
            showZero={showZero}
            status={status}
            text={text}
            title={title}
            size={size}
            onClick={() => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={useLoading()}
        >{children}</Badge>
    );
}

export default AntdBadge;

AntdBadge.defaultProps = defaultProps;
AntdBadge.propTypes = propTypes;