import PropTypes from 'prop-types';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useRequest } from 'ahooks';

// 定义分割线组件AntdButton，api参数参考https://ant.design/components/button-cn/
const AntdButton = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
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
        loading_state
    } = props;

    const { run: onClick } = useRequest(
        () => {
            nClicks++;
            // 更新nClicks
            setProps({ nClicks: nClicks })
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
            className={className}
            style={style}
            key={key}
            type={type}
            href={href}
            target={target}
            block={block}
            danger={danger}
            disabled={disabled}
            shape={shape}
            size={size}
            icon={icon}
            onClick={onClick}
            loading={loading}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}
        </Button>
    );
}

// 定义参数或属性
AntdButton.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default，默认为default）
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

    // 设置跳转网址，功能同a标签
    href: PropTypes.string,

    // 配合href参数使用，设置跳转的动作类型
    target: PropTypes.string,

    // 设置按钮是否撑满父级元素的宽度，默认为false
    block: PropTypes.bool,

    // 设置按钮是否显示为危险状态，默认为false
    danger: PropTypes.bool,

    // 设置按钮是否以失效状态渲染，默认为false
    disabled: PropTypes.bool,

    // 设置按钮形状（circle：圆形，round：圆角矩形，默认不设置，即正常矩形）
    shape: PropTypes.oneOf(['circle', 'round']),

    // 设置按钮大小尺寸，可选的有'small'、'middle'和'large'，默认为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 记录按钮从渲染后开始被点击的次数，默认为0
    nClicks: PropTypes.number,

    // 用于配置value变化更新的防抖等待时长（单位：毫秒），默认为0
    debounceWait: PropTypes.number,

    // 组件型参数，设置按钮前缀图标元素
    icon: PropTypes.node,

    // 用于设置是否为按钮渲染“加载中不可点击”效果，默认为false
    loading: PropTypes.bool,

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
    type: 'default',
    block: false,
    danger: false,
    disabled: false,
    nClicks: 0,
    debounceWait: 0
}

export default AntdButton;