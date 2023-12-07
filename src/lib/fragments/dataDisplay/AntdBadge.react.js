import React from 'react';
import { Badge } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdBadge.react';


// 定义徽标组件AntdBadge，api参数参考https://ant.design/components/badge-cn/
const AntdBadge = (props) => {
    // 取得必要属性或参数
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
        loading_state,
        setProps
    } = props;

    return (
        <Badge
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Badge>
    );
}

export default AntdBadge;

AntdBadge.defaultProps = defaultProps;
AntdBadge.propTypes = propTypes;