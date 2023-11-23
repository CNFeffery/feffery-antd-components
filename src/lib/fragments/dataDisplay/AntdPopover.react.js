import React, { useMemo } from 'react';
import { Popover } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
import { parseChildrenToArray } from '../../components/utils';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdPopover.react';


// 定义气泡卡片组件Popover，api参数参考https://ant.design/components/popover-cn/
const AntdPopover = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
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

    children = parseChildrenToArray(children)

    return (
        <Popover
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Popover>
    );
}

export default AntdPopover;

AntdPopover.defaultProps = defaultProps;
AntdPopover.propTypes = propTypes;