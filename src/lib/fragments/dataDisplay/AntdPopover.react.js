// react核心
import React, { useMemo } from 'react';
// antd核心
import { Popover } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
// 辅助库
import { parseChildrenToArray, useLoading } from '../../components/utils';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdPopover.react';

/**
 * 气泡卡片组件Popover
 */
const AntdPopover = (props) => {
    let {
        id,
        children,
        className,
        style,
        styles,
        classNames,
        key,
        title,
        content,
        placement,
        color,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle,
        trigger,
        zIndex,
        arrow,
        fresh,
        open,
        permanent,
        popupContainer,
        setProps,
        ...others
    } = props;

    const arrowPoint = useMemo(() => {
        if (arrow === 'hide') {
            return false;
        }
        if (arrow === 'show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow])

    children = parseChildrenToArray(children)

    if (!content) {
        return <>{children}</>;
    }

    return (
        <Popover
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
            title={(title && title.content) ?
                <div>
                    {<AntdIcon icon={title.prefixIcon} />}
                    {<span style={{ marginLeft: '5px' }}>{title.content}</span>}
                </div> : title}
            content={content}
            placement={placement}
            color={color}
            mouseEnterDelay={mouseEnterDelay}
            mouseLeaveDelay={mouseLeaveDelay}
            overlayClassName={
                isString(overlayClassName) ?
                    overlayClassName :
                    (overlayClassName ? useCss(overlayClassName) : undefined)
            }
            overlayStyle={overlayStyle}
            overlayInnerStyle={overlayInnerStyle}
            trigger={trigger}
            zIndex={zIndex}
            arrow={arrowPoint}
            fresh={fresh}
            open={open}
            onOpenChange={
                permanent ? undefined : (e) => setProps({ open: e })
            }
            getPopupContainer={
                popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined
            }
            data-dash-is-loading={useLoading()}
        >{children}</Popover>
    );
}

export default AntdPopover;

AntdPopover.defaultProps = defaultProps;
AntdPopover.propTypes = propTypes;