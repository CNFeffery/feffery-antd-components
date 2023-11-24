import React, { useMemo } from 'react';
import { Tooltip } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { parseChildrenToArray } from '../../components/utils';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdTooltip.react';

// 定义布局组件Tooltip，api参数参考https://ant.design/components/tooltip-cn/
const AntdTooltip = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        title,
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
        loading_state
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

    return (
        <Tooltip id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            title={title}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {parseChildrenToArray(children)}
        </Tooltip>
    );
}

export default AntdTooltip;

AntdTooltip.defaultProps = defaultProps;
AntdTooltip.propTypes = propTypes;