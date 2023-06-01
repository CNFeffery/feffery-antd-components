import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import useCss from '../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import { useRequest } from 'ahooks';
import PropsContext from '../contexts/PropsContext';

// 定义分割线组件AntdButton，api参数参考https://ant.design/components/button-cn/
const AntdButton = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        loadingChildren,
        className,
        style,
        key,
        setProps,
        type,
        href,
        target,
        block,
        danger,
        disabled,
        shape,
        size,
        nClicks,
        debounceWait,
        icon,
        loading,
        autoSpin,
        loading_state
    } = props;

    const context = useContext(PropsContext)

    const { run: onClick } = useRequest(
        () => {
            nClicks++;
            if (autoSpin) {
                // 更新nClicks
                setProps({ nClicks: nClicks, loading: true })
            } else {
                // 更新nClicks
                setProps({ nClicks: nClicks })
            }
        },
        {
            debounceWait: debounceWait,
            debounceLeading: true,
            manual: true
        }
    )

    // 返回定制化的前端组件
    return (
        <Button
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            type={type}
            href={href}
            target={target}
            block={block}
            danger={danger}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            shape={shape}
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            icon={icon}
            onClick={onClick}
            loading={loading}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{loading ? (loadingChildren || children) : children}
        </Button>
    );
}

// 定义参数或属性
AntdButton.propTypes = {
    // 组件id
    /**
     * Id of current component
     */
    id: PropTypes.string,

    // 设置按钮内嵌元素内容
    /**
     * Children of current component
     */
    children: PropTypes.node,

    // 设置loading状态下按钮内嵌元素内容
    /**
     * Children of current component while loading=true
     */
    loadingChildren: PropTypes.node,

    // css类名
    /**
     * CSS class of current component
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    /**
     * CSS style dict of current component
     */
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    /**
     * Refreshing the key can force a redraw of the current component.
     */
    key: PropTypes.string,

    // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default，默认为default）
    /**
     * Setting the overall style of the button (optional options are primary, ghost, dashed, link, text, default; default is default)
     */
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

    // 设置跳转网址，功能同a标签
    /**
     * Setting the URL for redirection, similar to the functionality of an <a> tag
     */
    href: PropTypes.string,

    // 配合href参数使用，设置跳转的动作类型
    /**
     * Used in conjunction with the href parameter to set the type of action for the redirection
     */
    target: PropTypes.string,

    // 设置按钮是否撑满父级元素的宽度，默认为false
    /**
     * Setting whether the button should span the full width of its parent element, default is false
     */
    block: PropTypes.bool,

    // 设置按钮是否显示为危险状态，默认为false
    /**
     * Setting whether the button should be in a dangerous state, default is false
     */
    danger: PropTypes.bool,

    // 设置按钮是否以失效状态渲染，默认为false
    /**
     * Setting whether the button should be rendered as a disabled state, default is false
     */
    disabled: PropTypes.bool,

    // 设置按钮形状（circle：圆形，round：圆角矩形，默认不设置，即正常矩形）
    /**
     * Setting the shape of the button (circle: circle, round: rounded rectangle; default is not set, i.e., normal rectangle)
     */
    shape: PropTypes.oneOf(['circle', 'round']),

    // 设置按钮大小尺寸，可选的有'small'、'middle'和'large'，默认为'middle'
    /**
     * Setting the size of the button, available options are 'small', 'middle', and 'large'; default is 'middle'
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 记录按钮从渲染后开始被点击的次数，默认为0
    /**
     * Recording the number of times the button has been clicked since rendering, default is 0
     */
    nClicks: PropTypes.number,

    // 用于设置nClicks监听更新的防抖等待时长（单位：毫秒），默认为0
    /**
     * Used to set the debounce waiting duration (in milliseconds) for nClicks listener update; default is 0
     */
    debounceWait: PropTypes.number,

    // 组件型参数，设置按钮前缀图标元素
    /**
     * Component-specific parameter for setting the prefix icon element of the button
     */
    icon: PropTypes.node,

    // 用于设置是否为按钮渲染“加载中不可点击”效果，默认为false
    /**
     * Used to set whether the button renders a "loading, not clickable" effect; default is false
     */
    loading: PropTypes.bool,

    // 设置是否在每次按钮点击之后，是否自动更新loading=true，从而配合回调
    // 实现回调运作中按钮无可点击的效果
    // 默认为false
    /**
     * Setting whether to automatically update loading to true after each button click, 
     * enabling callback operations with a non-clickable button effect; default is false
     */
    autoSpin: PropTypes.bool,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdButton.defaultProps = {
    size: 'middle',
    type: 'default',
    block: false,
    danger: false,
    disabled: false,
    nClicks: 0,
    debounceWait: 200,
    autoSpin: false
}

export default AntdButton;